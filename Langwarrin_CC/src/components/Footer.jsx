import React, { useState, useEffect } from "react";
import axios from 'axios';
import './styles/Footer.css';

function Footer() {
    const [footerData, setFooterData] = useState(null);
    const year = new Date().getFullYear();

    useEffect(() => {
        // Fetch data from Strapi
        const fetchFooterData = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/footer', {
                    headers: {
                        Authorization: `7b9a7daf5614c1997ba9f7ace6a94295989d7665d78f705d09da1b8144dff2390c76472539323925f6a911d916d4bd26a13ef3d0b0d8228c36d8a2f17be63b2531ed29f8b16cc8208b12657ced47ea68d1f8151395bd407da481b3c9d94d7763b255e7a084b19066442f4a9fe2c1dee762dd571e7559e34c3b8f333421309db9`, // Include your token if necessary
                    },
                });
                console.log(response.data); // Log the whole response
    
                // Adjust according to your API's response structure
                const data = response.data.data.attributes; 
                setFooterData(data); // Set footer data to state
            } catch (error) {
                console.error('Error fetching footer data:', error);
            }
        };
    
        fetchFooterData();
    }, []);

    // Check if footerData is null and render loading message
    if (!footerData) {
        return <div>Loading footer...</div>; // Show loading message until data is fetched
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Address Section */}
                <div className="footer-section">
                    <p>{footerData.adressLine1}</p>
                    <p>{footerData.adressLine2}</p>
                    <p>{footerData.phoneNumber}</p>
                    <p>{footerData.email}</p>
                </div>

                {/* Operational Hours Section */}
                <div className="footer-section">
                    <p>{footerData.operationalHoursTitle}</p>
                    <p>{footerData.operationalDays}</p>
                    <p>{footerData.operationalHours}</p>
                </div>

                {/* Rights Section */}
                <div className="footer-section">
                    <p>Copyright © {year}</p>
                    <p>All Rights Reserved.</p>
                    <p>{footerData.organisationName}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;