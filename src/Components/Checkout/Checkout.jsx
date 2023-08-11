import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db  } from '../firebase/config';


const Checkout = () => {
    const [idDelPedido, setIdDelPedido] = useState("");
    const  { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const {register, handleSubmit} = useForm()
    const compra = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal() 
        }
        

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setIdDelPedido(doc.id);
                vaciarCarrito();
            })
    }

    if(idDelPedido){
        return (
            <div className="container">
                <h1 className='main-title'> Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {idDelPedido}</p>
                
            </div>
        )
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Finalizar compra</h1>
        <form className='formulario' onSubmit={handleSubmit(compra)}>
            <input type='text' placeholder='Ingrese su nombre' {...register("nombre")} /> 
            <input type='email' placeholder='Ingrese su e-mail' {...register("email")} />
            <input type='email' placeholder='Repita su e-mail' {...register("email")} />
            <input type='phone' placeholder='Ingrese su telefono' {...register("telefono")} />

            <button className='enviar' type='submit'>Comprar</button>




        </form>

    </div>
  )
}

export default Checkout