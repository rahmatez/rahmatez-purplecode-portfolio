import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahmat Ashari </span>
            from <span className="purple"> Tegal, Indonesia.</span>
            <br />
            I currently work as a freelance software developer.
            <br />
            I have completed Integrated S1 (S.KOM) in Innformatics Engineering
            at Telkom University Purwokerto, achieving a GPA of 3.63.
            <br />
            <br />A passion for software
            development. My enthusiasm lies in dreaming up innovative solutions,
            designing intuitive applications, and bringing ideas to life through
            code. I thrive on challenges and constantly strive to create
            software that makes a real-world impact while pushing the boundaries
            of technology.
            <br /> <br />
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">rahmatez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
