import Header from "../components/Header";
import Footer from "../components/Footer";
import FormsGrid from "../components/FormsGrid";



function Form() {
    return (
         
    <div>
        <Header/>
        <p/><p/><p/>
        <article><center>Our Forms</center></article>
        <div className="text"><center> 
            Connect with us and get in touch by using our forms.
            
            <p>Click on the icon to view each form<br/><br/><br/></p>
        </center></div>
        
        
        <FormsGrid Summary/>
        
        
        <Footer/>
            
    </div>
       
    );
}

export default Form;