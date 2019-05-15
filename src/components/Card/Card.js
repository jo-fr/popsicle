import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="wrapperCard">
        <div className="picture">
          <img src={this.props.pic} width={this.props.width} />
        </div>
        <div className="context">
          <h3>{this.props.headline}</h3>
          <p>{this.props.context}</p>
        </div>
      </div>
    );
  }
}

export default Card;
