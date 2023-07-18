import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import './NavBar.css'
// import { Link } from 'react-router-dom';

function NavBar() {
  return (
    
 <Navbar className='navbar-gradient  navbar'>
<Container>
  <Navbar.Brand className='logo' href="/">Maquinort SRL</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link className='menu-link'  href="/productos">Productos</Nav.Link>
    <Nav.Link className='menu-link'  href="/productos/cf">Controladores Fiscales</Nav.Link>
    <Nav.Link className='menu-link'  href="/productos/contadoradebilletes">Contadoras de billetes</Nav.Link>
    <Nav.Link className='menu-link'  href="/productos/calculadoras">Calculadoras</Nav.Link>
    <Nav.Link className='menu-link'  href="/productos/balanzas">Balanzas</Nav.Link>
    <Nav.Link className='menu-link' href="/nosotros">Nosotros</Nav.Link>
    <Nav.Link className='menu-link' href="/cartwidget"><CartWidget /> <span className='contador'>0</span> </Nav.Link>
  </Nav>
</Container>
</Navbar> 


  );
}
export default NavBar;



      //   <nav className="navbar-custom navbar-gradient navbar">
      //       <Link to="/" className="logo"><h1>Maquinort</h1></Link>
      //   <ul className='menu'>
      //     <li><Link className="menu-link" to="/"></Link>Inicio</li>
      //     <li><Link className="menu-link" to="/Nosotros"></Link>Nosotros</li>
      //     <li><Link className="menu-link" to=""></Link>Productos</li>
      //     <li><Link className="menu-link" to=""></Link> </li>
      //   </ul>
      //  </nav>

    // <nav className="navbar-custom navbar-gradient navbar">
    //   <Link to="/" className="logo"><h1>Maquinort</h1></Link>
    //     <ul className='menu'>
    //       <li><Link className="menu-link" to="/"></Link>Inicio</li>
    //       <li><Link className="menu-link" to=""></Link>Nosotros</li>
    //       <li><Link className="menu-link" to=""></Link>Productos</li>
    //       <li><Link className="menu-link" to=""></Link> </li>
    //     </ul>

    //   </nav>