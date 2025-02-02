import { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.svg'
function Navbar() {

  return (
    <div className='navbar'>
        <img src={logo} alt='logo'/>
        <ul className="nav-menu">
            <li className="items">Home</li>
            <li className="items">About Me</li>
            <li className="items">Services</li>
            <li className="items">Portfolio</li>
            <li className="items">contact</li>
        </ul>
        <div className="nav-conact">Contact with Me</div>
    </div>
  )
}

export default Navbar;
