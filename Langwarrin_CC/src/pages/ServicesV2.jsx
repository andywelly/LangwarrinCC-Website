import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGridV2";
import ServicesButton from "../components/ServicesButton";

import Brochure from '../assets/icons8-brochure-100.png';

const BrochureLink =  '/'

//This is the Service Page that show all of the available services in one page
//Each service is displayed using unique and intuitive logos with short summaries

function ServicesV2() {
    return (
         
    <div>
        <Header/>
        <p/><p/><p/>
        <article><center>Services</center></article>
        <div className="text"><center> 
            <p> Connecting communities, fostering growth, and creating a place where everyone belongs.<br/><br/><br/></p>
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