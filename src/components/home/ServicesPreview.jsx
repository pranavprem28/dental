import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="section section--gray">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Our Services</h2>
          <p className="section__text">
            Complete dental solutions for your entire family.
          </p>
        </div>

        <div className="cards">
          {services.slice(0, 6).map((s) => (
            <div className="card serviceCard" key={s.title}>
        
              <div className="serviceCard__img">
                <img src={s.img} alt={s.title} />
              </div>

          
              <div className="serviceCard__content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="center mt-24">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
