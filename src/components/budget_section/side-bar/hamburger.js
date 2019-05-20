
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class Demo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
      side: 'left'
    };
  }

  changeMenu(menu) {
    this.setState({currentMenu: menu});
  }

  changeSide(side) {
    this.setState({side});
  }

  getItems() {
    let items;

    switch (this.props.menus[this.state.currentMenu].items) {
      case 1:
        items = [
            items = [
                    <a key="0" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="star-of-life"/><span> Favorites123</span></a>,
                    <a key="1" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="bell"/><span> Alerts</span></a>,
                    <a key="2" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="envelope-open"/><span> Messages</span></a>,
                    <a key="3" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="comment"/><span> Comments</span></a>,
                    <a key="4" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="chart-bar"/>><span> Analytics</span></a>,
                    <a key="5" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="newspaper"/><span> Reading List</span></a>
            ]
        ];
        break;
      
      default:
        items = [
            items = [
                <a key="0" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="star-of-life"/><span> Favorites</span></a>,
                <a key="1" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="bell"/><span> Alerts</span></a>,
                <a key="2" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="envelope-open"/><span> Messages</span></a>,
                <a key="3" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="comment"/><span> Comments</span></a>,
                <a key="4" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="chart-bar"/>><span> Analytics</span></a>,
                <a key="5" href="https://react.semantic-ui.com/"><FontAwesomeIcon icon="newspaper"/><span> Reading List</span></a>
            ]
        ];
    }

    return items;
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];

    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={this.state.side === 'right'}>
          {this.getItems()}
        </Menu>
      </MenuWrap>
    );
  }

  render() {
    const buttons = Object.keys(this.props.menus).map((menu) => {
      return (
        <a key={menu}
          className={classNames({'current-demo': menu === this.state.currentMenu})}
          onClick={this.changeMenu.bind(this, menu)}>
          {this.props.menus[menu].buttonText}
        </a>
      );
    });

    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMenu()}
      </div>
    );
  }
}

export default Demo

