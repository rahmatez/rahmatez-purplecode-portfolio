import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function CertificationCard(props) {
  return (
    <Card className="certification-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certificate" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>Issuer:</strong> {props.issuer}
          <br />
          <strong>Date:</strong> {props.date}
          {props.credentialId && (
            <>
              <br />
              <strong>Credential ID:</strong> {props.credentialId}
            </>
          )}
          <br />
          <br />
          {props.description}
        </Card.Text>
        {props.credentialUrl && (
          <Button variant="primary" href={props.credentialUrl} target="_blank">
            <CgWebsite /> &nbsp;
            {"View Certificate"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
