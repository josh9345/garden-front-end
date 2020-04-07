import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const style = {
  color: "white"
};

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  render() {
    let searchResult = e => {
      e.preventDefault();

      let uppercase =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      this.setState({ result: uppercase });
      console.log(uppercase);
    };
    let handleClick = e => {};
    return (
      <nav>
        <h3>logo</h3>
        <Link style={style} to="/">
          <h5>home</h5>
        </Link>
        <Link style={style} to="/browse">
          <h5>Browse</h5>
        </Link>
        <div>
          <input onChange={searchResult} type="input"></input>
          <br />
          <Link to={`/description/${this.state.result}`}>
            <button onClick={handleClick}>search</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
