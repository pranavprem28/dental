import React from "react";
import "../styles/pages.css";

export default function About() {
  return (
    <main className="page">
    
      <section className="pageHeader">
        <div className="container">
          <h1>About SmileCare</h1>
          <p>
            A modern dental clinic focused on hygiene, comfort, and confident smiles.
          </p>
        </div>
      </section>

      
      <section className="section">
        <div className="container grid-2">
          <div className="imageBox">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200"
              alt="Clinic"
            />
          </div>

          <div>
            <h2 className="section__title">Who We Are</h2>
            <p className="section__text">
              SmileCare is a trusted dental clinic providing advanced treatments for
              patients of all ages. We focus on painless procedures, high-quality
              results, and long-term dental health.
            </p>

            <ul className="checklist">
              <li>Clean & Hygienic Environment</li>
              <li>Experienced Specialist Doctors</li>
              <li>Modern Equipment & Painless Treatments</li>
              <li>Affordable Treatment Plans</li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="section section--gray">
        <div className="container grid-2">
          <div>
            <h2 className="section__title">Our Mission</h2>
            <p className="section__text">
              Our mission is to provide world-class dental care with compassion. We
              want every patient to feel safe, comfortable, and confident while
              receiving treatment.
            </p>

            <p className="section__text">
              We believe a healthy smile improves your confidence, lifestyle, and
              overall well-being.
            </p>
          </div>

          <div className="imageBox">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200"
              alt="Dental treatment"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
