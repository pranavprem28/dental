import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <h3 className="footer__logo">Crescent.</h3>
          <p className="footer__text">
            Modern dental clinic for confident smiles. Clean treatments, gentle care,
            and trusted specialists.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer__links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Clinic Info</h4>
          <p className="footer__text">📍 Kannur, Kerala</p>
          <p className="footer__text">📞 +91 8943883864</p>
          <p className="footer__text">✉️ crescent@gmail.com</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
