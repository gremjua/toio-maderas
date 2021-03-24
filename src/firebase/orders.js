import { getFireStore, getTimestamp } from '.';

export const createOrder = (newOrder) => {
    const db = getFireStore();
    const orders = db.collection('Orders');
    const actualOrder = { ...newOrder, timestamp: getTimestamp() };
    return orders.add(actualOrder);
};

export const setOrderPayed = (orderId, payed) => {
    const db = getFireStore();
    const orderRef = db.collection('Orders').doc(orderId);
    return orderRef.update({ payed });
};
