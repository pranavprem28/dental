import React from "react";
import "../styles/pages.css";
import { services } from "../data/services";
import { doctors } from "../data/doctors";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate(); 
  const getDoctorForService = (index) => {
    return doctors[index % doctors.length];
  };

  return (
    <main className="page">
      
      <section className="pageHeader">
        <div className="container">
          <h1>Our Dental Services</h1>
          <p>
            We provide complete dental treatments with modern technology, hygiene,
            and expert care.
          </p>
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <div className="cards">
            {services.map((s, index) => {
              const doctor = getDoctorForService(index);

              return (
                <div className="card serviceCard" key={s.title}>
      
                  <div className="serviceCard__img">
                    <img src={s.img} alt={s.title} />
                  </div>

                  <div className="serviceCard__content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>

              
                    <div className="serviceDoctor">
                      <img
                        src={doctor.img}
                        alt={doctor.name}
                        className="serviceDoctor__img"
                      />

                      <div className="serviceDoctor__info">
                        <p className="serviceDoctor__label">Doctor</p>
                        <p className="serviceDoctor__name">{doctor.name}</p>
                      </div>
                    </div>

                    <div className="serviceCard__bottom">
                      
                      <button
                        className="serviceBtn"
                        onClick={() => navigate("/contact")}
                      >
                        Get Token →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="section section--gray">
        <div className="container grid-2">
          <div>
            <h2 className="section__title">Why Choose SmileCare?</h2>
            <p className="section__text">
              Our clinic provides painless dental treatments with a friendly
              approach. We maintain strict hygiene standards and ensure every
              patient receives the best experience.
            </p>

            <ul className="checklist">
              <li>Digital X-Ray & Modern Equipment</li>
              <li>Painless Treatments</li>
              <li>Affordable Packages</li>
              <li>Kids Friendly Care</li>
            </ul>
          </div>

          <div className="imageBox">
            <img
              src="https://media.istockphoto.com/id/1388931724/photo/shot-of-a-young-woman-checking-her-results-in-the-dentists-office.jpg?s=612x612&w=0&k=20&c=DPgd_dmIYUkClQLe0p7f_nJy4xfKYBTOE8KGF2zJLVg="
              alt="Dental service"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
