import React from "react";
import Background from "../containers/Background";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import { fonts } from "../themes/fonts";
import Typography from "../components/Typography";
import Me from "../assets/me.jpg";

const About = () => {
    const lines = [
        "A young lad in pursuit of his dream to discover something new every day through delightful experiences! 😁",
        "Currently, An UP Cebu student taking up the course of Bachelor of Science in Computer Science.",
        "Gaining hands-on experience as a Manual Quality Assurance Intern at HQZen, where I crafted test cases and ensured the technology developed was free of bugs.",
        "My adventure in coding began all the way back in high-school-it's a story I'd live to share with you! Feel free to reach out via the links below."
    ];

    const socials = [
        {
            name: "Email",
            link: "mailto:cvlardizabal@gmail.com",
        },
        {
            name: "Resume",
            link: "https://drive.google.com/file/d/18gu7OOIEzPqH1AAjg8pxYhtUwVTiZDzl/view?usp=sharing",

        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/charles-lardizabal/",
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/vladzzzzzs/",
        },
        {
            name: "Read.cv",
            link: "https://read.cv/cvlardizabal",
        }
    ];

    const renderLines = lines.map((line, index) =>(
        <Typography
            key={index}
            family="devanagari"
            size={26}
            weight={490}
        >
            {line}
        </Typography>
    ));

    const renderSocials = socials.map(({name, link}, index) => (
        <Typography
            key={index}
            family="lexend"
            size={26}
            weight={300}
        >
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                ⟶{name}
            </a>
        </Typography>
    ));
    
    return (
        <Background isScrollable={true}>
            <Navbar />
            <Container
                fluid
                style={{
                paddingTop: "10vmax",
                paddingBottom: "15vmax",
                maxWidth: "1480px",
                }}
            >
                <Row className="align-items-start">
                    <Col className="text-start" style={{ marginBottom: "10px" }}>
                        <span style={{ fontFamily: fonts.lexend, fontSize: 50 }}>
                            Hello there, this is Charles.
                        </span>
                    </Col>
                </Row>
                <Row className="align-items-start">
                    <Col className="text-start" style={{ marginBottom: "100px" }}>
                        {renderLines}
                    </Col>
                </Row>
                <Row>
                    <Col className="text-start" style={{ marginTop: "50px" }}>
                        {renderSocials}
                    </Col>
                    <Col className="text-end">
                        <Image 
                            style={{ width: "100%", height: "auto", scale:10 }}
                            src={Me} 
                            alt="My Image" 
                            fluid 
                            rounded
                        />
                    </Col>
                </Row>
            </Container>
        </Background>
    );
};

export default About;