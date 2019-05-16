import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
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
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <Home user={this.state.user} /> : <Login />}
      </div>
    );
  }
}

export default App;
