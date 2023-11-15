import React from 'react'

import {imagenesComidaPlato} from '../assets/imagenes';
import ComidaPlato from '../components/ComidaPlato'

const ComidaPlatoScreen = () => {
  
      
  return (
    
      <div className="container">
      <div className="row mt-5 pb-5">
      
          {imagenesComidaPlato.map((plato, index) => (
           <ComidaPlato key={index} plato={plato} />
                ))};
        </div>
        </div>
  )

    }
    
export default ComidaPlatoScreen;