// import React from 'react'
// import imagenes from '../assets/imagenes'

import imagenes from "../assets/imagenes"


const postres = ({postre}) => {
  console.log(imagenes)
  return (
    console.log(imagenes[0]),
    <div className="card mb-3" style="max-width: 540px;">
    <div className="row g-0">
      <div className="col-12 col-md">
        <img src={imagenes[index].img} 
        className="img-fluid rounded-start"
         alt={postre.descripcion}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">{postre.titulo}</p>
          <p className="card-text"><small className="text-muted">{postre.precio}</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default postres