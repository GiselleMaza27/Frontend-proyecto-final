import React from 'react'

import imagen1 from "../assets/postres/lemon-pie.jpg";
import imagen2 from "../assets/postres/porcion-helada.jpg";
import imagen3 from "../assets/postres/torta-chocolate.jpg";
import imagen4 from "../assets/postres/torta-frutilla.jpg";
import imagen5 from "../assets/postres/tronquito1.jpg";




const postres = ({postre}) => {
  return (
    <div className="card mb-3" style="max-width: 540px;">
    <div className="row g-0">
      <div className="col-12 col-md">
        <img src={postre.imagen} className="img-fluid rounded-start" alt={postre.descripcion}/>
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