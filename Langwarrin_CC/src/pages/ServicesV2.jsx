import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGridV2";
import ServicesButton from "../components/ServicesButton";

import Brochure from '../assets/icons8-brochure-100.png';
import { Button, Nav } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../constants"; // Make sure API_URL is correctly set

function ServicesV2() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/service?populate=deep`);
                setData(response.data.data.attributes);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>; // Optionally handle loading state
    }

    return (
        <div>
            <Header />
            <p /><p /><p />
            <h1
                style={{
                    color: "#32CD32",
                    fontSize: "3rem",
                    textAlign: "center",
                    margin: "20px 0",
                }}
            >
                {data.Heading1}
            </h1>
            <div className="text">
              <center>
                    {data.Text1.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </center>
            </div>


            <ServicesGrid Summary />

            <article>
                <center>
                    <br /><br />Current Brochure
                </center>
            </article>
            <div className="text">
                <center>
                    Detailed information about our services can be found on our brochure
                    <br /><br />
                </center>
            </div>
            <ServicesButton Logo={Brochure} Link={data.pdf.data.attributes.link} />
            <Footer />
        </div>
    );
}

export default ServicesV2;
