import './navBar.css';
import { AppBar, Toolbar, Link, Grid } from '@material-ui/core';
import CartWidget from './CartWidget';
import Logo from './Logo';

const NavBar = ({ navLinks }) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Grid
                        container={true}
                        justify="space-between"
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item={true}>
                            <Logo />
                        </Grid>
                        {navLinks.map(({ title, path }) => (
                            <Grid
                                key={title}
                                item={true}
                                md={Math.floor(12 / (navLinks.length + 1))}
                            >
                                <Link
                                    href={path}
                                    key={title}
                                    underline="none"
                                    color="inherit"
                                    variant="button"
                                >
                                    {title}
                                </Link>
                            </Grid>
                        ))}
                        <Grid item={true}>
                            <CartWidget />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
