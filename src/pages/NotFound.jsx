import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages.css";

export default function NotFound() {
  return (
    <main className="page">
      <section className="section">
        <div className="container notFound">
          <h1>404</h1>
          <p>Oops! Page not found.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
