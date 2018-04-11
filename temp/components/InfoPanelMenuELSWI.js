import React from "react";
import InfoPanelMenuItemELSWI from "./InfoPanelMenuItemELSWI";

class InfoPanelMenuELSWI extends React.Component {
  render() {
    return (
      <div className="header-icon-wrapper">
        <InfoPanelMenuItemELSWI />
        <div className="header-icon-box">
          <a
            className="fancybox.iframe fbb"
            href="http://www.youtube.com/embed/pOCp9nP5CPA?autoplay=1"
            target="blank"
          >
            <img src="./elswi_files/youtube.png" />
            <span>Как заказать?</span>
          </a>
        </div>
        <div className="header-icon-box">
          <a href="http://elswi.by/site/price" target="blank">
            <img src="./elswi_files/excel.png" />
            <span>Прайс</span>
          </a>
        </div>
      </div>
    );
  }
}

export default InfoPanelMenuELSWI;
