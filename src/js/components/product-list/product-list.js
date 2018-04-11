import React, { Component } from 'react';

import { connect } from 'react-redux';
import './product-list.css';
import ProductListItem from './product-list-item/product-list-item';
import products from '../../reducers/products';
import productActionDispatcher from '../../actions/product-action';
import PaginatorCounterELSWI from './paginator/PaginatorCounterELSWI';
import PaginatorPagesELSWI from './paginator/PaginatorPagesELSWI';

class ProductList extends Component {
  componentWillMount() {

  }

  render() {
    const { products } = this.props;
    const items = [];
    products.forEach(product => {
      items.push(<ProductListItem key={product.id} product={product} />);
    });
    return (
      <div className="product-list">
        <table class="table">
          {items}
        </table>
        <br/>
        <PaginatorPagesELSWI/>
        <PaginatorCounterELSWI/>
        
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      products: state.products
    }
  })(ProductList);