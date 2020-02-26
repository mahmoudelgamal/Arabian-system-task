import React from 'react'
import TravelIcon from '../../icons/TravelIcon'
import ExploreIcon from '../../icons/ExploreIcon'
import SavedIcon from '../../icons/SavedIcon'
import ChatIcon from '../../icons/ChatIcon'
import ProfileIcon from '../../icons/ProfileIcon'

function Navigation() {
  return (
    <ul className="navigation__nav">
    <li className="navigation__nav--item active-link">
      <TravelIcon className="icon"/>
      <span>traveling</span>
    </li>
    <li className="navigation__nav--item">
      <ExploreIcon className="icon"/>
      <span>explore</span>
    </li>
    <li className="navigation__nav--item">
      <SavedIcon className="icon"/>
      <span>saved</span>
    </li>
    <li className="navigation__nav--item">
      <ChatIcon className="icon"/>
      <span>chat</span>
    </li>
    <li className="navigation__nav--item">
      <ProfileIcon className="icon"/>
      <span>profile</span>
    </li>
  </ul>

  )
}

export default Navigation
