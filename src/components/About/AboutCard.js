import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am <span className="purple">Rabie</span> Toaba, currently based in <span className="purple">Le Havre, France</span>. 
            <br />
            A developer with 4-years experience specialised in <span className="purple">backend web development</span>, with experience in <span className="purple">Mobile, Cloud</span> & <span className="purple">DevOps</span>.
            <br />
            I am currently open to freelance missions, do not hesitate to reach out to me. (:
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
