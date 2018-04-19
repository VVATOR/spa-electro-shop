import React, { Component } from 'react'
import { connect } from 'react-redux';
//import productActionDispatcher from '../../../../actions/product-action';
import cartActionDispatcher from '../../../../actions/cart-action';
import { Button, Glyphicon } from 'react-bootstrap';


class AddToCartButtom extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  addToCartProduct(product) {
    console.log("+++");
    console.log(product);
    cartActionDispatcher.onCartAddProduct(product);
  };

  render() {
    const { product } = this.props;
    // console.log(product);
    return (

      <div className="btn-item" >

        <Button bsSize="small" bsStyle="default" onClick={this.state.onCartAddProduct.bind(this, product)}>
          <Glyphicon glyph="shopping-cart" />
        </Button>
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
