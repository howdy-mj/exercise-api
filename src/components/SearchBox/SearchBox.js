import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={this.props.handleChange}
        // onChange={() => this.props.handleChange(3)} // 어떤 게 들어가는지 확인하고 싶다면
      />
    );
  }
}

export default SearchBox;