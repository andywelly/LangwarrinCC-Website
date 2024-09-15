import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGrid";



function Services() {
    return (
         
    <div>
        <Header/>
        <p/><p/><p/>
        <article><center>Services</center></article>
        <div className="text"><center> 
            Connecting communities, fostering growth, and creating a place where everyone belongs.
            
            <p>Click on the icon to view each form<br/><br/><br/></p>
        </center></div>
        
        
        <ServicesGrid Summary/>
        
        
        <Footer/>
            
    </div>
       
    );
}

export default Services;