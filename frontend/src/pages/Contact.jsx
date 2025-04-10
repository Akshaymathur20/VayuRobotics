import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-gray-100 to-white min-h-screen pt-40 pb-18 px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>
          <p className="text-center text-gray-500 mb-10">We’d love to hear from you! Whether you have a question or just want to say hi.</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+91 ***** *****"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert("Thanks for reaching out!");
                }}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 border-t pt-6 text-center">
            <p className="text-gray-600">Or reach us directly:</p>
            <p className="mt-2 text-lg font-medium text-gray-800">
              📧 <a href="mailto:info@dronetech.com" className="text-yellow-600 hover:underline">vayurobotics@gmail.com</a>
            </p>
            <p className="mt-1 text-lg font-medium text-gray-800">
              📞 <a href="tel:+919876543210" className="text-yellow-600 hover:underline">+ 91 ***** *****</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
