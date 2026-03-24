import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppointmentModal from "./AppointmentModal";

import "../../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__logo">
          <img
            src="https://png.pngtree.com/png-vector/20190630/ourmid/pngtree-dental-logo-design-creative-dentist-logo-dental-clinic-creative-company-png-image_1523025.jpg"
            alt="SmileCare Logo"
            className="nav__logoImg"
          />
          <span className="nav__logoText">
            Crescent<span>.</span>
          </span>
        </Link>

        <button className="nav__toggle" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav__links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/doctors" onClick={() => setOpen(false)}>
            Doctors
          </NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          <button
            className="nav__cta"
            onClick={() => {
              setOpen(false);
              setOpenModal(true);
            }}
          >
            Book Appointment
          </button>
        </nav>
      </div>

      <AppointmentModal open={openModal} onClose={() => setOpenModal(false)} />
    </header>
  );
}
