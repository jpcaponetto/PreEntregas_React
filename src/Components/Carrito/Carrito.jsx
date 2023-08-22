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
      <h1 className='main-title text-center'>Carrito</h1>
      {
        carrito.map((prod) => (
          <div key={prod.id}>
            <div className='container card' style={{ width: '18rem' }}>
              <div className='row card-body'>
          <h3> {prod.titulo} </h3>
          <img src={prod.imagen} alt={prod.titulo} className='card-img-top' />
          <p>Precio Unitario: ${prod.precio} </p>
          <p>Precio Total: ${prod.precio * prod.cantidad}</p>
          <p>Cant: {prod.cantidad}</p>
          <br />
          <button className='agregar-al-carrito' onClick={() => eliminarProductoDelCarrito(prod.id)}>
            Eliminar producto del carrito 
          </button>
          </div>
          </div>
          </div>
        
        ))
      } 
      
      {
        carrito.length > 0 ?  
        <>
      <h2 className='text-center'>Total neto: ${precioTotal()}</h2>
      <button className='agregar-al-carrito justify-content-center' onClick={handleVaciar}>Vaciar Carrito</button>
       <Link to="/checkout" className='agregar-al-carrito text-center'>Finalizar compra </Link>
        </> :
            <h2>El Carrito está vacio</h2>
      }


    </div>
  )
}

export default Carrito



