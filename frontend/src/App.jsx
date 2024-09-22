import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/userpage/home'
import AdminPanel from './pages/adminpage/AdminPanel'
import AdminBikes from './pages/adminpage/AdminBikes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>


        <Route path="/admin" element= {<AdminPanel/>}/>
        <Route path="/admin/bikes" element= {<AdminBikes/>}/>
      </Routes>
      
      
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
