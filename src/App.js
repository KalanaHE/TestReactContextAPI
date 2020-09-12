import React, { Component } from "react";
import Family from "./Family";

export default class App extends Component {
  state = {
    name: "kalana",
    age: 24,
    cool: true,
  };
  render() {
    return (
      <div>
        App
        <Family name={this.state.name} />
      </div>
    );
  }
}
