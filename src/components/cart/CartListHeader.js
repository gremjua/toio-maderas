import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';

const CartListHeader = () => {
    return (
        <Grid container={true} direction="row" alignItems="center" spacing={3}>
            <Grid item={true} xs={4}>
                <Typography variant="subtitle2">Producto</Typography>
            </Grid>
            <Grid item={true} xs={4}>
                <Typography variant="subtitle2">Cantidad</Typography>
            </Grid>
            <Grid item={true} xs={4}>
                <Typography variant="subtitle2">Subtotal</Typography>
            </Grid>
            <Grid item={true} xs={12}>
                <Divider />
            </Grid>
        </Grid>
    );
};

export default CartListHeader;
