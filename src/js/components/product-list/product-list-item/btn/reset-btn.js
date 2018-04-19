import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import productActionDispatcher from '../../../../actions/product-action';



class AddToCartButtom extends Component {

  render() {

    function lol() {
       console.log("+++");
      // console.log(this.props.product);

    };

    return (
      <div className="btn-item" >
        <Button bsSize="small" bsStyle="warn" onClick={() => lol()}>
          <Glyphicon glyph="plus" />
        </Button>
      </div>
    )
  }
}

export default connect(state => ({
  products: state.products
}),
  productActionDispatcher
)(AddToCartButtom);
