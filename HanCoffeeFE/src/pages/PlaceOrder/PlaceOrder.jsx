import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
const Order = () => {
  const navigate = useNavigate();
  const { getTotalCartAmout, url } = useContext(StoreContext)

  const placeOrder = async () => {
    let orderData ={
      totalPrice: getTotalCartAmout() + 20000

    }
    let response = await axios.post(url+"/api/order/place", orderData, {header: {token}})
    if (response.data.success) {
      console.log('Success')
    }
  }
  return (
    <div className='order'>
      <div className="order__left">
        <div className="order__left-delivery">
          <h2 className="order__left-delivery-title">Delivery Information</h2>
          <form className="order__left-delivery-type">
            <input className="delivery__name" placeholder='Name' />
            <input className="delivery__phone" placeholder='Phone' />
            <input className="delivery__address" placeholder='Address' />
          </form>
        </div>

        <div className="order__left-pay">
          <h2 className="order__left-pay-title">Payment Methods</h2>
          <div className="order__left-pay-list">
            <div className="order__left-pay-list-item">
              <input type="radio" />
              <label htmlFor="">Tiền mặt</label>
            </div>

            <div className="order__left-pay-list-item">
              <input type="radio" />
              <label htmlFor="">ZaloPay</label>
            </div>

            <div className="order__left-pay-list-item">
              <input type="radio" />
              <label htmlFor="">MoMo</label>
            </div>

            <div className="order__left-pay-list-item">
              <input type="radio" />
              <label htmlFor="">Ngân hàng</label>
            </div>
          </div>
        </div>
      </div>

      <div className="order__right">
        <div className="order__right-product">
          <h2>Selected Products</h2>
          <div className="order__right-product-body">
            <div className="order__right-product-list">
              <div className="order__right-product-list-item">
                <span>2 x </span><p>Capuchino</p>
                <span>M</span>
                <span>$2</span>
              </div>

              <div className="order__right-product-list-item">
                <span>2 x </span><p>Capuchino</p>
                <span>M</span>
                <span>$2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order__right-price">
          <div className="order__right-price-delivery">
            <span>Delivery charges</span><span>20.000 VND</span>
          </div>
        </div>

        <div className="order__right-total">
          <div className="order__right-total-left">
            <span>Total </span><span>{getTotalCartAmout() + 20000}</span>
          </div>

          <button onClick={() => navigate('/order')} className='order__right-total-btn'>Order</button>
        </div>
      </div>
    </div>
  )
}

export default Order
