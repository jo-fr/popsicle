import React from "react";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Main.css";
import Card from "../Card/Card";

class Content extends React.Component {
  render() {
    var data = [
      {
        pic: "https://covers.oreillystatic.com/images/0636920020141/lrg.jpg",
        headline: "Running Lean: Iterate form Plan A to a Plan That Works",
        context:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed."
      },
      {
        pic: "https://images-na.ssl-images-amazon.com/images/I/71iTueU1pBL.jpg",
        headline: "Hooked: how to build habit-forming products",
        context:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed."
      },
      {
        pic: "https://images-na.ssl-images-amazon.com/images/I/41iRRYgWxYL.jpg",
        headline: "Inspired: how to create tech products customers love",
        context:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed."
      }
    ];
    return (
      <div class="wrapperContent">
        <div class="menubar">
          <div class="topnav">
            <a class="active" href="#Home">
              Home
            </a>
            <a href="#books">Books</a>
            <a href="#videos">Videos</a>
            <a href="#onlinecourses">Online Courses</a>
            <a href="#podcasts">Podcasts</a>
            <a href="#docs">Docs</a>
          </div>
        </div>
        <div class="headline">
          <h2>Books we recommend</h2>
        </div>
        <div class="seeAll">See All</div>
        <div class="cards">
          {data.map(element => {
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
