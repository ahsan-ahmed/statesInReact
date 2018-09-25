import React, { Component } from "react";
import "../../App.css";
import onButtonImage from "../../Assets/images/imagesOn.jpg";

class ButtonOn extends Component {
constructor(){
  super();
  this.state={bulbState:false}
  this.brokenMethod=this.brokenMethod.bind(this);
}

brokenMethod(){
  const {bulbState}=this.state;
  this.props.onpress(bulbState);
}
  render() {
    return (
      <div className="App">
        <img src={onButtonImage} style={{height:50}} onClick={this.brokenMethod}/>
      </div>
    );
  }
}

export default ButtonOn;
