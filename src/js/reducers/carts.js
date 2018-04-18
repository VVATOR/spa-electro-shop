import { ORDER_GET_ALL_POSITION, ORDER_ADD, ORDER_CART_CLEAR, ORDER_CART_PRODUCT_DELETE } from '../constants/constant';

const initialState = [
    {
        id: 1,
        img: 'http://elswi.by/uploads/04052017/f1959e385351a195c9f51bf0a9edaed9.jpg',
        name: 'lol',
        description: 'примечание',
        price: 10,
        priceNDS: 11,
        count: 5,
        package: 5,
        measures: 'шт',
    },
    {
        id: 2,
        img: 'http://elswi.by/uploads/04052017/f1959e385351a195c9f51bf0a9edaed9.jpg',
        name: 'lol2',
        description: 'примечание2',
        price: 20,
        priceNDS: 12,
        count: 2,
        package: 2,
        measures: 'шт',
    },
];

export default function carts(
    state = initialState, action
) {
    console.log("reducer");
    switch (action.type) {
        case ORDER_GET_ALL_POSITION:
            return [...state];
        case ORDER_CART_CLEAR:
            return [];
        case ORDER_ADD:
            return [...state, action.product];
        case ORDER_CART_PRODUCT_DELETE:
            console.log(action.product.id);
            return [...state.filter(element => element.id != action.product.id)];

        default:
            return state;
    }
}