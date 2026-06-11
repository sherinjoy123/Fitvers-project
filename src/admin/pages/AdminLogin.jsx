import React, { useState } from "react"
import API from "../../services/api"
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    // validation
    if (!email || !password) {
      return setError("All fields are required")
    }

    if (!email.includes("@")) {
      return setError("Enter valid email")
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters")
    }

    try {
      setLoading(true)

      const result = await API.post("/api/admin/login", {
        email,
        password
      })
      console.log(result.data);

      // ✅ FIXED HERE
      localStorage.setItem("adminToken", result.data.token)
      localStorage.setItem("admin", JSON.stringify(result.data.admin))

      alert("Login Successful 🚀")

      navigate("/admin/")

    } catch (error) {
      setError(error.response?.data || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-red-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-96 h-96 bg-red-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 w-full max-w-md bg-[#111] border border-gray-800 rounded-3xl p-8 shadow-2xl shadow-red-500/10">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-red-500 flex items-center justify-center text-4xl font-bold shadow-lg shadow-red-500/30">
            F
          </div>

          <h1 className="text-white text-4xl font-extrabold mt-5 tracking-wide">
            Fit<span className="text-red-500">Verse</span>
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Admin Dashboard Access
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter admin email"
            className="w-full bg-black border border-gray-700 px-4 py-3 text-white rounded-xl"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-black border border-gray-700 px-4 py-3 text-white rounded-xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl text-white font-bold"
          >
            {loading ? "Logging in..." : "Login as Admin"}
          </button>
        </form>

      </div>
    </div>
  )
}

export default AdminLogin