import React, { Component } from "react";
import FadeIn from "react-fade-in";
import {
  Redirect,
  Switch,
  Router,
  BrowserRouter,
  Route,
} from "react-router-dom";
import CreateQuestions from "../components/createQuestion";
import { browserHistory } from "react-router";

class Category extends Component {
  state = {
      renderView: 0,
      QuizCategory: ''
      
  };

  constructor() {
    super();
      this.onSubmit = this.onSubmit.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(event) {
        this.setState({
            QuizCategory: event.target.value
        });
    }


  onSubmit() {
    this.setState({
      renderView: 1,
    });
    this.render();
  }

    render() {
    const Category = { QuizCategory: this.state.QuizCategory}
    if (this.state.renderView === 1) {
        return <CreateQuestions Category={Category} />;
    } else {
      return (
        <FadeIn>
          <div className="center">
            <form>
              <h1 className="category">Create a Quiz</h1>
              <p className="category-header">Please select a category:</p>

              <input
                checked={this.state.QuizCategory === 'food'}
                onChange={this.handleOptionChange}
                className="radio-button"
                type="radio"
                id="food"
                name="gender"
                value="food"
              ></input>
              <label className="radio-label" htmlFor="food">
                Food
              </label>
              <br></br>

              <input
                checked={this.state.QuizCategory === 'animal'}
                onChange={this.handleOptionChange}
                className="radio-button"
                type="radio"
                id="animal"
                name="gender"
                value="animal"
              ></input>
              <label className="radio-label" htmlFor="animal">
                Animal
              </label>
              <br></br>

              <input
                checked={this.state.QuizCategory === 'geography'}
                onChange={this.handleOptionChange}
                className="radio-button"
                type="radio"
                id="geography"
                name="gender"
                value="geography"
              ></input>
              <label className="radio-label" htmlFor="geography">
                Geography
              </label>
              <br></br>

              <input
                checked={this.state.QuizCategory === 'personal'}
                onChange={this.handleOptionChange}
                className="radio-button"
                type="radio"
                id="personal"
                name="gender"
                value="personal"
              ></input>
              <label className="radio-label" htmlFor="personal">
                Personal
              </label>
            </form>
            <div className="col text-center">
              <button
                onClick={this.onSubmit}
                className="btn btn-info center-button"
              >
                CREATE
              </button>
            </div>
          </div>
        </FadeIn>
      );
    }
  }
}

export default Category;
