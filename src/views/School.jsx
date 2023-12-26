import { React, useState, useEffect } from "react";
import Background from "../containers/Background";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import { fonts } from "../themes/fonts";
import ceboom from "../assets/ceboom.png";
import erp from "../assets/erp.png";
import balance from "../assets/balancescale.svg"

const School = () => {
    const [fadeIn, setFadeIn] = useState(false);

    const pStyle = {
        fontFamily: fonts.lexend, 
        fontSize: 17, 
        fontWeight: 300,
        opacity: fadeIn ? 1 : 0, 
        transition: "opacity 1s ease-in-out", 
    };

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <Background isScrollable={true}>
            <Navbar />
            <Container 
                fluid 
                style={{ 
                    maxWidth: "1480px", 
                    height: 1920, 
                    marginTop: 200 
            }}>
                <Row style={{ marginBottom: 150 }}>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image 
                            src={ceboom} 
                            alt="Ceboom" 
                            fluid 
                            style={{ 
                                width: 400, 
                                height: 90,
                                opacity: fadeIn ? 1 : 0, 
                                transition: "opacity 1s ease-in-out", 
                            }}/>
                    </Col>
                    <Col className="text-start" style={{ paddingTop: 15 }}>
                        <p style={{ ...pStyle }}>                           
                            Project Ceboom involves creating a map of Cebu Island with various landmarks.
                            The map includes essential locations such as health centers, hospitals, schools, 
                            and more. The graph representation accounts for distances in kilometers, with a 
                            penalty function introduced based on traffic conditions during specific time intervals. 
                            It allows users to select source and destination locations, displaying the shortest path 
                            considering both distance and traffic penalties. Additionally, users can add new landmarks, roads, and 
                            manually update traffic information through the interface. This project provides 
                            a foundation for a dynamic and interactive map system for Cebu Island. To know more about this project, 
                            watch this{' '}
                            <a 
                                href={"https://www.youtube.com/watch?v=m4EBukzPlbw"} 
                                target="_blank" 
                                style={{ 
                                    color: 'black', 
                                    textDecoration: 'none' 
                            }}>
                                video.
                            </a>
                        </p>
                    </Col>
                </Row>

                <Row style={{ marginBottom: 150 }}>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image 
                            src={erp} 
                            alt="ERP" 
                            fluid 
                            style={{ 
                                width: 550, 
                                height: 300,
                                opacity: fadeIn ? 1 : 0, 
                                transition: "opacity 1s ease-in-out", 
                            }}/>
                    </Col>
                    <Col className="text-start" style={{ paddingTop: 35 }}>
                        <p style={{ ...pStyle }}>  
                            Small businesses often grapple with operational challenges, such as inefficient manual processes 
                            and disjointed systems leading to errors and wasted time. To address this, I and my groupmates developed a 
                            web-based Enterprise Resource Planning (ERP) system. Implemented for EMGG Poultry and Southern Family 
                            General Merchandise, the ERP system automates processes, eliminates redundancy, and enhances efficiency. 
                            It includes features for employee attendance and payroll, as well as operational expense management, 
                            categorizing expenses for easy tracking. The system provides real-time insights, empowering small 
                            businesses to make informed decisions and optimize operations.
                        </p>
                    </Col>
                </Row>

                <Row style={{ marginBottom: 150 }}>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image 
                            src={balance} 
                            alt="balanceScale" 
                            fluid 
                            style={{ 
                                width: 600, 
                                height: 400,
                                opacity: fadeIn ? 1 : 0, 
                                transition: "opacity 1s ease-in-out", 
                            }}/>
                    </Col>
                    <Col className="text-start" style={{ paddingTop: 130 }}>
                        <p style={{ ...pStyle }}>  
                            This is a LAN game that is inspired by the Netflix series "Alice in Borderland."
                            This game must be played by four to six players. This is a final requirement for 
                            CMSC 137-Data Communations and Networking.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Background>
    )
}

export default School;