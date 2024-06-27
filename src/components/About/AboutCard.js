import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jugal Wable </span>
            from <span className="purple"> Boston, MA, US.</span>
            <br />
            I am currently studying MS in Information Systems at Northeastern University.
            <br />
            I have completed B.Tech in Computer Science from VIT, Pune, India.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing FPS Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">JugalWable</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
