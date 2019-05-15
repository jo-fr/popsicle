import React from "react";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Main.css";
import Content from "../Content/Content";
import { books, videos } from "../../data/data";

class Main extends React.Component {
  render() {
    return (
      <div className="wrapperMain">
        <div className="menubar">
          <div className="topnav">
            <a className="active" href="#Home">
              Home
            </a>
            <a href="#Books">Books</a>
            <a href="#Videos">Videos</a>
            <a href="#onlinecourses">Online Courses</a>
            <a href="#podcasts">Podcasts</a>
            <a href="#docs">Docs</a>
          </div>
        </div>
        <div className="contentWrapper">
          <Content data={books} type="Books" width="80%" />
          <Content data={videos} type="Videos" width="100%" />
        </div>
      </div>
    );
  }
}

export default Main;
