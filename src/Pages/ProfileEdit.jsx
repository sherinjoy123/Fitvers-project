import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const ProfileEdit = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.put("/api/auth/profile", { name });

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Profile updated");
      navigate("/profile");
    } catch (err) {
      console.log(err);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <form
        onSubmit={handleSave}
        className="bg-[#111] p-8 rounded-3xl w-full max-w-md border border-gray-800"
      >
        <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

        <label className="block text-gray-400 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 mb-6 outline-none focus:border-red-500"
          required
        />

        <p className="text-gray-500 text-sm mb-6">{user?.email}</p>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="w-full mt-3 border border-gray-700 py-3 rounded-xl"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
