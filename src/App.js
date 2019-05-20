import React, { Component } from 'react';
import Navbar from './navbar';
import Budget from './components/budget_section/budget/Budget';
import { BudgetProvider } from './store';
import './App.css';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faStarOfLife, faBell, faEnvelopeOpen, faComment, faChartBar, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Demo  from './components/budget_section/side-bar/hamburger';
import "./styles.css";

library.add(faCheckSquare, faCoffee, faStarOfLife, faBell, faEnvelopeOpen, faComment, faChartBar, faNewspaper)

const budgetSectionTitleStyle = {
    fontSize: "40px",
    marginTop: "20px",
    marginBottom: "-40px",
    fontFamily: "serif",
    fontStyle: "italic"
}
class App extends Component {

  render() {
    return (
        <BudgetProvider>
            <div class="parent">
                <div className="column">
                    <Demo menus={menus}/>
                </div>
                <div className="column" style={budgetSectionTitleStyle}>Budget Section</div>
            </div>
            <div className="App" id="page-wrap">
            {/* my-5 is margin-top and margin-bottom 5px */}
                    <div className="container" style={{marginTop: "100px"}}> 
                        <Budget />
                    </div>
            </div>
      </BudgetProvider>
    );
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
export default App;

