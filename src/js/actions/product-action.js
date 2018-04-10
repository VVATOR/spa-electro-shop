import { PRODUCT_GET_ALL, PRODUCT_ADD } from '../constants/constant';


const log = console.log.bind(this);


const productActionDispatcher = dispatch => {
    return {

        onProductGetAll: () => {
            log("productActionDispatcher.onProductGetAll");
            return dispatch({ type: PRODUCT_GET_ALL });
        },

        onProductAddOne: (product) => {
            log("productActionDispatcher.onProductAddOne");
            return dispatch({ type: PRODUCT_ADD, product });
        },

    }
};

export default productActionDispatcher;