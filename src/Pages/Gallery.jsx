import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  FaHeart,
  FaComment,
  FaShare,
} from "react-icons/fa"
import API from "../services/api"


const reelsData = [
  {
    title: "Chest Workout",
    username: "@fitverse",
    video: "https://www.youtube.com/embed/89e518dl4I8",
  },

  {
    title: "Fat Loss Cardio",
    username: "@fitnessworld",
    video: "https://www.youtube.com/embed/gC_L9qAHVJ8",
  },

  {
    title: "Leg Day Training",
    username: "@gympower",
    video: "https://www.youtube.com/embed/SwYN7mTi6HM",
  },

  {
    title: "Abs Workout Routine",
    username: "@fitlife",
    video: "https://www.youtube.com/embed/1919eTCoESo",
  },

  {
    title: "Muscle Gain Workout",
    username: "@bodybuilding",
    video: "https://www.youtube.com/embed/U0bhE67HuDY",
  },

  {
    title: "HIIT Workout",
    username: "@hiittraining",
    video: "https://www.youtube.com/embed/ml6cT4AZdqI",
  },
]

const images =[
  {
    image:"https://plus.unsplash.com/premium_photo-1664301437780-ee46787734d5?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwcGhvdG9zfGVufDB8fDB8fHww"
  },
  {
    image:"https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwcGhvdG9zfGVufDB8fDB8fHww"
  },
  {
    image:"https://plus.unsplash.com/premium_photo-1661670892906-b1cffa07584d?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  }
]

const Gallery = () => {

  const [posts, setPosts ] = useState([])
  useEffect(()=>{
    fetchPosts()
  },[])

  const fetchPosts = async()=>{
    try {
      const result = await API.get("/api/posts/getpost")
      setPosts(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">




      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 pt-32 pb-20">

        {/* GLOW EFFECTS */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-7xl font-black leading-tight"
          >
            Fitness
            <span className="text-red-500"> Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-400 text-lg leading-8 mt-8"
          >
            Watch trending workout videos, transformation clips,
            gym motivation, and fitness content.
          </motion.p>

        </div>
      </section>

      {/* CREATIVE IMAGE SECTION */}
<section className="px-6 lg:px-20 pb-24">

<div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">

  {/* BIG IMAGE */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="md:col-span-2 md:row-span-2 overflow-hidden rounded-[35px] relative group"
  >
    <img
      src={images[0].image}
      alt="gym"
      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

    <h2 className="absolute bottom-6 left-6 text-3xl font-black">
      Fitness Lifestyle
    </h2>
  </motion.div>

  {/* SMALL TOP */}
  <motion.div
    whileHover={{ y: -10 }}
    className="overflow-hidden rounded-[30px] relative group"
  >
    <img
      src={images[1].image}
      alt="gym"
      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/30"></div>

    <p className="absolute bottom-4 left-4 font-semibold text-lg">
      Gym Motivation
    </p>
  </motion.div>

  {/* TALL IMAGE */}
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="md:row-span-2 overflow-hidden rounded-[35px] relative group"
  >
    <img
      src={images[2].image}
      alt="gym"
      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

    <h2 className="absolute bottom-6 left-6 text-2xl font-bold">
      Beast Mode
    </h2>
  </motion.div>

  {/* WIDE IMAGE */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="md:col-span-2 overflow-hidden rounded-[30px] relative group"
  >
    <img
      src={images[1].image}
      alt="gym"
      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/40"></div>

    <h2 className="absolute bottom-5 left-5 text-2xl font-bold">
      Stronger Every Day
    </h2>
  </motion.div>

</div>

</section>

      {/* REELS GRID */}
     {/* REELS SLIDER SECTION */}
{/* REELS HORIZONTAL SCROLL SECTION */}
<section className="px-6 lg:px-20 pb-24 relative z-10">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {
      posts.map((post) => (

        <motion.div
          key={post._id}
          whileHover={{ y: -10 }}
          className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800"
        >

          {
            post.mediaType === "image" ? (

              <img
                src={`http://localhost:4000/${post.mediaUrl}`}
                alt={post.title}
                className="w-full h-[300px] object-cover"
              />

            ) : (

              <video 
                autoPlay
                loop
                controls
                muted
                playsInline
                className="w-full h-[300px] object-cover"
              >
                <source
                  src={`http://localhost:4000/${post.mediaUrl}`}
                  type="video/mp4"
                />
              </video>

            )
          }

          <div className="p-5">

            <h2 className="text-2xl font-bold mb-2">
              {post.title}
            </h2>

            <p className="text-gray-400">
              {post.description}
            </p>

            <div className="flex items-center gap-6 mt-5 text-gray-300">

              <button className="flex items-center gap-2 hover:text-red-500">
                <FaHeart />
                Like
              </button>

              <button className="flex items-center gap-2 hover:text-blue-400">
                <FaComment />
                Comment
              </button>

              <button className="flex items-center gap-2 hover:text-green-400">
                <FaShare />
                Share
              </button>

            </div>

          </div>
          

        </motion.div>

      ))
    }

  </div>

</section>

    </div>
  )
}

export default Gallery