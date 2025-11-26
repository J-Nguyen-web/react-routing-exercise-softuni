import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './component/footer/Footer.jsx'
import Header from './component/header/Header.jsx'
import Home from './component/home/Home.jsx'
import Catalog from './component/games/Catalog.jsx'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        {/* тъй като в Home.jsx има Link към /games, се описва тук в Routes */}
        <Route path='/games' element={<Catalog />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
