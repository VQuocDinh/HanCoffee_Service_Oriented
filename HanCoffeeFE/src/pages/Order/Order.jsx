// Order.jsx
import React from 'react';
import './Order.scss';
import {assets} from '../../assets/assets'
 
const Order = () => {
  return (
    <div className='order'>
      <div className="order__status">
        <ul className="order__status-list">
          <li className="order__status-item">Chờ xác nhận</li>
          <li className="order__status-item">Đang vận chuyển</li>
          <li className="order__status-item">Đã giao</li>
          <li className="order__status-item">Đã hủy</li>
        </ul>
        <hr />
      </div>

      <div className="order__content">
        <div className="order__item">
          <div className="order__item-header">
            <img className="order__item-img" src={assets.productImg} alt="Product"/>
            <div className="order__item-infor">
              <h4 className="order__item-name">Capuchino</h4>
              <div className="order__item-size">
                <span>Size</span>
                <span>L</span>
              </div>
              <div className="order__item-quantity">
                <span>x</span>
                <span>1</span>
              </div>
            </div>
            <div className="order__item-price">$2</div>
          </div>
          <hr />

          <div className="order__item-footer">
            <div className="order__total">
              <span>Thành tiền</span>
              <span>$2</span>
            </div>
            <button className="order__cancel-button">Hủy đơn</button>
          </div>
        </div>

        <div className="order__item">
          <div className="order__item-header">
            <img className="order__item-img" src={assets.productImg} alt="Product"/>
            <div className="order__item-infor">
              <h4 className="order__item-name">Capuchino</h4>
              <div className="order__item-size">
                <span>Size</span>
                <span>L</span>
              </div>
              <div className="order__item-quantity">
                <span>x</span>
                <span>1</span>
              </div>
            </div>
            <div className="order__item-price">$2</div>
          </div>
          <hr />

          <div className="order__item-footer">
            <div className="order__total">
              <span>Thành tiền</span>
              <span>$2</span>
            </div>
            <button className="order__cancel-button">Hủy đơn</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
