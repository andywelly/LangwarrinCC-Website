import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';  
import axios from 'axios';
import { API_URL } from '../constants'; // Ensure this is correctly set

import Feedback from '../assets/icons8-feedback-100.png';
import Membership from '../assets/icons8-membership-100.png';
import Employment from '../assets/icons8-employment-100.png';
import Enrol from '../assets/icons8-online-registration-100.png';
import AnnualReport from '../assets/icons8-report-100.png';

import ServicesButton from './ServicesButton';

const EnrolSummary = "Enrol any new students or apply to new courses.";
const FeedbackSummary = "Give us any feedback and complaints so we can improve our services.";
const EmploymentSummary = "Take a look at our employment opportunities.";
const MembershipSummary = "Join to be a member of the Langwarrin Community Today.";
const AnnualSummary = "Read our annual report.";

const FormsGrid = () => {
    const [formLinks, setFormLinks] = useState({
        employment: null,
        membership: null,
        annualReport: null,
    });

    useEffect(() => {
        const fetchPdfLinks = async () => {
            try {
                const response = await axios.get(`${API_URL}/forms?populate=deep`);
                const data = response.data.data.attributes;
    
                const fetchedLinks = {
                    employment: data.EmploymentPDF?.data?.[0]?.attributes.url || null,
                    membership: data.MembershipPDF?.data?.[0]?.attributes.url || null,
                    annualReport: data.AnnualReportPDF?.data?.[0]?.attributes.url || null,
                };
    
                console.log("Fetched PDF Links:", fetchedLinks);
                setFormLinks(fetchedLinks);
            } catch (error) {
                console.error("Error fetching PDF links:", error);
            }
        };
        fetchPdfLinks();
    }, []);

    console.log("Rendered formLinks:", formLinks); // Verify URLs are loaded

    return (  
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Enrol} Link={"/childcareForms"} /> </Row>
                        <Row><div className='title'>Student Enrolment Form</div></Row>
                        <Row><div className='text'>{EnrolSummary}</div></Row>
                    </Container>
                </Col>
    
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Feedback} Link={"/genericForms"} /> </Row>
                        <Row><div className='title'>Feedback & Complaints</div></Row>
                        <Row><div className='text'>{FeedbackSummary}</div></Row>
                    </Container> 
                </Col>

                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Employment} Link={formLinks.employment || "#"} /> </Row>
                        <Row><div className='title'>Employment</div></Row>
                        <Row><div className='text'>{EmploymentSummary}</div></Row>
                    </Container> 
                </Col>
            </Row>

            <br/><br/><br/><br/>

            <Row className="justify-content-md-center">
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Membership} Link={formLinks.membership || "#"} /> </Row>
                        <Row><div className='title'>Membership Information</div></Row>
                        <Row><div className='text'>{MembershipSummary}</div></Row>
                    </Container> 
                </Col>
                
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={AnnualReport} Link={formLinks.annualReport || "#"} /> </Row>
                        <Row><div className='title'>Annual Report</div></Row>
                        <Row><div className='text'>{AnnualSummary}</div></Row>
                    </Container> 
                </Col>
            </Row>
        </Container>
    );
};

export default FormsGrid;
