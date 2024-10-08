import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {useForm, Controller} from 'react-hook-form';

import "./styles/FillForm.css";


// npm i @emailjs/browser

const ServiceFillForm = () => {

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
    
  

  return (
      <div className="create">
        <h2> Courses Enrolment Form </h2>
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

          <label> Course Type </label>
            <Controller
              name="room_type"
              control={control}
              render={({ field }) => (
                <select {...field} defaultValue="" required> {/*this is so that user need to select a room type*/}
                  <option hidden value="">Select a Course</option>
                  <option value="iPhone/iPad Workshops">iPhone/iPad Workshops</option>
                  <option value="Computers for the home and workplace">Computers for Home and Workplace</option>
                  <option value="Computer Classes">Computer Classes</option>
                </select>
              )   }
        >   </Controller>
        
        <label>Number of Participants</label>
            <input 
              type="text" pattern="[0-9]*" 
              {...register("guest_number")}
              required
            />
        {/*
          <select name="type" >
            <option value="Room Booking">Room Booking</option>
            <option value="Class Enrollment">Class Enrollment</option>
          </select>
          */
        }
        <label>Start of Enrolment</label>
            <input 
              type="datetime-local"
              min = {dateTimeLocalNow} /*so that the user can't select previous date*/
              {...register("date")}
            />

          <label>Message</label>
          <textarea {...register("message")} />
          <input type="submit" value="Send" />
        </form>
      </div>
  );
};

export default ServiceFillForm;