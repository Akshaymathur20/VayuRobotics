import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Vayu Robotics</h3>
          <p className="text-gray-400">Providing cutting-edge drone solutions with precision and reliability.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Details & Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: contact@VayuRobotics.com</p>
          <p className="text-gray-400">Phone: +075 *** ***</p>
          <p className="text-gray-400">Location: 123 MP Nagar, Bhopal, MP</p>
          
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedinIn />
            </a>
          </div> 
        </div>
      </div>
      
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-500">
        &copy; {new Date().getFullYear()} Vayu Robotics. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
