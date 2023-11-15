import React from 'react'

const ComidaPlato = ({plato}) => {

  return (
    
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-12 col-md">
        <img src={plato.img} 
        className="img-fluid rounded-start"
         alt={plato.descripcion}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{plato.titulo}</h3>
          <p className="card-text">{plato.descripcion}</p>
          <p className="card-text">${plato.precio}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ComidaPlato