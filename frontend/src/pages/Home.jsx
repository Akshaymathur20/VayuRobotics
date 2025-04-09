import React from "react";
import Navbar from "../components/Navbar"; 
import Hero from "../components/HeroSection";
import ServicesLanding from "../components/ServiceLanding";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";

const Home = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Hero Section Component */}
      <Hero />
      
      {/* Services Landing Section Component */}
      <ServicesLanding />

      <StatsSection/>
      
      {/* Footer*/}
      <Footer/>
    </div>
  );
};

export default Home;
