import { ORDER_GET_ALL_POSITION, ORDER_ADD } from '../constants/constant';

const initialState = [];

const log = console.log.bind(this);

export default function carts(
    state = initialState, action
) {
    console.log("reducer");
    switch (action.type) {
        case ORDER_GET_ALL_POSITION:
            return [...state];
        case ORDER_ADD:
            return [...state,action.product];
        default:
            return state;
            break;
    }

}