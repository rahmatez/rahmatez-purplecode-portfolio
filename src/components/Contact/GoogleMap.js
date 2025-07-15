import React from "react";
import { Card } from "react-bootstrap";

function GoogleMap() {
  // Ganti dengan koordinat lokasi Anda
  // Format: https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=LOCATION
  // Atau gunakan link embed dari Google Maps langsung
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4993814726674!2d106.79324181476194!3d-6.208763795501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6b8c7bdd5b7%3A0x1a7b0b1a7b0b1a7b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890123";

  return (
    <div className="google-map-container">
      <h3 className="contact-title" style={{ marginBottom: "20px" }}>
        📍 Find Me Here
      </h3>

      <Card
        style={{
          backgroundColor: "transparent",
          border: "1px solid #854ce6",
          overflow: "hidden",
        }}>
        <div
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={mapSrc}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: "8px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"></iframe>
        </div>
      </Card>

      <p
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "15px",
          fontSize: "14px",
          opacity: "0.8",
        }}>
        📍 Jakarta, Indonesia
      </p>
    </div>
  );
}

export default GoogleMap;
