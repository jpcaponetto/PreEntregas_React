import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const  { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>
      {
        carrito.map((prod) => (
          <div key={prod.id}>
          <h3> {prod.titulo} </h3>
          <p>Precio Unitario: ${prod.precio} </p>
          <p>Precio Total: ${prod.precio * prod.cantidad}</p>
          <p>Cant: {prod.cantidad}</p>
          <br />
          </div>
        ))
      } 
      
      {
        carrito.length > 0 ?  
        <>
      <h2>Total neto: ${precioTotal()}</h2>
      <button className='agregar-al-carrito' onClick={handleVaciar}>Vaciar</button>
       <Link to="/checkout" className='agregar-al-carrito'>Finalizar compra </Link>
        </> :
            <h2>El Carrito está vacio</h2>
      }


    </div>
  )
}

export default Carrito