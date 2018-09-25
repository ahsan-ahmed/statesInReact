import React, { Component } from "react";
import "../../App.css";
import offButtonImage from "../../Assets/images/imageOff.jpg";

class ButtonOff extends Component {
  constructor() {
    super();
    this.state = { bulbState: true };
    this.brokenMethod = this.brokenMethod.bind(this);
  }

  brokenMethod() {
    const { bulbState } = this.state;
    this.props.onpress(bulbState);
  }

  render() {
    return (
      <div className="App">
        <img
          src={offButtonImage}
          style={{ height: 50 }}
          onClick={this.brokenMethod}
        />
      </div>
    );
  }
}

export default ButtonOff;
