import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu-view';
import ProductList from './components/product-list/product-list';
import CartView from './components/cart/cart-view';
import {connect} from 'react-redux';

class App extends Component {
  state = ({
    product: {
      imgUrls: []
    },
    products: []
  });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Menu/>
        <ProductList/>
        <CartView/>
      </div>
    );
  }
}

export default connect(state => ({
  products: state.products
})
//, userActionDispatcher
)(App);

