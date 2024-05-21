import React, { useContext } from 'react'
import './Product.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Product = () => {
  const url = "http://localhost:8888"

  const { product_list } = useContext(StoreContext)
  return (

    <div className='product' id='product'>
      <h1 className='product__heading'>reach for your favorite beverage</h1>


      <div className="product__list">
        {product_list.map((item) => {
          return (
            <Link to={'/productDetail'}>
              <div className="product__list-item">
                <img src={url + "/images/" + item.image} alt="" className="item-img" />
                <div className="item__content">
                  <div className="item__content-name">
                    <p>
                      {item.name}
                    </p>
                  </div>
                  <div className="item__content-price">
                    <span>
                      ${item.price}
                    </span>
                  </div>


                </div>

                <div className="item__content-add-cart">
                  <FontAwesomeIcon icon={faPlusCircle} />

                </div>
              </div>
            </Link>

          )
        })}
      </div>
    </div>
  )
}

export default Product
