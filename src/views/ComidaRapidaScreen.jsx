import React from 'react'

import {imagenesComidaRapida} from '../assets/imagenes';
import ComidaRapida from '../components/ComidaRapida'

const ComidaRapidaScreen = () => {
  
      
  return (
    
      <div className="container">
      <div className="row mt-5 pb-5">
      
          {imagenesComidaRapida.map((rapida, index) => (
           <ComidaRapida key={index} rapida={rapida} />
                ))};
        </div>
        </div>
  )

    }
    
export default ComidaRapidaScreen