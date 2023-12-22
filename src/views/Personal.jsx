import React from "react";
import Background from "../containers/Background";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { fonts } from "../themes/fonts";

const Personal = () => {
    return (
        <Background>
            <Navbar />
            <Container fluid className="d-flex justify-content-center border h-100 align-items-center">
                <span style={{ fontFamily: fonts.lexend, fontSize:40, letterSpacing: 40 }}>UNDER CONSTRUCTION🚧</span>
            </Container>
        </Background>
    )
}

export default Personal;