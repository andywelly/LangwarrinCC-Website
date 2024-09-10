import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/Logo.png'; // Import the logo image

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-transparent mb-3 navbar-custom">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: '80px', width: 'auto' }} // Adjust size as needed
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/chilcare">Childcare</Nav.Link>
              <Nav.Link href="/forms">Forms</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              {/* <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item href="/Services">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
              </NavDropdown>  */}
              {/* <NavDropdown title="Childcare" id="childcare-dropdown">
                <NavDropdown.Item href="#childcare1">Childcare 1</NavDropdown.Item>
                <NavDropdown.Item href="#childcare2">Childcare 2</NavDropdown.Item>
                <NavDropdown.Item href="#childcare3">Childcare 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Forms" id="forms-dropdown">
                <NavDropdown.Item href="#form1">Form 1</NavDropdown.Item>
                <NavDropdown.Item href="#form2">Form 2</NavDropdown.Item>
                <NavDropdown.Item href="#form3">Form 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About us" id="about-dropdown">
                <NavDropdown.Item href="#about1">About 1</NavDropdown.Item>
                <NavDropdown.Item href="#about2">About 2</NavDropdown.Item>
                <NavDropdown.Item href="#about3">About 3</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
