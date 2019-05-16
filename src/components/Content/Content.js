import React from "react";
import airtableBase from "../../config/Airtable";
import "./Content.css";
import Card from "../Card/Card";

class Content extends React.Component {
  render() {
    const type = this.props.type;
    return (
      <div className="wrapperContent">
        <div className="headline" id={type}>
          <h2>{type} we recommend</h2>
        </div>
        <div className="seeAll">See All</div>
        <div className="cards">
          {this.props.data.map(element => {
            return (
              <Card
                pic={element.pic}
                headline={element.headline}
                context={element.context}
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
