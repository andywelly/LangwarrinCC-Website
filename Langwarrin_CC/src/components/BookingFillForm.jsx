import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_URL } from "../constants"; // Ensure API_URL is correctly set

import "./styles/FillForm.css";

const BookingFillForm = () => {
  const { handleSubmit, register, control } = useForm();
  const [roomTypes, setRoomTypes] = useState([]);
  const [mouseOverColor, setMouseOverColor] = useState(null);

  // Fetch room types from Strapi API
  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const response = await axios.get(`${API_URL}/room-hire?populate=deep`);
        // Access room types correctly based on the nested structure
        const rooms = response.data.data.attributes.Room.map(room => ({
          id: room.id,
          name: room.RoomName, // Adjusted to match exact key in JSON
        }));
        setRoomTypes(rooms);
        console.log("Rooms set in state:", rooms); // Log to verify
      } catch (error) {
        console.error("Error fetching room types:", error);
      }
    };
    fetchRoomTypes();
  }, []);
  

  const sendEmail = (data) => {
    emailjs
      .send(
        'service_k9jmtei',
        'template_1dyquvs',
        data,
        { publicKey: 'ohvmA21rpFFSx3pig' }
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Form Sent!",
            text: "Kindly Wait for Our Response.",
            icon: "success"
          });
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const dateTimeLocalNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60_000  
  )
    .toISOString()
    .slice(0, 16);

  const mouseOverOn = () => setMouseOverColor("#88c483");
  const mouseOverOff = () => setMouseOverColor(null);

  return (
    <div className="create">
      <h2>Room Booking</h2>
      <form onSubmit={handleSubmit(sendEmail)}>
        <label>Name</label>
        <input 
          type="text" 
          {...register("user_name")} 
          required
        />
        <label>Email</label>
        <input 
          type="email" 
          {...register("user_email")}
          required
        />
        
        <label>Room Type</label>
        <Controller
          name="room_type"
          control={control}
          render={({ field }) => (
            <select {...field} defaultValue="" required>
              <option hidden value="">Select a Room</option>
              {roomTypes.map(room => (
                <option key={room.id} value={room.name}>
                  {room.name}
                </option>
              ))}
            </select>
          )}
        />

        <label>Number of Guests</label>
        <input 
          type="text" pattern="[0-9]*" 
          {...register("guest_number")}
          required
        />

        <label>Date of Booking</label>
        <input 
          type="datetime-local"
          min={dateTimeLocalNow}
          {...register("date")}
          required
        />

        <label>Message</label>
        <textarea {...register("message")} />
        <input 
          type="submit" 
          value="Send"
          style={{ backgroundColor: mouseOverColor }}
          onMouseOver={mouseOverOn}
          onMouseOut={mouseOverOff}
        />
      </form>
    </div>
  );
};

export default BookingFillForm;
