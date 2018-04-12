import React, { Component } from 'react'
import { connect } from 'react-redux'

class ButtonCart extends Component {
  generateTest() {
    return 52;
  }

  render() {
    const { carts } = this.props;
    return (
      <div>
        {carts.length}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      carts: state.carts
    }
  })(ButtonCart);