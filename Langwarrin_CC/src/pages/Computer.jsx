//import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container, Row, Col, Image} from 'react-bootstrap';  
import Imagesrc from '../assets/TechLesson.jpg';


function Computer() {
    return (
        <div>
            <Header/>
            <p/><p/><p/>
            <article><center>Computer Business Cources <br/> <br/></center></article>
            <Container>
                <Row>
                    <Col>
                        <Image src = {Imagesrc} fluid rounded/>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <article style={{
                                    fontSize: '30px',
                                }}> iPhone / iPad Workshops (Free)</article>
                            </Row>

                            <Row>
                                <div className="text" style={{
                                    fontSize: '17px',
                                    textAlign: 'left',
                                }}>
                                Need some help getting started on your iPad and iPhone?  Learn how to stay safe!  You'll love our small. relaxed classess for beginners, 
                                seniors and those wanting to get more information and understanding.  BYO DEVICE! 
                                </div>
                            </Row>

                            <Row>
                                <ul>
                                    <li>Starts: Wednesday 14th and/or 21st August</li>
                                    <li>Time: 9.30 am - 12.00 pm <br/> <br/></li>
                                </ul>
                            </Row>

                            <Row>
                                <Col>
                                    <div className = 'text'style={{
                                        color: "black",
                                        fontSize: '17px',
                                        fontWeight: 'bold',
                                        backgroundColor: '#88c483',
                                        borderRadius: '20px'
                                    }}>
                                        Click to Enrol
                                    </div>
                                </Col>
                                <Col></Col> <Col></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Computer;