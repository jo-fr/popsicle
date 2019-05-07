import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div class="wrapperCard">
        <div class="picture">
          <img src={this.props.pic} />
        </div>
        <div class="context">
          <h3>{this.props.headline}</h3>
          <p>{this.props.context}</p>
        </div>
      </div>
    );
  }
}

export default Card;
