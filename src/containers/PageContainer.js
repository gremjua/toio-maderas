import { useContext, useEffect } from 'react';
import { ItemsContext } from '../context/ItemsContext';

const PageContainer = ({ children }) => {
    const { getItems, setItems, setIsLoading } = useContext(ItemsContext);
    useEffect(() => {
        getItems()
            .then((items) => {
                setItems(items);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [getItems, setItems, setIsLoading]);
    return (
        <div id="App" style={{ padding: '5%' }}>
            {children}
        </div>
    );
};

export default PageContainer;
