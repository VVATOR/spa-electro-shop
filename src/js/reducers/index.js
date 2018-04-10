import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';


export default combineReducers({
    carts,
    products,
}); 