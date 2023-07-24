import React, { useContext } from 'react';
import cart from '../CartWidget/cart.svg';
import './CartWidget.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <div>
    <Link className="menu-link" to={"/carrito"}>
      <img src={cart} alt="cart" /> 
      <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget