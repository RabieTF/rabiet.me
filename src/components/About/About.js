import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Trans, useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <Trans i18nKey="aboutTitle">
                Who <strong className="purple">am</strong> I ?
              </Trans>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <Trans i18nKey="aboutSkillTitle">
            Professional <strong className="purple">skills </strong>
          </Trans>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <Trans i18nKey="aboutToolsTitle">
            My <strong className="purple">toolbox</strong>
          </Trans>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
