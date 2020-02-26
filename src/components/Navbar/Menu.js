import React from 'react'
import SideList from '../../icons/SideList'

function MenuNav({className}) {
  return (
    <>
      <div className="navigation__menu">
        <SideList className="menu_icon"/>
        <span>menu</span>
      </div>
    </>
  )
}

export default MenuNav;
