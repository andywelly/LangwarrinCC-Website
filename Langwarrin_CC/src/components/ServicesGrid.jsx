import {Container, Row, Col} from 'react-bootstrap';  

import Computer from '../assets/Computer.png';
import Childcare from '../assets/icons8-children-100.png';
import Literacy from '../assets/icons8-literacy-100.png';
import Enrol from '../assets/icons8-online-registration-100.png';
import Community from '../assets/icons8-community-100.png';
import Hobbies from '../assets/icons8-drawing-100.png';


import ServicesButton from "../components/ServicesButton";

const EnrolSummary = "Steps on how to enrol with information on fee and cancellation policy.";
const ComputerSummary = "Workshop on understanding different types of computer devices for beginners.";
const LiteracySummary = "Enhance your skills with tailored programs in reading, writing, leadership, skills, and more.";
const ChildcareSummary = "Different fun activities and classes tailored for different age gropups.";
const CommunitySummary = "Connect with community groups for shared interests by joining our vibrant offerings.";
const HobbiesSummary = "Join workshops and lasses to explore various arts and crafts to discover your creative side.";

const ComputerLink = "/computer";
const EnrolLink = "/enrol";
const LiteracyLink = "/literacy";
const ChildcareLink = "/childcare";
const CommunityLink = "/community";
const HobbiesLink = "/hobbies";

const ServicesGrid = (prop) => {
    const Summary = prop.Summary;
    return (  
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Enrol} Link ={EnrolLink}/> </Row>
                        <Row><div className='title'>How to Enrol</div></Row>
                        <Row> <div className='text'> {EnrolSummary} </div> </Row>
                    </Container>
                </Col >
    
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Computer} Link={ComputerLink}/> </Row>
                        <Row><div className='title'>Computer-Business</div></Row>
                        <Row> <div className='text'> {ComputerSummary} </div> </Row>
                    </Container> 
                </Col>

                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Literacy} Link={LiteracyLink}/> </Row>
                        <Row><div className='title'>Literacy / Further Education</div></Row>
                        <Row> <div className='text'> {LiteracySummary} </div> </Row>
                    </Container> 
                </Col>
            </Row>

            <br/><br/><br/><br/>

            <Row className="justify-content-md-center">
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Childcare} Link={ChildcareLink}/> </Row>
                        <Row><div className='title'>Children and Youth</div></Row>
                        <Row> <div className='text'> {ChildcareSummary} </div> </Row>
                    </Container> 
                </Col>
                
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Community} Link={CommunityLink}/> </Row>
                        <Row><div className='title'>Community</div></Row>
                        <Row> <div className='text'> {CommunitySummary} </div> </Row>
                    </Container> 
                </Col>
                
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Hobbies} Link={HobbiesLink}/> </Row>
                        <Row><div className='title'>Craft / Hobbies</div></Row>
                        <Row> <div className='text'> {HobbiesSummary} </div> </Row>
                    </Container> 
                </Col>
            </Row>
            
        </Container>
    );
}
 
export default ServicesGrid;