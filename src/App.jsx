import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './Components/Nosotros/Nosotros';
import { CartContext } from './Context/CartContext';
import { useState } from 'react';



function App() {
  const [carrito, setCarrito] = useState([]);
 
  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)
   

    if(estaEnElCarrito){
     estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito);
  }

const cantidadEnCarrito = () => {
  return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}


  return (
    <div>
      <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito} }> 
      <BrowserRouter>

      <NavBar />

      <Routes>
      <Route path={"/"} element={<ItemListContainer />}/>
      <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
      <Route path={"/productos"} element={<ItemListContainer />}/>
      <Route path={"/productos/:category"} element={<ItemListContainer />}/>
      <Route path={"/nosotros"} element={<Nosotros />}/>
      
      </Routes> 
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;