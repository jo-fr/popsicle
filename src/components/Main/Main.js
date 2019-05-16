import React from "react";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Main.css";
import Content from "../Content/Content";
import airtableBase from "../../config/Airtable";
import { books, videos } from "../../data/data";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  fetchData = () => {};

  async componentDidMount() {
    airtableBase("Table 1")
      .select({
        view: "Grid view"
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }

        const categories = [
          "Book",
          "Podcast",
          "Video",
          "Online Course",
          "Docs"
        ];
        var data = [];

        categories.forEach(category => {
          var obj = [];
          records.forEach(record => {
            if (record.get("Category") === category) {
              obj.push({
                name: record.get("Name"),
                description: record.get("Copy/Description"),
                url: record.get("URL"),
                notes: record.get("Notes"),
                claps: record.get("claps"),
                pic: record.get("picture")
              });
            }
          });
          data.push({ [category]: obj });
        });
        this.setState({ data: data });
        // console.log(this.state);
      });
  }

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
          {this.state.data.map(element => {
            return <Content data={element} width="100%" />;
          })}
        </div>
      </div>
    );
  }
}

export default Main;
