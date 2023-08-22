import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db  } from '../firebase/config';


const Checkout = () => {
    const [idDelPedido, setIdDelPedido] = useState("");
    const  { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const {register, handleSubmit,formState: { errors }} = useForm();
    console.log(errors);
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
                <p>En breve nos pondremos en contacto contigo</p>
                
            </div>
        )
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Finalizar compra</h1>
        <form className='formulario' onSubmit={handleSubmit(compra)}>
            <div className='mb-3'>
            <input type="text" placeholder="Ingrese su nombre" {...register("nombre",
            {required: {
                vulue:true,
                message: "Nombre es requerido"
            }, 
            minLength:{
                value:2,
                message: "Nombre debe tener al menos 2 caracteres"
            },
            maxLength:{
                value:20,
                message: "Nombre debe tener máximo 20 caracteres"
            }})} />
            {errors.nombre && <p className='error-message'>{errors.nombre.message}</p>}
            </div>

            <div className='mb-3'>
            <input
            placeholder='Ingrese su e-mail'
            type="email"
            {...register("email", {
                required: {
                    value: true,
                    message: "Email es requerido"
                },

                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Correo no valido'
            }
            })}
            />
            {errors.email && <p className='error-message'>{errors.email.message}</p>}
            </div>

            <div className='mb-3'>
            <input
            placeholder='Repita su email'
            type="email"
            {...register("email", {
                required: {
                    value: true,
                    message: "Email es requerido"
                },

                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Correo no valido'
            }
            })}
            />
            {errors.email && <p className='error-message'>{errors.email.message}</p>}
            </div>

            <div className='mb-3'>
            <input type="tel" placeholder="Ingrese su Telefono" {...register("telefono", 
            {required: {
                value: true,
                message: "Numero de telefono requerido"
            },
                minLength:{
                    value: 6,
                    message: "el telefono debe tener al menos 6 caracteres"
                },
                maxLength:{
                    value:20,
                    message: "el telefono debe tener un maximo de 20 caracteres"
                }
             
            })} />
            {errors.telefono && <p className='error-message'>{errors.telefono.message}</p>  }

            <button className='enviar' type='submit'>Comprar</button>
            </div>



        </form>

    </div>
  )
}

export default Checkout