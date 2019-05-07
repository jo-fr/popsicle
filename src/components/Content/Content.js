import React from "react";

import "./Content.css";
import Card from "../Card/Card";

class Content extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div class="wrapperContent">
        <div class="headline">
          <h2>Books we recommend</h2>
        </div>
        <div class="seeAll">See All</div>
        <div class="cards">
          {this.props.data.map(element => {
            console.log(element.headline);
            return (
              <Card
                pic={element.pic}
                headline={element.headline}
                context={element.context}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Content;
