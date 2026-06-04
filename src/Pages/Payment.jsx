import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCreditCard,
  FaLock,
} from "react-icons/fa"

import API from "../services/api"

const Payment = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const trainer = location.state?.trainer

  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const [fullname, setFullname] = useState("")

  // PAYMENT FUNCTION
  const handlePayment = async (e) => {

    e.preventDefault()

    try {

      const token = localStorage.getItem("token")

      // CREATE ORDER
      const { data } = await API.post(
        "/api/payment/create-order",
        {
          trainerId: trainer._id,
          amount: trainer.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      // RAZORPAY OPTIONS
      const options = {

        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: data.order.amount,

        currency: "INR",

        name: "FitVers",

        description: "Trainer Booking Payment",

        order_id: data.order.id,

        prefill: {

          name: fullname,

        },

        theme: {

          color: "#ef4444",

        },

        handler: async function (response) {

          try {

            // VERIFY PAYMENT
            const verifyResponse = await API.post(
              "/api/payment/verify-payment",
              response,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )

            if (verifyResponse.data.success) {

              setPaymentSuccess(true)

              alert("Payment Successful")

            } else {

              alert("Payment Verification Failed")

            }

          } catch (error) {

            console.log(error)

            alert("Verification Error")

          }
        },

        modal: {

          ondismiss: function () {

            console.log("Payment popup closed")

          },

        },
      }

      const razorpay = new window.Razorpay(options)

      razorpay.on("payment.failed", function (response) {

        console.log(response.error)

        alert(response.error.description)

      })

      razorpay.open()

    } catch (error) {

      console.log(error.response?.data || error)

      alert(
        error.response?.data?.message || "Payment Failed"
      )
    }
  }

  // IF NO TRAINER
  if (!trainer) {

    return (

      <div className="bg-black min-h-screen flex items-center justify-center text-white text-3xl font-bold">

        No Trainer Selected

      </div>
    )
  }

  return (

    <div className="bg-black min-h-screen text-white overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      <section className="relative z-10 px-6 lg:px-20 py-20">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 mb-10 text-gray-300 hover:text-red-500 transition duration-300"
        >

          <FaArrowLeft />

          Back

        </button>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* TRAINER CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] border border-gray-800 rounded-[35px] overflow-hidden"
          >

            <img
              src={trainer.profilePic}
              alt={trainer.name}
              className="w-full h-[450px] object-cover"
            />

            <div className="p-8">

              <h1 className="text-4xl font-black">

                {trainer.name}

              </h1>

              <p className="text-red-500 text-xl mt-3">

                {trainer.role}

              </p>

              <p className="text-gray-400 leading-8 mt-6">

                {trainer.description}

              </p>

              <div className="space-y-5 mt-10">

                <div className="bg-black border border-gray-800 rounded-2xl p-5 flex items-center justify-between">

                  <p className="text-gray-400">
                    Experience
                  </p>

                  <p className="font-bold text-xl">
                    {trainer.experience}
                  </p>

                </div>

                <div className="bg-black border border-gray-800 rounded-2xl p-5 flex items-center justify-between">

                  <p className="text-gray-400">
                    Monthly Fee
                  </p>

                  <p className="text-3xl font-black text-red-500">

                    ₹ {trainer.price}

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* PAYMENT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] border border-gray-800 rounded-[35px] p-8 lg:p-12"
          >

            {!paymentSuccess ? (

              <>

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-red-500/20 text-red-500 flex items-center justify-center text-3xl">

                    <FaCreditCard />

                  </div>

                  <div>

                    <h2 className="text-4xl font-black">

                      Secure Payment

                    </h2>

                    <p className="text-gray-400 mt-2">

                      Complete your trainer booking

                    </p>

                  </div>

                </div>

                {/* FORM */}
                <form
                  onSubmit={handlePayment}
                  className="space-y-8 mt-12"
                >

                  <div>

                    <label className="text-gray-300">

                      Full Name

                    </label>

                    <input
                      type="text"
                      value={fullname}
                      onChange={(e) =>
                        setFullname(e.target.value)
                      }
                      placeholder="Enter your full name"
                      className="w-full mt-3 bg-black border border-gray-800 focus:border-red-500 outline-none rounded-2xl px-6 py-5"
                      required
                    />

                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 py-5 rounded-2xl text-lg font-bold transition duration-300 shadow-lg shadow-red-500/30 flex items-center justify-center gap-3"
                  >

                    <FaLock />

                    Pay ₹ {trainer.price}

                  </button>

                </form>

              </>

            ) : (

              <div className="flex flex-col items-center justify-center h-full text-center py-20">

                <div className="w-32 h-32 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-6xl">

                  <FaCheckCircle />

                </div>

                <h2 className="text-5xl font-black mt-10">

                  Payment Successful

                </h2>

                <p className="text-gray-400 mt-6 text-lg leading-8 max-w-lg">

                  Your trainer booking has been confirmed successfully.

                </p>

              </div>

            )}

          </motion.div>

        </div>

      </section>

    </div>
  )
}

export default Payment