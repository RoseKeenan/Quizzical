import React, { Component } from "react";

class Welcome extends Component {
  state = {
    message: "Welcome to Quizzical"
  };
  render() {
    return (
      <React.Fragment>
        <span>
          <h1>{this.state.message}</h1>
          <button className="btn btn-primary btn-lg m-3">CREATE A QUIZ</button>
        </span>
      </React.Fragment>
    );
  }
}

export default Welcome;
