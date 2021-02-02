import { Typography, Grid, IconButton } from '@material-ui/core';
import NatureIcon from '@material-ui/icons/Nature';

const Logo = () => {
    return (
        <Grid container={true} justify="flex-start" direction="row" alignItems="center">
            <Grid item={true}>
                <IconButton edge="start" color="inherit" aria-label="home">
                    <NatureIcon fontSize="large" />
                </IconButton>
            </Grid>
            <Grid item={true}>
                <Typography variant="h6">Toio Maderas</Typography>
            </Grid>
        </Grid>
    );
};

export default Logo;
