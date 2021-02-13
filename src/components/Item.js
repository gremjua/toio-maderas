import { ButtonBase, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.2,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
}));

// TODO: improve CSS and location of title and price, also add star for favorites/ add to cart
const Item = ({ item }) => {
    //id, title, imgUrl, price, featured: boolean
    const classes = useStyles();
    return (
        <ButtonBase
            focusRipple={true}
            key={item.id}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: '100%',
            }}
        >
            <span
                className={classes.imageSrc}
                style={{
                    backgroundImage: `url(${item.imgUrl})`,
                }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                >
                    {`${item.title} $${item.price}`}
                </Typography>
            </span>
        </ButtonBase>
    );
};

export default Item;
