import React, { Component } from 'react';
import '../../App.css';
import bulbBreakImage from "../../Assets/images/bulbBreakGiven.jpg";

class brokenBulb extends Component {
  render() {
    return (
      <div className="App">
          <img src={bulbBreakImage}></img>     
      </div>
    );
  }
}

export default brokenBulb;
