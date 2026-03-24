import React from "react";
import { Link } from "react-router-dom";
import { doctors } from "../../data/doctors";

export default function DoctorsPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Meet Our Specialists</h2>
          <p className="section__text">
            Experienced doctors who focus on comfort and perfect results.
          </p>
        </div>

        <div className="doctors">
          {doctors.map((d) => (
            <div className="doctorCard" key={d.name}>
              <img src={d.img} alt={d.name} />
              <div className="doctorCard__info">
                <h3>{d.name}</h3>
                <p>{d.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="center mt-24">
          <Link to="/doctors" className="btn btn-primary">
            View Doctors
          </Link>
        </div>
      </div>
    </section>
  );
}
