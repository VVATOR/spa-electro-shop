import {ORDER_ADD} from '../constants/constant';

//const log = console.log.bind(this);

const cartActionDispatcher = dispatch => ({

    onCartAddProduct: (product) => {
        //log(JSON.stringify("---->", productToAdd));
    /*
        log(JSON.stringify("---->", productToAdd));
        fetch("http://localhost:8081/createProduct", {
            //redentials: 'include', //pass cookies, for authentication
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                //'X-Random-Header':'123123123'
            },
                // mode: 'no-cors',
                //headers:{
                //  'Access-Control-Allow-Origin': 'http://localhost:3000',
                //  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                //  'Content-Type': 'application/json'

                //  'Access-Control-Allow-Origin': '*',
                //  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                //  'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                //  'Content-Type': 'application/json; charset=utf-8',
                //  'X-Random-Header':'123123123'
                // },
                //headers: {
                //  'Accept': 'application/json',
                //  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                //  'Content-Type': 'application/json; charset=utf-8'
                //},

                //mode: 'cors',
                body: JSON.stringify(productToAdd)
            })
            .then(product => product.json())
            .then(product => {
                log(product);
                dispatch({type: 'PRODUCT_ADD', product});
            });
        */
        dispatch({type: ORDER_ADD, product});
    },  
    
})

export default cartActionDispatcher;