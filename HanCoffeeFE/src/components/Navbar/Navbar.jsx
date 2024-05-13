import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo_branch} alt="logo" className="logo-branch" />
        <ul className="navbar-menu">
            <li>home</li>
            <li>menu</li>
            <li>blog</li>
            <li>contact us</li>
        </ul>
    </div>
  )
}

export default Navbar
