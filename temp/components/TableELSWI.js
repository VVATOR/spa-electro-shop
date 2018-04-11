import React from "react";
import TableRowELSWI from "./TableRowELSWI";

class TableELSWI extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className="col-1">НАИМЕНОВАНИЕ</th>
            <th className="col-dop">Описание</th>
            <th
              className="col-3"
              style={{
                textAlign: "center",
                textIndent: 0
              }}
            >
              Цена<em>(без НДС)</em>
            </th>
            <th
              className="col-3"
              style={{
                textAlign: "center",
                textIndent: 0
              }}
            >
              Цена<em>(с НДС)</em>
            </th>
            <th className="col-4">
              НАЛИЧИЕ<br />НА СКЛАДЕ
            </th>
            <th
              className="col-6"
              style={{
                textAlign: "center",
                textIndent: 0
              }}
            >
              Заводская<br />упаковка
            </th>
            <th className="col-5" />
          </tr>
        </thead>
        <tbody className="items">
          <tr id="product-row-id-278" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 2х0,75 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              345,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              414,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 3.6
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={278}
                  id="pv-278"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={278}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <TableRowELSWI />
          <tr id="product-row-id-279" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 2х0,75 чер</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              345,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              414,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.2
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={279}
                  id="pv-279"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={279}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2620" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 2х0,75 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              337,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              404,40 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 3.8
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2620}
                  id="pv-2620"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2620}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-281" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 2х1,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              441,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              529,20 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 1.7
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={281}
                  id="pv-281"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={281}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2603" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 2х1,0 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              433,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              519,60 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 4.7
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2603}
                  id="pv-2603"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2603}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-282" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 2х1,0 чер</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА, УРВИ КУСОК</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              430,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              516,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.1
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.055{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={282}
                  id="pv-282"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={282}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2640" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 2х1,0 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              433,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              519,60 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 1.4
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2640}
                  id="pv-2640"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2640}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-284" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 2х1,5 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              585,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              702,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 3.9
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.15{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={284}
                  id="pv-284"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={284}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2604" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 2х1,5 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              575,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              690,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 5.9
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.15{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2604}
                  id="pv-2604"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2604}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2605" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 2х2,5 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              895,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 074,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 3.9
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2605}
                  id="pv-2605"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2605}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2641" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 2х2,5 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              895,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 074,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.7
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2641}
                  id="pv-2641"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2641}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-289" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 2х4,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
              <br />
              <span className="promotes">УРВИ КУСОК</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 490,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 788,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.1
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.05{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={289}
                  id="pv-289"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={289}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2606" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 3х0,75 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              455,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              546,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 5
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2606}
                  id="pv-2606"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2606}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-293" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 3х0,75 чер</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              465,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              558,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.4
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={293}
                  id="pv-293"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={293}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2889" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 3х0,75 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              455,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              546,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 5.8
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2889}
                  id="pv-2889"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2889}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-294" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 3х1,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              600,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              720,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.7
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={294}
                  id="pv-294"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={294}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2607" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 3х1,0 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              588,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              705,60 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 2.2
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2607}
                  id="pv-2607"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2607}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2911" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 3х1,0 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            />
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              600,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              720,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 1
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2911}
                  id="pv-2911"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2911}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-296" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 3х1,5 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              820,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              984,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 7
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.15{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={296}
                  id="pv-296"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={296}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2608" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 3х1,5 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              805,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              966,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 3.5
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.15{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2608}
                  id="pv-2608"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2608}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2622" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 3х1,5 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              805,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              966,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 1.4
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.15{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2622}
                  id="pv-2622"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2622}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-299" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 3х2,5 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
              <br />
              <span className="promotes">УРВИ КУСОК</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 250,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 500,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.1
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.064{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={299}
                  id="pv-299"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={299}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2616" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 3х2,5 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 255,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 506,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 4.2
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2616}
                  id="pv-2616"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2616}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2013" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 3х2,5 чер</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 278,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 533,60 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.6
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2013}
                  id="pv-2013"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2013}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-300" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 3х4,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 090,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 508,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.4
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={300}
                  id="pv-300"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={300}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-304" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 4х0,75 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              610,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              732,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.6
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={304}
                  id="pv-304"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={304}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2674" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 4х0,75 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              597,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              716,40 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.5
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2674}
                  id="pv-2674"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2674}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-306" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 4х1,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              785,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              942,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.1
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.2{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={306}
                  id="pv-306"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={306}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2611" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 4х1,5 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 045,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 254,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 2
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2611}
                  id="pv-2611"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2611}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2642" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 4х1,5 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 045,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 254,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 1.6
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2642}
                  id="pv-2642"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2642}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-310" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 4х2,5 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
              <br />
              <span className="promotes">УРВИ КУСОК</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 640,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 968,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.1
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.035{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={310}
                  id="pv-310"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={310}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2612" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 4х2,5 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 640,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 968,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 2.5
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2612}
                  id="pv-2612"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2612}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2643" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 4х2,5 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 640,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 968,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.6
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2643}
                  id="pv-2643"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2643}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-311" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 4х4,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 795,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              3 354,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.1
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={311}
                  id="pv-311"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={311}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-314" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 5х0,75 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              790,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              948,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.4
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={314}
                  id="pv-314"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={314}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2658" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 5х0,75 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              775,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              930,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.9
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2658}
                  id="pv-2658"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2658}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-316" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 5х1,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 005,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 206,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.9
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={316}
                  id="pv-316"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={316}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2613" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 5х1,5 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 330,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 596,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 3.6
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2613}
                  id="pv-2613"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2613}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2636" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 5х1,5 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 330,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              1 596,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 1
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2636}
                  id="pv-2636"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2636}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2359" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС- 4х2,5+1х2,5 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 150,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 580,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.3
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2359}
                  id="pv-2359"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2359}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2614" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 5х2,5 БЕЛЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 075,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 490,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 2.2
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2614}
                  id="pv-2614"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2614}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-2644" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС 5х2,5 ЧЕРНЫЙ</strong>
              <span>ЧУПП "ПОИСК-1" РБ</span>
              <br />
              <span className="promotes">КРАСНАЯ ЦЕНА</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a target="_blank" href="https://deal.by/cs/139107">
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 075,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              2 490,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.7
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              <span
                className="redflag"
                title="\u041F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u043C\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u043C\u0438"
              />{" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={2644}
                  id="pv-2644"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={2644}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-321" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-Т 5х4,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              3 610,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              4 332,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.7
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={321}
                  id="pv-321"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={321}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-322" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-ТS 5х6,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              5 040,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              6 048,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.6
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               1{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={322}
                  id="pv-322"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={322}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
          <tr id="product-row-id-323" className="product-row">
            <td
              className="col-td-1"
              data-label="\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"
            >
              <span className="more">
                <span />
                <span />
                <img width={32} height={32} src="./elswi_files/info-icon.png" />
              </span>
              <strong>Провод ПВС-ТS 5х10,0 бел</strong>
              <span>ОАО Щучинский завод "Автопровод" РБ</span>
            </td>
            <td
              className="col-td-2 w50 col-dop-data"
              data-label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            >
              <a
                target="_blank"
                href="http://www.avtoprovod.com/production/catalog/type91"
              >
                подробнее
              </a>{" "}
            </td>
            <td
              className="col-td-4 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0431\u0435\u0437 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              8 355,00 руб.{" "}
            </td>
            <td
              className="col-td-5 w50"
              data-label="\u0426\u0435\u043D\u0430 (\u0441 \u041D\u0414\u0421)"
              style={{
                textAlign: "center"
              }}
            >
              10 026,00 руб.{" "}
            </td>
            <td
              className="col-td-6 w50"
              data-label="\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"
              style={{
                textAlign: "center"
              }}
            >
              {" "}
              более 0.4
            </td>
            <td
              className="col-td-7 w50"
              data-label="\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
              style={{
                textAlign: "center",
                padding: 0
              }}
            >
              {" "}
               0.5{" "}
            </td>
            <td
              className="col-td-8 w50"
              data-label="\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
              style={{
                paddingLeft: "10px"
              }}
            >
              <div className="add-to-cart-wrapper">
                <input
                  maxLength={5}
                  style={{
                    width: "50px"
                  }}
                  data-id={323}
                  id="pv-323"
                  defaultValue={1}
                  className="text-hint qty acpv"
                />
                <span
                  className="units"
                  style={{
                    marginLeft: "-26px"
                  }}
                >
                  км
                </span>
                <a
                  href="http://elswi.by/catalog/kabelno-provodnikovaya-produktsiya/pvs-shvvp-pbppg-mksh-mkesh/pvs/#"
                  data-id={323}
                  className="basket"
                />
                <div className="clear" />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot className="pf">
          <tr>
            <td colSpan={8}> </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default TableELSWI;
