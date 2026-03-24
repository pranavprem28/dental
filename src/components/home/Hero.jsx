import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
      
        <div className="hero__left">
          <p className="hero__tag">Trusted Dental Clinic in Kerala</p>

          <h1>
            Healthy Teeth, <br />
            Confident Smile.
          </h1>

          <p className="hero__desc">
            Crescent offers advanced dental treatments with gentle care. From
            cleaning to implants — everything under one roof.
          </p>

          <div className="hero__buttons">
            <Link to="/contact" className="btn btn-primary">
              Book Appointment
            </Link>

            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>

          <div className="hero__stats">
            <div>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>5k+</h3>
              <p>Happy Patients</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Hygienic Care</p>
            </div>
          </div>
        </div>

        
        <div className="hero__right">
          <img
            className="hero__img"
            src="https://royalimplant.com/blogs/wp-content/uploads/2022/06/doctor-and-dentist-thumbs-up.jpg"
            alt="Dental Clinic"
          />
        </div>
      </div>
    </section>
  );
}
