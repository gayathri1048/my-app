import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Portfolio from "./components/portfolio"
import Website from "./components/website"
import Technology from "./components/Technology"
const App = () =>{
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/website" element={<Website/>}/>
        <Route path="/technology" element={<Technology/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App