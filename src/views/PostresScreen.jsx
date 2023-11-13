import React from 'react'
// import imagen1 from "../assets/postres/lemon-pie.jpg";
// import imagen2 from "../assets/postres/porcion-helada.jpg";
// import imagen3 from "../assets/postres/torta-chocolate.jpg";
// import imagen4 from "../assets/postres/torta-frutilla.jpg";
// import imagen5 from "../assets/postres/tronquito1.jpg";
import imagenes from '../assets/imagenes';
import Postres from '../components/postres'

const PostresScreen = (postre) => {
    // const arregloPostres=[
    //     {nombre:imagen1,url:'../assets/postres/lemon-pie.jpg' ,titulo:"Lemon-pie", descripcion:"Porción de lemon-pie", precio:"500"},
    //     {nombre:imagen2,url:'../assets/postres/porcion-helada.jpg' , titulo:"Torta helada", descripcion:"Porción de torta helada de frutilla ", precio:"700"},
    //     {nombre:imagen3,url:'../assets/postres/torta-chocolate.jpg' , titulo:"Torta de chocolate", descripcion:"Porción de torta de chocolate", precio:"800"},
    //     {nombre:imagen4,url:'../assets/postres/torta-frutilla.jpg' , titulo:"Torta de frutilla", descripcion:"Porción de torta de frutilla", precio:"760"}
    //   ];
      
  return (
    
      <div className="container">
      <div className="row mt-5 pb-5">
      
          {imagenes.map((postre, index) => (
           <Postres key={index} postre={postre} />
                ))};
        </div>
        </div>
  )

    }
    
export default PostresScreen;