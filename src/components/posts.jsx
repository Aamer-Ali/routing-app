import React, { Component } from "react";
import queryString from "query-string";

class Posts extends Component {
  state = {};
  render() {
    const { year, month } = this.props.match.params;
    const { location } = this.props;
    const result = queryString.parse(location.search);
    console.log(result);

    return (
      <div>
        <h3>
          Posts year : {year === undefined ? "year Not Provided" : year}, month:
          {month === undefined ? "month Not Provided" : month}
        </h3>

        <h4>{result.sortBy}</h4>
        <h4>{result.approved}</h4>
      </div>
    );
  }
}

export default Posts;
