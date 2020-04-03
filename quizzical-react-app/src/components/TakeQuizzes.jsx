import FadeIn from "react-fade-in";
import React, { Component } from "react";
import FoodQuiz from "../components/FoodQuiz";
import AnimalQuiz from "../components/AnimalQuiz";
import  GeographyQuiz  from "../components/GeographyQuiz";

class TakeQuiz extends Component {
    state = {
        message: "Take a Quiz",
        renderView: 0
        
    };
    constructor() {
        super();
        this.foodQuiz = this.foodQuiz.bind(this);
        this.animalQuiz = this.animalQuiz.bind(this);
        this.geographyQuiz = this.geographyQuiz.bind(this);
    }

    foodQuiz() {
        this.setState({
            renderView: 1
        });
        this.render();
    }
    animalQuiz() {
        this.setState({
            renderView: 2
        });
        this.render();
    }
    geographyQuiz() {
        this.setState({
            renderView: 3
        });
        this.render();
    }
    render() {
        if (this.state.renderView === 1) {
            return <FoodQuiz />

        }
        else if (this.state.renderView === 2) {
            return <AnimalQuiz />

        }
        else if (this.state.renderView === 3) {
            return <GeographyQuiz />

        }
        else {
            return (
                <FadeIn>
                    <React.Fragment>
                        <h1 className="welcome">{this.state.message}</h1>
                        <div className="row">
                            <div className="Cards">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Food Quiz</h5>
                                        <p className="card-text">Think you know your tacos from your taquitos? Put your food knowledge to the test with the Quizzical Food quiz on international dishes and cuisines.</p>
                                        <button onClick={this.foodQuiz} className="btn btn-primary">Take Quiz</button>
                                    </div>
                                </div>
                            </div>
                            <div className="Cards">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Geography Quiz</h5>
                                        <p className="card-text">Think you know geography? We'll see about that. Settle in with our quiz and take a trip around the world, all without leaving the house.Test yourself with his extra-tricky geo-quiz!</p>
                                        <button onClick={this.geographyQuiz} className="btn btn-primary">Take Quiz</button>
                                    </div>
                                </div>
                            </div>
                            <div className="Cards">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Personal Quiz</h5>
                                        <p className="card-text">Did you make a quiz? Awesome, try out quizzes you created for fun! Quizzes give you the chance to reveal something interesting or surprising about each of your readers that will make them want to share their result with their peers. </p>
                                        <button className="btn btn-primary">Take Quiz</button>
                                    </div>
                                </div>
                            </div>
                            <div className="Cards">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Animal Quiz</h5>
                                        <p className="card-text">There are thousands of creatures in our world and thousands of facts about each and every one of them.
                                        Test your knowledge about animals by taking this quiz. </p>
                                        <button onClick={this.animalQuiz}className="btn btn-primary">Take Quiz</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </FadeIn>
            );
        }
    }
}
    export default TakeQuiz;