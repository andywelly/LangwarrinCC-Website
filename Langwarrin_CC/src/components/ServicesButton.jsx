import "../components/styles/Button.css";
import Nav from 'react-bootstrap/Nav';

const ServicesButton = (props) => {
    const Logo = props.Logo;
    const Link = props.Link;
    return ( 
        <div className="service-button"><center>
            <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Item>  
                    <Nav.Link href={Link} className='links'>
                        <button class="button">
                            <img src ={Logo} alt ="my image" className = "services-logo"/>
                        </button>
                    </Nav.Link>
                </Nav.Item>  
            </Nav>
        </center></div>
     );
}
 



export default ServicesButton;