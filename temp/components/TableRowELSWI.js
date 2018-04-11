import React from "react";
import CoomponentAdderToCartELSWI from "./CoomponentAdderToCartELSWI";

class TableRowELSWI extends React.Component {
  render() {
    


    return (
      <div>
        <span className="more">
          <span />
          <span />
          <img width={32} height={32} src="./elswi_files/info-icon.png" />
        </span>
        <strong>Провод ПВС 2х0,75 БЕЛЫЙ</strong>
        <span>ЧУПП "ПОИСК-1" РБ</span>
        <br />
        <span className="promotes">КРАСНАЯ ЦЕНА</span>
        <a target="_blank" href="https://deal.by/cs/139107">
          подробнее
        </a>
        337,00 руб. 404,40 руб. более 2.6
        <span
          className="redflag"
          title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
        />{" "}
         0.2
        <CoomponentAdderToCartELSWI />
      </div>
    );
  }
}

export default TableRowELSWI;
