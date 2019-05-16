import React from "react";
import "./Home.css";
import Main from "../Main/Main";
import fire from "../../config/Fire";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    this.setState({ user: fire.auth().currentUser });
    console.log(this.state.user);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    const user = this.state.user;
    return (
      <div className="wrapper">
        <div className="headlineWrapper">
          <h1 id="Home">/Product Management</h1>
        </div>
        <div className="creatorWrapper">
          Hallo {user.email}
          <button onClick={this.logout}>Logout</button>
        </div>
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

export default Home;
