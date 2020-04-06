import React, { Component } from "react";
import Category from "../components/category";
import TakeQuiz from "../components/TakeQuizzes";


class Welcome extends Component {
  state = {
    message: "Welcome to Quizzical",
    renderView: 0
  };
    
  constructor() {
    super();
      this.createQuiz = this.createQuiz.bind(this);
      this.takeQuiz = this.takeQuiz.bind(this);
  }

  createQuiz() {
    this.setState({
      renderView: 1
    });
    this.render();
    }

    takeQuiz() {
        this.setState({
            renderView: 2
        });
        this.render();
    }

  render() {
    if (this.state.renderView === 1) {
      return <Category />;
    }
    else if (this.state.renderView === 2) {
        return <TakeQuiz />;
    }
        else {
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
                  <button
                      className="btn btn-info btn-lg take-a-quiz"
                      onClick={this.takeQuiz}
                  >
                         TAKE A  QUIZ
            </button>
          </span>
        </React.Fragment>
      );
    }
  }
}

export default Welcome;
