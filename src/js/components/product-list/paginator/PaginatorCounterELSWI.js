import React from "react";

class PaginatorCounterELSWI extends React.Component {

  onClickPaginatorCounter(count) {
    console.log("onClickPaginatorCounter " + count);
  }

  render() {
    const listPageSizes = [10, 15, 20, 50, 100];
    const items = [];
    listPageSizes.forEach(pageSize => {
      items.push(
                <li>
                  <a onClick={() => this.onClickPaginatorCounter(pageSize)}>
                    {pageSize} 
                  </a>
                </li>
      );
    });
    return (
      <div className="page-size">
        <ul>
          <li className="sizerHeader">Показывать: </li>
          {items}
          <li className="active">60</li>
        </ul>
      </div>
    );
  }
}

export default PaginatorCounterELSWI;
