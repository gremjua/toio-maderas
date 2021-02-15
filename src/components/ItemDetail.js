import { Box, Grid, Typography } from '@material-ui/core';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
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
                    <ItemCount
                        stock={item.stock}
                        initial={item.initial}
                        onAdd={() => console.log('Agregado al carrito')}
                    />
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
