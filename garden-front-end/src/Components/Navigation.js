import React from "react";
import "../App.css";
import { Link, withRouter } from "react-router-dom";

const style = {
  color: "white"
};
function Navigation(props) {
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
        <input placeholder="search"></input>
        <br />
        <Link to="/results">
          <button>Search</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
