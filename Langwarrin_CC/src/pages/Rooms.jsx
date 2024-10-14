//import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomsGrid from "../components/RoomsGrid";


function Community() {
    return (
        <div>
            <Header/>
            <h1
            style={{
            color: "#32CD32",
            fontSize: "3rem",
            textAlign: "center",
            margin: "20px 0",
            }}
            >
            Room Booking
            </h1>

            <p style = {{textAlign: "center", fontSize: "1.25rem"}} >Fees - $ Per Hour, Including Kitchen, Including GST</p>

            <RoomsGrid/>

            <br/>
            <hr/>
            <div style={{ textAlign: "center" }}>
                <p>Individual Hirers: $650.00 Bond</p>
                <p>Permanent Hirers: $300.00 Bond</p>
                <p><strong>ALL BONDS ARE PAYABLE BY CASH OR CREDIT CARD ONLY - FOR ANY OUT OF HOURS HIRE</strong></p>
                <p><strong>IMPORTANT:</strong> All Children’s parties are to be held in the Occasional Care Room.</p>
                <p><strong>INSURANCE:</strong> All Hirers must provide their own Public Liability Insurance.</p>
                <p><strong>DEFINITIONS:</strong></p>
                <p>Casual Hirers: A group/person that makes an irregular or once-off booking.</p>
                <p>Permanent Hirers: A group/person that makes 8 or more bookings per year.</p>
                <p>Community Groups: Not-for-Profit Groups.</p>
            </div>

            <Footer/>
        </div>
    );
}

export default Community;