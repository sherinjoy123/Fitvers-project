import React, { useState } from "react"
import { motion } from "framer-motion"

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaApple,
  FaDumbbell,
} from "react-icons/fa"

import { NavLink, useNavigate } from "react-router-dom"

import API from "../services/api"

const Register = () => {

  const navigate = useNavigate()

  // STATES
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // ERROR STATES
  const [errors, setErrors] = useState({})

  // VALIDATION FUNCTION
  const validateForm = () => {

    let newErrors = {}

    // USERNAME
    if (!username.trim()) {
      newErrors.username = "Username is required"
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters"
    }

    // EMAIL
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Invalid email address"
    }

    // PASSWORD
    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    // CONFIRM PASSWORD
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm your password"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  // REGISTER FUNCTION
  const handleRegister = async (e) => {

    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {

      setLoading(true)

      const result = await API.post("/api/auth/register", {
        name:username,
        email,
        password,
      })

      console.log(result.data)

      alert("Registration Successful")

      // CLEAR FORM
      setUsername("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")

      // REDIRECT TO LOGIN
      navigate("/login")

    } catch (err) {

      console.log(err)

      if (err.response?.data?.message) {
        alert(err.response.data.message)
      } else {
        alert("Registration Failed")
      }

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* REGISTER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#0f0f0f] border border-gray-800 rounded-[40px] overflow-hidden shadow-2xl"
      >

        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
            alt="fitness"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 p-14">

            <div className="flex items-center gap-4">

              <div className="bg-red-500 p-4 rounded-2xl shadow-lg shadow-red-500/30">

                <FaDumbbell className="text-3xl" />

              </div>

              <h1 className="text-5xl font-extrabold">
                Fit<span className="text-red-500">Verse</span>
              </h1>

            </div>

            <h2 className="text-5xl font-bold leading-tight mt-12">

              Start Your
              <span className="text-red-500"> Fitness Journey</span>

            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-8">

              Create your account and unlock workouts,
              AI diet plans, trainer sessions,
              reels, and fitness challenges.

            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-14">

          <div className="max-w-md mx-auto">

            <h2 className="text-5xl font-bold">
              Create Account
            </h2>

            <p className="text-gray-400 mt-5 text-lg">
              Join the FitVerse fitness community today.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleRegister}
              className="mt-12 space-y-6"
            >

              {/* USERNAME */}
              <div>

                <label className="text-gray-300">
                  Full Name
                </label>

                <div className="mt-3 bg-[#111] border border-gray-800 focus-within:border-red-500 rounded-2xl flex items-center px-5 py-4 transition duration-300">

                  <FaUser className="text-gray-500 text-lg" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-transparent w-full outline-none px-4"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                  />

                </div>

                {
                  errors.username && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.username}
                    </p>
                  )
                }

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-gray-300">
                  Email Address
                </label>

                <div className="mt-3 bg-[#111] border border-gray-800 focus-within:border-red-500 rounded-2xl flex items-center px-5 py-4 transition duration-300">

                  <FaEnvelope className="text-gray-500 text-lg" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent w-full outline-none px-4"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                </div>

                {
                  errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email}
                    </p>
                  )
                }

              </div>

              {/* PASSWORD */}
              <div>

                <label className="text-gray-300">
                  Password
                </label>

                <div className="mt-3 bg-[#111] border border-gray-800 focus-within:border-red-500 rounded-2xl flex items-center px-5 py-4 transition duration-300">

                  <FaLock className="text-gray-500 text-lg" />

                  <input
                    type="password"
                    placeholder="Create password"
                    className="bg-transparent w-full outline-none px-4"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />

                </div>

                {
                  errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password}
                    </p>
                  )
                }

              </div>

              {/* CONFIRM PASSWORD */}
              <div>

                <label className="text-gray-300">
                  Confirm Password
                </label>

                <div className="mt-3 bg-[#111] border border-gray-800 focus-within:border-red-500 rounded-2xl flex items-center px-5 py-4 transition duration-300">

                  <FaLock className="text-gray-500 text-lg" />

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="bg-transparent w-full outline-none px-4"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                  />

                </div>

                {
                  errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.confirmPassword}
                    </p>
                  )
                }

              </div>

              {/* TERMS */}
              <div className="flex items-center gap-3 text-gray-400 text-sm">

                <input
                  type="checkbox"
                  className="accent-red-500"
                />

                <p>
                  I agree to the Terms & Conditions
                </p>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg shadow-red-500/30"
              >

                {
                  loading
                    ? "Creating Account..."
                    : "Create Account"
                }

              </button>

            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-5 my-10">

              <div className="flex-1 h-[1px] bg-gray-800"></div>

              <p className="text-gray-500">
                OR
              </p>

              <div className="flex-1 h-[1px] bg-gray-800"></div>

            </div>

            {/* SOCIAL LOGIN */}
            <div className="grid grid-cols-2 gap-5">

              <button className="bg-[#111] border border-gray-800 hover:border-red-500 py-4 rounded-2xl flex items-center justify-center gap-3 transition duration-300">

                <FaGoogle className="text-xl" />

                Google

              </button>

              <button className="bg-[#111] border border-gray-800 hover:border-red-500 py-4 rounded-2xl flex items-center justify-center gap-3 transition duration-300">

                <FaApple className="text-xl" />

                Apple

              </button>

            </div>

            {/* LOGIN */}
            <p className="relative z-50 text-center text-sm text-gray-400 mt-6">

              Already have an account?

              <NavLink to="/login">

                <span className="text-blue-600 cursor-pointer hover:underline ml-2">

                  Login

                </span>

              </NavLink>

            </p>

          </div>

        </div>

      </motion.div>

    </div>

  )
}

export default Register