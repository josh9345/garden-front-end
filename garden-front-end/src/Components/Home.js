import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div class="container">
      <div class="home">
        <h2 class="welcome">Welcome to the home page!</h2>
        <br />
        <h5 class="welcomeMessage">
          This site is dedicated to collecting and cataloging all types of
          edible plants.
        </h5>
      </div>
      <div class="display-box">
        <Link>
          <div class="one"></div>
        </Link>
        <Link>
          <div class="two"></div>
        </Link>
        <Link>
          <div class="three"></div>
        </Link>
        <Link>
          <div class="four"></div>
        </Link>
        <Link>
          <div class="five"></div>
        </Link>
        <Link>
          <div class="six"></div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
