import React from "react";
import { animalQuiz } from "../components/quizInfo";


class AnimalQuiz extends React.Component {
    state = {
        currentQuestion: 0,
        myAnswer: null,
        options: [],
        score: 0,
        disabled: true,
        isEnd: false
    };

    loadQuizData = () => {
        
        this.setState(() => {
            return {
                questions: animalQuiz[this.state.currentQuestion].question,
                answer: animalQuiz[this.state.currentQuestion].answer,
                options: animalQuiz[this.state.currentQuestion].options
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
                score: score + 100
            });
        }
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
                    questions: animalQuiz[this.state.currentQuestion].question,
                    options: animalQuiz[this.state.currentQuestion].options,
                    answer: animalQuiz[this.state.currentQuestion].answer
                };
            });
        }
    }
    //check answer
    checkAnswer = answer => {
        this.setState({ myAnswer: answer, disabled: false });
    };
    finish = () => {
        if (this.state.currentQuestion === animalQuiz.length - 1) {
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
                    <h3>Game Over your Final score is {this.state.score} out of 400 points </h3>
                    <h3>The correct answer's for the questions was  </h3>
                    <ul>
                        {animalQuiz.map((item, index) => (
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
                    <span>{`Questions ${currentQuestion}  out of ${animalQuiz.length -
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
                    {currentQuestion < animalQuiz.length - 1 && (
                        <button
                            className="btn btn-info take-quiz"
                            disabled={this.state.disabled}
                            onClick={this.nextQuestion}
                        >
                            Next
            </button>
                    )}
                    {/* //adding a finish button */}
                    {currentQuestion === animalQuiz.length - 1 && (
                        <button className="btn btn-info take-quiz" onClick={this.finish}>
                            Finish
            </button>
                    )}
                </div>
            );
        }
    }
}

export default AnimalQuiz;






