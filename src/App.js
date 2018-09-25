import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonOn from "./Components/Button/ButtonOn";
import Button from "./Components/Button/Button";
import ButtonOff from "./Components/Button/ButtonOff";
import brokenBulb from "./Assets/images/image_3.jpg";
import bulb from "./Assets/images/bulbOffGiven.jpg";
import lightBulb from "./Assets/images/bulbOnGiven.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bulbState: false,
    };
    this.changeBulbState = this.changeBulbState.bind(this);

  }
  changeBulbState(state) {
    let bulbState = state;
    console.log("yeh dekh=>>>",state);
    this.setState({ bulbState });
  }
  render() {
    const { bulbState } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {!bulbState && <img src={bulb} style={{ height: 300 }} />}
        {!bulbState && <ButtonOff onpress={this.changeBulbState} />}

        {bulbState===true && <img src={lightBulb} style={{ height: 300 }} />}
        {bulbState===true && <ButtonOn onpress={this.changeBulbState} />}

        {bulbState==="mid" && <img src={brokenBulb} style={{ height: 300 }} ></img>}
        {bulbState==="mid" && <ButtonOff onpress={this.changeBulbState} />}
        {bulbState && <Button onpress={this.changeBulbState} />}
        {!bulbState && <Button onpress={this.changeBulbState} />}
        </div>
    );
  }
}

export default App;
