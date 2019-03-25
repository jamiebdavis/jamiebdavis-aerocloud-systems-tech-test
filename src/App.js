import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>App content</p>
        <Toolbar />
      </div>
    );
  }
}

export default App;
