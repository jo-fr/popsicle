import React from "react";
import "./Content.css";
import Card from "../Card/Card";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.setState({ data: this.props.data });
    //console.log(this.state.data);
  }
  render() {
    const type = Object.keys(this.props.data)[0];
    const data = this.props.data[type];
    console.log(type);
    console.log(data);
    // console.log(data[0]["name"]);
    return (
      <div className="wrapperContent">
        <div className="headline" id={type}>
          <h2>{type} we recommend</h2>
        </div>
        <div className="seeAll">See All</div>
        <div className="cards">
          {data.map(element => {
            return (
              <Card
                pic={element["pic"]}
                headline={element["name"]}
                context={element["description"]}
                width={this.props.width}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Content;
