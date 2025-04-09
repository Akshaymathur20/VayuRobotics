import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from '../assets/service1.jpg'

const About = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 pt-32 pb-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
            About <span className="text-yellow-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a cutting-edge drone service provider committed to transforming industries with aerial innovation.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to leverage the power of drone technology to make processes smarter, faster, and safer. 
              Whether it's aerial photography, agricultural monitoring, or infrastructure inspection – we provide reliable and innovative solutions tailored to your needs.
            </p>
          </motion.div>
          <motion.img
            src={Image}
            alt="Our Mission"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
            Why Choose <span className="text-Yellow-600">Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Pilots', desc: 'Professionally trained drone pilots with years of experience.' },
              { title: 'High-Tech Equipment', desc: 'Using latest drones with high-resolution imaging and sensors.' },
              { title: 'Affordable Packages', desc: 'Custom pricing that suits businesses of all sizes.' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold text-gray-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6 bg-yellow-100 text-black">
        <h2 className="text-4xl font-bold mb-4">Want to See Us in Action?</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Explore our services to see how we can elevate your project to new heights.
        </p>
        <a
          href="/services"
          className="bg-yellow-600 text-black-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          View Our Services
        </a>
      </section>

      <Footer />
    </>
  );
};

export default About;
