import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TarjetasPrincipal from "./components/tarjetasPrincipal";
import Postres from "./components/postres";
import PostresScreen from "./views/PostresScreen";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={   <TarjetasPrincipal />}/>
            <Route path="/postres" element={<PostresScreen/>}/>

          
         
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
