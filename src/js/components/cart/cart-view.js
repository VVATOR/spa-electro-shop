import React, { Component } from 'react';

import { connect } from 'react-redux';
import CartItem from './cart-item/cart-item';
import cartActionDispatcher from '../../actions/cart-action';

class CartView extends Component {
  render() {
    let row = [];
    const { carts } = this.props;
    carts.forEach(cart => {
      row.push(<CartItem cart={cart} />);
    });

    return (
      <div className="CartView">
        <button
          onClick={this
            .props
            .onCartClear
            .bind(this)}
          className="button btn-green">clear</button>
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

  }, cartActionDispatcher)
  (CartView)

