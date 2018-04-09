const initialState =[];
  /*  {
        id:1,
        img:'http://elswi.by/uploads/04052017/f1959e385351a195c9f51bf0a9edaed9.jpg',
        name:'lol',
        description:'примечание',
        price: 10,
        priceNDS:11,
        count: 5,
        package:5,
        measures:'шт',
    },
    {
        id:2,
        img:'http://elswi.by/uploads/04052017/f1959e385351a195c9f51bf0a9edaed9.jpg',
        name:'lol2',
        description:'примечание2',
        price: 20,
        priceNDS:12,
        count: 2,
        package:2,
        measures:'шт',
    },

];*/

export default function products(
    state=initialState,action
){

        switch (action.type) {
            case 'PRODUCT_ADD':
                return [
                    ...state,
                    action.product 
                ]; 
            case 'PRODUCT_LOAD':            
                state = action.json;
                return [                
                ...state 
                ]; 
            case 'PRODUCT_DELETE':

            console.log('PRODUCT_DELETE');
            console.log(action.product);
            const product = action.product;
                return [...state.filter(itemProduct => {               
                    console.log(itemProduct.id !== product.id+' ==> '+product.id+' - '+itemProduct.id);
                    return itemProduct.id !== product.id;
                })];
            default:
                return state;
        }

    return state;
}