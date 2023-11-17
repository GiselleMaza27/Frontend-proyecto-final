import React from 'react'
import "../css/menu.css";
import { Link } from 'react-router-dom';

const ComidaPlato = ({plato}) => {

  return (
    
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-12 col-md tarjeta">
        <img src={plato.img} 
        className="img-fluid rounded-start"
         alt={plato.descripcion}/>
      </div>
      <div className="col-md-8">
        <div className="card-body texto">
          <h3 className="card-title">{plato.titulo}</h3>
          <p className="card-text">{plato.descripcion}</p>
          <p className="card-text">${plato.precio}</p>
        </div>
        <div>
        <Link to='ruta' className="btn btn-success  btn-lg ms-4">Comprar</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ComidaPlato