import './navBar.css';
import { AppBar, Toolbar, Link, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import Logo from './Logo';

const NavBar = ({ categories }) => {
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
                        {categories.map(({ title, id }) => (
                            <Grid
                                key={id}
                                item={true}
                                md={Math.floor(12 / (categories.length + 1))}
                            >
                                <Link
                                    to={`/category/${id}`}
                                    activeStyle={{
                                        fontWeight: 'bold',
                                    }}
                                    key={title}
                                    underline="none"
                                    color="inherit"
                                    variant="button"
                                    component={NavLink}
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
