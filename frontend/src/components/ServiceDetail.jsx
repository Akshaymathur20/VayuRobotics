import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import services from "../data/services.json";
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
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
          Service not found
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-12 px-4 bg-gray-100">
  <motion.div
    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 md:p-10 rounded-xl shadow"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div>
      <img
        src={imageMap[service.image] || image1}
        alt={service.name}
        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
        {service.service}
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-6">{service.description}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/brochures/sample-brochure.pdf"
          download
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition text-center"
        >
          Download Brochure
        </a>
        <button
          className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition text-center"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </div>
  </motion.div>
</section>

{/* Highlights Section */}
{service.highlights && service.highlights.length > 0 && (
  <section className="py-12 px-4 bg-gray-100">
    <motion.div
      className="max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        Key Highlights
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {service.highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-xl transition duration-300"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-4">
              {highlight.name}
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
              {highlight.description.map((desc, i) => (
                <li key={i}>{desc.trim()}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
)}

      <Footer />
    </>
  );
};

export default ServiceDetail;
