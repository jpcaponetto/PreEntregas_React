import React from 'react';
import cart from '../CartWidget/cart.svg';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cartwidget-img'>
     <img src={cart} alt='cart-img' className='cart-img'/>
    </div>
  )
}

export default CartWidget