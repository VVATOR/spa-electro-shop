import React from "react";

class CoomponentAdderToCartELSWI extends React.Component {
  render() {
    return (
      <div className="add-to-cart-wrapper">
        <input
          maxLength={5}
          style={{
            width: "50px"
          }}
          data-id={2602}
          id="pv-2602"
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
          data-id={2602}
          className="basket"
        />
        <div className="clear" />
      </div>
    );
  }
}

export default CoomponentAdderToCartELSWI;
