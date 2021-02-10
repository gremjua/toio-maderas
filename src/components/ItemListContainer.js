import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import madera1 from '../images/madera1.jpg';
import madera2 from '../images/madera2.jpg';
import ItemDetailContainer from './ItemDetailContainer';
import { Box, CircularProgress } from '@material-ui/core';
import { LoremIpsum } from 'lorem-ipsum';

const getItems = () => {
    const items = [
        {
            id: 1,
            title: 'A title',
            imgUrl: madera1,
            price: 100,
            featured: false,
            stock: 5,
            initial: 1,
            description: new LoremIpsum().generateParagraphs(2),
        },
        {
            id: 2,
            title: 'A title 2',
            imgUrl: madera2,
            price: 50.5,
            featured: false,
            stock: 5,
            initial: 1,
            description: new LoremIpsum().generateParagraphs(2),
        },
        {
            id: 3,
            title: 'A title 3',
            imgUrl: madera1,
            price: 100,
            featured: false,
            stock: 5,
            initial: 1,
            description: new LoremIpsum().generateParagraphs(2),
        },
        {
            id: 4,
            title: 'A title 4',
            imgUrl: madera2,
            price: 35,
            featured: false,
            stock: 5,
            initial: 1,
            description: new LoremIpsum().generateParagraphs(2),
        },
    ];
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(items);
        }, 2000);
    });
};

const ItemListContainer = ({ greeting }) => {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        // consultas a BD y subscripciones como addEventListener
        console.log('component mounted, make API calls?');
        getItems().then((items) => setItems(items));
        return () => {
            // desubscripciones de eventos y BD
            console.log('component will unmount, cleanup');
            // removeEventListener();
        };
    }, []);
    // filter [] will run on mount (after mount)
    // [prop] will run on mount and on changes to prop
    // [prop1, prop2] will run on mount and on changes to prop1, prop2

    // se vuelve a renderizar, validaciones
    console.log('component will mount / render');
    // if(!cart.length){
    //     return <h1>Carrito vacio</h1>
    // }

    return items.length ? (
        <div>
            <ItemDetailContainer />
            {greeting}
            <ItemList items={items} />
        </div>
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

export default ItemListContainer;
