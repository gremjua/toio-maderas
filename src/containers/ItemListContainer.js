import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { getItems, getItemsByCategory } from '../components/mocks';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();
    useEffect(() => {
        if (categoryId) {
            console.log(`Received categoryId: ${categoryId}`);
            getItemsByCategory(parseInt(categoryId)).then((items) => {
                console.log('Items:', items);
                setItems(items);
                setIsLoading(false);
            });
        } else {
            getItems().then((items) => {
                setItems(items);
                setIsLoading(false);
            });
        }
        return () => {
            console.log(`Will change categoryId: ${categoryId}`);
            setIsLoading(true);
        };
    }, [categoryId]);

    // filter [] will run on mount (after mount)
    // [prop] will run on mount and on changes to prop
    // [prop1, prop2] will run on mount and on changes to prop1, prop2

    // se vuelve a renderizar, validaciones
    console.log('component will mount / render');

    if (isLoading) {
        return <Loading />;
    }

    return items.length ? (
        <div>
            <ItemList items={items} />
        </div>
    ) : (
        <div>No hay datos</div>
    );
};

export default ItemListContainer;
