import React, { Component } from "react";
class ProductDetails extends Component {
  state = {};
  handleSave = () => {};

  render() {
    return (
      <div>
        <h1> Product Details - {this.props.match.params.id} </h1>
        <button className="btn btn-success" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default ProductDetails;
