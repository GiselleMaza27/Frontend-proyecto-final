import React from "react";
import imagen1 from "../src/assets/bebidas/coca.jpg";
import imagen2 from "../src/assets/comida-rapida/hamburguesa.jpg";
import imagen3 from "../src/assets/comidas-al-plato/pescado.jpg";
import imagen4 from "../src/assets/postres/tronquito.jpg";

import "../css/tarjetasPrincipal.css";

const TarjetasPrincipal = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* ---tarjeta para categoria bebidas ---*/}
        <div className="col">
          <div className="tarjeta">
            <img
              src={imagen1}
              className="img-fluid"
              alt="imagen lata de gaseosa"
            />
          </div>
        </div>

        {/* ---tarjeta para categoria comida rapida--- */}
        <div className="col">
          <div className="tarjeta">
            <img
              src={imagen2}
              className="img-fluid"
              alt="imagen hamburguesa con papas"
            />
          </div>
        </div>

        {/* ---tarjeta para categoria comida al plato--- */}
        <div className="col">
          <div className="tarjeta">
            <img
              src={imagen3}
              className="img-fluid"
              alt="imagen pescado con guarnicion"
            />
          </div>
        </div>

        {/* ---tarjeta para categoria postres--- */}
        <div className="col">
          <div className="tarjeta">
            <img src={imagen4} className="img-fluid" alt="imagen postre" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetasPrincipal;
