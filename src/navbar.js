import React, { Component } from 'react';
import Demo  from './components/budget_section/side-bar/hamburger';
import "./styles.css";

class Navbar extends Component {
    render() {
        return(
            <div className="navbar navbar-light bg-dark">
                <div className="container">
                    <h2 className="text-white">Budget Tracker App</h2>
                </div>
            </div>
        )
    }
}

const menus = {
    slide: {buttonText: 'Slide', items: 1},
    stack: {buttonText: 'Stack', items: 1},
    elastic: {buttonText: 'Elastic', items: 1},
    bubble: {buttonText: 'Bubble', items: 1},
    push: {buttonText: 'Push', items: 1},
    pushRotate: {buttonText: 'Push Rotate', items: 2},
    scaleDown: {buttonText: 'Scale Down', items: 2},
    scaleRotate: {buttonText: 'Scale Rotate', items: 2},
    fallDown: {buttonText: 'Fall Down', items: 2},
    reveal: {buttonText: 'Reveal', items: 1}
  };

export default Navbar