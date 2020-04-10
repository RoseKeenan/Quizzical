import React, { Component } from "react";
import { CreateQuestions } from "../components/createQuestion";
import { createPublicKey } from "crypto";


class UserQuiz extends Component {
    state = {
        currentQuestion: 0,
        myAnswer: null,
        options: [],
        disabled: true,
        isEnd: false
    };
    
    loadQuizData = () => {

        this.setState(() => {
            return {
                questions: this.props.quiz[this.state.currentQuestion].question,
                answer: this.props.quiz[this.state.currentQuestion].answer,
                options: this.props.quiz[this.state.currentQuestion].options
            };
        });
    };

    componentDidMount() {
        this.loadQuizData();
    }
    nextQuestion = () => {

        const { myAnswer, answer, score } = this.state;
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
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
                    options: this.props.quiz[this.state.currentQuestion].options
                };
            });
        }
    }

    //check answer
    checkAnswer = answer => {
        this.setState({ myAnswer: answer, disabled: false });
    };
    finish = () => {
        if (this.state.currentQuestion === this.props.quiz.length - 1) {
            this.setState({
                isEnd: true
            });
        }
    };
    render() {
        const { options, myAnswer, currentQuestion, isEnd } = this.state;

        if (isEnd) {
            return (
                <div className="welcome">
                    <h3>The correct answer's for the questions was  </h3>
                    <ul>
                        {this.props.quiz.map((item, index) => (
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
                    <span>{`Questions ${currentQuestion}  out of ${this.props.quiz.length -
                        1} remaining `}</span>
                    {options.map(option => (
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