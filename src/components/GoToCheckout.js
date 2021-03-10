import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const GoToCheckout = () => {
    return (
        <Button component={RouterLink} to="/checkout" color="primary" variant="contained">
            Terminar compra
        </Button>
    );
};

export default GoToCheckout;
