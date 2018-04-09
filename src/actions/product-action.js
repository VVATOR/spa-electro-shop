const log = console.log.bind(this);

const productActionDispatcher = dispatch => ({

    onAddProduct: (productToAdd) => {
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
        dispatch({type: 'PRODUCT_ADD', product:productToAdd});
    },

    onProductGet: (id) => {
      /*  let idP = this.props.params.id;
    fetch("http://localhost:8081/product/" + idP)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({product: json});
       //  dispatch({type: 'PRODUCT_LOAD', json});
      });*/
       
    },

    onDeleteProduct: (product) => {
      let idP = product.id;        
            fetch("http://localhost:8081/product/delete/" + idP)
            //.then(response => response.json())
            .then(response => {
                console.log(product);
               // this.setState({product: product});
                 dispatch({type: 'PRODUCT_DELETE',product});
            });            
       
    },

    onGetProducts: () => {   
       console.log('===================');
        fetch("http://localhost:8081/products")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch({type: 'PRODUCT_LOAD', json});
            });       
    },












    onFilterProduct: (id, name, category, price, stocked, imgUrls) => {
        const product = {
            id,
            name,
            category,
            price,
            stocked,
            imgUrls
        }
        dispatch({type: 'PRODUCT_FILTER', product});
    },

    onAddProducts: (productsToAdd) => {

        log(JSON.stringify("---->", productsToAdd));
        fetch("http://localhost:8081/createProducts", {
            //redentials: 'include', //pass cookies, for authentication
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                //  'X-Random-Header':'123123123'
            },
                //mode: 'no-cors',
                //headers:{
                //  'Access-Control-Allow-Origin': 'http://localhost:3000',
                //  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                //  'Content-Type': 'application/json'

                //  'Access-Control-Allow-Origin': '*',
                //  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                //  'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                //  'Content-Type': 'application/json; charset=utf-8',
                //  'X-Random-Header':'123123123'*/
                //},
                //headers: {
                //  'Accept': 'application/json',
                //  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                //  'Content-Type': 'application/json; charset=utf-8'
                //  },
                //mode: 'cors',
                body: JSON.stringify(productsToAdd)
            })
            .then(products => products.json())
            .then(product => {
                log(product);
                dispatch({type: 'PRODUCT_ADD', product});
            });

    }
})

export default productActionDispatcher;