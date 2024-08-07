import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <h3 className="logo">Elviano</h3>
    <nav className="nav">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Services</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
        </ul>
    </nav>
    <img className="menu" src="icons/burger_menu.png" />
</header>
  )
}

export default Header