import React from "react";
import "./App.css";
import creatorIMG from "./assets/creators/foto_klein.jpg";
import Main from "./components/Main/Main";

function App() {
  return (
    <div class="wrapper">
      <div class="headlineWrapper">
        <h1 id="Home">/Product Management</h1>
      </div>
      <div class="creatorWrapper">
        <span>Content created by</span>
        <img src={creatorIMG} />
      </div>
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
      <div class="MainContentWrapper">
        <Main />
      </div>
      {/* <div class="five">Five</div> */}
    </div>
  );
}

export default App;
