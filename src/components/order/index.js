import { Box, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setOrderPayed } from '../../firebase/orders';
import { isPaymentApproved } from '../../mercadopago';
import Loading from '../Loading';

const Order = () => {
    const { orderId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (orderId) {
            const search = window.location.search; // get query params
            const params = new URLSearchParams(search);
            const collectionStatus = params.get('collection_status');
            const paymentId = params.get('payment_id');
            if (collectionStatus === 'approved' && isPaymentApproved(paymentId)) {
                setOrderPayed(orderId, true)
                    .catch((error) => setError(error))
                    .finally(() => setIsLoading(false));
            } else {
                setError('Hubo un error con el pago.');
                setIsLoading(false);
            }
        }
    }, [orderId]);
    if (isLoading) {
        return <Loading />;
    }
    if (error) {
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
                    ¡Hubo un error! {error} Contactate con soporte. El ID de tu orden es
                    {orderId}.
                </Typography>
            </Box>
        );
    }

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
};

export default Order;
