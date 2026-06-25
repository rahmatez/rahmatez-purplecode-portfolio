import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificationCard from "./CertificationCard";
import { certificationData } from "../../Assets/certificationData";

function Certification() {
  return (
    <Container fluid className="certification-section">
      <Particle />
      <Container>
        <h1 className="certification-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I have earned throughout my learning journey.
        </p>
        <Row className="certification-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificationData.map((cert, index) => (
            <Col md={4} className="certification-card" key={index}>
              <CertificationCard
                imgPath={cert.imgPath}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                credentialId={cert.credentialId}
                credentialUrl={cert.credentialUrl}
                description={cert.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certification;
