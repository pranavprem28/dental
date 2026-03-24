import React from "react";

const reviews = [
  {
    name: "Akshaya",
    review:
      "Very friendly doctors and painless treatment. Clinic is super clean and professional.",
  },
  {
    name: "Riya",
    review:
      "I did teeth whitening here. Amazing results and good guidance. Highly recommended!",
  },
  {
    name: "Nithin",
    review:
      "Root canal was completely painless. Staff was supportive and explained everything.",
  },
];

export default function Testimonials() {
  return (
    <section className="section section--gray">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Patient Testimonials</h2>
          <p className="section__text">
            Real feedback from patients who visited SmileCare.
          </p>
        </div>

        <div className="testimonialGrid">
          {reviews.map((r) => (
            <div className="testimonialCard" key={r.name}>
              <p className="testimonialText">“{r.review}”</p>
              <h4 className="testimonialName">— {r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
