import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const  { carrito, precioTotal, vaciarCarrito, eliminarProductoDelCarrito } = useContext(CartContext);

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
          <img src={prod.imagen} alt={prod.titulo} />
          <p>Precio Unitario: ${prod.precio} </p>
          <p>Precio Total: ${prod.precio * prod.cantidad}</p>
          <p>Cant: {prod.cantidad}</p>
          <br />
          <button className='agregar-al-carrito' onClick={() => eliminarProductoDelCarrito(prod.id)}>
            Eliminar producto del carrito 
          </button>
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



