import React, { Component } from 'react'

import { connect } from 'react-redux';

import productActionDispatcher from '../../../../actions/product-action';
class AddToCartButtom extends Component {
 
  

  render() {
    
    function lol(){
      //  console.log("+++");
       // console.log(this.props.product);
       
    };

    return (
        <div className="btn-item" >
            <button onClick={()=>lol()}>+</button>
            1
        </div>
    )
  }
}

export default connect(state => ({
    products: state.products
  }),
productActionDispatcher
)(AddToCartButtom);
