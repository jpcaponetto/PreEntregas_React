import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './Components/Nosotros/Nosotros';
import {CartProvider} from './Context/CartContext';
import Carrito from './Components/Carrito/Carrito';
import Checkout from './Components/Checkout/Checkout';



function App() {

  return (
    <div>
    <CartProvider> 
      <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        <Route path={"/productos"} element={<ItemListContainer />}/>
        <Route path={"/productos/:category"} element={<ItemListContainer />}/>
        <Route path={"/nosotros"} element={<Nosotros />}/>
        <Route path={"/carrito"} element={<Carrito />}/>
        <Route path={"/checkout"} element={<Checkout />}/>
      
      </Routes> 
      </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;