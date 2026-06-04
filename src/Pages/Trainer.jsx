import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTrainerAPI } from "../services/trainerApi"

const Trainer = () => {

  const navigate = useNavigate()

  const [selectedTrainer, setSelectedTrainer] = useState(null)

  const [trainers, setTrainers] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/login")
    }
  },[])

 
  const fetchTrainers = async () => {

    try {

      const result = await getTrainerAPI()

      setTrainers(result.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTrainers()
  }, [])

  return (

    <div className="bg-black min-h-screen text-white px-6 lg:px-20 py-20">

      {/* HEADING */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-black">
          Elite <span className="text-red-500">Trainers</span>
        </h1>

        <p className="text-gray-400 mt-5 text-lg">
          Train with professional fitness coaches.
        </p>

      </div>

      {/* TRAINERS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {trainers?.map((items) => (

          <div
            key={items._id}
            className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-red-500 transition duration-300"
          >

            {/* IMAGE */}
            <img
              src={items.profilePic}
              alt={items.name}
              className="h-[350px] w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {items.name}
              </h2>

              <p className="text-red-500 mt-2">
                {items.specialization}
              </p>

              <p className="text-gray-400 mt-4 leading-7">
                {items.description}
              </p>

              <div className="flex items-center justify-between mt-6">

                <span className="text-gray-300">
                  {items.experience} Years
                </span>

                <span className="text-red-500 font-bold">
                  ₹ {items.price} / Month
                </span>

              </div>

              <button
                onClick={() => setSelectedTrainer(items)}
                className="w-full mt-6 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-semibold"
              >
                Book Session
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}
      {selectedTrainer && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

          <div className="bg-[#111] border border-gray-800 rounded-[35px] overflow-hidden max-w-5xl w-full grid lg:grid-cols-2">

            {/* IMAGE */}
            <img
              src={selectedTrainer.profilePic}
              className="h-full w-full object-cover"
              alt=""
            />

            {/* CONTENT */}
            <div className="p-10 flex flex-col justify-center">

              <h2 className="text-5xl font-black">
                {selectedTrainer.name}
              </h2>

              <p className="text-red-500 text-xl mt-3">
                {selectedTrainer.specialization}
              </p>

              <p className="text-gray-400 mt-6">
                {selectedTrainer.description}
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between bg-black border border-gray-800 p-4 rounded-2xl">
                  <span>Experience</span>
                  <span>{selectedTrainer.experience} Years</span>
                </div>

                <div className="flex justify-between bg-black border border-gray-800 p-4 rounded-2xl">
                  <span>Price</span>
                  <span className="text-red-500 font-bold">
                    ₹ {selectedTrainer.price}
                  </span>
                </div>

              </div>

              <button
                onClick={() =>
                  navigate("/payment", {
                    state: { trainer: selectedTrainer }
                  })
                }
                className="w-full mt-10 bg-red-500 hover:bg-red-600 py-5 rounded-2xl font-semibold"
              >
                Proceed Payment
              </button>

              <button
                onClick={() => setSelectedTrainer(null)}
                className="w-full mt-4 border border-gray-700 py-4 rounded-2xl"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default Trainer