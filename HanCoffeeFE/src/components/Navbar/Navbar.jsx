import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={assets.logo_branch} alt="" className="logo-branch" />
            <img src={assets.profile_image} alt="" className="profile" />
            {/* <img src={assets.notification_icon} alt="" className="notification" /> */}
        </div>
    )
}

export default Navbar
