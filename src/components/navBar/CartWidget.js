import { IconButton } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const CartWidget = () => {
    return (
        <IconButton color="inherit" href="/cart" aria-label="view shopping cart">
            <ShoppingCart fontSize="large" />
        </IconButton>
    );
};

export default CartWidget;
