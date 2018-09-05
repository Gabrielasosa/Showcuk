import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar />
        <h1>Showcuk</h1>
      </div>
    );
  }
}

export default App;
