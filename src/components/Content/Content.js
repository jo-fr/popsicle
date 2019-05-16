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
  }
  render() {
    const type = Object.keys(this.state.data)[0];
    const data = this.state.data[type];

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
                key={element["id"]}
                pic={element["pic"]}
                headline={element["name"]}
                url={element["url"]}
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
