import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminLogin from '../pages/AdminLogin'
import Dashboard from '../pages/Dashboard'
import CreatePost from '../pages/CreatePost'
import ManageUsers from '../pages/ManageUsers'

import AdminLayout from '../components/AdminLayout'
import ManagePost from '../pages/ManagePost'
import CreateTrainer from '../pages/CreateTrainer'
import ManageTrainer from '../pages/ManageTrainer'
import CreateWorkout from '../pages/CreateWorkout'
import ManageWorkout from '../pages/ManageWorkout'

const AdminRoutes = () => {
  return (

    <Routes>

      {/* Login Route */}
      <Route path='/login' element={<AdminLogin />} />

      {/* Admin Layout Routes */}
      <Route path='/' element={<AdminLayout />}>

        <Route index element={<Dashboard />} />

        <Route path='create-post' element={<CreatePost />} />

        <Route path='manage-users' element={<ManageUsers />} />

        <Route path='manage-post' element={<ManagePost/>} />  

        <Route path='create-trainer' element={<CreateTrainer/>} />  

        <Route path='manage-trainer' element={<ManageTrainer/>} /> 

        <Route path='create-workout' element={<CreateWorkout/>}/>

        <Route path='manage-workout' element={<ManageWorkout/>}/>
     
      </Route>

    </Routes>

  )
}

export default AdminRoutes