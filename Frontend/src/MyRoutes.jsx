import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import AddCategoryPage from './pages/addCategory'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'index element={<Homepage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/addcategory' element={<AddCategoryPage/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/productdetails' element= {<ProductDetails/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default MyRoutes