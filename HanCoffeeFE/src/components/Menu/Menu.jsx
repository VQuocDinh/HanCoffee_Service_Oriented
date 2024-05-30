import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = () => {
  return (
    <div className='menu'>
      <h1>Menu for you</h1>
      <div className="menu__list">
        {menu_list.map((item,index)=>{
          return (
            <div key={index} className="menu__list-item">
              <img src={item.menu_image} alt="Menu image" className="menu__list-item-img" />
              <h3 className="menu__list-item-name">{item.menu_name}</h3>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Menu
