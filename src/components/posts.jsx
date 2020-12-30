import React, { Component } from "react";
class Posts extends Component {
  state = {};
  render() {
    const { year, month } = this.props.match.params;

    return (
      <h3>
        Posts year : {year === undefined ? "year Not Provided" : year}, month:
        {month === undefined ? "month Not Provided" : month}
      </h3>
    );
  }
}

export default Posts;
