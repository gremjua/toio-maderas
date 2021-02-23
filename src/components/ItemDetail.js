import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState(false);
    const addToCart = (quantity) => {
        setAddedToCart(true);
        addItem(item, quantity);
    };
    const renderItemCount = () => {
        if (addedToCart) {
            return (
                <Button component={RouterLink} to="/cart" color="primary" variant="contained">
                    Terminar Compra
                </Button>
            );
        } else {
            return <ItemCount stock={item.stock} initial={item.initial} onAdd={addToCart} />;
        }
    };
    return (
        <Box>
            <Grid container={true} direction="row" alignItems="center" spacing={3}>
                <Grid item={true} xs={12} sm={6}>
                    <img
                        src={item.imgUrl}
                        alt={item.title}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Grid>
                <Grid item={true} xs={12} sm={6}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="h6">{`$${item.price}`}</Typography>
                    {renderItemCount()}
                </Grid>
                <Grid item={true} xs={12}>
                    <Typography variant="body2" align="left">
                        {item.description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ItemDetail;
