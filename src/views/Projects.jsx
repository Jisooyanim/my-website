import React from "react";
import Background from "../containers/Background";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { fonts } from "../themes/fonts";
import { Link } from "react-router-dom";

const handleMouseEnterLeave = (e, isHovered) => {
  const element = e.target;
  element.style.backgroundColor = isHovered ? 'black' : 'transparent';
  element.style.color = isHovered ? 'white' : 'black';
};

const ProjectLink = ({ to, children }) => (
  <Link
    to={to}
    className="nav-link"
    style={{
      color: "black",
      display: "inline-block",
      padding: "10px",
      transition: "background 0.5s ease, color 0.5s ease",
      fontSize: 65,
      fontFamily: fonts.lexend,
      backgroundColor: "#E0E1DA",
    }}
    onMouseEnter={(e) => handleMouseEnterLeave(e, true)}
    onMouseLeave={(e) => handleMouseEnterLeave(e, false)}
  >
    {children}
  </Link>
);

const Projects = () => {
  return (
    <Background>
      <Navbar />
      <Container fluid style={{ height: 250, backgroundColor: "#2A2829" }}>
        <Row style={{ marginTop: 90, marginLeft: 210, marginBottom: 15 }}>
          <Col className="text-start">
            <span
              style={{
                fontFamily: fonts.lexend,
                color: "white",
                fontSize: 46,
                fontWeight: 500,
              }}
            >
              My Coding Projects
            </span>
          </Col>
        </Row>
        <Row style={{ marginLeft: 210 }}>
          <Col className="text-start">
            <span
              style={{
                fontFamily: fonts.devanagari,
                color: "white",
                fontSize: 20,
                fontWeight: 400,
              }}
            >
              A bunch of cool stuff I've put together just for fun and to meet
              the requirements for my school projects!
            </span>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ height: 500 }}>
        <Row style={{ marginTop: 200 }}>
          <Col className="text-middle">
            <ProjectLink to="/projects/personal">Personal</ProjectLink>
          </Col>
          <Col className="text-middle">
            <ProjectLink to="/projects/school">School</ProjectLink>
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

export default Projects;
