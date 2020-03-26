import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
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
        <button className="btn btn-info center-button">OK</button>
      </div>
    );
  }
}

export default Category;
