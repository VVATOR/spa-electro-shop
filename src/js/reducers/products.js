import { PRODUCT_GET_ALL, PRODUCT_ADD } from '../constants/constant';

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

export default function products(state = initialState, action) {
    console.log("action type: " + action.type);

    switch (action.type) {
        case PRODUCT_GET_ALL:
      //      console.log(state);
            return state;
        case PRODUCT_ADD:
            return [...state, action.product];
        default:
            return state;
    }

}