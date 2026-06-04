import React, { useState } from "react";

import API from "../../services/api";

function CreateWorkout() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) {
      alert("Please select a video");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("video", video);

      const res = await API.post(
        "/api/workouts/addWorkout",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Workout video added successfully");

      setTitle("");
      setCategory("");
      setDescription("");
      setVideoUrl(null);

      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-white mb-6">
          Create Workout Video
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Workout Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"
            required
          />

          <input
            type="text"
            placeholder="Category (Chest, Back, HIIT...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"
            required
          />

          <textarea
            placeholder="Workout Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"
          />

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoUrl(e.target.files[0])}
            className="w-full text-white"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Uploading..." : "Upload Workout"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default CreateWorkout;