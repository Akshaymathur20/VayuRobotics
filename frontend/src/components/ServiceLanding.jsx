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
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">Explore our amazing drone solutions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-10 md:px-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative w-full h-80 bg-cover bg-center rounded-xl shadow-lg overflow-hidden group"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Title Always Visible */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-md">
                {service.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
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
