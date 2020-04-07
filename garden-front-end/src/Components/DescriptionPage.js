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

    let BaseUrl = "https://garden-api-1993.herokuapp.com/vegetables/name/";
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
  componentDidUpdate() {
    const { name } = this.props.match.params;

    let BaseUrl = "https://garden-api-1993.herokuapp.com/vegetables/name/";
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
        <div className="infoContainer">
          <div
            className="DescriptionImage"
            style={{
              backgroundImage: `url(${veg.images})`
            }}
          ></div>
          <ul className="info">
            <li className="listItem" style={{ fontSize: "45px" }}>
              {veg.name}
            </li>
            <li className="listItem">{veg.culinaryHints}</li>
          </ul>
        </div>
        <div>
          <ul className="instructions">
            <li className="instructionList">{veg.sowInstructions}</li>
            <li className="instructionList">{veg.spaceInstructions}</li>
            <li className="instructionList">{veg.harvestInstructions}</li>
            <li className="instructionList">{veg.compatiblePlants}</li>
            <li className="instructionList">{veg.avoidInstructions}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DescriptionPage;
