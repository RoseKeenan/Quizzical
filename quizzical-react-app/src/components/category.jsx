import React, { Component } from "react";
import FadeIn from "react-fade-in";
import {Redirect,Switch, Router,BrowserRouter, Route} from 'react-router-dom';
import CreateQuestions from "../components/createQuestion";
import { browserHistory } from 'react-router';
 


class Category extends Component {
    state = {
        renderView: 0
    };

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.setState({
            renderView: 1
        });
        this.render();
    }
    

    render() {
        if (this.state.renderView === 1) {
            return <CreateQuestions />;
        } else {
            return (
                <FadeIn>
                    <div>
                        <form>
                            <h1 className="category">Create a Quiz</h1>
                            <p className="category-header">Please select a category:</p>

                            <input
                                className="radio-button"
                                type="radio"
                                id="food"
                                name="gender"
                                value="male"
                            ></input>
                            <label className="radio-label" for="food">
                                Food
            </label>
                            <br></br>

                            <input
                                className="radio-button"
                                type="radio"
                                id="animal"
                                name="gender"
                                value="animal"
                            ></input>
                            <label className="radio-label" for="animal">
                                Animal
            </label>
                            <br></br>

                            <input
                                className="radio-button"
                                type="radio"
                                id="geography"
                                name="gender"
                                value="geography"
                            ></input>
                            <label className="radio-label" for="geography">
                                Geography
            </label>
                            <br></br>

                            <input
                                className="radio-button"
                                type="radio"
                                id="personal"
                                name="gender"
                                value="personal"
                            ></input>
                            <label className="radio-label" for="personal">
                                Personal
            </label>
                        </form>
                        <button onClick={this.onSubmit} className="btn btn-info center-button">OK</button>
                    </div>
                </FadeIn>
            );
        }
    
    }
   

  
        }
              
            
          
            export default Category;
