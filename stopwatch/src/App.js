import React, { Component } from "react";
import "./App.css";
import Stopwatch from "./Component/Stopwatch";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">StopWatch</div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
