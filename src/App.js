import React, { Component } from "react";

import HomePage from "../src/components/homepage/homepage.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
