import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState('home')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="navbar__customer">
            <div className="navbar__wrap">
                {/* navbar logo */}
                <div onClick={() => navigate('/')} className="navbar__logo">
                    <img
                        src={assets.logoBranch}
                        alt="logo"
                        className="navbar__logo-branch"
                    />
                </div>

                {/* navbar menu */}
                <ul className="navbar__menu">
                    <li
                        onClick={() => setMenu('home')}
                        className={menu === 'home' ? 'navbar__active' : ''}
                    >
                        <a href="/">home</a>
                    </li>
                    <li
                        onClick={() => setMenu('menu')}
                        className={menu === 'menu' ? 'navbar__active' : ''}
                    >
                        <a href="#menu">menu</a>
                    </li>
                    <li
                        onClick={() => setMenu('product')}
                        className={menu === 'product' ? 'navbar__active' : ''}
                    >
                        <a href="#product">product</a>
                    </li>
                    <li
                        onClick={() => setMenu('download')}
                        className={menu === 'download' ? 'navbar__active' : ''}
                    >
                        <a href="#download">download</a>
                    </li>
                </ul>

                {/* navbar search - cart - login */}
                <div className="navbav__right">

                    {/* navbar search */}
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

                    {/* navbar cart */}
                    <div onClick={() => navigate('/cart')} className="navbav__right-cart">
                        <i className="cart__icon">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </i>
                        <span className="cart__number-product">3</span>
                    </div>

                    {/* navbar login */}
                    <div className="navbav__right-user">
                        {isAuthenticated ? (
                            <>
                                <img
                                    src={assets.userImg}
                                    alt=""
                                    className="user__img"
                                />
                                <span className="user__name">quốc dinh</span>

                                {/* login list drop down */}
                                <div className="user__select">
                                    <ul className="user__select-list">
                                        <li
                                            onClick={() => navigate('/user')}
                                            className="user__select-item"
                                        >
                                            Tài khoản của tôi
                                        </li>
                                        <li onClick={()=> navigate('/order')} className="user__select-item">Đơn mua</li>
                                        <li onClick={()=> setIsAuthenticated(false)} className="user__select-item">Đăng xuất</li>
                                    </ul>
                                </div>

                               
                            </>
                        ) : (
                            <>
                                 <img src={assets.user_img} alt="" className="user__img" />
                                 <span onClick={()=> setIsAuthenticated(true)} className="user__name">Đăng nhập</span>
                            </>
                        )}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
