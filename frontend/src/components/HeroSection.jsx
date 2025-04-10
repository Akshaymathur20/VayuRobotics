
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/hero-background.jpeg"; // Importing the background image

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Setting the background image from the assets
      ></div>
      {/* <div>
              <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-40"
        src="/drone-video.mp4"
      ></video>
      </div> */}
      
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Revolutionizing Aerial Solutions with Smart Drones 🚀
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
          High-Precision, Reliable, and Affordable Drone Solutions for Your Business.
        </p>
        <div className="mt-6 flex space-x-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600"
          >
            Get Started
          </motion.button>
          <Link to="/about" >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
