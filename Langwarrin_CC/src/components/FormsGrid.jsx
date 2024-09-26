import {Container, Row, Col} from 'react-bootstrap';  

import Feedback from '../assets/icons8-feedback-100.png';
import Membership from '../assets/icons8-membership-100.png';
import Employment from '../assets/icons8-employment-100.png';
import Enrol from '../assets/icons8-online-registration-100.png';
import AnnualReport from '../assets/icons8-report-100.png';



import ServicesButton from "./ServicesButton";

/*These are temporary texts that will be displaced in the website. In the final version, the texts and other
data will be extracted directly from Strapi*/
const EnrolSummary = "Enrol any new students or apply to new courses.";
const FeedbackSummary = "Give us any feedback and complains so we can improve our services.";
const EmploymentSummary = "Take a look at our employment opportunitis.";
const MembershipSummary = "Join to be a member of the Langwarrin Community Today.";
const AnnualSummary = "Read our annual report.";

const FormLink = "/";  /*should lead to each pdf of each different forms*/ 

const FormsGrid = (prop) => {
    const Summary = prop.Summary;
    return (  
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Enrol} Link ={FormLink}/> </Row>
                        <Row><div className='title'>Student Enrolment Form</div></Row>
                        <Row> <div className='text'> {EnrolSummary} </div> </Row>
                    </Container>
                </Col >
    
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Feedback} Link={FormLink}/> </Row>
                        <Row><div className='title'>Feedback & Complaints</div></Row>
                        <Row> <div className='text'> {FeedbackSummary} </div> </Row>
                    </Container> 
                </Col>

                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Employment} Link={FormLink}/> </Row>
                        <Row><div className='title'>Employment</div></Row>
                        <Row> <div className='text'> {EmploymentSummary} </div> </Row>
                    </Container> 
                </Col>
            </Row>

            <br/><br/><br/><br/>

            <Row className="justify-content-md-center">
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={Membership} Link={FormLink}/> </Row>
                        <Row><div className='title'>Membership Information</div></Row>
                        <Row> <div className='text'> {MembershipSummary} </div> </Row>
                    </Container> 
                </Col>
                
                <Col sm={3}> 
                    <Container>
                        <Row><ServicesButton Logo={AnnualReport} Link={FormLink}/> </Row>
                        <Row><div className='title'>Annual Report</div></Row>
                        <Row> <div className='text'> {AnnualSummary} </div> </Row>
                    </Container> 
                </Col>
                
                
            </Row>
            
        </Container>
    );
}
 
export default FormsGrid;