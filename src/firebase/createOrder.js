import { getFireStore, getTimestamp } from '.';

export const createOrder = (newOrder) => {
    const db = getFireStore();
    const orders = db.collection('Orders');
    const actualOrder = { ...newOrder, timestamp: getTimestamp() };
    return orders.add(actualOrder);
};
