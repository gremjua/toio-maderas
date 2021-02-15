import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import { getItem } from './mocks';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const { itemId } = useParams();
    useEffect(() => {
        if (itemId) {
            getItem(parseInt(itemId)).then((item) => {
                setItem(item);
                setIsLoading(false);
            });
        }
    }, [itemId]);
    if (isLoading) {
        return <Loading />;
    }
    return item ? (
        <div>
            <ItemDetail item={item} />
        </div>
    ) : (
        <div>No hay datos</div>
    );
};

export default ItemDetailContainer;
