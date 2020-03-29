import React, { Component } from "react";
import Category from "../components/category";


class Welcome extends Component {
  state = {
    message: "Welcome to Quizzical",
    renderView: 0
  };
    
  constructor() {
    super();
    this.createQuiz = this.createQuiz.bind(this);
  }

  createQuiz() {
    this.setState({
      renderView: 1
    });
    this.render();
  }

  render() {
    if (this.state.renderView === 1) {
      return <Category />;
    } else {
      return (
        <React.Fragment>
          <span>
            <h1 className="welcome">{this.state.message}</h1>
            <button
              className="btn btn-info btn-lg create-quiz"
              onClick={this.createQuiz}
            >
              CREATE A QUIZ
            </button>
          </span>
        </React.Fragment>
      );
    }
  }
}

export default Welcome;
