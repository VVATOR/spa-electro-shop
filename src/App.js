import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import productActionDispatcher from './js/actions/product-action';
import products from './js/reducers/products';

import Menu from './js/components/menu/menu-view';
import ProductList from './js/components/product-list/product-list';
import CartView from './js/components/cart/cart-view';
import ProductListItem from './js/components/product-list/product-list-item/product-list-item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props
  }

  componentWillMount() { 
    
  }
  printProducts() {
    let list = [];
    // let products = mapStateToProps.name;
    console.log('www' + this.state.onProductGetAll());
    console.log(this.state.onProductGetAll.bind(this));

    list.push.apply(this.state.onProductGetAll());

    console.log(list);
    console.log(list);
    list.push(this.state.onProductGetAll());
    console.log(list);
    console.log(list);

    return list;

  }

  render() {
   
    let {products} = this.props;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    console.log(products);

    let out = [];
     products.forEach(element => {
      out.push(<p>{element.id}</p>); 
    });
    
    const { year, photos } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={() => console.log("lol")}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro" onClick={this.printProducts.bind(this)}>
          get_all.
        </p>
        <p className="App-intro" onClick={this.state.onProductAddOne.bind(this,{id:"aaa"})}>
          add.
        </p>
      
       {out}

        <Menu />
        <ProductList lol="loooool" products={products}  />
        <CartView />
      </div>
    );
  }
}

/* const mapStateToProps = state => {
  return {
    products: products
  }
} */

function mapStateToProps (state) {
  return {
    products: state.products,
   // page: state.page
  }
}

export default connect(
  mapStateToProps,
  productActionDispatcher
)(App);
