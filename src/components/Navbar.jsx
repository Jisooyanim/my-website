import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { fonts } from "../themes/fonts";

const Sidebar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      style={{
        fontFamily: fonts.raleway,
        fontWeight: 300,
        fontSize: 19
      }}
    >
      <Container>
        <Navbar.Brand href="#home">Charles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{marginLeft: "auto"}}> 
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Timeline</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
