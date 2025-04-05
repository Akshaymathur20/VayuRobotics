import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import animation404 from "../assets/404-animation.json"; 

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 pt-20">
        <Player
          autoplay
          loop
          src={animation404}
          className="w-80 h-80"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-6 mb-2">Oops! Page Not Found</h1>
        <p className="text-gray-600 mb-6 text-lg">The page you are looking for doesn't exist or has been moved. Let’s get you back on track.</p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
