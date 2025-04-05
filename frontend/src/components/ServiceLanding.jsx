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



// import React from "react";
// import image1 from "../assets/service1.jpg"; // replace with your actual image names
// import image2 from "../assets/service1.jpg";
// import image3 from "../assets/service2.jpg";
// import image4 from "../assets/service3.jpg";

// const Card = ({ image, title, description }) => {
//   return (
//     <div
//       className="relative max-w-[35ch] rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 focus-within:scale-105 bg-cover bg-center"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div className="p-10 bg-gradient-to-t from-black/100 via-black/30 to-transparent">
//         <h2 className="relative w-max text-white text-xl font-bold after:block after:h-1 after:w-full after:bg-green-500 after:transition-transform after:duration-500 after:scale-x-0 hover:after:scale-x-100">
//           {title}
//         </h2>
//         <p className="text-white/85 mt-2">{description}</p>
//         <a
//           href="#"
//           className="mt-4 inline-block bg-green-500 text-black px-4 py-2 rounded-md hover:bg-white transition"
//         >
//           Learn More
//         </a>
//       </div>
//     </div>
//   );
// };

// const ServiceLanding = () => {
//   const cardData = [
//     { image: image1, title: "Image 1 Title", description: "Description for image 1" },
//     { image: image2, title: "Image 2 Title", description: "Description for image 2" },
//     { image: image3, title: "Image 3 Title", description: "Description for image 3" },
//     { image: image4, title: "Image 4 Title", description: "Description for image 4" },
//   ];

//   return (
//     <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center p-16">
//       {cardData.map((card, index) => (
//         <Card
//           key={index}
//           image={card.image}
//           title={card.title}
//           description={card.description}
//         />
//       ))}
//     </section>
//   );
// };

// export default ServiceLanding;




