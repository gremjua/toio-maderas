import { Button, Grid } from '@material-ui/core';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { useState } from 'react';
import ItemCounter from './ItemCounter';

const ItemCount = ({ stock = 1, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const onRemoveUnit = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);
    const onAddUnit = () => setQuantity(quantity + 1 <= stock ? quantity + 1 : quantity);
    return (
        <Grid container={true} direction="column" alignItems="center">
            <Grid item={true}>
                <Grid container={true} direction="row" alignItems="center">
                    <ItemCounter
                        quantity={quantity}
                        onRemoveUnit={onRemoveUnit}
                        onAddUnit={onAddUnit}
                    />
                </Grid>
            </Grid>
            <Grid item={true}>
                <Button
                    color="primary"
                    variant="contained"
                    startIcon={<AddShoppingCartOutlinedIcon />}
                    onClick={quantity <= stock ? () => onAdd(quantity) : null}
                >
                    Agregar al carrito
                </Button>
            </Grid>
        </Grid>
    );
};

export default ItemCount;

//mercadopago
//crear preferencia, en respuesta viene el field "initPoint" que contiene una url
// en esa url se puede hacer el pago!
