import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div className="imageBox">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200"
            alt="Clinic"
          />
        </div>

        <div>
          <h2 className="section__title">About Crescent</h2>
          <p className="section__text">
            We are a modern dental clinic focused on comfort, hygiene, and high-quality
            results. Our specialists use advanced tools and painless methods for the
            best patient experience.
          </p>

          <ul className="checklist">
            <li>Advanced equipment</li>
            <li>Friendly staff & clean environment</li>
            <li>Specialist doctors</li>
            <li>Affordable packages</li>
          </ul>

          <Link to="/about" className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
