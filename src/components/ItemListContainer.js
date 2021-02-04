import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        // consultas a BD y subscripciones como addEventListener
        console.log('component mounted, make API calls?');
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

    return (
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={() => console.log('Agregado al carrito')} />
        </div>
    );
};

export default ItemListContainer;
