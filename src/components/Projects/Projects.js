import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import madrasaticImg from "../../Assets/Projects/madrasatic.png";
import shutItImg from "../../Assets/Projects/shutit.jpg";
import athenaImg from "../../Assets/Projects/athena.jpg";
import exdImg from "../../Assets/Projects/exd.svg";
import sachevImg from "../../Assets/Projects/sachev.png";
import { Trans, useTranslation } from "react-i18next";

function Projects() {

  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <Trans i18nKey="projectsTitle">
            My Recent <strong className="blue">Works</strong>
          </Trans> 
        </h1>
        <p style={{ color: "white" }}>
          {t('projectsSubTitle')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={madrasaticImg}
              isBlog={false}
              title="Madrasatic"
              description={t('madrasaticDescription')}
              ghLink="https://github.com/MadrasaTic"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sachevImg}
              isBlog={false}
              title="SACHEV.ORG"
              description={t('sachevDescription')}
              demoLink="https://sachev.org"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exdImg}
              isBlog={false}
              title="Extra Design"
              description={t('exdDescription')}
              demoLink="https://extradesigndz-7634b.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={athenaImg}
              isBlog={false}
              title="Athena"
              description={t('athenaDescription')}
              ghLink="https://github.com/RabieTF/projet5athena2CPI"
            />
          </Col>  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shutItImg}
              isBlog={false}
              title="Shut It"
              description={t('shutItDescription')}
              ghLink="https://github.com/RabieTF/ShutIt"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
