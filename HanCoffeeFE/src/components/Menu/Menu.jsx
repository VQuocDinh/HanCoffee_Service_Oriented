import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = () => {

  return (
    <div className='menu' id='menu'>
      <h1 className='menu__heading'>explore our categorys</h1>
      <p className='menu__desc'>
        Embark on a journey through our curated selection of charming cafés. Each spot offers a unique ambiance and exquisite coffee blends. It's more than a cup of coffee; it's a space for connection, creativity, and cherished moments.
      </p>
      <div className="menu__list">
        {menu_list.map((item, index) => {
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
