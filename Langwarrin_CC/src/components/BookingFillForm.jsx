import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {useForm, Controller} from 'react-hook-form';

import "./styles/FillForm.css";
import Swal from 'sweetalert2';


// npm i @emailjs/browser

const BookingFillForm = () => {

  //these are needed because we want to be able to sent data from 
  //dropdown menu of enquire type
  const {  handleSubmit, register, control  } = useForm()

  const sendEmail = (data) => {

    emailjs
      .send(
        'service_k9jmtei',
        'template_1dyquvs',
        data,
        {publicKey: 'ohvmA21rpFFSx3pig',}
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
    new Date().getTime() - new Date().
    getTimezoneOffset() * 60_000  
  )
    .toISOString()
    .slice(0,16);

  const [mouseOverColor, setMouseOverColor] = useState(null);

  const mouseOverOn = () => {
    setMouseOverColor("#88c483");
  }

  const mouseOverOff = () => {
    setMouseOverColor(null);
  }
  

  return (
      <div className="create">
        <h2> Booking Room Form </h2>
        <form onSubmit={handleSubmit(sendEmail)}> {/*need to be done in this format because of multiple dropdown value*/}
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

          <label> Room Type </label>
            <Controller
              name="room_type"
              control={control}
              render={({ field }) => (
                <select {...field} defaultValue="" required> {/*this is so that user need to select a room type*/}
                  <option hidden value="">Select a Room</option>
                  <option value="Hall">Hall (capacity : 80)</option>
                  <option value="Craig Room">Craig Room (capacity : 20)</option>
                  <option value="Hempel Room">Hempel Room (capacity: 10)</option>
                  <option value="Hampton Room">Hampton Room (capaciy: 25)</option>
                  <option value="Back Spare Office">Back Spare Office (capaciy: 6)</option>
                  <option value="Children's Room and Playground">Children's Room and Playground (capaciy: 30)</option>
                </select>
              )   }
        >   </Controller>
        
        <label>Number of Guests</label>
            <input 
              type="text" pattern="[0-9]*" 
              {...register("guest_number")}
              required
            />

        <label>Date of Booking</label>
            <input 
              type="datetime-local"
              min = {dateTimeLocalNow} /*so that the user can't select previous date*/
              {...register("date")}
            />

          <label>Message</label>
          <textarea {...register("message")} />
          <input type="submit" value="Send"
            style = {{backgroundColor: mouseOverColor}}
            onMouseOver={mouseOverOn}
            onMouseOut={mouseOverOff}
          />
        </form>
      </div>
  );
};

export default BookingFillForm;