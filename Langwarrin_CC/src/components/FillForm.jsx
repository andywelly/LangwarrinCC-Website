import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {useForm, Controller} from 'react-hook-form';

import "./styles/FillForm.css";


// npm i @emailjs/browser

const FillForm = () => {

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
              name="room type"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value="Hall">Hall</option>
                  <option value="Craig Room">Craig Room (capacity : 80)</option>
                  <option value="Hempel Room">Hempel Room (capacity: 10)</option>
                  <option value="Craig Room">Hampton Room (capaciy: 25)</option>
                  <option value="Craig Room">Craig Room</option>
                  <option value="Craig Room">Craig Room</option>
                  <option value="Craig Room">Craig Room</option>
                </select>
              )   }
        >

        </Controller>
        {/*
          <select name="type" >
            <option value="Room Booking">Room Booking</option>
            <option value="Class Enrollment">Class Enrollment</option>
          </select>
          */
        }


          <label>Message</label>
          <textarea {...register("message")} />
          <input type="submit" value="Send" />
        </form>
      </div>
  );
};

export default FillForm;