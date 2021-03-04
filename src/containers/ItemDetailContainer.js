import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import Loading from '../components/Loading';
import { ItemsContext } from '../context/ItemsContext';

const ItemDetailContainer = () => {
    const { items, isLoading } = useContext(ItemsContext);
    const [displayedItem, setDisplayedItem] = useState(undefined);
    const { itemId } = useParams();
    useEffect(() => {
        if (itemId) {
            setDisplayedItem(items.find((item) => item.id === parseInt(itemId)));
        }
    }, [itemId, items]);
    if (isLoading) {
        return <Loading />;
    }
    return displayedItem ? (
        <div>
            <ItemDetail item={displayedItem} />
        </div>
    ) : (
        <div>No hay datos</div>
    );
};

export default ItemDetailContainer;
