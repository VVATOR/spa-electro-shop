import React, { Component } from 'react'
import { connect } from 'react-redux';
//import productActionDispatcher from '../../../../actions/product-action';
import cartActionDispatcher from '../../../../actions/cart-action';

class AddToCartButtom extends Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.handleClick = this.handleClick.bind(this);
  }
  product = this.props.product;

  handleClick() {
    console.log("handle");
    cartActionDispatcher
      .onCartAddProduct(this.product);
  }

  addToCartProduct(product) {
    console.log("+++");
    console.log(product);
    cartActionDispatcher
      .onCartAddProduct(product);
  };

  render() {
    const { product } = this.props;
    // console.log(product);
    return (

      <div className="btn-item" >
        <button onClick={
          this.state.onCartAddProduct.bind(this,product)}
        >+ {product.id}{Math.random()} </button>

       {/*  <button
          onClick={this.handleClick}
        >+</button> */}


       {/*  <p className="App-intro" onClick={this.state.onCartAddProduct.bind(this, { id: "aaa" })}> */}
        
        <p className="App-intro" onClick={this.state.onCartAddProduct.bind(this, this.product)}>
        
          add.
        </p>
      </div>
    )
  }
}

export default connect(state => {
  return {
    products: state.products
  }
},
  //productActionDispatcher
  cartActionDispatcher
)(AddToCartButtom);
