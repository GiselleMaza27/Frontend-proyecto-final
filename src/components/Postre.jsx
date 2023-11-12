import React from 'react'

const Postre = () => {

    return (
    
        <div className="container-fluid">
       
        {/* imagenes de postres */}
      <div className="row ms-2 me-2 pb-2  justify-content-center ">
        <div className="col-md-5     contenedor-img">
    
          <img
            src={imagen1}
            className="img-fluid img-css"
            alt="imagen lemon pie"
          />
        </div>
    
        <div className="col-md-5    contenedor-img">
          <img
            src={imagen2}
            className="img-fluid img-css"
            alt="imagen porcion helada"
          />
        </div>
    
    
        <div className="col-md-5   contenedor-img">
          <img
            src={imagen3}
            className="img-fluid img-css"
            alt="imagen torta chocolate"
          />
        </div>
    
    
        <div className="col-md-5   contenedor-img">
          <img src={imagen4} 
          className="img-fluid img-css" 
          alt="imagen torta frutilla" />
        </div>
    
        <div className="col-md-5   contenedor-img">
          <img src={imagen5} 
          className="img-fluid img-css" 
          alt="imagen tronquito" />
        </div>
    
        <div className="col-md-5   contenedor-img">
          <img src={imagen4} 
          className="img-fluid img-css" 
          alt="imagen torta frutilla" />
        </div>
    
      </div>
    </div>
    
      )
    }


export default Postre