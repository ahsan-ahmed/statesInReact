import React, { Component } from 'react';
import '../../App.css';
import bulbImage from "../../Assets/images/bulbOffGiven.jpg";
class bulb extends Component {
  render() {
    return (
      <div className="App">
          <img src={bulbImage}></img>     
      </div>
    );
  }
}

export default bulb;
