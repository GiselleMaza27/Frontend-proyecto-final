import React from "react";
import {Link} from "react-router-dom";
import imagenPortada from "../assets/comidas-al-plato/milanesa.jpg";
import imagen1 from "../assets/bebidas/coca1.jpg";
import imagen2 from "../assets/comida-rapida/hamburguesa1.jpg";
import imagen3 from "../assets/comidas-al-plato/pescado1.jpg";
import imagen4 from "../assets/postres/tronquito1.jpg";

import "../css/tarjetasPrincipal.css";

const TarjetasPrincipal = () => {
  
  return (
  
      <div className="container-fluid">
        <div className="row ">
        <div class="card mb-2">
  <img src={imagenPortada} class="card-img img-fluid img-portada" alt="..."/>
  
</div>
        </div>

        {/* imagenes para categoria */}
      <div className="row  justify-content-center ">
        <div className="col-12 col-md-5     contenedor-img">

          
          {/* ---tarjeta para categoria bebidas ---*/}
         
          <img
            src={imagen1}
            className="img-fluid img-css"
            alt="imagen lata de gaseosa"
          />
        </div>

        {/* ---tarjeta para categoria comida rapida--- */}
        <div className="col-12 col-md-5   contenedor-img">
          <img
            src={imagen2}
            className="img-fluid img-css"
            alt="imagen hamburguesa con papas"
          />
        </div>

        {/* ---tarjeta para categoria comida al plato--- */}
        <div className="col-12 col-md-5  contenedor-img">
          <img
            src={imagen3}
            className="img-fluid img-css"
            alt="imagen pescado con guarnicion"
          />
        </div>

        {/* ---tarjeta para categoria postres--- */}
        <div className="col-12 col-md-5   contenedor-img">
          <img src={imagen4} 
          className="img-fluid img-css" 
          alt="imagen postre" />
        </div>
      </div>
    </div>
    
  );
};

export default TarjetasPrincipal;
