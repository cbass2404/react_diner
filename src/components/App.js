import React, { Component } from "react";

import Menu from "./subcomponents/menu_section";
import Response from "./subcomponents/response_section";

import "../styles/main.scss";

class App extends Component {
  constructor(props) {
    super(props);

    const menuData = require("../database/menu.json");

    this.state = {
      mealType: "",
      entree: "",
      sideOne: "",
      sideTwo: "",
      bfEntree: menuData.breakfast.entree,
      bfSide: menuData.breakfast.side,
      lunEntree: menuData.lunch.entree,
      lunSide: menuData.lunch.side,
      dinEntree: menuData.dinner.entree,
      dinSide: menuData.dinner.side,
    };
  }

  render() {
    return (
      <div className="app-wrapper">
        <Menu
          bfEntree={this.state.bfEntree}
          bfSide={this.state.bfSide}
          lunEntree={this.state.lunEntree}
          lunSide={this.state.lunSide}
          dinEntree={this.state.dinEntree}
          dinSide={this.state.dinSide}
        />
        <Response />
      </div>
    );
  }
}

export default App;
