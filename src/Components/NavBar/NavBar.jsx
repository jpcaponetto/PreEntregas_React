// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import './NavBar.css'
import {Link, NavLink} from "react-router-dom"
// import { Container } from 'react-bootstrap';

function NavBar() {
  return (
    
      
        <nav className="navbar-custom navbar-gradient navbar">
            <Link to={"/"} className="logo"><h1>Maquinort SRL</h1></Link>
        <ul className='menu'>
          <li><NavLink className="menu-link" to={"/"}>Inicio</NavLink></li>
          <li><NavLink className="menu-link" to={"/productos"}>Productos</NavLink></li>
          <li><NavLink className="menu-link" to={"/productos/cf"}>Controladores Fiscales</NavLink></li>
          <li><NavLink className="menu-link" to={"/productos/calculadoras"}>Calculadoras</NavLink></li>
          <li><NavLink className="menu-link" to={"/productos/balanzas"}>Balanzas</NavLink></li>
          <li><NavLink className="menu-link" to={"/Nosotros"}>Nosotros</NavLink></li>
          <li><NavLink className="menu-link" to={"/cartwidget"}><CartWidget /></NavLink></li>
        </ul>
       </nav>


//  <Navbar className='navbar-gradient' data-bs-theme="light">
// <Container>
//   <Link className='logo' to={"/"}>Maquinort SRL</Link>
//   <Nav className="me-auto">
//     <Nav.Link className='menu-link'  to={"/productos"}>Productos</Nav.Link>
//     <Nav.Link className='menu-link'  to={"/productos/cf"}>Controladores Fiscales</Nav.Link>
//     <Nav.Link className='menu-link'  to={"/productos/contadoradebilletes"}>Contadoras de billetes</Nav.Link>
//     <Nav.Link className='menu-link'  to={"/productos/calculadoras"}>Calculadoras</Nav.Link>
//     <Nav.Link className='menu-link'  to={"/productos/balanzas"}>Balanzas</Nav.Link>
//     <Nav.Link className='menu-link' to={"/nosotros"}>Nosotros</Nav.Link>
//     <Nav.Link className='menu-link' to={"/cartwidget"}><CartWidget /> <span className='contador'>0</span></Nav.Link>
//   </Nav>
// </Container>
// </Navbar> 

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