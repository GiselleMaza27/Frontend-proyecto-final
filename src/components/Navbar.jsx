import React from 'react'
import "../css/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-css">
    <div className="container-fluid div-a">
      <a className="navbar-brand" href="#">El Rincon del Sabor</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Pedidos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Iniciar Sesión</a>
          </li>

          <li className="nav-item">
            <a className="nav-link ">Registrarse</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar