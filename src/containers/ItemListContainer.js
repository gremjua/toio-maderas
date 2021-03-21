import { useState, useEffect, useContext } from 'react';
import ItemList from '../components/ItemList';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../context/ItemsContext';
import NoData from '../components/NoData';

const ItemListContainer = () => {
    const { items, isLoading } = useContext(ItemsContext);
    const [displayedItems, setDisplayedItems] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        if (categoryId) {
            console.log(`Received categoryId: ${categoryId}`);
            setDisplayedItems([
                ...items.filter((item) => item.categoryId === parseInt(categoryId)),
            ]);
        } else {
            setDisplayedItems([...items]);
        }
        return () => {
            console.log(`Will change categoryId from: ${categoryId}`);
        };
    }, [categoryId, items]);

    // filter [] will run on mount (after mount)
    // [prop] will run on mount and on changes to prop
    // [prop1, prop2] will run on mount and on changes to prop1, prop2

    // se vuelve a renderizar, validaciones
    console.log('component will mount / render');

    if (isLoading) {
        return <Loading />;
    }

    return displayedItems.length ? (
        <div>
            <ItemList items={displayedItems} />
        </div>
    ) : (
        <NoData message={'¡No se encontraron productos!'} />
    );
};

export default ItemListContainer;
