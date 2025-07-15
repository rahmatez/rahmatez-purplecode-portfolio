import React from "react";
import { Card } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <h3 className="contact-title">
        <AiOutlineEnvironment /> Contact Information
      </h3>

      <Card
        className="contact-info-card"
        style={{
          backgroundColor: "transparent",
          border: "1px solid #854ce6",
          marginBottom: "20px",
          color: "white",
        }}>
        <Card.Body>
          <div className="contact-item">
            <AiOutlineMail className="contact-icon" />
            <div className="contact-item-content">
              <strong>Email:</strong>
              <a href="mailto:your-email@example.com">your-email@example.com</a>
            </div>
          </div>

          <div className="contact-item">
            <AiOutlinePhone className="contact-icon" />
            <div className="contact-item-content">
              <strong>Phone:</strong>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>

          <div className="contact-item">
            <AiOutlineEnvironment className="contact-icon" />
            <div className="contact-item-content">
              <strong>Location:</strong>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card
        className="social-links-card"
        style={{
          backgroundColor: "transparent",
          border: "1px solid #854ce6",
          color: "white",
        }}>
        <Card.Body>
          <h5 style={{ marginBottom: "20px", textAlign: "left" }}>
            Connect with me:
          </h5>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ color: "#854ce6", fontSize: "24px" }}>
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ color: "#854ce6", fontSize: "24px" }}>
              <AiOutlineGithub />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactInfo;
