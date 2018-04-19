import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Glyphicon } from 'react-bootstrap';

class ButtonCart extends Component {
  generateTest() {
    return 52;
  }

  render() {
    const { carts } = this.props;
    return (
      <div>
        {carts.length}
        <Button bsSize="small" bsStyle="danger">
          <Glyphicon glyph="trash" />
        </Button>
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