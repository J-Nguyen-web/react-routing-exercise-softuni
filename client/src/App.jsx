import { Route, Routes } from 'react-router-dom'
import Footer from './component/footer/Footer.jsx'
import Header from './component/header/Header.jsx'
import Home from './component/home/Home.jsx'
import Catalog from './component/games/Catalog.jsx'
import Details from './component/details/Details.jsx'
import Create from './component/create-game/Create.jsx'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        {/* тъй като в Home.jsx има Link към /games, се описва тук в Routes */}
        <Route path='/games' element={<Catalog />} />
        
        <Route path='/games/:gameId/details' element={<Details />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
