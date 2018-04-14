import React from 'react';
import './product-list-item.css';
//import PropTypes from 'prop-types';

import AddToCartButtom from './btn/add-to-cart';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }


  render() {
    const { product } = this.props;
      console.log(product);

    return (
      <tr className="product-list-item">
        <td>
          element {product.id}
        </td>
        <td>
          <input type="number" placeholder="1" ref={this.inputField} onChange={(input) => this.inputField = input} />
          <AddToCartButtom product={product} />

        </td>

        <td>
          <AddToCartButtom product={product} />
        </td>


        <td>

          <div className="product-row">
            <div data-label="Наименование">
              <div className="more">
                <img width="32" height="32" src="/assets/110266d0/img/info-icon.png" />
              </div>
              <div className="product-image-box">
                <a href="/uploads/04052017/6156d363432f1a61f1f8b1293763363a.jpg" className="fancybox">
                  <img src="/uploads/presets/product_preview/6156d363432f1a61f1f8b1293763363a.jpg" />
                </a>
              </div>
              Светильник НТУ 01-100-301 УХЛ1.1, молочно-белый
              ЧПТУП "ВЭТП "Свет" РБ
              </div>
            <div className="col-div-2 w50 col-dop-data" data-label="Описание">
              <a target="_blank" href="http://www.svet-vitebsk.by/products/lights/sadovoparkovye/ball.html">подробнее</a>
            </div>
            <div className="col-div-4 w50" data-label="Цена (без НДС)">
              00,00 руб.
              </div>
            <div className="col-div-5 w50" data-label="Цена (с НДС)">
              17,16&nbsp;руб.    </div>
            <div className="col-div-6 w50" data-label="Наличие на складе"> более 20</div>
            <div className="col-div-7 w50" data-label="Заводская упаковка">        &nbsp;5 </div>
            <div className="col-div-8 w50" data-label="Заказать" >
              <div className="add-to-cart-wrapper">
                <input data-id="2415" value="1" />
                <div className="units">шт</div>
                <a href="#" data-id="2415" className="btn add-to-cart"></a>
                <div className="btn clear"></div>
              </div>
            </div>
          </div>

        </td>
      </tr>
    );
  }
}

/*ProductListItem.propTypes = {
  children: PropTypes.element.isRequired
};*/

ProductListItem.defaultProps = {
  product: { id: "aaaaaaaaaaaaaaaaa" }
};

export default ProductListItem;

