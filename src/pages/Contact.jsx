import React from "react";
import "../styles/pages.css";

export default function Contact() {
  
  const hoursItems = [
    "🕘 Mon - Sat : 9:00 AM - 7:00 PM",
    "🚫 Sunday : Closed",
    "📞 Emergency : Call Anytime",
    "📍 Kannur, Kerala",
  ];

  return (
    <main className="page">
      
      <section className="pageHeader">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Reach out to Crescent for dental consultation, support, or enquiries.
          </p>
        </div>

        
        <div className="container">
          <div className="hoursTicker">
            <div className="hoursTicker__track">
              
              {[...hoursItems, ...hoursItems].map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="section">
        <div className="container contactGrid">
         
          <div className="contactInfo">
            <h2 className="section__title">Clinic Details</h2>

            <div className="infoCard">
              <h4>📍 Address</h4>
              <p>Crescent Dental Clinic, Kannur, Kerala</p>
            </div>

            <div className="infoCard">
              <h4>📞 Phone</h4>
              <p>+91 9865456000</p>
            </div>

            <div className="infoCard">
              <h4>✉️ Email</h4>
              <p>crescent@gmail.com</p>
            </div>

            <div className="infoCard">
              <h4>🌟 Support</h4>
              <p>Friendly staff • Clean clinic • Quick response</p>
            </div>
          </div>

         
          <div className="contactFormBox">
            <h2 className="section__title">Quick Contact</h2>
            <p className="section__text">
              Click below to call or email us directly.
            </p>

            <div className="contactQuickBtns">
              <a className="btn btn-primary" href="tel:+918943883864">
                📞 Call Now
              </a>

              <a className="btn btn-outline" href="mailto:crescent@gmail.com">
                ✉️ Email Us
              </a>
            </div>

            <div className="contactMiniNote">
              <p>
                We usually respond within <b>30 minutes</b> during working hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section section--gray">
        <div className="container">
          <div className="clinicImageBox">
            <img
              src="https://www.shutterstock.com/image-photo/outdoor-photo-need-dental-practice-260nw-2659547741.jpg"
              alt="SmileCare Clinic"
            />

            <div className="clinicImageBox__text">
              <h2>Our Clinic</h2>
              <p>
                Modern equipment, strict hygiene, and a comfortable environment for
                every patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <h2 className="section__title centerTitle">Find Us on Map</h2>

          <div className="mapBox">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=kannur%20kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
