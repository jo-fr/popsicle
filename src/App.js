import React from "react";
import "./App.css";
import Content from "./components/Content/Content";

function App() {
  return (
    <div class="wrapper">
      <div class="headlineWrapper">
        <h1>/Product Management</h1>
      </div>
      <div class="creatorWrapper" />
      <div class="descriptionWrapper">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus
          vestibulum sed arcu non odio. Elementum integer enim neque volutpat ac
          tincidunt vitae semper. Neque ornare aenean euismod elementum nisi
          quis eleifend. Pretium vulputate sapien nec sagittis. Morbi enim nunc
          faucibus a pellentesque sit amet porttitor. Eu scelerisque felis
          imperdiet proin fermentum.
        </p>
      </div>
      <div class="contentWrapper">
        <Content name="Halll0" />
      </div>
      <div class="five">Five</div>
    </div>
  );
}

export default App;
