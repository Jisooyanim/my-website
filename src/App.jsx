import { React, useState } from "react";
import Background from "./containers/Background";
import Navbar from "./components/Navbar"
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Background bgColor = "#4DA8DA">
      <Container>
        <p>Test</p>
      </Container>
    </Background>
  );
}

export default App;
