import React from "react";
import { geographyQuiz } from "../components/quizInfo";


class GeographyQuiz extends React.Component {
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
                questions: geographyQuiz[this.state.currentQuestion].question,
                answer: geographyQuiz[this.state.currentQuestion].answer,
                options: geographyQuiz[this.state.currentQuestion].options
            };
        });
    };

    componentDidMount() {
        this.loadQuizData();
    }
    nextQuestionHandler = () => {
        
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
                    questions: geographyQuiz[this.state.currentQuestion].question,
                    options: geographyQuiz[this.state.currentQuestion].options,
                    answer: geographyQuiz[this.state.currentQuestion].answer
                };
            });
        }
    }
   
    checkAnswer = answer => {    //check answer
        this.setState({ myAnswer: answer, disabled: false });
    };
    finish = () => {
        if (this.state.currentQuestion === geographyQuiz.length - 1) {
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
                        {geographyQuiz.map((item, index) => (
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
                    <span>{`Questions ${currentQuestion}  out of ${geographyQuiz.length -
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
                    {currentQuestion < geographyQuiz.length - 1 && (
                        <button
                            className="btn btn-info take-quiz"
                            disabled={this.state.disabled}
                            onClick={this.nextQuestionHandler}
                        >
                            Next
            </button>
                    )}
                    {/* //adding a finish button */}
                    {currentQuestion === geographyQuiz.length - 1 && (
                        <button className="btn btn-info take-quiz" onClick={this.finish}>
                            Finish
            </button>
                    )}
                </div>
            );
        }
    }
}

export default GeographyQuiz;





