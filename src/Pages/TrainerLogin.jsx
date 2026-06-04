import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { TrainerLoginAPI } from "../services/trainerApi";

function TrainerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const reqBody = {
      email,
      password,
    };
    console.log(reqBody);
  
    try {
      const response = await TrainerLoginAPI(reqBody);
  
      if (response.data.success) {
        localStorage.setItem(
          "trainerToken",
          response.data.token
        );
  
        localStorage.setItem(
          "trainer",
          JSON.stringify(
            response.data.trainer
          )
        );
  
        alert("Login Successful");
        navigate("/trainer-dashboard");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-8">

        <div className="flex flex-col items-center mb-8">
          <div className="bg-orange-500 p-4 rounded-full mb-4">
            <FaUserTie className="text-white text-3xl" />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Trainer Login
          </h2>

          <p className="text-zinc-400 mt-2 text-center">
            Sign in to access your trainer dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="text-zinc-300 mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              placeholder="trainer@gmail.com"
              className="w-full bg-zinc-800 text-white p-4 rounded-xl border border-zinc-700 outline-none focus:border-orange-500"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div>
            <label className="text-zinc-300 mb-2 block">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full bg-zinc-800 text-white p-4 rounded-xl border border-zinc-700 outline-none focus:border-orange-500"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold py-4 rounded-xl"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default TrainerLogin;