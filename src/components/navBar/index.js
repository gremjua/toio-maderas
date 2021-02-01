import './navBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NatureIcon from '@material-ui/icons/Nature';
import CartWidget from './CartWidget';
import Button from '@material-ui/core/Button';

const NavBar = () => {
    const sections = ['Productos para exterior', 'Productos para interior', 'Productos a medida'];
    const spacing = 3;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <NatureIcon fontSize="large"/>
                    <Typography variant="h6">
                        Toio Maderas
                    </Typography>
                    <Grid container justify="center" spacing={spacing} >
                        {sections.map((section, index) => {
                            return(<Grid key={index} item>
                                <Button color="inherit">{section}</Button>    
                            </Grid>)
                        })}  
                    </Grid>
                    <CartWidget/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;