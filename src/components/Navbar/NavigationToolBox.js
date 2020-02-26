import React from 'react'
import SearchIcon from '../../icons/SearchIcon'
import NotficationIcon from '../../icons/NotficationIcon'

function NavigationToolBox() {
  return (
    <ul className="navigation__toolbox">
      <li className="navigation__nav--item">
          <NotficationIcon className="tool-icon"/>
          <span className="notfication__count"></span>
      </li>
      <li className="navigation__nav--item">
        <SearchIcon className="tool-icon"/>
      </li>
  </ul>
  )
}

export default NavigationToolBox
