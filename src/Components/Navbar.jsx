import { FaDumbbell } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-800 fixed top-0 left-0 z-50 backdrop-blur-lg">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">

            <div className="bg-red-500 p-3 rounded-xl shadow-lg shadow-red-500/30">
              <FaDumbbell className="text-white text-xl" />
            </div>

            <h1 className="text-3xl font-extrabold tracking-wide">
              <span className="text-white">Fit</span>
              <span className="text-red-500">Verse</span>
            </h1>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            <Link
              to="/"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
              Home
            </Link>

            
            <Link
              to="/about"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
             About
            </Link>

            <Link
              to="/trainers"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
             Trainers
            </Link>

            <Link
              to="/workout"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
             Workouts
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
            Contact
            </Link>

          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
            <button className="px-5 py-2 rounded-xl border border-gray-700 text-white hover:border-red-500 hover:text-red-500 transition duration-300">
              Login
            </button>
            </Link>

            <button className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition duration-300 shadow-lg shadow-red-500/30">
              Join Now
            </button>

          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">

            <button className="text-white text-3xl">
              <HiMenuAlt3 />
            </button>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar