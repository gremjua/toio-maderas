import { Typography, Grid, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import NatureIcon from '@material-ui/icons/Nature';

const Logo = () => {
    return (
        <Grid container={true} justify="flex-start" direction="row" alignItems="center">
            <Grid item={true}>
                <IconButton
                    component={RouterLink}
                    to="/"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                >
                    <NatureIcon fontSize="large" />
                    <Typography variant="h6">Toio Maderas</Typography>
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default Logo;
