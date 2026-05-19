import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen bg-black text-white">
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default Layout