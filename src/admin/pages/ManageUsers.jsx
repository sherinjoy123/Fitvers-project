import React, { useEffect, useState } from "react"
import API from "../../services/api"
import { Trash2 } from "lucide-react"

const ManageUsers = () => {

  const [users, setUsers] = useState([])

  const [bookings,setBookings] = useState([])

  



  useEffect(()=>{
    const fetchBookings = async()=>{
      const token = localStorage.getItem("token")
     
      const res = await API.get("/api/admin/bookings",{
        headers:{
           Authorization: `Bearer ${token}`,
        }
      })
      setBookings(res.data.booking)
    }
    fetchBookings()
  },[])

  // FETCH USERS
  const fetchUsers = async () => {
  const token = localStorage.getItem("token")
    try {

      const response = await API.get(
        "/api/admin/allusers",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setUsers(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchUsers()

  }, [])

  // DELETE USER
  const handleDelete = async (id) => {

    try {

      await API.delete(
        `/api/admin/delete-user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert("User deleted")

      fetchUsers()

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="min-h-screen bg-black text-white p-6 lg:p-10">

      {/* HEADING */}
      <div className="mb-10">

        <h1 className="text-4xl font-black">
          Manage <span className="text-red-500">Users</span>
        </h1>

        <p className="text-gray-400 mt-2">
          Delete and manage all registered users.
        </p>

      </div>

      {/* USERS LIST */}
      <div className="space-y-5">

        {
          users.map((user) => (

            <div
              key={user._id}
              className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex items-center justify-between"
            >

              {/* USER INFO */}
              <div>

                <h2 className="text-xl font-bold">
                  {user.name}
                </h2>

                <p className="text-gray-400">
                  {user.email}
                </p>

              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => handleDelete(user._id)}
                className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl flex items-center gap-2 transition duration-300"
              >

                <Trash2 size={18} />

                Delete

              </button>

            </div>

          ))
        }

      </div>
      <section className="mt-10">
  <h1 className="text-3xl font-bold mb-5 text-red-500">
    Booked Users
  </h1>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
  {bookings?.map((item) => {

return (
  <div
    key={item._id}
    className="bg-zinc-900 p-4 rounded-xl border border-zinc-800"
  >
    <img
      src={
        item.user?.profilePic ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
      alt=""
      className="w-14 h-14 rounded-full object-cover mb-3"
    />

    <h2 className="text-lg font-bold">
      {item.user?.name}
    </h2>

    <p className="text-gray-400">
      {item.user?.email}
    </p>

    <p className="text-sm">
  <span className="font-bold">Payment Status:</span>{" "}
  <span
    className={
      item.paymentStatus === "paid"
        ? "text-green-500"
        : item.paymentStatus === "pending"
        ? "text-yellow-500"
        : "text-red-500"
    }
  >
    {item.paymentStatus}
  </span>
</p>

<p className="text-sm">
  <span className="font-bold">Amount:</span> ₹{item.amount}
</p>
  </div>
);
})}
  </div>
</section>

    </div>

  )
}

export default ManageUsers