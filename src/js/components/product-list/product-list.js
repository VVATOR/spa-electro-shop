import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './product-list.css';
import ProductListItem from './product-list-item/product-list-item';
import products from '../../reducers/products';
import productActionDispatcher from '../../actions/product-action';

class ProductList extends React.Component {

    state={
        products:[{id:"aaa"}]
    }

    componentWillMount() {
        // this.setState({products: this.props.onProductGetAll()});
      //  this.setState({products:this.props.onProductGetAll()})
    }
    generateList() {

        var list = [];

        console.log("=========");


        console.log("=========");
        // list.push(<ProductListItem product={product} />);
        return list;
    }

    render() {
        let rows = [];
        console.log(this.props.products);
     
        return (
            <div className="product-list">
                --{this.props.lol}--
               {/*  {this.generateList()} */}

            </div>
        );
    }
}




export default connect(
    (state) => {
        return {
            products: products
        }
    },
    productActionDispatcher
)(ProductList);