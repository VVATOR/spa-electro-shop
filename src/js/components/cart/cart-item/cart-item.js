import React from 'react';
import { connect } from 'react-redux';
import './cart-item.css';
import cartActionDispatcher from '../../../actions/cart-action';


class CartItem extends React.Component {

  render() {

    let { cart } = this.props;

    return (
      <div className="cart-item">
        {cart.id}
        {cart.img}
        {cart.name}
        {cart.description}
        {cart.price}
        {cart.priceNDS}
        {cart.count}
        {cart.package}
        {cart.measures}
        <div className="btn btn-default" onClick={this
          .props
          .onCartDelete
          .bind(this,cart.id)
        }>
          ss
        </div>

        cart-item
          <input type="text" />
      </div>
    );
  }
}

export default connect(
  state => {

  },
  cartActionDispatcher
)(CartItem);

