import React from 'react'
import Navbar from '../components/Navbar'
import TarjetasPrincipal from '../components/TarjetasPrincipal'

const App = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Navbar></Navbar>
  
        <TarjetasPrincipal></TarjetasPrincipal>
      </div>
    </div>
  )
}

export default App