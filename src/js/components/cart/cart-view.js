import React, { Component } from 'react';

import {connect} from 'react-redux';
import CartItem from './cart-item/cart-item';

class CartView extends Component {
  generateTest() {
    let list = [
      <CartItem key="1" />,
      /*CartItem key="2" />,
      <CartItem key="3" />,
      <CartItem key="4" />,*/
    ];


    return list;
  }


  render() {
    let row = [];
    const { carts } = this.props;

    carts.forEach(cart => {
      row.push(<CartItem cart={cart}/>);
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

