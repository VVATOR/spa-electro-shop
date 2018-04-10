import React, { Component } from 'react';


import CartItem from './cart-item/cart-item';

export default class CartView extends Component {
  constructor(props) {
    super(props);
    //this.setState({});

  }

  generateTest() {
    let list = [
      <CartItem key="1" />,
      /*CartItem key="2" />,
      <CartItem key="3" />,
      <CartItem key="4" />,*/
    ];


    return list;
  }

  state = {
    productInCart: [],
    count: 0
  };
  render() {
    let row = [];
    this.state.productInCart.forEach(product => {
      // console.log(product);
      row.push(product);
    })



    return (
      <div className="CartView">
        CART VIEW
        {row}

        {/*this.generateTest()*/}


        {/*this.state.count*/}

      </div>
    );
  }
}

