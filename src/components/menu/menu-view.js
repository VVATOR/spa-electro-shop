import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './menu-item/menu-item';
import './menu-view.css';


class Menu extends React.Component {
    
    generateTest(){
      let list = [
      <MenuItem key="1" name="1"/>,
      <MenuItem key="2" name="2"/>,
      <MenuItem key="3" name="3"/>
    ];
      return list;
    }
    
    render() {
      return (
        <div className="product-list-item">         
          <div className="menu-header">header</div>
            {this.generateTest()}

        </div>
      );
    }
  }
  
  export default Menu;