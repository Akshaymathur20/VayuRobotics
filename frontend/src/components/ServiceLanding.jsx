import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import services from "../data/services.json"
import image1 from "../assets/service1.jpg";
import image2 from "../assets/service2.jpg";
import image3 from "../assets/service3.jpg";

const imageMap= {
  'service1.jpg':image1,
  'service2.jpg':image2,
  'service3.jpg':image3,
}

const ServicesLanding = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12 px-4">
       
      <motion.div
                className="text-center mb-16 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block">
                  <span className="relative z-10">
                    Our  <span className="text-yellow-600">Services</span>
                  </span>
                  
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
                  Explore the services we offer with precision, reliability, and a passion for excellence.
                </p>
              </motion.div>
              </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-10 md:px-20">
        {services.slice(0,4).map((service, index) => (
         <Link to={`/services/${service.id}`} key={service.id}>
            <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative w-full h-80 bg-cover bg-center rounded-xl shadow-lg overflow-hidden group"
            style={{backgroundImage:`url(${imageMap[service.image]})`}}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Title Always Visible */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-md">
                {service.service}
              </h3>
            </div>
          </motion.div>
         </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
          >
            More Services
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesLanding;
