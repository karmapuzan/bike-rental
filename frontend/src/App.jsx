import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/userpage/home'
import AdminPanel from './pages/adminpage/AdminPanel'
import AdminBikes from './pages/adminpage/AdminBikes'
import Login from './pages/userpage/Login'
import Register from './pages/userpage/Register'
import AdminLogin from './pages/adminpage/AdminLogin'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>


        <Route path="/admin" element= {<AdminPanel/>}/>
        <Route path="/adminlogin" element= {<AdminLogin/>}/>
        <Route path="/admin/bikes" element= {<AdminBikes/>}/>
      </Routes>
      
      
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
