import React, { Component } from "react";
import "../../App.css";
import bulbOnImage from "../../Assets/images/bulbOnGiven.webp";

class lightBulb extends Component {
  render() {
    return (
      <div className="App">
        <img src={bulbOnImage}></img>
      </div>
    );
  }
}

export default lightBulb;
