import React from "react";
import { Link } from "react-router-dom";

import "../css/tarjetasPrincipal.css";

const TarjetasPrincipal = ({ categoria }) => {
  return (
    <div className="col-12 col-md-6 ">
              <Link className="nav-link" to={categoria.url}>
      <div className="card text-bg-light tarjeta">
          <img
            src={categoria.img}
            className="card-img"
            alt={categoria.titulo}
          />
        {/* <div className="card-img-overlay">
          <h5 className="card-title">{categoria.titulo}</h5>
        </div> */}
      </div>
        </Link>
    </div>
      
    // =========================================
  
  );
};

export default TarjetasPrincipal;
