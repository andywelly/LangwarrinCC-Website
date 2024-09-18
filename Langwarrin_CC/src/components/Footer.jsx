//import React from "react";
import './styles/Footer.css'


function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Address Section */}
                <div className="footer-section">
                    <p>2 Lang Road</p>
                    <p>Langwarrin VIC 3910</p>
                    <p>(03) 9789 7653</p>
                    <p>reception@langwarrincc.org.au</p>
                </div>

                {/* Operational Hours Section */}
                <div className="footer-section">
                    <p>Operational Hours</p>
                    <p>Monday - Friday</p>
                    <p>9.00am - 4.30pm</p>
                </div>

                {/* Rights Section */}
                <div className="footer-section">
                    <p>Copyright © {year}</p>
                    <p>All Rights Reserved.</p>
                    <p>Langwarrin Community Centre</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

