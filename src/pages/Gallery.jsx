import React from "react";
import "../styles/pages.css";

const gallery = [
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200",
  "https://thumbs.dreamstime.com/b/medical-clinic-asia-picture-showing-nurse-station-patients-61053463.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyhi5VlmcaH4LjeetuPfxELw6gKfg7Ncaqg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3BLB7W0p0cy2kOok8vXkBCYxjcoro1nBFA&s",
];

export default function Gallery() {
  return (
    <main className="page">
      <section className="pageHeader">
        <div className="container">
          <h1>Clinic Gallery</h1>
          <p>Some moments and spaces from our dental clinic.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="galleryGrid">
            {gallery.map((img, i) => (
              <div className="galleryItem" key={i}>
                <img src={img} alt="Clinic Gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
