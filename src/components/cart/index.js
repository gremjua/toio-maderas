import { Box, Button, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link as RouterLink } from 'react-router-dom';
import CartList from './CartList';
import CartTotal from './CartTotal';
import GoToCheckout from '../GoToCheckout';

const Cart = () => {
    const { cart } = useContext(CartContext);
    return cart.length > 0 ? (
        <>
            <CartList cart={cart} />
            <CartTotal />
            <Box
                paddingTop="2em"
                display="flex"
                width="100%"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
            >
                <GoToCheckout />
            </Box>
        </>
    ) : (
        <Box
            display="flex"
            width={'100%'}
            height={'100vh'}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Typography variant="h6">¡El carrito está vacío!</Typography>
            <Button component={RouterLink} to="/" variant="outlined">
                Ver productos
            </Button>
        </Box>
    );
};

export default Cart;
