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
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import buttonCart from './js/components/button-cart/button-cart';

class GridView extends Component {
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
    return list;
  }



  render() {

    let { products } = this.props;
    return (
      <div className="App container-fluid">
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={6}>
              <ButtonCart />             
            </Col>
            <Col sm={6} md={6}>             
              <SearchComponentELSWI />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={12} md={12}>

              <header className="App-header">
                <ButtonCart />
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>

            </Col>
          </Row>
          <Row>
            <Col sm={6} md={3}>
              <Grid>
                <Row>
                  <Col lg={6} sm={6} md={6}>
                    aaa
                  </Col>
                  <Col lg={6} sm={6} md={6}>
                    bbb
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12}>
              <InfoPanelBreadcrumbELSWI />
            </Col>
          </Row>

          <Row>
            <Col sm={0} md={2} lg={4}>
              {/* <Menu /> */}
              <Elswi />
            </Col>
            <Col sm={12} md={10} lg={8}>
              <ProductList lol="loooool" listProducts={products} />
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12}>
              <ButtonCart />
              <CartView />
            </Col>
          </Row>
        </Grid>




        <p className="App-intro" onClick={() => console.log("lol")}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro" onClick={this.printProducts.bind(this)}>
          get_all.
        </p>
        <p className="App-intro" onClick={this.state.onProductAddOne.bind(this, { id: "aaa" })}>
          add.
        </p>









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
)(GridView);
