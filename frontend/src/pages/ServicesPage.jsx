import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/services.json";

import image1 from "../assets/service1.jpg";
import image2 from "../assets/service2.jpg";
import image3 from "../assets/service3.jpg";

const imageMap = {
  "service1.jpg": image1,
  "service2.jpg": image2,
  "service3.jpg": image3,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ServiceCard = ({ id, service, highlights, image, index }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/services/${id}`);
  };

  return (
    <motion.div
      className="bg-white px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 py-30"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      
    >
      <img
        src={image}
        alt={service}
        className="w-full h-50 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{service}</h3>
      <p className="mt-2 text-gray-600">
        {highlights?.[0]?.description?.[0] || "Explore more about this service."}
      </p>
      <button
        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        onClick={goToDetail}
      >
        Know More
      </button>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = useMemo(
    () =>
      data.map((service) => ({
        ...service,
        image: imageMap[service.image] || image1,
      })),
    []
  );

  return (
    <>
      <Navbar />

      <section className="py-40 bg-gray-100 text text-center">
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block">
            <span className="relative z-10">
              Our Full Range of <span className="text-yellow-600">Services</span>
            </span>
            
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Explore all the services we offer with precision, reliability, and a passion for excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 py-10">
          {services.length === 0 ? (
            <p className="text-red-500">No services available. Please check your JSON.</p>
          ) : (
            services.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
