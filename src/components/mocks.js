import madera1 from '../images/madera1.jpg';
import madera2 from '../images/madera2.jpg';
import { LoremIpsum } from 'lorem-ipsum';

const items = [
    {
        id: 1,
        title: 'A title',
        imageUrl: madera1,
        price: 100,
        featured: false,
        stock: 5,
        initial: 1,
        description: new LoremIpsum().generateParagraphs(2),
        categoryId: 1,
    },
    {
        id: 2,
        title: 'A title 2',
        imageUrl: madera2,
        price: 50.5,
        featured: false,
        stock: 5,
        initial: 1,
        description: new LoremIpsum().generateParagraphs(2),
        categoryId: 1,
    },
    {
        id: 3,
        title: 'A title 3',
        imageUrl: madera1,
        price: 100,
        featured: false,
        stock: 5,
        initial: 1,
        description: new LoremIpsum().generateParagraphs(2),
        categoryId: 2,
    },
    {
        id: 4,
        title: 'A title 4',
        imageUrl: madera2,
        price: 35,
        featured: false,
        stock: 5,
        initial: 1,
        description: new LoremIpsum().generateParagraphs(2),
        categoryId: 2,
    },
];

export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(items);
        }, 2000);
    });
};

export const getItemsByCategory = (categoryId) => {
    return getItems().then((items) => items.filter((item) => item.categoryId === categoryId));
};

export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(items.find((item) => item.id === id));
        }, 2000);
    });
};
