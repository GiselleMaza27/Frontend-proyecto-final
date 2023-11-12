import React from 'react'

import Postres from '../components/postres'

const PostresScreen = () => {
    const arregloPostres=[
        {nombre:imagen1, titulo:"Lemon-pie", descripcion:"Porción de lemon-pie", precio:"500"},
        {nombre:imagen2, titulo:"Torta helada", descripcion:"Porción de torta helada de frutilla ", precio:"700"},
        {nombre:imagen3, titulo:"Torta de chocolate", descripcion:"Porción de torta de chocolate", precio:"800"},
        {nombre:imagen4, titulo:"Torta de frutilla", descripcion:"Porción de torta de frutilla", precio:"760"}
      ];
      
  return (
    
      <div className="container">
      <div className="row mt-5 pb-5">
          {arregloPostres.map((postre, index) => (
           <Postres key={index} postre={postre} />
                ))};
        </div>
        </div>
  )

    }
    

  


export default PostresScreen;