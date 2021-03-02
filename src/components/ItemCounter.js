import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box, IconButton, Typography } from '@material-ui/core';

const ItemCounter = ({ quantity, onRemoveUnit, onAddUnit }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton onClick={onRemoveUnit}>
                <RemoveIcon />
            </IconButton>
            <Typography variant="button">{quantity}</Typography>
            <IconButton onClick={onAddUnit}>
                <AddIcon />
            </IconButton>
        </Box>
    );
};

export default ItemCounter;
