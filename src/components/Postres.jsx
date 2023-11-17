import React from 'react'
import "../css/menu.css";
import { Link } from 'react-router-dom';

const postres = ({postre}) => {

  return (
    
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-12 col-md tarjeta">
        <img src={postre.img} 
        className="img-fluid rounded-start"
         alt={postre.descripcion}/>
      </div>
      <div className="col-md-8">
        <div className="card-body texto">
          <h3 className="card-title">{postre.titulo}</h3>
          <p className="card-text">{postre.descripcion}</p>
          <p className="card-text">${postre.precio}</p>
        </div>
        <div>
        <Link to='ruta' className="btn btn-success  btn-lg ms-4">Comprar</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default postres