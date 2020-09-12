import React, { Component } from "react";
import Family from "./Family";
import MyProvider from "./MyProvider";

//create context

class App extends Component {
  render() {
    return (
      <div>
        App
        <MyProvider>
          <Family />
        </MyProvider>
      </div>
    );
  }
}

export default App;
