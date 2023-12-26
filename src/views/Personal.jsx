import React from "react";
import Background from "../containers/Background";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";

const Personal = () => {
    return (
        <Background isScrollable={true}>
        <Navbar />
        <Container
            fluid
            className="d-flex justify-content-center align-items-center h-100"
            style={{ textAlign: "center" }}
        >
            <span style={{ fontSize: 40 }}>🚧🚧🚧🚧</span>
        </Container>
        </Background>
    );
};

export default Personal;