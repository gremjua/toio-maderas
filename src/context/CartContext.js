import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // cart = [{item{}, quantity}]
    const addItem = (item, quantity) => {
        let actualQuantity = quantity;
        const currentQuantity = cart.find((el) => el.item.id === item.id)?.quantity || 0;
        actualQuantity += currentQuantity;
        setCart([
            ...cart.filter((el) => el.item.id !== item.id),
            { item, quantity: actualQuantity },
        ]);
    };
    const removeItem = (itemId) => {
        setCart([...cart.filter((el) => el.item.id !== parseInt(itemId))]);
    };
    const clear = () => setCart([]);
    const isInCart = (itemId) => {
        return cart.findIndex((el) => el.item.id === parseInt(itemId)) !== -1;
    };
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};
