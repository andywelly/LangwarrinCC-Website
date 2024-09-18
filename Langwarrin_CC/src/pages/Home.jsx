//import React from "react";
//import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeCarousel from "../components/Carousel";
import HomeCards from "../components/HomeCards";
import Footer from "../components/Footer";


function Home() {
    return (
        <div>
            <Header/>
            <HomeCards/>
            <HomeCarousel/>
            <Footer/>
        </div>
    );
}
export default Home;

/**
 *  TEST CODE TO HAVE ALL ROOMS LISTED FROM
 * 
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import CoverImage from "../components/CoverImage";
import NavigationBar from "../components/Navigation_Bar";
import HomeCard from "../components/Card";

function Home() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/rooms`);
        // Correctly access room data
        setRooms(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setError("Failed to fetch rooms");
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <NavigationBar />
      <CoverImage />
      <HomeCard />

      <div className="rooms-section">
        <h2>Available Rooms</h2>
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <h3>{room.attributes.Name}</h3>
              <p>Capacity: {room.attributes.Capacity}</p>
              <p>Perm Hire Fee: ${room.attributes.PermHireFee}</p>
              <p>Comm Hire Fee: ${room.attributes.CommHireFee}</p>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
*/


