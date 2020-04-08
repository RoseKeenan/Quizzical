import React, { Component } from "react";
import FadeIn from "react-fade-in";
import UserQuiz from "../components/UserQuiz";

class CreateQuestions extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      renderView: 0,

      QuestionOne: "",
      QuestionOneCorrect: "",
      QuestionOneWrong1: "",
      QuestionOneWrong2: "",
      QuestionOneWrong3: "",

      QuestionTwo: "",
      QuestionTwoCorrect: "",
      QuestionTwoWrong1: "",
      QuestionTwoWrong2: "",
      QuestionTwoWrong3: "",

      QuestionThree: "",
      QuestionThreeCorrect: "",
      QuestionThreeWrong1: "",
      QuestionThreeWrong2: "",
      QuestionThreeWrong3: "",

      QuestionFour: "",
      QuestionFourCorrect: "",
      QuestionFourWrong1: "",
      QuestionFourWrong2: "",
      QuestionFourWrong3: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit() {
    this.setState({
      renderView: 1,
    });
    this.render();
  }

  render() {
    if (this.state.renderView === 1) {
      const quiz = [
        this.state.QuestionOne,
        this.state.QuestionOneWrong1,
        this.state.QuestionOneWrong2,
        this.state.QuestionOneWrong3,
        this.state.QuestionOneCorrect,

        this.state.QuestionTwo,
        this.state.QuestionTwoWrong1,
        this.state.QuestionTwoWrong2,
        this.state.QuestionTwoWrong3,
        this.state.QuestionTwoCorrect,
      ];
      return <UserQuiz quiz={quiz} />;
    } else {
      return (
        <FadeIn>
          <React.Fragment>
            <div className="col text-center">
              <h1 className="welcome">CREATE A QUIZ</h1>
              <br></br>
              <form>
                <div className="quizQuestions">
                  <label htmlFor="quizTitle">Quiz Title:</label>
                  <input
                    type="title"
                    className="form-control input"
                    id="q1"
                    placeholder="Type your Quiz Title"
                  ></input>
                  <hr></hr>
                  <p className="category-header">
                    Type your questions and answers below:
                  </p>

                  <h2>Question One:</h2>
                  <input
                    type="title"
                    className="form-control questions"
                    id=""
                    placeholder="Type your question"
                    name="QuestionOne"
                    value={this.state.QuestionOne}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type the CORRECT answer"
                    name="QuestionOneCorrect"
                    value={this.state.QuestionOneCorrect}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionOneWrong1"
                    value={this.state.QuestionOneWrong1}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionOneWrong2"
                    value={this.state.QuestionOneWrong2}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionOneWrong3"
                    value={this.state.QuestionOneWrong3}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <h2>Question Two:</h2>
                  <input
                    type="title"
                    className="form-control questions"
                    id=""
                    placeholder="Type your question"
                    name="QuestionTwo"
                    value={this.state.QuestionTwo}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type the CORRECT answer"
                    name="QuestionTwoCorrect"
                    value={this.state.QuestionTwoCorrect}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionTwoWrong1"
                    value={this.state.QuestionTwoWrong1}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionTwoWrong2"
                    value={this.state.QuestionTwoWrong2}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionTwoWrong3"
                    value={this.state.QuestionTwoWrong3}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <h2>Question Three:</h2>
                  <input
                    type="title"
                    className="form-control questions"
                    id=""
                    placeholder="Type your question"
                    name="QuestionThree"
                    value={this.state.QuestionThree}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type the CORRECT answer"
                    name="QuestionThreeCorrect"
                    value={this.state.QuestionThreeCorrect}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionThreeWrong1"
                    value={this.state.QuestionThreeWrong1}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionThreeWrong2"
                    value={this.state.QuestionThreeWrong2}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionThreeWrong3"
                    value={this.state.QuestionThreeWrong3}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <h2>Question Four:</h2>
                  <input
                    type="title"
                    className="form-control questions"
                    id=""
                    placeholder="Type your question"
                    name="QuestionFour"
                    value={this.state.QuestionFour}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type the CORRECT answer"
                    name="QuestionFourCorrect"
                    value={this.state.QuestionFourCorrect}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionFourWrong1"
                    value={this.state.QuestionFourWrong1}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionFourWrong2"
                    value={this.state.QuestionFourWrong2}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>

                  <input
                    type="title"
                    className="form-control text-center answers"
                    id=""
                    placeholder="Type a WRONG answer"
                    name="QuestionFourWrong3"
                    value={this.state.QuestionFourWrong3}
                    onChange={this.handleChange}
                  ></input>
                  <br></br>
                </div>
              </form>
              <div className="col text-center">
                <button
                  onClick={this.onSubmit}
                  className="btn btn-info center-button"
                >
                  Save Quiz
                </button>
              </div>
              <div>
                <br></br>
              </div>
              <h3>Question One: {this.state.QuestionOne}</h3>
              <h3>Question Two: {this.state.QuestionTwo}</h3>
              <h3>Question Three: {this.state.QuestionThree}</h3>
              <h3>Question Four: {this.state.QuestionFour}</h3>
            </div>
          </React.Fragment>
        </FadeIn>
      );
    }
  }
}

export default CreateQuestions;
