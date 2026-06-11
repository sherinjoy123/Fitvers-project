import React, { useState } from "react"
import { createTrainerAPI } from "../../services/trainerApi"
import { FaUserTie } from "react-icons/fa"

const CreateTrainer = () => {

  const [trainerData, setTrainerData] = useState({
    name: "",
    email:"",
    password:"",
    specialization: "",
    experience: "",
    price:""
  })

  const [image, setImage] = useState("")

  const handleCreate = async () => {

    const {
      name,
      email,
      password,
      specialization,
      experience,
      price
    } = trainerData

    if (!name || !email || !password || !specialization || !experience || !price || !image) {
      alert("Please fill all fields")
      return
    }

    const reqBody = new FormData()

    reqBody.append("name", name)
    reqBody.append("email",email)
    reqBody.append("password",password)
    reqBody.append("specialization", specialization)
    reqBody.append("experience", experience)
    reqBody.append("price",price)
    reqBody.append("image", image)

    const reqHeader = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {

      const result = await createTrainerAPI(
        reqBody,
        reqHeader
      )

      console.log(result)

      alert("Trainer Added Successfully")

      setTrainerData({
        name: "",
        email:"",
        password:"",
        specialization: "",
        experience: "",
        price:""
      })

      setImage("")

    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className="min-h-screen bg-black flex justify-center items-center p-4">

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-8 border border-zinc-800">

        <div className="flex flex-col items-center mb-6">

          <div className="bg-orange-500 p-4 rounded-full mb-3">
            <FaUserTie className="text-white text-3xl" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Add Trainer
          </h1>

          <p className="text-zinc-400 text-sm mt-2">
            Create new trainer profile
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="text"
            value={trainerData.name}
            placeholder="Trainer Name"
            className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
            onChange={(e)=>
              setTrainerData({
                ...trainerData,
                name:e.target.value
              })
            }
          />

            <input
            type="email"
            value={trainerData.email}
            placeholder="Email"
            className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
            onChange={(e)=>
              setTrainerData({
                ...trainerData,
                email:e.target.value
              })
            }
          />

            <input
            type="password"
            value={trainerData.password}
            placeholder="Password"
            className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
            onChange={(e)=>
              setTrainerData({
                ...trainerData,
                password:e.target.value
              })
            }
          />

          <input
            type="text"
            value={trainerData.specialization}
            placeholder="Specialization"
            className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
            onChange={(e)=>
              setTrainerData({
                ...trainerData,
                specialization:e.target.value
              })
            }
          />

          <input
            type="text"
            value={trainerData.experience}
            placeholder="Experience"
            className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
            onChange={(e)=>
              setTrainerData({
                ...trainerData,
                experience:e.target.value
              })
            }
          />

<input
  type="number"
  value={trainerData.price}
  placeholder="Price"
  className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
  onChange={(e)=>
    setTrainerData({
      ...trainerData,
      price:e.target.value
    })
  }
/>

          <div className="bg-zinc-800 border border-dashed border-zinc-600 rounded-xl p-4 text-center">

            <input
              type="file"
              className="text-white"
              onChange={(e)=>
                setImage(e.target.files[0])
              }
            />

          </div>

          <button
            onClick={handleCreate}
            className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold py-4 rounded-xl"
          >
            Add Trainer
          </button>

        </div>

      </div>

    </div>
  )
}

export default CreateTrainer