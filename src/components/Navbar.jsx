import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { fonts } from "../themes/fonts";
import Typography from "./Typography";

const linkStyles = {
  backgroundColor: 'transparent',
  color: 'black',
  transition: 'background-color 0.7s ease, color 0.7s ease',
};

const brandStyles = {
  fontFamily: fonts.lexend,
  fontSize: 22,
  backgroundColor: 'transparent',
  color: 'black',
  transition: 'background-color 0.7s ease, color 0.7s ease',
};

const Sidebar = () => {
  const pages = [
    {
      link: "#about",
      name: "About",
    },
    {
      link: "#skills",
      name: "Skills",
    },
    {
      link: "#projects",
      name: "Projects",
    },
    {
      link: "#timeline",
      name: "Timeline",
    },
    {
      link: "#contact",
      name: "Contact",
    },
  ];

  const handleMouseEnterLeave = (e, isHovered) => {
    e.target.style.backgroundColor = isHovered ? 'black' : 'transparent';
    e.target.style.color = isHovered ? 'white' : 'black';
  };

  const renderPages = pages.map(({ link, name }, index) => (
    <Nav.Link
      href={link}
      key={index}
      style={{
        ...linkStyles,
      }}
      onMouseEnter={(e) => handleMouseEnterLeave(e, true)}
      onMouseLeave={(e) => handleMouseEnterLeave(e, false)}
      className="nav-link"
    >
      <Typography
        family="lexend"
        size={15}
        weight={5}
        className="mt-3"
      >
        {name}
      </Typography>
    </Nav.Link>
  ));

  return (
    <Navbar
      expand="lg"
      className="bg-transparent"
      fixed="top"
      style={{
        borderBottom: "2px solid black", 
        height: "72px"
      }}
    >
      <Container style={{ maxWidth: "1500px" }}>
        <Navbar.Brand
          href="#home"
          style={{
            ...brandStyles,
          }}
          onMouseEnter={(e) => handleMouseEnterLeave(e, true)}
          onMouseLeave={(e) => handleMouseEnterLeave(e, false)}
        >
          Charles
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
            {renderPages}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;