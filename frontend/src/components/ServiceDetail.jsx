import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../assets/service1.jpg";
import image2 from "../assets/service2.jpg";
import image3 from "../assets/service3.jpg";

// All service data
const services = [
  {
    name: "Aerial Photography",
    description: "Capture stunning aerial photos and videos using high-resolution cameras mounted on drones. Perfect for real estate, events, and landscape shots.",
    image: image1,
  },
  {
    name: "Surveillance",
    description: "Advanced surveillance using drones to ensure safety and monitor areas with precision. Ideal for industrial, private, and public spaces.",
    image: image2,
  },
  {
    name: "Agriculture Monitoring",
    description: "Track crop health, irrigation needs, and field patterns using drone-based data collection and imagery. Enhance yield and reduce waste.",
    image: image3,
  },
  {
    name: "Delivery Drones",
    description: "Experience fast, contactless deliveries using our intelligent drone delivery systems built for modern logistics.",
    image: image1,
  },
  {
    name: "Inspection",
    description: "Access hard-to-reach areas for detailed visual inspections. Reduce risk and increase accuracy in infrastructure checks.",
    image: image1,
  },
  {
    name: "Disaster Management",
    description: "Rapid aerial surveys during emergencies to assess damage, find survivors, and assist rescue teams efficiently.",
    image: image2,
  },
  {
    name: "Mapping & Surveying",
    description: "Generate accurate 2D/3D maps and survey terrains quickly using GPS-enabled drones for urban planning or land assessments.",
    image: image3,
  },
  {
    name: "Construction Monitoring",
    description: "Monitor construction site progress, track materials, and ensure safety compliance with live drone feeds.",
    image: image1,
  },
  {
    name: "Search & Rescue",
    description: "Deploy drones in critical rescue missions to locate people faster in inaccessible or risky environments.",
    image: image2,
  },
  {
    name: "Infrastructure Maintenance",
    description: "Regular maintenance checks of power lines, bridges, and towers with high-zoom drone visuals and thermal imagery.",
    image: image3,
  },
];

// Slug function
const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => slugify(s.name) === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-700">Service not found!</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          <img src={service.image} alt={service.name} className="w-full h-96 object-cover" />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.name}</h2>
            <p className="text-gray-600 text-lg">{service.description}</p>
            <button
              onClick={() => navigate(-1)}
              className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
