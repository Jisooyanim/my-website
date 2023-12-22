import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
    return (
    <Container
        fluid
        className="full-h d-flex justify-content-center align-items-center p-0"
    >
        {children}
    </Container>
    );
};

export default Layout;