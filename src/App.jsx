import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Explore from './Pages/Explore'
import Reels from './Pages/Reels'
import Trainer from './Pages/Trainer'
import Workout from './Pages/Workout'

import Layout from './Components/Layout'   // ✅ IMPORTANT

const App = () => {
  return (
  

      <Routes>

        {/* Pages WITH Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/reels' element={<Reels />} />
          <Route path='/trainers' element={<Trainer />} />
          <Route path='/workout' element={<Workout />} />
        </Route>

        {/* Pages WITHOUT Navbar + Footer */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>


  )
}

export default App