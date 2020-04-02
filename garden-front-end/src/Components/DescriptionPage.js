import React, { Component } from "react";

class DescriptionPage extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }
  componentWillMount() {
    const { name } = this.props.match.params;

    let BaseUrl = "http://localhost:8080/vegetables/name/";
    fetch(BaseUrl + name)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ data: res[0] });
      })
      .then(res => {
        console.log(this.state.data);
      });
  }

  render() {
    let veg = this.state.data;

    return (
      <div>
        <div
          className="DescriptionImage"
          style={{
            background: `url(${veg.images})`
          }}
        ></div>
        <ul>
          <li>{veg.name}</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default DescriptionPage;
