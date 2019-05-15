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
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="headlineWrapper">
          <h1 id="Home">/Product Management</h1>
        </div>
        <div className="creatorWrapper" />
        <div className="descriptionWrapper">
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
        <div className="MainContentWrapper">
          <Main />
        </div>
        {/* <div class="five">Five</div> */}
      </div>
    );
  }
}

export default App;
