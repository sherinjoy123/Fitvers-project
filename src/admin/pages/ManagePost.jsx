import { useEffect, useState } from "react";
import adminAPI from "../../services/adminApi";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { mediaUrl } from "../../services/config";

const ManagePost = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await adminAPI.get("/api/posts/getpost");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await adminAPI.delete(`/api/posts/delete-post/${id}`);
      alert("Post deleted");
      getPosts();
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            {post.mediaType === "image" ? (
              <img
                src={mediaUrl(post.mediaUrl)}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <video
                src={mediaUrl(post.mediaUrl)}
                className="w-full h-48 object-cover"
                controls
              />
            )}

            <div className="p-4">
              <h2 className="font-bold text-lg">{post.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{post.description}</p>

              <button
                onClick={() => handleDelete(post._id)}
                className="mt-4 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ManagePost;
