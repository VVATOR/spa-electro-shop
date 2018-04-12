import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { SHOP_TITLE } from './js/constants/constant';
import productActionDispatcher from './js/actions/product-action';
import Menu from './js/components/menu/menu-view';
import ProductList from './js/components/product-list/product-list';
import CartView from './js/components/cart/cart-view';
import Elswi from './js/components/elswi';
import InfoPanelBreadcrumbELSWI from './js/components/breadcrumb/InfoPanelBreadcrumbELSWI';
import SearchComponentELSWI from './js/components/global-search/SearchComponentELSWI';
import ButtonCart from './js/components/button-cart/button-cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props
    document.title = SHOP_TITLE
  }




  componentWillMount() {
    //document.title = "eee"

  }
  printProducts() {
    let list = [];
    list.push(this.state.onProductGetAll());

    //document.title = "eee"

    return list;

  }



  render() {

    let { products } = this.props;
    return (
      
      <div className="App container">
        <div className="row">

          <div className=".col-xs-10 .col-sm-10 .col-md-10">.

            <header className="App-header">
              <ButtonCart />
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header></div>

        </div>


        +<SearchComponentELSWI />+
        <InfoPanelBreadcrumbELSWI />

        <p className="App-intro" onClick={() => console.log("lol")}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro" onClick={this.printProducts.bind(this)}>
          get_all.
        </p>
        <p className="App-intro" onClick={this.state.onProductAddOne.bind(this, { id: "aaa" })}>
          add.
        </p>




        <Menu />
        <ProductList lol="loooool" listProducts={products} />
        <CartView />

        <Elswi />

      </div>
    );
  }
}


export default connect(
  (state) => {
    return {
      products: state.products
      // page: state.page
    }
  },
  productActionDispatcher
)(App);
