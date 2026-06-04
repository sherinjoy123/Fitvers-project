import React, { useEffect, useState } from "react"
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Explore from "./Pages/Explore"
import Trainer from "./Pages/Trainer"
import Workout from "./Pages/Workout"
import Gallery from "./Pages/Gallery"
import Payment from "./Pages/Payment"
import Layout from "./Components/Layout"
import Loader from "./Components/Loader"
import WorkoutPrograms from "./Pages/WorkoutPrograms"
import VideoCall from "./Pages/VideoCall"
import Chat from "./Pages/Chat"
import Profile from "./Pages/Profile"
import ProfileEdit from "./Pages/ProfileEdit"
import AdminRoutes from "./admin/routes/AdminRoutes"
import FetchBooking from "./Pages/FetchBooking"
import TrainerLogin from "./Pages/TrainerLogin"
import TrainerDashboard from "./Pages/TrainerDashboard"
import TrainerChat from "./Pages/TrainerChat"
import AdminLogin from "./admin/pages/AdminLogin"

// PAGE LOADER
const PageLoader = ({ children }) => {

  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  )
}

const App = () => {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user")
    return storedUser ? JSON.parse(storedUser) : null
  })

  return (
    <PageLoader>

      <Routes>

        <Route element={<Layout user={user} setUser={setUser} />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/trainers" element={<Trainer />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/workoutprograms" element={<WorkoutPrograms />} />
          <Route path="/videocall" element={<VideoCall />} />
      
          <Route path="/fetchBooking" element={<FetchBooking/>}/>
          

          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />

          <Route
            path="/profileEdit"
            element={<ProfileEdit setUser={setUser} />}
          />

        </Route>

        <Route path="/admin/*" element={<AdminRoutes/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trainer-login" element={<TrainerLogin/>}/>
          <Route path="/trainer-dashboard" element={<TrainerDashboard/>}/>
          <Route path="/chat/:userId"element={<TrainerChat/>}/>
          <Route path="/chat" element={<Chat />} />
          <Route path="/admin-login" element={<AdminLogin/>}/>

      </Routes>

    </PageLoader>
  )
}

export default App