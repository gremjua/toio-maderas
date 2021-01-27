import './navBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NatureIcon from '@material-ui/icons/Nature';

const NavBar = () => {
    const sections = ['Home', 'Productos', 'Contactanos', 'Sobre nosotros'];
    const spacing = '6';
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Toio Maderas
                    </Typography>
                    <NatureIcon fontSize="large"/>
                    <Grid container justify="center" spacing={spacing} >
                        {sections.map((section, index) => {
                            return(<Grid key={index} item>
                                <a href="#">{section}</a>    
                            </Grid>)
                        })}  
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;