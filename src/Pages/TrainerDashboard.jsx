import React, { useEffect, useState } from "react";
import { getTrainerBookingsAPI } from "../services/trainerApi";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function TrainerDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  const token = localStorage.getItem("trainerToken");

  const fetchBookings = async () => {
    try {
      setLoading(true);

      const res = await getTrainerBookingsAPI(token);
      console.log("API RESPONSE:", res.data);

      if (res.data?.success) {
        setBookings(res.data.booking || []);
      } else {
        setBookings([]);
      }
    } catch (error) {
      console.log(error);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "bg-green-500/20 text-green-400 border-green-500";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500";
      case "failed":
        return "bg-red-500/20 text-red-400 border-red-500";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-6">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-wide">
          Trainer Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Manage your bookings and payments
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-gray-400 animate-pulse">
          Loading bookings...
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {bookings?.filter((b)=>b.paymentStatus === "paid").length > 0 ? (
            bookings.filter((b)=>b.paymentStatus === "paid")
            .map((b) => (
              <div
                key={b._id}
                className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition-transform duration-300"
              >
                {/* User Name */}
                <h2 className="text-xl font-semibold mb-1">
                  {b.user?.name}
                </h2>

                {/* Email */}
                <p className="text-gray-400 text-sm mb-3">
                  {b.user?.email}
                </p>

                {/* Divider */}
                <div className="h-px bg-zinc-800 my-3" />

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <p>
                    💰 Price:{" "}
                    <span className="text-white font-medium">
                      ₹{b.amount}
                    </span>
                  </p>

                  <p>
                    🧾 Payment:
                    <span
                      className={`ml-2 px-2 py-1 rounded-full border text-xs ${getStatusColor(
                        b.paymentStatus
                      )}`}
                    >
                      {b.paymentStatus}
                    </span>
                  </p>
                </div>

                <button
  disabled={b.paymentStatus !== "paid"}
  onClick={() => {
    if (b.paymentStatus !== "paid") return;

    console.log("Sending User:", b.user);

    navigate(`/chat/${b.user._id}`, {
      state: {
        user: b.user,
      },
    });
  }}
  className={`mt-4 px-4 py-2 rounded-xl font-semibold transition
    ${
      b.paymentStatus === "paid"
        ? "bg-red-500 hover:bg-red-600 text-white"
        : "bg-gray-700 text-gray-400 cursor-not-allowed"
    }`}
>
  {b.paymentStatus === "paid" ? "Chat" : "Payment Required"}
</button>

<button
  onClick={() =>
    navigate(`/assign-workout/${b.user._id}`)
  }
  className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
>
  Assign Workout
</button>


<button
  onClick={() =>
    navigate(`/progress/${b.user._id}`)
  }
  className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
>
  View Progress
</button>


              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">
              No bookings yet 🚫
            </div>
          )}
        </div>
      )}
<div className="p-4">
<button
      onClick={() => navigate('/')}
      className="flex  items-center gap-2 text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl transition"
    >
      <ArrowLeft size={18} />
      Back
    </button>
    </div>
    </div>
  );
}

export default TrainerDashboard;