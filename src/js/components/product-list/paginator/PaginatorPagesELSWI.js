import React from "react";

class PaginatorPagesELSWI extends React.Component {

  onClickPaginatorActivatePage(numberPage) {
    console.log("onClickPaginatorActivatePage " + numberPage);
  }

  render() {
    const listPageSizes = [1, 2, 3, 4, 5];

    const items = [];
    listPageSizes.forEach(numberPage => {
      items.push(
        <li key={numberPage} className="page">
          <a onClick={() => this.onClickPaginatorActivatePage(numberPage)}>
            {numberPage}
          </a>
        </li>
      );
    });

    return (
      <div className="pager">
        <span>Страницы</span>
        <ul className="yiiPager" id="yw2">
          <li className="page selected">
            <a href="file:///C:/catalog/kabel-provod/pvs-shvvp/pvs/?size=15">
              1
            </a>
          </li>
          {items}
        </ul>
      </div>
    );
  }
}

export default PaginatorPagesELSWI;
