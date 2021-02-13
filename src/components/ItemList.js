import { Grid } from '@material-ui/core';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <Grid
            container={true}
            direction="row"
            alignItems="center"
            spacing={3}
            // style={{ minWidth: 300 }}
        >
            {items.map((item) => (
                <Grid key={item.id} item={true} xs={6} sm={3}>
                    <Item item={item}></Item>
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemList;
