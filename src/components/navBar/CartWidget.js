import { useContext } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cart, getTotals } = useContext(CartContext);
    const { totalQuantity } = getTotals();
    return cart.length ? (
        <IconButton
            component={RouterLink}
            to="/cart"
            color="inherit"
            aria-label="view shopping cart"
        >
            <ShoppingCart fontSize="large" />
            <Typography>{totalQuantity}</Typography>
        </IconButton>
    ) : null;
};

export default CartWidget;
