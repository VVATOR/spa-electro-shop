import React from "react";
//import InfoPanelBreadcrumbItemELSWI from "./InfoPanelBreadcrumbItemELSWI";

class InfoPanelBreadcrumbELSWI extends React.Component {

  onClickBreadcrumbItem(itemName) {
    console.log("onClickBreadcrumbItem " + itemName);
  }

  render() {
    const listPath = ["Главная", "Каталог продукции", "КАБЕЛЬ - ПРОВОД", "ПВС, ШВВП", "ПВС"];
    const items = [];
    listPath.forEach((itemName) => {
      if (itemName !== listPath[listPath.length - 1])
        items.push(
          <span key={itemName} >
            <a href="#" onClick={() => this.onClickBreadcrumbItem(itemName)}>
              {itemName}
            </a>
            <span className="sep"> » </span>
          </span>
        );
      //(itemName !== items[listPath.length - 1]) ? items.push(<span className="sep"> » </span>) : "";
    });
    items.push(<span key="active">{listPath[listPath.length - 1]}</span>);

    return (
      <div className="breadcrumb" id="breadcrumb">
        {/*<InfoPanelBreadcrumbItemELSWI />
        <span className="sep"> » </span>
        <a href="http://elswi.by/catalog">Каталог продукции</a>
        <span className="sep"> » </span>
        <a href="http://elswi.by/catalog/kabel-provod/">КАБЕЛЬ - ПРОВОД</a>
        <span className="sep"> » </span>
        <a href="http://elswi.by/catalog/kabel-provod/pvs-shvvp/">ПВС, ШВВП</a>
        <span className="sep"> » </span>
        <span>ПВС</span> */}

        {items}

      </div>
    );
  }
}

export default InfoPanelBreadcrumbELSWI;
