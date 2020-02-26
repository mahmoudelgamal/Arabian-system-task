import React, { Component } from 'react'
import './navbar.scss';
import MenuNav from './Menu';
import Navigation from './Navigation';
import NavigationToolBox from './NavigationToolBox';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navigation">
          <div className="navigation__container">
            <MenuNav/>
            <Navigation/>
            <span className="navigation__small-brand-name">travelling</span>
            <NavigationToolBox />
          </div>
        </nav>
      </>
    )
  }
}
