import React, { useEffect, useState } from 'react'
import API from '../services/api'
import { motion } from "framer-motion"
import {
    FaCheckCircle,
    FaComments,
    FaMoneyBillWave
} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const FetchBooking = () => {

    const navigate = useNavigate()

    const [booking, setBooking] = useState([])

    const fetchBookings = async () => {

        try {

            const token = localStorage.getItem("token")

            const { data } = await API.get(
                "/api/payment/getBooking",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            console.log(data)

            setBooking(data.booking)

        } catch (error) {

            console.log(error)

        }
    }

    useEffect(() => {

        fetchBookings()

    }, [])

    return (

        <div className="min-h-screen bg-black text-white px-6 lg:px-20 py-28">

            {/* TOP TITLE */}
            <div className="mb-14">

                <h1 className="text-5xl font-black">

                    My Bookings

                </h1>

                <p className="text-gray-400 mt-4 text-lg">

                    View your successful trainer bookings and start chatting with your trainers.

                </p>

            </div>

            {/* BOOKINGS */}
            <div className="grid lg:grid-cols-2 gap-10">

                {
                    booking
                        .filter((item) => item.paymentStatus === "paid")
                        .map((item, index) => (

                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#111] border border-gray-800 rounded-[30px] overflow-hidden shadow-2xl"
                            >

                                {/* IMAGE */}
                                <img
                                    src={item.trainer?.profilePic}
                                    alt={item.trainer?.name}
                                    className="w-full h-[300px] object-cover"
                                />

                                {/* CONTENT */}
                                <div className="p-8">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <h1 className="text-3xl font-black">

                                                {item.trainer?.name}

                                            </h1>

                                            <p className="text-red-500 mt-2 text-lg">

                                                {item.trainer?.role}

                                            </p>

                                        </div>

                                        <div className="w-14 h-14 rounded-2xl bg-green-500/20 text-green-500 flex items-center justify-center text-2xl">

                                            <FaCheckCircle />

                                        </div>

                                    </div>

                                    {/* DETAILS */}
                                    <div className="space-y-5 mt-8">

                                        <div className="bg-black border border-gray-800 rounded-2xl p-5 flex items-center justify-between">

                                            <div className="flex items-center gap-3">

                                                <FaMoneyBillWave className="text-red-500" />

                                                <p className="text-gray-400">

                                                    Amount Paid

                                                </p>

                                            </div>

                                            <h2 className="text-2xl font-black text-red-500">

                                                ₹ {item.amount}

                                            </h2>

                                        </div>

                                        <div className="bg-black border border-gray-800 rounded-2xl p-5 flex items-center justify-between">

                                            <p className="text-gray-400">

                                                Payment Status

                                            </p>

                                            <h2 className="text-green-500 font-bold text-lg">

                                                {item.paymentStatus}

                                            </h2>

                                        </div>

                                    </div>

                                    {/* BUTTON */}
                                    <button onClick={()=>navigate("/chat",{
                                        state:{
                                            trainer:item.trainer,
                                        }
                                    })} className="w-full mt-8 bg-red-500 hover:bg-red-600 transition duration-300 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-lg shadow-red-500/20">

                                    

                                        Chat With Trainer

                                    </button>

                                    <button
  onClick={() => navigate("/my-workouts")}
  className="w-full mt-8 bg-red-500 hover:bg-red-600 transition duration-300 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-lg shadow-red-500/20"
>
  My Workouts
</button>

                                </div>

                            </motion.div>

                        ))
                }

            </div>

            {/* EMPTY STATE */}
            {
                booking.filter((item) => item.paymentStatus === "paid").length === 0 && (

                    <div className="flex flex-col items-center justify-center py-32">

                        <h1 className="text-4xl font-black">

                            No Paid Bookings Found

                        </h1>

                        <p className="text-gray-500 mt-5 text-lg">

                            Book a trainer to start your fitness journey.

                        </p>

                    </div>

                )
            }

        </div>
    )
}

export default FetchBooking