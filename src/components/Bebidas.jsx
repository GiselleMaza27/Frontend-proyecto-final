import React from 'react'

const bebidas = ({bebida}) => {

  return (
    
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-12 col-md">
        <img src={bebida.img} 
        className="img-fluid rounded-start"
         alt={bebida.descripcion}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{bebida.titulo}</h3>
          <p className="card-text">{bebida.descripcion}</p>
          <p className="card-text">${bebida.precio}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default bebidas