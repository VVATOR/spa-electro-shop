import { CART_GET_ALL_POSITION, CART_ADD } from '../constants/constant';

const initialState = [];

const log = console.log.bind(this);

export default function carts(
    state = initialState, action
) {
    log("reducer");
    switch (action) {

        case CART_GET_ALL_POSITION:
            return [...state];
        case CART_ADD:
            return [
                ...state,
                action.product
            ];
        default:
            return state;
            break;
    }

}