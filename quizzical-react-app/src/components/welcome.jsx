import React, { Component } from "react";

class Welcome extends Component {
  state = {
    message: "Welcome to Quizzical"
  };
  render() {
    return (
      <React.Fragment>
        <span>
          <h1 className="welcome">{this.state.message}</h1>
          <button className="btn btn-info btn-lg create-quiz">
            CREATE A QUIZ
          </button>
        </span>
      </React.Fragment>
    );
  }
}

export default Welcome;
