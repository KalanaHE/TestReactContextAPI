import React, { Component } from "react";

//create context
const MyContext = React.createContext();

//create provider
class MyProvider extends Component {
  state = {
    name: "kalana",
    age: 24,
    cool: true,
  };

  render() {
    return <MyContext.Provider>{this.props.children}</MyContext.Provider>;
  }
}

export default MyProvider;
