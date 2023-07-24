// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
// import './NavBar.css'
import {Link} from "react-router-dom"


function NavBar() {
  return (
            <nav className="navbar">
            <Link to={"/"} className="logo"><h1>Maquinort SRL</h1>
            </Link>
              <ul className='menu'>
                <li><Link className="menu-link" to={"/productos"}>Productos</Link></li>
                <li><Link className="menu-link" to={"/productos/cf"}>Controladores Fiscales</Link></li>
                <li><Link className="menu-link" to={"/productos/calculadoras"}>Calculadoras</Link></li>
                <li><Link className="menu-link" to={"/productos/balanzas"}>Balanzas</Link></li>
                <li><Link className="menu-link" to={"/Nosotros"}>Nosotros</Link></li>
                <li><CartWidget /></li>
              </ul>
            </nav>

    )
}
export default NavBar;     


//     <Navbar bg="danger" expand="lg">
//     <Container>
//         <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'/>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//         <Navbar.Brand>
//           <Link> <div className="d-inline-block align-top logo "/>{' '} Maquinort SRL </div>   
//         </Navbar.Brand>
//             <Nav className='me-auto' >
//                 <NavLink className="nav-link" to={'/'}>Inicio</NavLink>
//                 <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
//                 <NavLink className="nav-link" to={"/productos/cf"}>Controladores Fiscales</NavLink>
//                 <NavLink className="nav-link" to={"/productos/calculadoras"}>Calculadoras</NavLink>
//                 <NavLink className="nav-link" to={"/productos/balanzas"}>Balanzas</NavLink>
//                 <NavLink className="nav-link" to={"/Nosotros"}>Nosotros</NavLink>
//             </Nav>
//             <Link className='cart'  to={"/cartwidget"}>
//                 <CartWidget/>
//             </Link>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>
// );
// }


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