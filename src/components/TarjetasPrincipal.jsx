import React from "react";
import { Link } from "react-router-dom";
import { imagenesCategorias } from "../assets/imagenes";

import "../css/tarjetasPrincipal.css";

const TarjetasPrincipal = ({ categoria }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {imagenesCategorias.length > 0 ? (
      imagenesCategorias.map((categoria) => (
        <div className="col" key={categoria._id}>
          <div className="card h-100">
            <img
              src={categoria.img}
              className="card-img-top img-card"
              alt={categoria.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{categoria.nombre}</h5>
              <p className="card-text">{categoria.descripcion}</p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="col">
        <h3>Cargando data...</h3>
      </div>
    )}
  </div>


    // <div className="container">
    //   {/* imagenes para categoria */}
    //   <div className="row  justify-content-center ">
    //     <Link to="/bebidas">
    //       <div className="col-12 col-md-5  contenedor-img   ">
    //         <img
    //           src={categoria.img}
    //           className="img-fluid img-css"
    //           alt={categoria.titulo}
    //         />
    //       </div>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default TarjetasPrincipal;
