import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './Components/Nosotros/Nosotros';



function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;