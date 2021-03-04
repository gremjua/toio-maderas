import { getFireStore } from '.';

export const getItems = () => {
    const db = getFireStore();
    const itemCollection = db.collection('Items');
    return itemCollection
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results!');
            }
            return querySnapshot.docs.map((doc) => doc.data());
        })
        .catch((error) => {
            throw new Error(`Error getting items from firestore: ${error}`);
        });
};
