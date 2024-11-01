//import React from "react";
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container, Row, Col, Image} from 'react-bootstrap';  
import techLesson from '../assets/TechLesson.jpg';
import ipadWorkshop from '../assets/ipadWorkshop.png';
import computerClass from '../assets/computerClass.png';

const FormLink = "/serviceForms";

function Computer() {
    const cardData = [
        
        {
            imgSrc: ipadWorkshop,
            title: "iPhone / iPad Workshops (Free) ",
            text: "Need some help getting started on your iPad and iPhone?  Learn how to stay safe!  You'll love our small. relaxed classess for beginners, seniors and those wanting to get more information and understanding.  BYO DEVICE!",
            description: [
                "Starts: Wednesday 14th and/or 21st August",
                "Time:  9.30 am - 12.00 pm",
            ]
        },
        {
            imgSrc: techLesson,
            title: "Computers for Home and Workplace",
            text: "Let us shine some light on the world of computers with our 8 week computer course for beginners.Topics include learning basic computer skills, using MS Windows and MS Office (Word, Excel and Powerpoint).  Connecting to WIFI and the Cloud, the importance of anti-virus software, safe internet browsing and shopping online.",
            description: [
                "Starts: Tuesday 20th August, 2024",
                "Time: 9:30 am - 12:30 pm",
                "Duration: Weekly during school term (no classes on Public Holidays)",
                "Cost: $80.00 Concession $70.00",
                "Administration Fee: $10.00",
            ]
        },
        {
            imgSrc: computerClass,
            title: "Computer Classes for Disability Support",
            text: "This course is for people with an intellectual disability to assist them with computer techniques.",
            description: [
                "Starts: Friday",
                "Time:  9.30 am - 1.00 pm",
                "Duration: Weekly during school term (no classes on Public Holidays",
            ]
        },
        
    ]
    
    return (
        <div>
            <Header/>
            <p/><p/><p/>
            <article><center>Computer and Business Courses <br/> <br/></center></article>
            {cardData.map((course) => (
                <Col key={course} className="courseCard">
                    <Container>
                        <Row>
                            <Col>
                                <Image src = {course.imgSrc} fluid rounded/>
                            </Col>
                            <Col>
                                <Container>
                                    <Row>
                                        <article style={{
                                            fontSize: '30px',
                                        }}> {course.title}</article>
                                    </Row>

                                    <Row>
                                        <div className="text" style={{ 
                                            fontSize: '17px',
                                            textAlign: 'left',
                                        }}>
                                        {course.text}
                                        </div>
                                    </Row>

                                    <Row> {/* this is so that it is easier to list the description of each course */}
                                        {course.description.map((id) => (
                                        <ul>
                                            <li>{id}</li>
                                        </ul>
                                        ))}
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Link to = {FormLink}>
                                                <div className = 'text'style={{ /*this is the style of the click to enrol button*/
                                                    color: "black",
                                                    fontSize: '17px',
                                                    fontWeight: 'bold',
                                                    backgroundColor: '#88c483',
                                                    borderRadius: '20px'
                                                }}>
                                                    Click to Enrol
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col></Col> <Col></Col>
                                    </Row>
                                </Container>
                                
                    
                            </Col>
                        </Row>
                    </Container>
                </Col>
            ))}
            <Footer/>
        </div>
    );
}

export default Computer;