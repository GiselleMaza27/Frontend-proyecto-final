import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TarjetasPrincipal from "./components/TarjetasPrincipal";
import PostresScreen from "./views/PostresScreen";
import ErrorScreen from "./views/ErrorScreen";
import BebidasScreen from "./views/BebidasScreen";
import ComidaRapidaScreen from "./views/ComidaRapidaScreen";
import ComidaPlatoScreen from "./views/ComidaPlatoScreen.jsx";
import TarjetasPrincipalScreen from "./views/TarjetasPrincipalScreen";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={   <TarjetasPrincipalScreen />}/>
            <Route path="/postres" element={<PostresScreen/>}/>
            <Route path="/bebidas" element={<BebidasScreen/>}/>
            <Route path="/comidaRapida" element={<ComidaRapidaScreen/>}/>
            <Route path="/comidaPlato" element={<ComidaPlatoScreen/>}/>
            <Route path="*" element={<ErrorScreen />} />

          
         
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
