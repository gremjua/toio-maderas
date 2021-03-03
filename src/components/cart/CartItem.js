import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ItemCounter from '../ItemCounter';

const CartItem = ({ itemAndQuantity }) => {
    const { item, quantity } = itemAndQuantity;
    const { addItem, subtractItem, removeItem } = useContext(CartContext);
    const doAddItem = () => {
        addItem(item, 1);
    };
    const doSubtractItem = () => {
        subtractItem(item, 1);
    };
    const doRemoveItem = () => {
        removeItem(item.id);
    };
    return (
        <Grid container={true} direction="row" alignItems="center" spacing={3}>
            <Grid item={true} xs={4}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Typography component="span" variant="subtitle2">
                        {`Precio: $${item.price}`}
                    </Typography>
                </Box>
            </Grid>
            <Grid item={true} xs={4}>
                <ItemCounter
                    quantity={quantity}
                    onAddUnit={doAddItem}
                    onRemoveUnit={doSubtractItem}
                />
            </Grid>
            <Grid item={true} xs={4}>
                <Typography component="span" variant="h6">
                    {`$${item.price * quantity}`}
                </Typography>
                <IconButton onClick={doRemoveItem}>
                    <RemoveShoppingCartIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default CartItem;
