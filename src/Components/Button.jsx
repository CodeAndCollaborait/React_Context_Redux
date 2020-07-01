import React, { Component } from "react";
import LanguageContext from "../Contexts/LanguageContex";
import ColorContex from "../Contexts/ColorContex";

export default class Button extends Component {
  updateSubmit(value) {
    return value === "english" ? "Submit" : "Samapta";
  }

  render() {
    return (
      <div>
        <ColorContex.Consumer>
          {(color) => (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {(value) => this.updateSubmit(value)}
              </LanguageContext.Consumer>
            </button>
          )}
        </ColorContex.Consumer>
      </div>
    );
  }
}
