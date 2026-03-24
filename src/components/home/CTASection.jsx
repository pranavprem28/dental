import React from "react";
import { Link } from "react-router-dom";


export default function CTASection() {
  return (
    <section className="cta">
      <div className="container cta__box">
        <div>
          <h2>Need a Dental Consultation?</h2>
          <p>
            Book an appointment today and get expert guidance for your dental needs.
          </p>
        </div>

        <Link to="/contact" className="btn btn-primary">
          Book Now
        </Link>
      </div>
    </section>
  );
}
