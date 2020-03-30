import React, { Component } from "react";
import FadeIn from "react-fade-in";


class CreateQuestions extends Component {
    state = {
        message: "Create Questions for your Quiz",
        renderView: 0
    };
    render() {
        if (this.state.renderView === 1) {
            // return <Category />;
        } else {
            return (
                <FadeIn>
                <React.Fragment>
                <h1 className="welcome">{this.state.message}</h1><br></br>
                <form>
                    <div class="quizQuestions">
                        <label for="quizTitle">Quiz Title:</label>
                        <input type="title" class="form-control" id="input" placeholder="Type your Quiz Title">
                            </input>
                                <hr></hr>
                                <p className="category-header">Type your questions and answers below:</p>
                            <label id="questions" for="quizTitle">1.</label>
                            <input type="title" class="form-control" id="answers" placeholder="Type your question">
                            </input><br></br>
                            <div class="multiple-choice">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <input  type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                       </div>
                                    </div>
                                <input type="text" class="form-control" aria-label="Text input with checkbox"placeholder="Correct answer">
                                    </input>
                                    
                                </div>
                                </div>
                        
                        <br></br>
                        <div class="multiple-choice">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <input type="checkbox" aria-label="Checkbox for following text input">
                                        </input>
                                    </div>
                                </div>
                                <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Wrong answer ">
                                </input>

                            </div>
                            </div>
                            <br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder=" Wrong answer ">
                                    </input>

                                </div>
                            </div>
                            <br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder=" Wrong answer">
                                    </input>

                                </div>
                            </div>
                        <br></br>
                        <label id="questions" for="quizTitle">2.</label>
                                <input type="title" class="form-control" id="answers" placeholder="Type your question">
                            </input><br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Correct answer">
                                    </input>

                                </div>
                            </div>

                            <br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Wrong answer ">
                                    </input>

                                </div>
                            </div>
                            <br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder=" Wrong answer ">
                                    </input>

                                </div>
                            </div>
                            <br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder=" Wrong answer">
                                    </input>

                                </div>
                            </div>
                            <br></br>
                            <label id="questions" for="quizTitle">3.</label>
                                <input type="title" class="form-control" id="answers" placeholder="Type your question">
                            </input><br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Correct answer">
                                    </input>

                                </div>
                            </div>

                            <br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Wrong answer ">
                                    </input>

                                </div>
                            </div>
                            <br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder=" Wrong answer ">
                                    </input>

                                </div>
                            </div>
                            <br></br>
                            <div class="multiple-choice">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input">
                                            </input>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder=" Wrong answer">
                                    </input>

                                </div>
                            </div>
                            <br></br>

                    </div>
                    </form>
                    <button className="btn btn-info center-button">Save Quiz</button>
                    <br></br>
                    </React.Fragment>
                    </FadeIn>
                );
          }
    }
  }
        
       
        
        
        export default CreateQuestions;
