import React, { Component } from "react";

import Menu from "./subcomponents/menu_section";
import Response from "./subcomponents/response_section";
import Selection from "./subcomponents/selection_section";

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
      <div>
        <Menu />
        <Response />
        <Selection />
      </div>
    );
  }
}

export default App;
