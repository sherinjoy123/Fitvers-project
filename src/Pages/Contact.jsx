import React from "react"
import { motion } from "framer-motion"

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaHeadset,
} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 pt-32 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >

          <div className="inline-flex items-center gap-3 bg-[#111] border border-gray-800 px-5 py-3 rounded-full mb-8">

            <FaHeadset className="text-red-500" />

            <p className="text-sm tracking-widest uppercase text-gray-300">
              Contact FitVerse
            </p>

          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">

            Let’s Build Your
            <span className="text-red-500"> Fitness Journey</span>

          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl mx-auto">

            Have questions, feedback, or partnership ideas?
            Our team is here to help you achieve your goals
            and create the ultimate fitness experience.

          </p>

        </motion.div>

      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 lg:px-20 pb-24 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#0f0f0f] border border-gray-800 rounded-[40px] p-8 lg:p-12"
          >

            <h2 className="text-4xl font-black">
              Get In Touch
            </h2>

            <p className="text-gray-400 leading-8 mt-6 text-lg">

              We would love to hear from you.
              Whether you're a fitness enthusiast,
              trainer, or business partner, feel free
              to reach out to us anytime.

            </p>

            {/* CONTACT INFO */}
            <div className="space-y-8 mt-12">

              <div className="flex items-start gap-5">

                <div className="bg-red-500/20 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl">

                  <FaEnvelope />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Email Us
                  </h3>

                  <p className="text-gray-400 mt-2">
                    support@fitverse.com
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    We reply within 24 hours
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="bg-red-500/20 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Call Us
                  </h3>

                  <p className="text-gray-400 mt-2">
                    +91 98765 43210
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Monday - Saturday, 9AM - 8PM
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="bg-red-500/20 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Visit Office
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Kochi, Kerala, India
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    FitVerse HQ & Fitness Studio
                  </p>

                </div>

              </div>

            </div>

            {/* SOCIALS */}
            <div className="mt-14">

              <h3 className="text-2xl font-bold">
                Follow Us
              </h3>

              <div className="flex gap-5 mt-6">

                <button className="w-14 h-14 rounded-2xl bg-[#111] border border-gray-800 hover:border-red-500 flex items-center justify-center text-xl transition duration-300">
                  <FaInstagram />
                </button>

                <button className="w-14 h-14 rounded-2xl bg-[#111] border border-gray-800 hover:border-red-500 flex items-center justify-center text-xl transition duration-300">
                  <FaFacebookF />
                </button>

                <button className="w-14 h-14 rounded-2xl bg-[#111] border border-gray-800 hover:border-red-500 flex items-center justify-center text-xl transition duration-300">
                  <FaTwitter />
                </button>

                <button className="w-14 h-14 rounded-2xl bg-[#111] border border-gray-800 hover:border-red-500 flex items-center justify-center text-xl transition duration-300">
                  <FaLinkedinIn />
                </button>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#0f0f0f] border border-gray-800 rounded-[40px] p-8 lg:p-12"
          >

            <h2 className="text-4xl font-black">
              Send Message
            </h2>

            <p className="text-gray-400 leading-8 mt-6 text-lg">

              Fill out the form below and our team
              will get back to you as soon as possible.

            </p>

            {/* FORM */}
            <form className="mt-12 space-y-8">

              {/* NAME */}
              <div>

                <label className="text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-3 bg-[#111] border border-gray-800 focus:border-red-500 outline-none rounded-2xl px-6 py-5 transition duration-300"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-3 bg-[#111] border border-gray-800 focus:border-red-500 outline-none rounded-2xl px-6 py-5 transition duration-300"
                />

              </div>

              {/* SUBJECT */}
              <div>

                <label className="text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full mt-3 bg-[#111] border border-gray-800 focus:border-red-500 outline-none rounded-2xl px-6 py-5 transition duration-300"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full mt-3 bg-[#111] border border-gray-800 focus:border-red-500 outline-none rounded-2xl px-6 py-5 transition duration-300 resize-none"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition duration-300 shadow-lg shadow-red-500/30"
              >

                <FaPaperPlane />

                Send Message

              </button>

            </form>

          </motion.div>

        </div>

      </section>

      {/* MAP SECTION */}
      <section className="px-6 lg:px-20 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-[40px] overflow-hidden border border-gray-800"
        >

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62883.91892762467!2d76.267304!3d9.931233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d3d2f3e2c3b%3A0x3f8b1f4c7c7d7d7!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="w-full h-[500px]"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </motion.div>

      </section>

    </div>
  )
}

export default Contact