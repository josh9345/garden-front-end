import React from "react";
import "../App.css";

function Home(props) {
  return (
    <div class="container">
      <div class="home">
        <h2 class="welcome">Welcome to the Garden Center!</h2>
        <br />
        <h5 class="welcomeMessage">
          This site is dedicated to collecting and cataloging all types of
          edible plants.
        </h5>
      </div>
      {/* <div class="display-box">
        <div class="one"></div>

        <div class="two"></div>

        <div class="three"></div>

        <div class="four"></div>

        <div class="five"></div>

        <div class="six"></div>
      </div> */}
    </div>
  );
}

export default Home;
