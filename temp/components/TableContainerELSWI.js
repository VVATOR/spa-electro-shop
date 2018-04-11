import React from "react";
import PaginatorELSWI from "./PaginatorELSWI";
import TableELSWI from "./TableELSWI";
import PaginatorPagesELSWI from "./PaginatorPagesELSWI";
import PaginatorCounterELSWI from "./PaginatorCounterELSWI";

class TableContainerELSWI extends React.Component {
  render() {
    return (
      <div className="table-product">
        <PaginatorELSWI />
        <TableELSWI />
        <PaginatorPagesELSWI />
        <PaginatorCounterELSWI />
      </div>
    );
  }
}

export default TableContainerELSWI;
