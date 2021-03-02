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
    const subtractItem = (item, quantity) => {
        let itemQuantity = cart.find((el) => el.item.id === item.id)?.quantity || 0;
        itemQuantity -= quantity;
        itemQuantity <= 0
            ? removeItem(item.id)
            : setCart([
                  ...cart.filter((el) => el.item.id !== item.id),
                  { item, quantity: itemQuantity },
              ]);
    };
    const removeItem = (itemId) => {
        setCart([...cart.filter((el) => el.item.id !== parseInt(itemId))]);
    };
    const clear = () => setCart([]);
    const isInCart = (itemId) => {
        return cart.findIndex((el) => el.item.id === parseInt(itemId)) !== -1;
    };
    const getTotals = () =>
        cart.reduce(
            (accumulator, current) => {
                return {
                    totalQuantity: accumulator.totalQuantity + current.quantity,
                    totalPrice: accumulator.totalPrice + current.quantity * current.item.price,
                };
            },
            { totalQuantity: 0, totalPrice: 0 },
        );

    return (
        <CartContext.Provider
            value={{ cart, addItem, subtractItem, removeItem, clear, isInCart, getTotals }}
        >
            {children}
        </CartContext.Provider>
    );
};
