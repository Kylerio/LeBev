import { Route, Routes } from 'react-router-dom'
import './Main.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Product from './pages/product/Product'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='' Component={ Home } />
        <Route path='/Home' Component={ Home } />
        <Route path='/About' Component={ About } />
        <Route path='/Product' Component={ Product } />
        <Route path='/Service' Component={ Service } />
        <Route path='/Contact' Component={ Contact } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
