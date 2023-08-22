import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import {Link} from "react-router-dom"


function NavBar() {
  return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid ">
              <Link className="navbar-brand menu-link" to={"/"}>Maquinort</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link menu-link" aria-current="page" to={"/productos"}>Productos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link menu-link" to={"/productos/cf"}>Controladores Fiscales</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link menu-link" to={"/productos/calculadoras"}>Calculadoras</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link menu-link" to={"/productos/balanzas"}>Balanzas</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link menu-link" to={"/productos/impresorfiscal"}>Impresoras Fiscales</Link>
                  </li>
                  <li className="nav-cart"><CartWidget /></li>
                </ul>
              </div>
            </div>
          </nav>
    )
}
export default NavBar;     