import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import fire from "./config/Fire";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div class="wrapper">
        <div class="headlineWrapper">
          <h1 id="Home">/Product Management</h1>
        </div>
        <div class="creatorWrapper" />
        <div class="descriptionWrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus
            vestibulum sed arcu non odio. Elementum integer enim neque volutpat
            ac tincidunt vitae semper. Neque ornare aenean euismod elementum
            nisi quis eleifend. Pretium vulputate sapien nec sagittis. Morbi
            enim nunc faucibus a pellentesque sit amet porttitor. Eu scelerisque
            felis imperdiet proin fermentum.
          </p>
        </div>
        <div class="MainContentWrapper">
          <Main />
        </div>
        {/* <div class="five">Five</div> */}
      </div>
    );
  }
}

export default App;
