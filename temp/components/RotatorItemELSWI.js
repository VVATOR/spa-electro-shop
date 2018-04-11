import React from "react";

class RotatorItemELSWI extends React.Component {
  render() {
    return (
      <div
        className="owl-item active"
        style={{
          width: "191px",
          marginRight: "10px"
        }}
      >
        <div className="product-image-box item">
          <a
            href="http://elswi.by/catalog/elektromontazhnye-izdeliya/izolenta-i-trubki-tut/trubka-tut-v-rulonakh/"
            style={{
              textAlign: "center"
            }}
          >
            <img src="./elswi_files/927c28a0f9e107c7a2d2826436945893.jpg" />
          </a>
          <a
            className="banner-label"
            href="http://elswi.by/catalog/elektromontazhnye-izdeliya/izolenta-i-trubki-tut/trubka-tut-v-rulonakh/"
          >
            РАСПРОДАЖА
          </a>
        </div>
      </div>
    );
  }
}

export default RotatorItemELSWI;
