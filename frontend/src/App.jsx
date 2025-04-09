import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import About from "./pages/About";
import ContactMe from "./pages/Contact";
import ServiceDetail from "./components/ServiceDetail";
import ScrollToTop from "./components/ScrollTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
