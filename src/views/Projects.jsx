import { React, useState, useEffect } from "react";
import Background from "../containers/Background";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { fonts } from "../themes/fonts";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);

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
        fontSize: "3rem",
        fontFamily: fonts.lexend,
        backgroundColor: "#E0E1DA",
      }}
      onMouseEnter={(e) => handleMouseEnterLeave(e, true)}
      onMouseLeave={(e) => handleMouseEnterLeave(e, false)}
    >
      {children}
    </Link>
  );

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Background isScrollable={true}>
      <Navbar />
      <Container fluid className="p-0" style={{ minHeight: "100vh" }}>
        <Container fluid style={{ backgroundColor: "#2A2829", padding: "20px" }}>
          <Row style={{ marginTop:50 }}>
            <Col xs={12} className="text-center">
              <span
                style={{
                  fontFamily: fonts.lexend,
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: 500,
                  opacity: fadeIn ? 1 : 0, 
                  transition: "opacity 1s ease-in-out", 
                }}
              >
                My Coding Projects
              </span>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} className="text-center">
              <span
                style={{
                  fontFamily: fonts.devanagari,
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  opacity: fadeIn ? 1 : 0, 
                  transition: "opacity 1s ease-in-out", 
                }}
              >
                A bunch of cool stuff I've put together just for fun and to meet the requirements for my school projects!
              </span>
            </Col>
          </Row>
        </Container>

        <Row style={{ marginTop:170 }}>
          <Col xs={12} md={6} className="text-center">
            <ProjectLink to="/projects/personal">Personal</ProjectLink>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <ProjectLink to="/projects/school">School</ProjectLink>
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

export default Projects;