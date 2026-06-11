import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import API from "../services/api";
import { mediaUrl } from "../services/config";

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({});

  // FETCH POSTS
  const fetchPosts = async () => {
    try {
      const result = await API.get("/api/posts/getpost");
      setPosts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // LIKE
  const handleLike = async (postId) => {
    try {
      await API.put(`/api/posts/like/${postId}`);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  // COMMENT
  const handleComment = async (postId) => {
    try {
      await API.post(`/api/posts/comment/${postId}`, {
        text: commentText[postId],
      });

      setCommentText({
        ...commentText,
        [postId]: "",
      });

      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">

      {/* HERO */}
      <section className="text-center pt-32 pb-16">
        <h1 className="text-5xl font-bold">
          Fitness <span className="text-red-500">Gallery</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Watch workout videos, motivation & fitness content
        </p>
      </section>

      {/* IMAGE GRID */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {posts.map((post) => (
            <motion.div
              key={post._id}
              whileHover={{ y: -8 }}
              className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800"
            >
              {/* MEDIA */}
              {post.mediaType === "image" ? (
                <img
                  src={mediaUrl(post.mediaUrl)}
                  className="w-full h-[280px] object-cover"
                />
              ) : (
                <video
                  className="w-full h-[280px] object-cover"
                  controls
                  muted
                  autoPlay
                  loop
                >
                  <source
                    src={mediaUrl(post.mediaUrl)}
                    type="video/mp4"
                  />
                </video>
              )}

              <div className="p-5">

                {/* TITLE */}
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-400 text-sm mt-1">
                  {post.description}
                </p>

                {/* ACTIONS */}
                <div className="flex justify-between items-center mt-4 text-gray-300">

                  {/* LIKE */}
                  <button
                    onClick={() => handleLike(post._id)}
                    className="flex items-center gap-2 hover:text-red-500"
                  >
                    <FaHeart />
                    {post.likes?.length || 0}
                  </button>

                  {/* COMMENT COUNT */}
                  <div className="flex items-center gap-2 text-blue-400">
                    <FaComment />
                    {post.comments?.length || 0}
                  </div>

                  {/* SHARE */}
                  <button className="flex items-center gap-2 hover:text-green-400">
                    <FaShare />
                    Share
                  </button>
                </div>

                {/* COMMENT INPUT */}
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentText[post._id] || ""}
                    onChange={(e) =>
                      setCommentText({
                        ...commentText,
                        [post._id]: e.target.value,
                      })
                    }
                    className="flex-1 p-2 rounded bg-gray-800 border border-gray-700"
                  />

                  <button
                    onClick={() => handleComment(post._id)}
                    className="bg-blue-600 px-4 rounded hover:bg-blue-700"
                  >
                    Post
                  </button>
                </div>

                {/* COMMENTS */}
                <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">

                  {post.comments?.map((comment) => (
                    <div
                      key={comment._id}
                      className="bg-gray-900 p-2 rounded"
                    >
                      <p className="text-red-400 text-sm font-semibold">
                        {comment.userName}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {comment.text}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Gallery;