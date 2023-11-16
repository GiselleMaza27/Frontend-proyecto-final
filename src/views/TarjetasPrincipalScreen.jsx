import React from 'react'

import imagenPortada from "../assets/comidas-al-plato/milanesa.jpg";
import {imagenesCategorias} from '../assets/imagenes';
import TarjetasPrincipal from '../components/TarjetasPrincipal';

const TarjetasPrincipalScreen = () => {
  
      
  return (
    
      <div className="container">
      <div className="row mt-5 pb-5">
    
        <div class="card mb-2">
          <img
            src={imagenPortada}
            class="card-img img-fluid img-portada"
            alt="..."
          />
        </div>
      </div>
      
          {imagenesCategorias.map((categoria, index) => (
           <TarjetasPrincipal key={index} categoria={categoria} />
                ))};
        </div>

  )

    }
    
export default TarjetasPrincipalScreen;