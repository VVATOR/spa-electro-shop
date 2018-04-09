const initialState = [];


export default function carts(
    state = initialState, action
) {
    log("reducer");
    switch (action) {
        case "CART_ADD_PRODUCT":
            return [
                ...state,
                action.product
            ];
            break;

        default:
            return state;
            break;
    }

}