import React from "react";
import imagen1 from "../src/assets/bebidas/coca1.jpg";
import imagen2 from "../src/assets/comida-rapida/hamburguesa1.jpg";
import imagen3 from "../src/assets/comidas-al-plato/pescado1.jpg";
import imagen4 from "../src/assets/postres/tronquito1.jpg";

import "../css/tarjetasPrincipal.css";

const TarjetasPrincipal = () => {
  return (
    <div className="container">
      <div className="row ms-2 me-2 pb-2  justify-content-center ">
        <div className="col-md-5  mb-2 m-2  contenedor-img">
          {/* ---tarjeta para categoria bebidas ---*/}

          <img
            src={imagen1}
            className="img-fluid img-css"
            alt="imagen lata de gaseosa"
          />
        </div>

        {/* ---tarjeta para categoria comida rapida--- */}
        <div className="col-md-5  mb-2 m-2  contenedor-img">
          <img
            src={imagen2}
            className="img-fluid img-css"
            alt="imagen hamburguesa con papas"
          />
        </div>

        {/* ---tarjeta para categoria comida al plato--- */}
        <div className="col-md-5  mb-2 m-2  contenedor-img">
          <img
            src={imagen3}
            className="img-fluid img-css"
            alt="imagen pescado con guarnicion"
          />
        </div>

        {/* ---tarjeta para categoria postres--- */}
        <div className="col-md-5  mb-2 m-2  contenedor-img">
          <img src={imagen4} 
          className="img-fluid img-css" 
          alt="imagen postre" />
        </div>
      </div>
    </div>
  );
};

export default TarjetasPrincipal;
