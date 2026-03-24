import React, { useState } from "react";
import "../../styles/pages.css";

export default function AppointmentModal({ open, onClose }) {
  const [data, setData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment Requested!\nName: ${data.name}\nPhone: ${data.phone}`);
    setData({ name: "", phone: "", service: "" });
    onClose();
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalBox" onClick={(e) => e.stopPropagation()}>
        <div className="modalTop">
          <h3>Book Appointment</h3>
          <button className="modalClose" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="modalForm" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={data.name}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={data.phone}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={data.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Dental Cleaning</option>
            <option>Teeth Whitening</option>
            <option>Braces & Aligners</option>
            <option>Root Canal</option>
            <option>Dental Implants</option>
          </select>

          <button className="btn btn-primary" type="submit">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
