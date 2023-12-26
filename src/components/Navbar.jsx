import { React, useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { fonts } from "../themes/fonts";
import Typography from "./Typography";

const Sidebar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const linkStyles = {
    backgroundColor: "transparent",
    color: "black",
    transition: "background-color 0.7s ease, color 0.7s ease",
  };

  const brandStyles = {
    fontFamily: fonts.lexend,
    fontSize: 22,
    fontWeight: 600,
    backgroundColor: "transparent",
    color: "black",
    opacity: fadeIn ? 1 : 0, 
    transition: "background-color 0.7s ease, color 0.7s ease, opacity 1s ease-in-out",
  };

  const pages = [
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/projects",
      name: "Projects",
    },
  ];

  const handleMouseEnterLeave = (e, isHovered) => {
    e.target.style.backgroundColor = isHovered ? "black" : "transparent";
    e.target.style.color = isHovered ? "white" : "black";
  };

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsNavbarFixed(scrolled);
  };

  useEffect(() => {
    setFadeIn(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        size={16}
        weight={400}
        className="mt-3"
      >
        {name}
      </Typography>
    </Nav.Link>
  ));

  return (
    <Navbar
      expand="lg"
      fixed={isNavbarFixed ? "top" : undefined}
      style={{
        borderBottom: "2px solid black", 
        height: "72px",
      }}
    >
      <Container style={{ maxWidth: "1480px" }}>
        <Navbar.Brand
          href="/"
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