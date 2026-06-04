import React, { useEffect, useState } from "react"
import API from "../../services/api"
import { motion } from "framer-motion"
import { Trash2 } from "lucide-react"

const ManagePost = () => {

  const [posts, setPosts] = useState([])

  const token = localStorage.getItem("token")

  const getPosts = async () => {

    try {

      const response = await API.get("/api/posts/getpost")

      setPosts(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  const handleDelete = async (id) => {

    try {

      await API.delete(`/api/posts/delete-post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      alert("Post deleted")

      getPosts()

    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className="min-h-screen bg-black text-white p-6 lg:p-10">

      {/* HEADING */}
      <div className="mb-10">

        <h1 className="text-4xl font-black">
          Manage <span className="text-red-500">Posts</span>
        </h1>

        <p className="text-gray-400 mt-2">
          Delete or manage all uploaded fitness posts.
        </p>

      </div>

      {/* POSTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          posts.map((post) => (

            <motion.div
              key={post._id}
              whileHover={{ y: -8 }}
              className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800 shadow-lg"
            >

              {/* IMAGE / VIDEO */}
              {
                post.mediaType === "image" ? (

                  <img
                    src={`http://localhost:4000/${post.mediaUrl}`}
                    alt={post.title}
                    className="w-full h-[280px] object-cover"
                  />

                ) : (

                  <video
                    controls
                    className="w-full h-[280px] object-cover"
                  >
                    <source
                      src={`http://localhost:4000/${post.mediaUrl}`}
                      type="video/mp4"
                    />
                  </video>

                )
              }

              {/* CONTENT */}
              <div className="p-5">

                <h2 className="text-2xl font-bold mb-2">
                  {post.title}
                </h2>

                <p className="text-gray-400 text-sm leading-6">
                  {post.description}
                </p>

                {/* DELETE BUTTON */}
                <button
                  onClick={() => handleDelete(post._id)}
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition duration-300 py-3 rounded-xl font-semibold"
                >

                  <Trash2 size={18} />

                  Delete Post

                </button>

              </div>

            </motion.div>

          ))
        }

      </div>

    </div>

  )
}

export default ManagePost