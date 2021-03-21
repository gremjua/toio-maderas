import { Box } from '@material-ui/core';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartList from './CartList';
import CartTotal from './CartTotal';
import GoToCheckout from '../GoToCheckout';
import CartListHeader from './CartListHeader';
import NoData from '../NoData';

const Cart = () => {
    const { cart } = useContext(CartContext);
    return cart.length > 0 ? (
        <>
            <CartListHeader />
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
        <NoData message={'¡El carrito está vacío!'} />
    );
};

export default Cart;
