import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './auth/Login'
import Register from './auth/Register'

const App = () => {
  return (
    <Routes>

      {/* auth */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>



      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App