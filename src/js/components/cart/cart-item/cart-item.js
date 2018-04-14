import React from 'react';
import './cart-item.css';


class CartItem extends React.Component {
    
    render() {
         
      let {cart} = this.props;

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
              

          cart-item
          <input type="text" />  
        </div>
      );
    }
  }
  
  export default CartItem;

  