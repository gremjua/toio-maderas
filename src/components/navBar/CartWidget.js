import { IconButton } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';

const CartWidget = () => {
    return (
        <IconButton
            component={RouterLink}
            to="/cart"
            color="inherit"
            aria-label="view shopping cart"
        >
            <ShoppingCart fontSize="large" />
        </IconButton>
    );
};

export default CartWidget;
