import React, { Component } from "react";
import { CreateQuestions } from "../components/createQuestion";

class UserQuiz extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const myQuiz = [
      {
        id: 0,
        question: this.props.quiz[0],
        options: [
          this.props.quiz[1],
          this.props.quiz[2],
          this.props.quiz[3],
          this.props.quiz[4],
        ],
        answer: this.props.quiz[1],
      },
    ];
    return myQuiz;
  }
}

class DisplayQuiz extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    disabled: true,
    isEnd: false,
  };

  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: myQuiz[this.state.currentQuestion].question,
        answer: myQuiz[this.state.currentQuestion].answer,
        options: myQuiz[this.state.currentQuestion].options,
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestion = () => {
    const { myAnswer, answer, score } = this.state;
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
          questions: myQuiz[this.state.currentQuestion].question,
          options: myQuiz[this.state.currentQuestion].options,
          answer: myQuiz[this.state.currentQuestion].answer,
        };
      });
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finish = () => {
    if (this.state.currentQuestion === myQuiz.length - 1) {
      this.setState({
        isEnd: true,
      });
    }
  };
  render() {
    const myQuiz = [
      {
        id: 0,
        question: this.props.quiz[0],
        options: [
          this.props.quiz[1],
          this.props.quiz[2],
          this.props.quiz[3],
          this.props.quiz[4],
        ],
        answer: this.props.quiz[1],
      },
    ];

    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="welcome">
          <h3>The correct answer's for the questions was </h3>
          <ul>
            {myQuiz.map((item, index) => (
              <li className="finishMultipleChoice" key={index}>
                {item.answer}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="welcome">
          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion}  out of ${
            myQuiz.length - 1
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
          {currentQuestion < myQuiz.length - 1 && (
            <button
              className="btn btn-info take-quiz"
              disabled={this.state.disabled}
              onClick={this.nextQuestion}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === myQuiz.length - 1 && (
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
