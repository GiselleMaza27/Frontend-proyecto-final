import React from 'react'

import {imagenesPostres} from '../assets/imagenes';
import Postres from '../components/Postres'

const PostresScreen = () => {
  
      
  return (
    
      <div className="container">
      <div className="row mt-5 pb-5">
      
          {imagenesPostres.map((postre, index) => (
           <Postres key={index} postre={postre} />
                ))};
        </div>
        </div>
  )

    }
    
export default PostresScreen;