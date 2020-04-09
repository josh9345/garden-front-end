import React, { Component } from "react";

class DescriptionPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let BaseUrl = "https://garden-api-1993.herokuapp.com/vegetables";
    fetch(BaseUrl)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ data: res });
      })
      .then(res => {
        console.log(this.state.data);
      });
  }

  render() {
    const { name } = this.props.match.params;
    let result = this.state.data;

    let veg = result.map(item => {
      if (item.name == name) {
        console.log(item);
        return (
          <div>
            <div className="infoContainer">
              <div
                className="DescriptionImage"
                style={{
                  backgroundImage: `url(${item.images})`
                }}
              ></div>
              <ul className="info">
                <li className="listItem" style={{ fontSize: "45px" }}>
                  {item.name}
                </li>
                <li className="listItem">{item.culinaryHints}</li>
              </ul>
            </div>
            <div>
              <ul className="instructions">
                <li className="instructionList">{item.sowInstructions}</li>
                <li className="instructionList">{item.spaceInstructions}</li>
                <li className="instructionList">{item.harvestInstructions}</li>
                <li className="instructionList">{item.compatiblePlants}</li>
                <li className="instructionList">{item.avoidInstructions}</li>
              </ul>
            </div>
          </div>
        );
      } else {
      }
    });

    return <div>{veg}</div>;
  }
}

export default DescriptionPage;
