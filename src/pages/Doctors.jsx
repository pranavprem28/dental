import React from "react";
import "../styles/pages.css";
import { doctors } from "../data/doctors";
import { useNavigate } from "react-router-dom";

export default function Doctors() {
  const navigate = useNavigate(); 

  return (
    <main className="page">
      
      <section className="pageHeader">
        <div className="container">
          <h1>Our Doctors</h1>

          
          <div className="headerTicker">
            <div className="headerTicker__track">
              <span>Dental Cleaning : Dr. Anaya Roy</span>
              <span>Teeth Whitening : Dr. Rahul Menon</span>
              <span>Root Canal : Dr. Sarah Thomas</span>
              <span>Dental Implants : Dr. Vishnu Kumar</span>
              <span>Braces & Aligners : Dr. Aisha Farhan</span>
              <span>Kids Dentistry : Dr. Neha Nair</span>

              
              <span>Dental Cleaning : Dr. Anaya Roy</span>
              <span>Teeth Whitening : Dr. Rahul Menon</span>
              <span>Root Canal : Dr. Sarah Thomas</span>
              <span>Dental Implants : Dr. Vishnu Kumar</span>
              <span>Braces & Aligners : Dr. Aisha Farhan</span>
              <span>Kids Dentistry : Dr. Neha Nair</span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <div className="doctorsPageGrid">
            {doctors.map((d) => (
              <div className="doctorProfileCard" key={d.name}>
                <img src={d.img} alt={d.name} />

                <div className="doctorProfileCard__info">
                  <h3>{d.name}</h3>
                  <p className="doctorRole">{d.role}</p>

                  <p className="doctorBio">
                    Specialist in modern dental treatments with patient-friendly
                    care and advanced clinical procedures.
                  </p>

                  <div className="doctorTags">
                    <span>✔ Certified</span>
                    <span>✔ 5+ Years</span>
                    <span>✔ Gentle Care</span>
                  </div>

                
                  <button
                    className="btn btn-primary doctorBtn"
                    onClick={() => navigate("/contact")}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="section section--gray">
        <div className="container">
          <div className="doctorCTA">
            <h2>Want to consult our specialists?</h2>
            <p>
              Book your appointment today and get expert guidance for your dental
              needs.
            </p>

      
            <button
              className="btn btn-outline"
              onClick={() => navigate("/contact")}
            >
              Contact Clinic
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
