// Add credentials
const ACCESS_TOKEN = 'TEST-6525940254390212-032119-d39527684ce89caf54bd38c250b425fe-185110306';
const PREFERENCE_URL = 'https://api.mercadopago.com/checkout/preferences';
const PAYMENT_URL = 'https://api.mercadopago.com/v1/payments';

// {
//     id: 1,
//     title: 'A title',
//     imageUrl: madera1,
//     price: 100,
//     featured: false,
//     stock: 5,
//     initial: 1,
//     description: new LoremIpsum().generateParagraphs(2),
//     categoryId: 1,
// },
export const createMercadoPagoOrder = (cart, orderId) => {
    const preference = {
        items: cart.map((itemQuantity) => {
            const { item, quantity } = itemQuantity;
            return {
                title: item.title,
                description: item.description,
                picture_url: item.imageUrl,
                unit_price: item.price,
                currency_id: 'ARS',
                quantity,
            };
        }),
        back_urls: {
            success: `https://toio-maderas.netlify.app/order/${orderId}`,
        },
        auto_return: 'approved',
    };
    return fetch(PREFERENCE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(preference),
    })
        .then((response) => {
            return response.json().then((json) => {
                return json.init_point;
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getPayment = (paymentId) => {
    return fetch(`${PAYMENT_URL}/${paymentId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
    })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });
};

export const isPaymentApproved = async (paymentId) => {
    const { status } = await getPayment(paymentId);
    return status === 'approved';
};
