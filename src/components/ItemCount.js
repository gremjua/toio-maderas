import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { useState } from 'react';

const ItemCount = ({ stock = 1, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const onRemoveUnit = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);
    const onAddUnit = () => setQuantity(quantity + 1 <= stock ? quantity + 1 : quantity);
    return (
        <Grid container={true} direction="column" alignItems="center">
            <Grid item={true}>
                <Grid container={true} direction="row" alignItems="center">
                    <IconButton onClick={onRemoveUnit}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography>{quantity}</Typography>
                    <IconButton onClick={onAddUnit}>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item={true}>
                <Button
                    color="primary"
                    variant="contained"
                    startIcon={<AddShoppingCartOutlinedIcon />}
                    onClick={quantity <= stock ? onAdd : null}
                >
                    Agregar al carrito
                </Button>
            </Grid>
        </Grid>
    );
};

export default ItemCount;
