import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Navbar } from './Navbar'
import Home from '../pages/Home'
import ProductCard from './ProductCard'
import About from '../pages/About'
import Footer from './Footer'
import Contact from '../pages/Contact'
const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <div style={{margin:'2rem'}}>
        <Routes >
            <Route path='/'element={<Home/>}></Route>
            <Route path='/about'element={<About/>}></Route>
            <Route path='/contact'element={<Contact/>}></Route>
            <Route path='/login'element={<Contact/>}></Route>
        </Routes>
        </div>
        
        <Footer/>
    </div>
  )
}

export default AllRoutes