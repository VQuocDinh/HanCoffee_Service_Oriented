import React, { useState } from 'react'
import './NavbarCustomer.css'
import { assets } from '../../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'

const NavbarCustomer = () => {
    const [menu, setMenu] = useState('menu')

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <a href="#">
                    <img
                        src={assets.logoBranch}
                        alt="logo"
                        className="logo-branch"
                    />
                </a>
            </div>

            <ul className="navbar__menu">
                <li
                    onClick={() => setMenu('home')}
                    className={menu === 'home' ? 'active' : ''}
                >
                    <a href="#">home</a>
                </li>
                <li
                    onClick={() => setMenu('menu')}
                    className={menu === 'menu' ? 'active' : ''}
                >
                    <a href="#">menu</a>
                </li>
                <li
                    onClick={() => setMenu('blog')}
                    className={menu === 'blog' ? 'active' : ''}
                >
                    <a href="#">blog</a>
                </li>
                <li
                    onClick={() => setMenu('contact-us')}
                    className={menu === 'contact-us' ? 'active' : ''}
                >
                    <a href="#">contact us</a>
                </li>
            </ul>

            <div className="navbav__right">
                <div className="navbav__right-search">
                    <input
                        type="text"
                        className="search__input"
                        placeholder="Tìm sản phẩm"
                    />
                    <div className="search__history">
                        <h3 class="search__history-heading">
                            Lịch sử tìm kiếm
                        </h3>
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

                <div className="navbav__right-cart">
                    <i className="cart__icon">
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
    )
}

export default NavbarCustomer
