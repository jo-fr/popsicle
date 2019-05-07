import React from "react";
import "./Content.css";
import Card from "../Card/Card";

class Content extends React.Component {
  render() {
    return (
      <div class="wrapperContent">
        <div class="menubar">menubar</div>
        <div class="headline">
          <h2>Books we recommend</h2>
        </div>
        <div class="cards">
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Content;
