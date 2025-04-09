import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import image1 from "../assets/service1.jpg"; 
import image2 from "../assets/service2.jpg";
import image3 from "../assets/service3.jpg";

const services = [
  { name: "Aerial Photography", image: image1 },
  { name: "Surveillance", image: image2 },
  { name: "Agriculture Monitoring", image: image3 },
];

const ServicesLanding = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">Explore our amazing drone solutions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-80 bg-cover bg-center rounded-xl shadow-lg overflow-hidden group"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <span className="text-white text-2xl font-semibold drop-shadow-lg">
                {service.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            More Services
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesLanding;

