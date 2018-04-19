import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
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
        <Button bsSize="small" bsStyle="default" onClick={this.props.onCartClear.bind(this)}>
          <Glyphicon glyph="trash" /> clear ALL
        </Button>
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

