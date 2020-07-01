import React, { Component } from "react";
import UserCreate from "./Components/UserCreate";
import LanguageContext from "./Contexts/LanguageContex";
import ColorContex from "./Contexts/ColorContex";
export default class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          <h3> Select Language</h3>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          ></i>
        </div>
        <h5> {this.state.language}</h5>

        <LanguageContext.Provider value={this.state.language}>
          <ColorContex.Provider value={"orange"}>
            <UserCreate />
          </ColorContex.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}
