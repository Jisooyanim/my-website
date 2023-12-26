import { React, useState, useEffect } from "react";
import Background from "../containers/Background";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { fonts } from "../themes/fonts";
import Typography from "../components/Typography";


const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const normalStyles = {
        fontFamily: fonts.devanagari, 
        fontSize: 17.6, 
        fontWeight: 500, 
        letterSpacing: 0.5,
        opacity: fadeIn ? 1 : 0, 
        transition: "opacity 1s ease-in-out", 
    };
    
    const boldStyles = {
        fontFamily: fonts.devanagari, 
        fontSize: 17.6, 
        fontWeight: 700, 
        marginLeft: 6,
        opacity: fadeIn ? 1 : 0, 
        transition: "opacity 1s ease-in-out", 
    };

    const formatTime = (time) => {
        const options = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            timeZone: "Asia/Manila",
        };
        return time.toLocaleTimeString("en-US", options);
    };

    const historyItems = [
        {
            normal: "Currently ⟶",
            bold: "Student @ UP Cebu",
        },
        {
            normal: "Previously ⟶",
            bold: "A child",           
        },
        {
            normal: "Delivering ⟶",
            bold: "Smiles😁",
        },
    ];

    const renderHistory = historyItems.map(({ normal, bold }, index) => (
        <Typography
            key={index}
            family="lexend"
            size={18}
        >
            <span>{normal}</span>
            <span style={{ fontWeight: 700, marginLeft: 8 }}>{bold}</span>
        </Typography>
    ));

    return (
        <Background isScrollable={true}>
            <Navbar />
            <Container className="p-4">
                <Row className="align-items-start" style={{ paddingTop: 200 }}>
                    <Col xs={12} md={6} className="text-start mb-3">
                        <span style={{ ...normalStyles }}>
                            Based in Cebu &#10230; 
                        </span>
                        <span style={{ ...boldStyles }}>
                            {formatTime(currentTime)}
                        </span>
                    </Col>
                    <Col xs={12} md={6} className="text-start text-md-end mb-3">
                        <span style={{ fontSize: 17.6, marginRight: 5 }}>
                            &#10022;
                        </span>
                        <span style={{ ...normalStyles }}>
                            Status &#10230;
                        </span>
                        <span style={{ ...boldStyles }}>
                            Open to Work
                        </span>
                    </Col>
                </Row>
                <hr className="my-4" style={{ border: "1px solid black", opacity: 1 }} />
                <Row className="align-items-start">
                    <Col xs={12} className="text-start mb-5">
                        <span style={{ 
                            fontFamily: fonts.lexend, 
                            fontSize: 95,
                            opacity: fadeIn ? 1 : 0, 
                            transition: "opacity 1s ease-in-out",
                        }}>
                            Hi, this is Charles.
                        </span>
                    </Col>
                </Row>
                <Row className="align-items-start">
                    <Col xs={12} className="text-start">
                        {renderHistory}
                    </Col>
                </Row>
            </Container>
        </Background>
    );
};

export default Home;