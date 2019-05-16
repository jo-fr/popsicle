import React from "react";
import "./Main.css";
import Content from "../Content/Content";
import airtableBase from "../../config/Airtable";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async fetchData() {
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
                id: record["id"],
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

  componentDidMount() {
    this.fetchData();
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
            return (
              <Content
                key={Object.keys(element)[0]}
                data={element}
                width="100%"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
