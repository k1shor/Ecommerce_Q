import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default MyRoutes