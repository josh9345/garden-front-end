import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import "./App.css";
import Browse from "./Components/Browse";
import ResultPage from "./Components/ResultPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/browse" component={Browse} />
        <Route path="/results" component={ResultPage} />
      </Switch>
    </Router>
  );
}

export default App;
