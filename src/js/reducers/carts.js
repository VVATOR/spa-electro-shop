import { ORDER_GET_ALL_POSITION, ORDER_ADD, ORDER_CART_CLEAR, ORDER_CART_PRODUCT_DELETE } from '../constants/constant';

const initialState = [];

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
            return [...state.filter(element => element != action.product.id)];

        default:
            return state;
    }
}