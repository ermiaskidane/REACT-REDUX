import React, { Component } from "react";
import "./App.css";
import Gadgets from "./containers/Gadgets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gadgets />
      </div>
    );
  }
}

export default App;
