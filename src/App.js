import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="Navbar-Header">  
      <NavBar />
      </header>
      <ItemListContainer greeting="Acá irán mis productos."/>
    </div>
  );
}

export default App;