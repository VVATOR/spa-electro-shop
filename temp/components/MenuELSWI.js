import React from "react";
import MenuFirstLvlELSWI from "./MenuFirstLvlELSWI";

class MenuELSWI extends React.Component {
  render() {
    return (
      <aside>
        <div className="closer">
          <span />
          <span />
        </div>
        <MenuFirstLvlELSWI />
      </aside>
    );
  }
}

export default MenuELSWI;
