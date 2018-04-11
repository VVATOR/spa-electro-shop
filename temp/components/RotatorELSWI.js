import React from "react";
import RotatorItemELSWI from "./RotatorItemELSWI";

class RotatorELSWI extends React.Component {
  render() {
    return (
      <div
        className="owl-stage"
        style={{
          transform: "translate3d(0px, 0px, 0px)",
          transition: "0s",
          width: "1005px"
        }}
      >
        <RotatorItemELSWI />
        <div
          className="owl-item active"
          style={{
            width: "191px",
            marginRight: "10px"
          }}
        >
          <div className="product-image-box item">
            <a
              href="http://elswi.by/catalog/elektromontazhnye-izdeliya/khomuty-i-skoby/skoby-krepezhnye-plastikovye-kruglye/"
              style={{
                textAlign: "center"
              }}
            >
              <img src="./elswi_files/83ae5059075ba1b3589378a0aaf1c1d6.jpg" />
            </a>
            <a
              className="banner-label"
              href="http://elswi.by/catalog/elektromontazhnye-izdeliya/khomuty-i-skoby/skoby-krepezhnye-plastikovye-kruglye/"
            >
              РАСПРОДАЖА
            </a>
          </div>
        </div>
        <div
          className="owl-item active"
          style={{
            width: "191px",
            marginRight: "10px"
          }}
        >
          <div className="product-image-box item">
            <a
              href="http://elswi.by/catalog/elektromontazhnye-izdeliya/nakonechniki-i-gilzy/gilzy-alyuminievye/"
              style={{
                textAlign: "center"
              }}
            >
              <img src="./elswi_files/19bf2bd3bd46d4838189061b22374168.jpg" />
            </a>
            <a
              className="banner-label"
              href="http://elswi.by/catalog/elektromontazhnye-izdeliya/nakonechniki-i-gilzy/gilzy-alyuminievye/"
            >
              РАСПРОДАЖА
            </a>
          </div>
        </div>
        <div
          className="owl-item active"
          style={{
            width: "191px",
            marginRight: "10px"
          }}
        >
          <div className="product-image-box item">
            <a
              href="http://elswi.by/catalog/modulnaya-avtomatika/ustroistvo-zashchitnogo-otklyucheniya/uzo-2-modulya-elektromekhanicheskoe/"
              style={{
                textAlign: "center"
              }}
            >
              <img src="./elswi_files/123c0e8c472442bc886ec8dc99d03005.jpg" />
            </a>
            <a
              className="banner-label"
              href="http://elswi.by/catalog/modulnaya-avtomatika/ustroistvo-zashchitnogo-otklyucheniya/uzo-2-modulya-elektromekhanicheskoe/"
            >
              РАСПРОДАЖА
            </a>
          </div>
        </div>
        <div
          className="owl-item active"
          style={{
            width: "191px",
            marginRight: "10px"
          }}
        >
          <div className="product-image-box item">
            <a
              href="http://elswi.by/catalog/elektromontazhnye-izdeliya/nakonechniki-i-gilzy/nakonechniki-nvi-nki/"
              style={{
                textAlign: "center"
              }}
            >
              <img src="./elswi_files/d18cbeb498ff2b54de97277545c5a505.jpg" />
            </a>
            <a
              className="banner-label"
              href="http://elswi.by/catalog/elektromontazhnye-izdeliya/nakonechniki-i-gilzy/nakonechniki-nvi-nki/"
            >
              РАСПРОДАЖА
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RotatorELSWI;
