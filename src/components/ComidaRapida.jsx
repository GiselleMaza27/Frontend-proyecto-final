import React from 'react'

const ComidaRapida = ({rapida}) => {

  return (
    
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-12 col-md">
        <img src={rapida.img} 
        className="img-fluid rounded-start"
         alt={rapida.descripcion}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{rapida.titulo}</h3>
          <p className="card-text">{rapida.descripcion}</p>
          <p className="card-text">${rapida.precio}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ComidaRapida