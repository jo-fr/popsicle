import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div class="wrapperCard">
        <div class="picture">
          <img
            width="100%"
            src="https://covers.oreillystatic.com/images/0636920020141/lrg.jpg"
          />
        </div>
        <div class="context">
          <h3>Running Lean: Iterate form Plan A to a Plan That Works</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
            in pellentesque massa placerat duis ultricies lacus sed.
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
