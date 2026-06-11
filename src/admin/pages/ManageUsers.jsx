import { useEffect, useState } from "react";
import adminAPI from "../../services/adminApi";
import { Trash2 } from "lucide-react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await adminAPI.get("/api/admin/bookings");
      setBookings(res.data.booking);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await adminAPI.get("/api/admin/allusers");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await adminAPI.delete(`/api/admin/delete-user/${id}`);
      alert("User deleted");
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Users</h1>

      <div className="grid gap-4 mb-12">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
      <div className="grid gap-4">
        {bookings.map((b) => (
          <div key={b._id} className="bg-white p-4 rounded-xl shadow">

<img
  src={b.user?.profilePic}
  alt="user"
  className="w-10 h-10 rounded-full object-cover"
/>
            <p>
              <strong>User:</strong> {b.user?.name} ({b.user?.email})
            </p>
            <p>
              <strong>Amount:</strong> ₹{b.amount} — {b.paymentStatus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
