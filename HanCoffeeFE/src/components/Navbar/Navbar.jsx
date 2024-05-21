import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className="navbar__wrap">

        <div className="navbar__logo">
          <Link to={'/'}><img src={assets.logoBranch} alt="logo" className="logo-branch" /> </Link>
        </div>

        <ul className="navbar__menu">
          <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
            <a href="/">home</a>
          </li>
          <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
            <a href="#menu">menu</a>
          </li>
          <li onClick={() => setMenu("product")} className={menu === "product" ? "active" : ""}>
            <a href="#product">product</a>
          </li>
          <li onClick={() => setMenu("download")} className={menu === "download" ? "active" : ""}>
            <a href="#download">download</a>
          </li>
        </ul>

        <div className="navbav__right">
          <div className="navbav__right-search">
            <input type="text" className='search__input' placeholder='Tìm sản phẩm' />
            <div className="search__history">
              <h3 class="search__history-heading">Lịch sử tìm kiếm</h3>
              <ul class="search__history-list">
                <li class="search__history-item">
                  <a href="">Milk Coffe</a>
                </li>
                <li class="search__history-item">
                  <a href="">Capuchino</a>
                </li>
              </ul>
            </div>
            <i className="search__icon">
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
          <div onClick={()=> navigate('/cart')} className="navbav__right-cart">
            <i className='cart__icon'>
              <FontAwesomeIcon icon={faCartShopping} />
            </i>
            <span className="cart__number-product">3</span>
          </div>

          <div className="navbav__right-user">
            <img src={assets.userImg} alt="" className="use__img" />
            <span className="user__name">quốc dinh</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
