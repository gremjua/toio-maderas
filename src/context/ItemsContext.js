import { createContext, useState } from 'react';
import { getItems as getDbItems } from '../firebase/getItems';
import { getItems as getMockItems } from '../utils/mocks';

export const ItemsContext = createContext([]);

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // items = [{...itemDetails}]

    // get items from DB or mock items
    const getItems = Boolean(process.env.USE_MOCKS) ? getMockItems : getDbItems;

    return (
        <ItemsContext.Provider value={{ items, setItems, getItems, setIsLoading, isLoading }}>
            {children}
        </ItemsContext.Provider>
    );
};
