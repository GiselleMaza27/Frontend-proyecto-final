import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TarjetasPrincipal from '../components/TarjetasPrincipal'

const App = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Navbar></Navbar>
  
        <TarjetasPrincipal></TarjetasPrincipal>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App