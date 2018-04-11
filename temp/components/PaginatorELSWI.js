import React from "react";

class PaginatorELSWI extends React.Component {
  render() {
    return (
      <div className="page-size">
        <ul>
          <li className="sizerHeader">Показывать: </li>
          <li>
            <a href="http://elswi.by/catalog/kabel-provod/pvs-shvvp/pvs/?size=15">
              15
            </a>
          </li>
          <li>
            <a href="http://elswi.by/catalog/kabel-provod/pvs-shvvp/pvs/?size=30">
              30
            </a>
          </li>
          <li className="active">60</li>
        </ul>
      </div>
    );
  }
}

export default PaginatorELSWI;
