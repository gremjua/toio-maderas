import { Grid, Paper, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartTotal = () => {
    const { getTotals } = useContext(CartContext);
    const { totalQuantity, totalPrice } = getTotals();
    return (
        <Paper elevation={2}>
            <Grid container={true} direction="row" alignItems="center" spacing={3}>
                <Grid item={true} xs={4}>
                    <Typography variant="subtitle2">Total:</Typography>
                </Grid>
                <Grid item={true} xs={4}>
                    <Typography variant="button">{totalQuantity}</Typography>
                </Grid>
                <Grid item={true} xs={4}>
                    <Typography variant="h6">{`$${totalPrice}`}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CartTotal;
