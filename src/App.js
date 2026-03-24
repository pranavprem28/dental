import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppFloat from "./components/common/WhatsAppFloat";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import Gallery from "./pages/Gallery";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
      <WhatsAppFloat />
      
      <Footer />
    </BrowserRouter>
  );
}
