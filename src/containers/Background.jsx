import React from "react";
import { Container } from "react-bootstrap";

const Background = ({ children, isScrollable }) => {
    const backgroundStyles = {
        backgroundColor: "#E0E1DA",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        zIndex: 100,
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
        overflow: isScrollable ? "auto" : "hidden",
    };

    return (
        <Container fluid className="d-flex flex-column" style={backgroundStyles}>
            {children}
        </Container>
    );
};

export default Background;