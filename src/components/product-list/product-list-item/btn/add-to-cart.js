import React, { Component } from 'react'
import { connect } from 'react-redux';
//import productActionDispatcher from '../../../../actions/product-action';
import cartActionDispatcher from '../../../../actions/cart-action';

class AddToCartButtom extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }


  addToCartProduct(product) {
    console.log("+++");
    console.log(product);
    cartActionDispatcher
      .onCartAddProduct(product);
  };

  render() {


    var { product } = this.state;
    // console.log(product);
    return (

      <div className="btn-item" >
        <button onClick={this
          .addToCartProduct
          .bind(this, product)}
        >+ {Math.random()} </button>
      </div>
    )
  }
}

export default connect(state => ({
  carts: state.carts
}),
  //productActionDispatcher
  cartActionDispatcher
)(AddToCartButtom);
