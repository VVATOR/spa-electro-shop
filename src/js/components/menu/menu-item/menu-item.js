import React from 'react';
import './menu-item.css';

class MenuItem extends React.Component {
    
    render() {
      return (
        <div className="menu-item">         
          <a className="category" href="#">menu-item {this.props.name}</a>

        </div>
      ); 
    }
  }
  
  export default MenuItem;

  