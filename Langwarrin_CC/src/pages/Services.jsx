import Header from "../components/Header";
import Footer from "../components/Footer";
import Computer from '../assets/Computer.png';
import ServicesButton from "../components/ServicesButton";

function Services() {
    return (
         
    <div>
        <Header/>
        <p/><p/><p/>
        <article><center>Services</center></article>
        <text><center> Connecting communities, fostering growth, and creating a place where everyone belongs.</center></text>
        <text><center>Click on the icon to view each form</center></text>
        
        <ServicesGrid/>
        <ServicesButton Logo={Computer}/>
        <ServicesButton Logo={Computer}/>
        <Footer/>
            
    </div>
       
    );
}

export default Services;