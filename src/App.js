import WOW from 'wowjs'
import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home_Page/Home'
import About from './Pages/About_Page/About'
import Contact from './Pages/Contact_Page/Contact'
import { Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  new WOW.WOW().init()
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Dhaval/dcode/" element={<Home />} />
        <Route path="/Dhaval/dcode/About" element={<About />} />
        <Route path="/Dhaval/dcode/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
