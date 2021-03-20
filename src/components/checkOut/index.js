import { Box, Button, Typography } from '@material-ui/core';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { createOrder } from '../../firebase/createOrder';
import UserForm from './UserForm';
import Loading from '../Loading';

const CheckOut = () => {
    const { cart, getTotals } = useContext(CartContext);
    const [userData, setUserData] = useState({});
    const [orderId, setOrderId] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setUserData({
            ...userData,
            [name]: value,
        });
    };
    const handleBuy = () => {
        const newOrder = {
            buyer: { name: userData.buyerName, phone: userData.phone, email: userData.email },
            items: cart,
            total: getTotals().totalPrice,
        };
        setIsLoading(true);
        createOrder(newOrder)
            .then(({ id }) => {
                setOrderId(id);
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    };
    if (isLoading) {
        return <Loading />;
    }
    if (orderId) {
        return (
            <Box
                display="flex"
                width={'100%'}
                height={'100vh'}
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Typography variant="h6">
                    ¡Muchas gracias por su compra! El ID de tu orden es {orderId}. Usa este ID para
                    seguir tu orden.
                </Typography>
            </Box>
        );
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
            <UserForm handleInputChange={handleInputChange} />
            <Box padding="2em" display="flex" justifyContent="center" alignItems="center">
                <Button color="primary" variant="contained" onClick={handleBuy}>
                    Realizar compra
                </Button>
            </Box>
        </>
    );
};

export default CheckOut;
