import React from 'react'
// import imagenes from '../assets/imagenes'



const postres = ({postre}) => {

  return (
    
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-12 col-md">
        <img src={postre.img} 
        className="img-fluid rounded-start"
         alt={postre.descripcion}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{postre.titulo}</h5>
          <p className="card-text">{postre.descripcion}</p>
          <p className="card-text"><small className="text-muted">{postre.precio}</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default postres