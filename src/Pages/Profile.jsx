import React, { useEffect, useRef, useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

const Profile = ({ user, setUser }) => {

  const navigate = useNavigate()
  const fileRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {

      const token = localStorage.getItem("token")

      if (!token) {
        navigate("/login")
        return
      }

      const res = await API.get("/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUser(res.data)
      localStorage.setItem("user", JSON.stringify(res.data))

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleImageClick = () => {
    fileRef.current?.click()
  }

  const handleFileChange = async (e) => {

    const file = e.target.files[0]
    if (!file) return

    try {

      const token = localStorage.getItem("token")

      const formData = new FormData()
      formData.append("profilePic", file)

      const res = await API.put(
        "/api/auth/profilepic",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        }
      )

      setUser(res.data)
      localStorage.setItem("user", JSON.stringify(res.data))

      alert("Profile updated")

    } catch (err) {
      console.log(err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-[#111] p-10 rounded-3xl w-[360px] text-center border border-gray-800 shadow-lg">

        {/* PROFILE IMAGE */}
        <div className="flex justify-center">
          <img
            src={
              user?.profilePic
                ? user.profilePic
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            onClick={handleImageClick}
            className="w-32 h-32 rounded-full object-cover border-4 border-red-500 cursor-pointer hover:scale-105 transition duration-300"
            alt="profile"
          />
        </div>

        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />

        {/* USER INFO */}
        <h1 className="text-2xl font-bold mt-5">
          {user?.name}
        </h1>

        <p className="text-gray-400">
          {user?.email}
        </p>

      </div>

    </div>
  )
}

export default Profile