import Header from "../components/Header";
import Footer from "../components/Footer";
import FormsGrid from "../components/FormsGrid";
import { Button, Nav } from "react-bootstrap";

//This is the Forms Page that show all of the available Forms in one page
//Each form is displayed using unique and intuitive logos with short summaries

function Form() {
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
        Forms
         </h1>
        <div className="text"><center> 
            <p> Connect with us and get in touch by using our forms.</p>
            <Button variant="secondary" size="lg" style={{ fontSize: '24px', padding: '15px 30px' }}>
                <Nav.Link href="/genericForms" className="community-link">Contact Us</Nav.Link>
            </Button>
            <br/>
            <br/>
            <p> Click on the icon to view each form. </p>
        </center></div>
        
        
        <FormsGrid Summary/>
        
        
        <Footer/>
            
    </div>
       
    );
}

export default Form;