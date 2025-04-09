import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-yellow-400">Vayu Robotics</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-xl text-gray-700">
          <Link to="/" className="cursor-pointer hover:text-yellow-500">Home</Link>
          <Link to="/services" className="cursor-pointer hover:text-yellow-500">Services</Link>
          <Link to="/about" className="cursor-pointer hover:text-yellow-500">About</Link>
          <Link to="/contact" className="cursor-pointer hover:text-yellow-500">Contact</Link>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
          Contact Us
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-700 cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="cursor-pointer hover:text-Yellow-500" onClick={() => setNavOpen(false)}>Home</Link>
            <Link to="/services" className="cursor-pointer hover:text-blue-500" onClick={() => setNavOpen(false)}>Services</Link>
            <Link to="/about" className="cursor-pointer hover:text-blue-500" onClick={() => setNavOpen(false)}>About</Link>
            <Link to="/contact" className="cursor-pointer hover:text-blue-500" onClick={() => setNavOpen(false)}>Contact</Link>
            <button className="bg-blue-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
