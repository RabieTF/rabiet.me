import React from "react";
import Card from "react-bootstrap/Card";
import { Trans, useTranslation } from "react-i18next";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <Trans i18nKey='aboutMeText'>
                I am <span className="blue">Rabie</span> Toaba, currently based in <span className="blue">Le Havre, France</span>. 
                <br />
                A developer with 4-years experience specialised in <span className="blue">backend web development</span>, with experience in <span className="blue">Mobile, Cloud</span> & <span className="blue">DevOps</span>.
                <br />
                I am currently open to freelance missions, do not hesitate to reach out to me. (:
            </Trans>
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
