import React, { Component } from "react";
import LanguageContext from "../Contexts/LanguageContex";
export default class Field extends Component {
    //Only for default values
  //must be called contextType as React requirements

  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input></input>
      </div>
    );
  }
}
