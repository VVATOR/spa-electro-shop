import React from 'react';
import ReactDOM from 'react-dom';
import './product-list.css';
import ProductListItem from './product-list-item/product-list-item';

class ProductList extends React.Component {
    generateList(count){
        /*let product = {
            id:1,
            img:'http://elswi.by/uploads/04052017/f1959e385351a195c9f51bf0a9edaed9.jpg',
            name:'lol1',
            description:'примечание',
            price: 10,
            priceNDS:11,
            count: 5,
            package:5,
            measures:'шт',
        };*/
        var list  = [];
        for (let index = 0; index < count; index++) {
            let product = {
                id:index,
                img:'http://elswi.by/uploads/04052017/f1959e385351a195c9f51bf0a9edaed9.jpg',
                name:'lol1',
                description:'примечание',
                price: 10,
                priceNDS:11,
                count: 5,
                package:5,
                measures:'шт',
            };
            console.log("=========");
            list.push(<ProductListItem  key={index} product={product}/>);            
        } 
        
        return list;
    }

    
    render() {
        let list = this.generateList(5);
      return (
        <div className="product-list">            
            {list}
        </div>
      );
    }
  }
  
  export default  ProductList;