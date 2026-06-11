import { HiMenuAlt3 } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

const Navbar = ({ user, setUser }) => {

  const navigate = useNavigate()

  const [showDropdown, setShowDropdown] = useState(false);

  const [open, setOpen] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)
  const [picVersion, setPicVersion] = useState(0)

  useEffect(() => {
    if (user?.profilePic) {
      setPicVersion(Date.now())
    }
  }, [user?.profilePic])

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  
    if (typeof setUser === "function") {
      setUser(null);
    }
  
    navigate("/");
    window.location.reload();
  };

  const token = localStorage.getItem("token")

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {

    const closeDropdown = () => {
      setOpen(false)
    }

    window.addEventListener("click", closeDropdown)

    return () => {
      window.removeEventListener("click", closeDropdown)
    }

  }, [])

  return (

    <nav className="w-full bg-black border-b border-gray-800 fixed top-0 left-0 z-50 backdrop-blur-lg">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >

            <img
              src={logo}
              className="w-10 h-10"
              alt="logo"
            />

            <h1 className="text-3xl font-extrabold">

              <span className="text-white">
                Fit
              </span>

              <span className="text-red-500">
                Verse
              </span>

            </h1>

          </div>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-10">

            <Link
              to="/"
              className="text-gray-300 hover:text-red-500"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-300 hover:text-red-500"
            >
              About
            </Link>

            <Link
              to="/trainers"
              className="text-gray-300 hover:text-red-500"
            >
              Trainers
            </Link>

            <Link
              to="/workout"
              className="text-gray-300 hover:text-red-500"
            >
              Workouts
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-red-500"
            >
              Contact
            </Link>

            <Link
              to="/gallery"
              className="text-gray-300 hover:text-red-500"
            >
              Gallery
            </Link>

            {
              token && (
                <Link
                  to="/fetchBooking"
                  className="text-gray-300 hover:text-red-500"
                >
                  MyBooking
                </Link>
              )
            }

          </div>

          {/* AUTH */}
          <div className="hidden md:flex items-center gap-4">

            {!user ? (

              <>

<div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="px-5 py-2 text-stone-200 rounded-xl border border-gray-700 hover:border-red-500"
      >
        Login
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
          <Link
            to="/login"
            className="block px-4 py-3 text-white hover:bg-gray-800"
          >
            User Login
          </Link>

          <Link
            to="/trainer-login"
            className="block px-4 py-3 text-white hover:bg-gray-800"
          >
            Trainer Login
          </Link>
        </div>
      )}
    </div>


                

               

              </>

            ) : (

              <div
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >

                {/* PROFILE IMAGE */}
                <img
                  src={
                    user?.profilePic
                      ? `${user.profilePic}?v=${picVersion}`
                      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-red-500 cursor-pointer"
                  onClick={() => setOpen(!open)}
                />

                {/* DROPDOWN */}
                {open && (

                  <div className="absolute right-0 mt-2 w-40 bg-black border border-gray-700 rounded-lg shadow-lg">

                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-red-600 hover:bg-gray-800"
                      onClick={() => setOpen(false)}
                    >

                      Profile

                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-800"
                    >

                      Logout

                    </button>

                  </div>

                )}

              </div>

            )}

          </div>

          {/* MOBILE */}
          <div
  className="md:hidden text-3xl text-white cursor-pointer"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <HiMenuAlt3 />
</div>
        </div>

        </div>

{/* MOBILE MENU */}
{menuOpen && (
  <div className="md:hidden bg-black border-t border-gray-800">
    <div className="flex flex-col p-5 gap-4">

      <Link
        to="/"
        className="text-gray-300 hover:text-red-500"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>

      <Link
        to="/about"
        className="text-gray-300 hover:text-red-500"
        onClick={() => setMenuOpen(false)}
      >
        About
      </Link>

      <Link
        to="/trainers"
        className="text-gray-300 hover:text-red-500"
        onClick={() => setMenuOpen(false)}
      >
        Trainers
      </Link>

      <Link
        to="/workout"
        className="text-gray-300 hover:text-red-500"
        onClick={() => setMenuOpen(false)}
      >
        Workouts
      </Link>

      <Link
        to="/contact"
        className="text-gray-300 hover:text-red-500"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </Link>

      <Link
        to="/gallery"
        className="text-gray-300 hover:text-red-500"
        onClick={() => setMenuOpen(false)}
      >
        Gallery
      </Link>

      {token && (
        <Link
          to="/fetchBooking"
          className="text-gray-300 hover:text-red-500"
          onClick={() => setMenuOpen(false)}
        >
          MyBooking
        </Link>
      )}

      <div className="border-t border-gray-800 pt-4">
        {!user ? (
          <>
            <Link
              to="/login"
              className="block text-white py-2"
              onClick={() => setMenuOpen(false)}
            >
              User Login
            </Link>

            <Link
              to="/trainer-login"
              className="block text-white py-2"
              onClick={() => setMenuOpen(false)}
            >
              Trainer Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              className="block text-red-500 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>

            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="text-left text-red-400 py-2"
            >
              Logout
            </button>
          </>
        )}
      </div>

    </div>
  </div>
)}

</nav>
  )
}

export default Navbar