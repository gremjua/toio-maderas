import { Box, Typography } from '@material-ui/core';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { createOrder } from '../../firebase/orders';
import UserForm from './UserForm';
import Loading from '../Loading';
import { createMercadoPagoOrder } from '../../mercadopago';

const CheckOut = () => {
    const { cart, getTotals } = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const handlePurchase = (userData) => {
        const newOrder = {
            buyer: { name: userData.buyerName, phone: userData.phone, email: userData.email },
            items: cart,
            total: getTotals().totalPrice,
            payed: false,
        };
        setIsLoading(true);
        return createOrder(newOrder)
            .then(({ id }) => {
                createMercadoPagoOrder(cart, id).then((url) => {
                    window.location.replace(url);
                });
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    };

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        console.error(error);
        return (
            <Box
                display="flex"
                width={'100%'}
                height={'100vh'}
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Typography variant="h6">¡Ups! Hubo un error con tu orden.</Typography>
            </Box>
        );
    }
    return (
        <>
            <UserForm handlePurchase={handlePurchase} />
        </>
    );
};

export default CheckOut;
