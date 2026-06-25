import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import GoogleMap from "./GoogleMap";
import Particle from "../Particle";
import "./Contact.css";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row>
          <Col
            md={12}
            className="contact-header"
            style={{ paddingBottom: "20px" }}>
            <h1 className="project-heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "white" }}>
              Feel free to <span className="purple">contact</span> me
            </p>
          </Col>
        </Row>

        <Row style={{ paddingTop: "30px" }}>
          <Col md={6} className="contact-form">
            <ContactForm />
          </Col>
          <Col md={6} className="contact-info">
            <ContactInfo />
          </Col>
        </Row>

        <Row style={{ paddingTop: "50px" }}>
          <Col md={12}>
            <GoogleMap />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
