import React from "react";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import DoctorsPreview from "../components/home/DoctorsPreview";
import Testimonials from "../components/home/Testimonials";

import CTASection from "../components/home/CTASection";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home-main">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <DoctorsPreview />
      <Testimonials />
      <CTASection />
    </main>
  );
}


