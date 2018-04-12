import React, { Component } from 'react';

import { connect } from 'react-redux';
import CartItem from './cart-item/cart-item';

class CartView extends Component {
  render() {
    let row = [];
    const { carts } = this.props;
    carts.forEach(cart => {
      row.push(<CartItem cart={cart} />);
    });

    return (
      <div className="CartView">
        CART VIEW
        {row}

      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      carts: state.carts
    }
  })(CartView)

