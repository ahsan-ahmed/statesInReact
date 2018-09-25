import React, { Component } from "react";
import "../../App.css";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      bulbState: "mid"
    };
    this.brokenMethod = this.brokenMethod.bind(this);
  }
  brokenMethod() {
    this.props.onpress(this.state.bulbState);
  }
  render() {
    return (
      <div className="App">
        <button
          style={{
            height: 50,
            width: 110,
            background: "yellow",
            borderRadius: 10,
            fontFamily: "bold"
          }}
          onClick={this.brokenMethod}
        >
          Broken The Bulb
        </button>
      </div>
    );
  }
}

export default Button;
