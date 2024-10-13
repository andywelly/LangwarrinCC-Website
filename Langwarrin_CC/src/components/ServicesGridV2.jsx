import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import possumImg from "../assets/possum.png";

// Images for computer/business courses category
import techLesson from '../assets/TechLesson.jpg';
import freeIpadWorkshop from '../assets/courses images/ipadWorkshop.png'
import computerClass from '../assets/courses images/computerClass.png';

// Images for literacy/further education courses category
import readingWriting from '../assets/courses images/readingWriting.png';
import leadership from '../assets/courses images/leadership.png';
import stem from '../assets/courses images/stemCourse.png';
import brainBenders from '../assets/courses images/brainBenders.png';

// Images for craft/hobbies education courses category
import knit from '../assets/courses images/knit.png';
import ukulele from '../assets/courses images/ukulele.png';
import pathchwork from '../assets/courses images/patchwork.png';
import scrabble from '../assets/courses images/scrabble.png';
import boatLicense from '../assets/courses images/boatLicense.png';

// Images for craft/hobbies education courses category
import stillness from '../assets/Stillness.png';
import exercise from '../assets/Exercise.jpg';
import weightwatchers from '../assets/courses images/weightWatcher.png';
import kungfu from '../assets/courses images/kungfu.png';
import reiki from '../assets/courses images/reiki.png';
import ageStrong from '../assets/courses images/ageStrong.png';

import './styles/Grid.css';


function ServicesGridV2() {
    const cardData = [
        {   name: "Computer/Business Courses",
            courses: [
        
                {
                    imgSrc: freeIpadWorkshop,
                    title: "iPhone / iPad Workshops (Free) ",
                    text: "We provide engaging early learning experiences for children from 6 weeks to 4 years old.",
                },
                {
                    imgSrc: techLesson,
                    title: "Computers for Home and Workplace",
                    text: "Let us shine some light on the world of computers with our 8 week computer course for beginners",
                },
                {
                    imgSrc: computerClass,
                    title: "Computer Classes for Disability Support",
                    text: "This course is for people with an intellectual disability to assist them with computer techniques.",
                },
                
            ]
        },

        {   name: "Literacy / Further Education",
            courses: [
        
                {
                    imgSrc: readingWriting,
                    title: "Reading and Writing",
                    text: "This course is for people with an intellectual disability to assist them with reading & writing techniques",
                },
                {
                    imgSrc: leadership,
                    title: "Essential Leadership Skills",
                    text: "This one-day-a-week program empowers all individuals with disabilities to build their confidence and grow as a leader.",
                },
                {
                    imgSrc: stem,
                    title: "S.T.E.M",
                    text: "STEM is an approach to learning and development that intergrates the areas of science, technology, engineering and mathematics",
                },
                {
                    imgSrc: brainBenders,
                    title: "Brain Benders",
                    text: "Group activity that could help you in your everyday life, work an study",
                },
                
                
            ]
        },

        {   name: "Craft / Hobbies / Fun",
            courses: [
        
                {
                    imgSrc: knit,
                    title: "Close Knit Community",
                    text: "Join our Knitting Group Course to learn new techniques and create beautiful projects in a supportive environment, perfect for all skill levels!",
                },
                {
                    imgSrc: ukulele,
                    title: "Ukulele Classes",
                    text: "Weekly sessions led by an experienced teacher, come along and join our happy group!",
                },
                {
                    imgSrc: pathchwork,
                    title: "PATCHWORK Patch'n'Chat",
                    text: "Come along and bring your own patchwork project.  Meet new people in a relaxed and friendly group.",
                },
                {
                    imgSrc: scrabble,
                    title: "Scrabble",
                    text: "Are you keen on playing Scrabble? If so, then come along and join this group",
                },
                {
                    imgSrc: boatLicense,
                    title: "Boat License",
                    text: "Join our Boat Licensse Course to master essential boating skills and regulations in flexible half-day evening, or private sessions",
                    /* This is a more interesting and concise description compared to the original website*/ 
                },
                
                
            ]
        },

        {   name: "Exercise / Health / Wellbeing",
            courses: [
        
                {
                    imgSrc: stillness,
                    title: "Moments of Stillness",
                    text: "A time to gather for reflection, stillness, sharing, respect and care!",
                },
                {
                    imgSrc: exercise,
                    title: "Starting Out - Exercise",
                    text: "Exercise for all ages!",
                },
                {
                    imgSrc: weightwatchers,
                    title: "Weight Watchers",
                    text: "It's about trusting the process and believing in yourself",
                },
                {
                    imgSrc: kungfu,
                    title: "Kid's Kung Fu & Adult Kickboxing",
                    text: "An interesting mixture of Boxing, Grappling, Kickboxing, Wing Chun and Self Defence. An exciting activity which provides an opportunity to develop and improve strength, co-ordination, balance, self discipline and self esteem. Classes for adults, adolescents and children.",
                },
                {
                    imgSrc: reiki,
                    title: "Reiki Healing",
                    text: "A hands-on healing to help you heal yourself.  Get on with your life feeling stronger and able to cope.",
                },
                {
                    imgSrc: ageStrong,
                    title: "Age Strong",
                    text: "Strength and balance program using resistance & weights, designed for older people. In partnership with Peninsula Health.",
                },
                
                
            ]
        },
    ];
  
    return (
        <div>
            
            {cardData.map((main) => (
                <Row key={main} className="main-category">
                    <article><center>{main.name}</center></article> {/*the main category name*/}
                <div className="grid-container">
                    <Row xs={3} md={3} className="justify-content-md-center" >
                        {main.courses.map((card) => ( 
                            <Col key={card}>
                                <Row className="align-items-center justify-content-md-center">
                                    <Col md={10} className = 'courseCard'> 
                                        <Container>
                                            <Row><Card.Img
                                                variant="top"
                                                src={card.imgSrc}
                                                alt={card.title}
                                                className="img-fluid card-img"
                                            /> </Row>
                                            <Row><div className='title'>{card.title}</div></Row>
                                            <Row><Card.Body>
                                                <Card.Text>{card.text}</Card.Text>
                                                <Link to="/computer">
                                                <Button className="card-button">Read More</Button>
                                                </Link>
                                            </Card.Body> </Row>
                                        </Container>
                                    </Col >
                                
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </div>
                </Row>
            ))}
        </div>
    );
  }
 
export default ServicesGridV2;