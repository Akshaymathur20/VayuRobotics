import React from "react";
import Navbar from "../components/Navbar"; // Importing Navbar component
import Hero from "../components/HeroSection";
import ServicesLanding from "../components/ServiceLanding";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Hero Section Component */}
      <Hero />
      
      {/* Services Landing Section Component */}
      <ServicesLanding />
      
      {/* Other sections or content for your home page */}
      <Footer/>
    </div>
  );
};

export default Home;
