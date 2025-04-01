// import React, { useMemo } from "react";
// import Navbar from "../components/Navbar";
// // Service Card Component (Reusable)
// const ServiceCard = ({ name, description, image }) => (
//   <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//     <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
//     <h3 className="text-xl font-semibold mt-4">{name}</h3>
//     <p className="mt-2 text-gray-600">{description}</p>
//   </div>
// );

// const ServicesPage = () => {
//   // Memoized service data
//   const services = useMemo(() => [
//     { name: "Aerial Photography", description: "Capture stunning aerial photos and videos.", image: "../assets/service3.jpg" },
//     { name: "Surveillance", description: "Provide surveillance for security and monitoring.", image: "/assets/service2.jpg" },
//     { name: "Agriculture Monitoring", description: "Monitor crops, weather, and growth patterns.", image: "/assets/service3.jpg" },
//     { name: "Delivery Drones", description: "Quick and efficient delivery solutions.", image: "/assets/service4.jpg" },
//     { name: "Inspection", description: "Inspect hard-to-reach areas with precision.", image: "/assets/service1.jpg" },
//     { name: "Disaster Management", description: "Aid in disaster management with fast aerial surveys.", image: "/assets/service2.jpg" },
//     { name: "Mapping & Surveying", description: "Create maps and survey land with drones.", image: "/assets/service3.jpg" },
//     { name: "Construction Monitoring", description: "Monitor construction sites remotely.", image: "/assets/service4.jpg" },
//     { name: "Search & Rescue", description: "Help in search and rescue operations.", image: "/assets/service1.jpg" },
//     { name: "Infrastructure Maintenance", description: "Inspect infrastructure like bridges and power lines.", image: "/assets/service2.jpg" },
//   ], []);

//   return (
//     <>
//        <Navbar/>
//     <section className="py-16 bg-gray-100">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-800">Our Full Range of Services</h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Explore all the services we offer with precision and reliability.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
//         {services.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </div>
//     </section>
//     </>
//   );
// };

// export default ServicesPage;
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "../components/Navbar";
import image1 from "../assets/service1.jpg";
import image2 from "../assets/service2.jpg";
import image3 from "../assets/service3.jpg";
import Footer from "../components/Footer";


const ServiceCard = ({ name, description, image }) => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => navigate(`/service/${encodeURIComponent(name)}`)}
      >
        Know More
      </button>
    </div>
  );
};

const ServicesPage = () => {
  const services = useMemo(() => [
    { name: "Aerial Photography", description: "Capture stunning aerial photos and videos.", image: image1 },
    { name: "Surveillance", description: "Provide surveillance for security and monitoring.", image: image2 },
    { name: "Agriculture Monitoring", description: "Monitor crops, weather, and growth patterns.", image: image3 },
    { name: "Delivery Drones", description: "Quick and efficient delivery solutions.", image: image1 },
        { name: "Inspection", description: "Inspect hard-to-reach areas with precision.", image:image1 },
    { name: "Disaster Management", description: "Aid in disaster management with fast aerial surveys.", image: image2 },
    { name: "Mapping & Surveying", description: "Create maps and survey land with drones.", image: image3 },
    { name: "Construction Monitoring", description: "Monitor construction sites remotely.", image: image1 },
    { name: "Search & Rescue", description: "Help in search and rescue operations.", image: image2 },
    { name: "Infrastructure Maintenance", description: "Inspect infrastructure like bridges and power lines.", image: image3 }
  ], []);

  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Full Range of Services</h2>
          <p className="mt-4 text-lg text-gray-600">Explore all the services we offer with precision and reliability.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ServicesPage;
