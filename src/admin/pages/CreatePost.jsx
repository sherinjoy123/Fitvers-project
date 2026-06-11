import { useState } from "react";
import adminAPI from "../../services/adminApi";
import { UploadCloud, Image, Video } from "lucide-react";
import { motion } from "framer-motion";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [mediaType, setMediaType] = useState("image");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("mediaType", mediaType);
      formData.append("file", file);

      await adminAPI.post("/api/posts/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Post created successfully");
      setTitle("");
      setDescription("");
      setFile(null);
      setMediaType("image");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Failed to create post");
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-2xl bg-[#111] border border-gray-800 rounded-[35px] p-8 shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-black">
            Create <span className="text-red-500">Post</span>
          </h1>
          <p className="text-gray-400 mt-3">
            Upload fitness photos, reels, or motivational content.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-gray-300 font-medium">Post Title</label>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black border border-gray-700 p-4 rounded-2xl outline-none focus:border-red-500"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-gray-300 font-medium">Description</label>
            <textarea
              placeholder="Write something about this post..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              className="w-full bg-black border border-gray-700 p-4 rounded-2xl outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-gray-300 font-medium">Media Type</label>
            <select
              value={mediaType}
              onChange={(e) => setMediaType(e.target.value)}
              className="w-full bg-black border border-gray-700 p-4 rounded-2xl outline-none focus:border-red-500"
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-gray-300 font-medium">Upload File</label>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-3xl p-10 cursor-pointer hover:border-red-500 transition duration-300 bg-black">
              {mediaType === "image" ? (
                <Image size={50} className="text-red-500 mb-4" />
              ) : (
                <Video size={50} className="text-red-500 mb-4" />
              )}
              <p className="text-gray-400 mb-2">Click to upload your {mediaType}</p>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                required
              />
            </label>
            {file && (
              <p className="mt-3 text-green-400 text-sm">Selected File: {file.name}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"
          >
            <UploadCloud size={22} />
            Upload Post
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreatePost;
