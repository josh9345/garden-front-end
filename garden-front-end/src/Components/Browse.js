import React, { Component } from "react";
import { Link } from "react-router-dom";
import DescriptionPage from "./DescriptionPage";
import "../App.css";

class Browse extends Component {
  constructor() {
    super();
    this.state = {
      Data: []
    };
    let BaseUrl = "http://localhost:8080/vegetables";
    let vegie = () => {
      console.log("hello");
      fetch(BaseUrl)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ Data: data });
        })
        .then(res => {
          console.log(this.state.Data);
        });
    };
    vegie();
  }
  render() {
    let vegieData = this.state.Data.map(item => {
      let name = item.name;
      return (
        <div className="vegieCard">
          <Link to={`/description/${item.name}`}>
            <div
              className="imageContainer"
              style={{
                background: `url(${item.images}`,
                backgroundSize: "cover"
              }}
            ></div>
          </Link>
          <div className="cardInfo">{item.name}</div>
        </div>
      );
    });
    return <div className="cardContainer">{vegieData}</div>;
  }
}

export default Browse;
