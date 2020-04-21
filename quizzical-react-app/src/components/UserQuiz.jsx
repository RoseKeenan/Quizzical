import React from "react";
import { CreateQuestions } from "../components/createQuestion";
import { createPublicKey } from "crypto";
import Welcome from "./welcome";

class UserQuiz extends React.Component {
  state = {
    QuizTitle: null,
    QuizCategory: null,
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
    renderView: 0,
  };

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  goHome() {
    this.setState({
      renderView: 1,
    });
  }

  loadQuizData = () => {
    this.setState(() => {
      return {
        QuizTitle: this.props.Title.QuizTitle,
        questions: this.props.quiz[this.state.currentQuestion].question,
        answer: this.props.quiz[this.state.currentQuestion].answer,
        options: this.shuffle(
          this.props.quiz[this.state.currentQuestion].options
        ),
        QuizCategory: this.props.Category.QuizCategory,
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestion = () => {
    const { myAnswer, answer, score } = this.state;
    if (myAnswer === answer) {
      this.setState({
        score: score + 100,
      });
    }
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: this.props.quiz[this.state.currentQuestion].question,
          answer: this.props.quiz[this.state.currentQuestion].answer,
          options: this.shuffle(
            this.props.quiz[this.state.currentQuestion].options
          ),
        };
      });
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };

  finish = () => {
    const { myAnswer, answer, score } = this.state;
    if (myAnswer === answer) {
      this.setState({
        score: score + 100,
      });
    }
    if (this.state.currentQuestion === this.props.quiz.length - 1) {
      this.setState({
        isEnd: true,
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    if (this.state.renderView === 1) {
      return <Welcome />;
    }

    if (isEnd) {
      return (
        <div className="welcome">
          <h3>
            Game Over your Final score is {this.state.score} out of 300 points{" "}
          </h3>
          <h3>The correct answer's for the questions was </h3>
          <ul>
            {this.props.quiz.map((item, index) => (
              <li className="finishMultipleChoice" key={index}>
                {item.answer}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-info take-quiz"
            onClick={() => this.goHome()}
          >
            Home
          </button>
        </div>
      );
    } else {
      return (
        <div className="welcome">
          <h3> Welcome to {this.state.QuizTitle}</h3>
          <h4> Category: {this.state.QuizCategory}</h4>
          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion}  out of ${
            this.props.quiz.length - 1
          } remaining `}</span>
          {options.map((option) => (
            <p
              key={option.id}
              className={` MultipleChoice
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < this.props.quiz.length - 1 && (
            <button
              className="btn btn-info take-quiz"
              disabled={this.state.disabled}
              onClick={this.nextQuestion}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === this.props.quiz.length - 1 && (
            <button className="btn btn-info take-quiz" onClick={this.finish}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default UserQuiz;
