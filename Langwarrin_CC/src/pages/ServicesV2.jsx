import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGridV2";
import ServicesButton from "../components/ServicesButton";

import Brochure from '../assets/icons8-brochure-100.png';
import { Button, Nav } from "react-bootstrap";

const BrochureLink =  '/'

//This is the Service Page that show all of the available services in one page
//Each service is displayed using unique and intuitive logos with short summaries

function ServicesV2() {
    return (
         
    <div>
        <Header/>
        <p/><p/><p/>
        <h1
        style={{
          color: "#32CD32",
          fontSize: "3rem",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Services
      </h1>
        <div className="text"><center> 
            <p> Connecting communities, fostering growth, and creating a place where everyone belongs.</p>
            <p> Langwarrin Community Centre Inc. aims to be the focal point of contact for the community.</p>
            <p> As such, we offer a broad range of services and groups to appeal to all.</p>
            <Button variant="secondary" size="lg" style={{ fontSize: '24px', padding: '15px 30px' }}>
                <Nav.Link href="/community" className="community-link">View Our Community</Nav.Link>
            </Button>
            <br/><br/>
        </center></div>

        
        <ServicesGrid Summary/>
        
        
        <article><center> <br/><br/>Current Brochure</center></article>
        <div className="text"><center> 
            Detailed information about our services can be found on our brochure
            <br/><br/>
        </center></div>
        <ServicesButton Logo={Brochure} Link={BrochureLink}/>
        <Footer/>
            
    </div>
       
    );
}

export default ServicesV2;