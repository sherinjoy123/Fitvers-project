import React, { useEffect, useState } from "react";
import {
  getTrainerAPI,
  deleteTrainerAPI,
  updateTrainerAPI,
} from "../../services/trainerApi";

import { FaDumbbell, FaStar, FaClock } from "react-icons/fa";

const ManageTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);

  // GET TRAINERS
  const getAllTrainers = async () => {
    try {
      const result = await getTrainerAPI();
      setTrainers(result.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTrainers();
  }, []);

  // DELETE
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await deleteTrainerAPI(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Trainer Deleted Successfully");
      getAllTrainers();
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      if (!selectedTrainer?._id) return;

      const formData = new FormData();
      formData.append("name", selectedTrainer.name || "");
      formData.append("specialization", selectedTrainer.specialization || "");
      formData.append("experience", selectedTrainer.experience || "");
      formData.append("price", selectedTrainer.price || "");

      if (image) {
        formData.append("image", image);
      }

      const token = localStorage.getItem("token");

      await updateTrainerAPI(selectedTrainer._id, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Trainer Updated Successfully");
      setShowEdit(false);
      setSelectedTrainer(null);
      setImage(null);
      setPreview("");
      getAllTrainers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black px-6 py-10">

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {trainers.map((item) => (
          <div
            key={item._id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5"
          >
            <img
              src={item.profilePic}
              className="w-full h-[300px] object-cover rounded-2xl"
              alt=""
            />

            <h2 className="text-white text-xl mt-3">
              {item.name}
            </h2>

            <p className="text-gray-400">{item.specialization}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  setSelectedTrainer({
                    ...item,
                    name: item.name || "",
                    specialization: item.specialization || "",
                    experience: item.experience || "",
                    price: item.price || "",
                  });

                  setPreview(item.profilePic || "");
                  setShowEdit(true);
                }}
                className="bg-orange-500 px-4 py-2 rounded-xl"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 px-4 py-2 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showEdit && selectedTrainer && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
          <div className="bg-zinc-900 p-6 rounded-xl w-[400px]">

            <input
              value={selectedTrainer.name || ""}
              onChange={(e) =>
                setSelectedTrainer({
                  ...selectedTrainer,
                  name: e.target.value,
                })
              }
              className="w-full p-3 mb-3 bg-black text-white"
              placeholder="Name"
            />

            <input
              value={selectedTrainer.specialization || ""}
              onChange={(e) =>
                setSelectedTrainer({
                  ...selectedTrainer,
                  specialization: e.target.value,
                })
              }
              className="w-full p-3 mb-3 bg-black text-white"
              placeholder="Specialization"
            />

            <input
              value={selectedTrainer.experience || ""}
              onChange={(e) =>
                setSelectedTrainer({
                  ...selectedTrainer,
                  experience: e.target.value,
                })
              }
              className="w-full p-3 mb-3 bg-black text-white"
              placeholder="Experience"
            />

            <input
              value={selectedTrainer.price || ""}
              onChange={(e) =>
                setSelectedTrainer({
                  ...selectedTrainer,
                  price: e.target.value,
                })
              }
              className="w-full p-3 mb-3 bg-black text-white"
              placeholder="Price"
            />

            {preview && (
              <img
                src={preview}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
            )}

            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleUpdate}
                className="bg-green-500 flex-1 py-2 rounded-xl"
              >
                Save
              </button>

              <button
                onClick={() => setShowEdit(false)}
                className="bg-gray-600 flex-1 py-2 rounded-xl"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTrainer;