import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const eliminarProductoDelCarrito = (id) => {
      const indexProdAEliminar = carrito.findIndex(producto => producto.id === id);
      const carritoModif = [...carrito]
      carritoModif.splice(indexProdAEliminar,1);
      setCarrito(carritoModif);
    }
    

    const agregarAlCarrito = (item, cantidad) => { 

        const itemAgregado = {...item, cantidad};
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (cantidadEnCarrito() + cantidad > 10) {
            alert("No se puede agregar mas de 10 productos al carrito.")
            return;
        }

        if(estaEnElCarrito){

        estaEnElCarrito.cantidad += cantidad;
        } else {
        nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito);
    }


    const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito]) 


    return (
    <CartContext.Provider value={ {
        carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, eliminarProductoDelCarrito}}>
            {children}
    </CartContext.Provider>  
    )
}