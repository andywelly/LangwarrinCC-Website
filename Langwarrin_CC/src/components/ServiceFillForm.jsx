import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {useForm, Controller} from 'react-hook-form';

import "./styles/FillForm.css";
import Swal from 'sweetalert2';

import ReCAPTCHA from "react-google-recaptcha";


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

  const [capVal, setCapVal] = useState(null)

  return (
      <div className="create">
        <h2> Course Enquiry and Enrolment </h2>
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
        

        <label>Start of Enrolment</label>
            <input 
              type="datetime-local"
              min = {dateTimeLocalNow} /*so that the user can't select previous date*/
              {...register("date")}
            />

          <label>Message</label>
          <textarea {...register("message")} />

          <ReCAPTCHA
            sitekey="6Lcwy2oqAAAAACQ7wjth6CB3TyaAgOeOsSNYEd6i"
            onChange={val => setCapVal(val)}
          />

          <input type="submit" value="Send"
            style = {{backgroundColor: mouseOverColor}}
            onMouseOver={mouseOverOn}
            onMouseOut={mouseOverOff}
            disabled = {!capVal} // user wont be able to click send button if didnt pass captcha
          />
        </form>
      </div>
  );
};

export default ServiceFillForm;