import React from 'react'

import {imagenesBebidas} from '../assets/imagenes';
import Bebidas from '../components/Bebidas'

const BebidasScreen = () => {
  
      
  return (
    
      <div className="container">
      <div className="row mt-5 pb-5">
      
          {imagenesBebidas.map((bebida, index) => (
           <Bebidas key={index} bebida={bebida} />
                ))};
        </div>
        </div>
  )

    }
    
export default BebidasScreen;