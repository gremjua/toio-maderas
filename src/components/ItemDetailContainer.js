import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { LoremIpsum } from 'lorem-ipsum';
import madera1 from '../images/madera1.jpg';
import { Box, CircularProgress } from '@material-ui/core';

const getItem = () => {
    const item = {
        id: 1,
        title: 'A title',
        imgUrl: madera1,
        price: 100,
        featured: false,
        stock: 5,
        initial: 1,
        description: new LoremIpsum().generateParagraphs(2),
    };
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(item);
        }, 2000);
    });
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(undefined);
    useEffect(() => {
        getItem().then((item) => setItem(item));
    }, []);
    return item ? (
        <ItemDetail item={item} />
    ) : (
        <Box
            display="flex"
            width={'100%'}
            height={'100vh'}
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    );
};

export default ItemDetailContainer;
