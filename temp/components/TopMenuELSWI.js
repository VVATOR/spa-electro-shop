import React from "react";
import SearchComponentELSWI from "./SearchComponentELSWI";

class TopMenuELSWI extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="logo">
            {}
            <img src="./elswi_files/logo.png" />
            {}
          </div>
          <div id="overlay-wrapper" />
          <div
            id="hamburger"
            style={{
              display: "block"
            }}
          >
            <span />
            <span />
            <span />
          </div>
          <div id="menu-wrapper">
            <ul id="menu">
              <li className="mobile-menu-item order-products">
                <a href="http://elswi.by/catalog/svetilniki/sadovo-parkovye-bez-lamp/sadovo-parkovye/">
                  Заказ товаров
                </a>
              </li>
              <li className="mobile-menu-item cart-products">
                <a href="http://elswi.by/catalog/svetilniki/sadovo-parkovye-bez-lamp/sadovo-parkovye/#cart">
                  Корзина
                </a>
              </li>
              <li className="mobile-menu-item page-4">
                <a href="http://elswi.by/contacts/">Контакты</a>
              </li>
              <li className="mobile-menu-item mobile-map">
                <a href="http://elswi.by/page/map">Карта</a>
              </li>
              <li className="mobile-menu-item mobile-search-trigger">
                <a href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#">
                  Поиск
                </a>
              </li>
            </ul>
          </div>
          <SearchComponentELSWI />{" "}
        </div>
      </div>
    );
  }
}

export default TopMenuELSWI;
