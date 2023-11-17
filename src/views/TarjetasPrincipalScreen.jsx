import React from 'react'

import imagenPortada from "../assets/img-portada1.jpg";
import {imagenesCategorias} from '../assets/imagenes';
import TarjetasPrincipal from '../components/TarjetasPrincipal';
import "../css/tarjetasPrincipal.css";

const TarjetasPrincipalScreen = () => {
  
      
  return (
    
      <div className="container-fluid">
      <div className="row mt-2 pb-2  ">
    
         <div class="col-12 portada">
          <img
            src={imagenPortada}
            className="card-img "
            alt="imagen portada"
          />
        </div> 
      </div>
      

      <div className="container">
        <div className="row mt-2 pb-2 ">
          
        
          {imagenesCategorias.map((categoria, index) => (
           <TarjetasPrincipal key={index} categoria={categoria} />
                ))};

        </div>

      </div>
      </div>
     
  

  )

    }
    
export default TarjetasPrincipalScreen;