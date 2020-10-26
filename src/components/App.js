import React, { Component } from "react";

import Menu from "./subcomponents/menu_section";
import Response from "./subcomponents/response_section";

import "../styles/main.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mealType: "",
      entree: "",
      sideOne: "",
      sideTwo: "",
    };
  }

  render() {
    return (
      <div className="app-wrapper">
        <Menu />
        <Response />
      </div>
    );
  }
}

export default App;
