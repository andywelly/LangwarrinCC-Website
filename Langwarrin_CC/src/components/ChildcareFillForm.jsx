import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {useForm, Controller} from 'react-hook-form';

import "./styles/FillForm.css";


// npm i @emailjs/browser

const ChildcareFillForm = () => {

  //these are needed because we want to be able to sent data from 
  //dropdown menu of enquire type
  const {  handleSubmit, register, control  } = useForm()

  const sendEmail = (data) => {

    emailjs
      .send(
        'service_k9jmtei',
        'template_3dovd5a',
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
        <h2> Childcare Form </h2>
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
              name="childcare_type"
              control={control}
              render={({ field }) => (
                <select {...field} defaultValue="" required> {/*this is so that user need to select a room type*/}
                  <option hidden value="">Select a group</option>
                  <option value="Possum Group">Possum Group (age : 6 weeks to 4 years)</option>
                  <option value="Koala Group">Koala Group (age : over 3 years)</option>
                  <option value="Outside School Hours">Outside School Hours (school age children)</option>
                  <option value="Children's Activities">Children's Activities</option>
                </select>
              )   }
        >   </Controller>
        
        <label>Number of Children</label>
            <input 
              type="text" pattern="[0-9]*" 
              {...register("child_number")}
              required
            />
        
        <label>Age of Children</label>
            <input 
              type="text" pattern="[0-9]*" 
              {...register("child_age")}
              required
            />
        {/*
          <select name="type" >
            <option value="Room Booking">Room Booking</option>
            <option value="Class Enrollment">Class Enrollment</option>
          </select>
          */
        }
        <label>Commenncement Date</label>
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

export default ChildcareFillForm;