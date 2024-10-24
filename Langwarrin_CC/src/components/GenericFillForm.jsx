import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import "./styles/FillForm.css";

import ReCAPTCHA from "react-google-recaptcha";

// Generic Form Component

const GenericFillForm = () => {

  // These hooks are needed to manage form data
  const { handleSubmit, register, control } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send(
        'service_k9jmtei',  // Replace with your service ID
        'template_3dovd5a',  // Replace with your template ID
        data,
        { publicKey: 'ohvmA21rpFFSx3pig' }  // Replace with your public key
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Form Sent!",
            text: "Kindly Wait for Our Response.",
            icon: "success"
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // To get the current date for date-time fields
  const dateTimeLocalNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60_000  
  )
    .toISOString()
    .slice(0,16);

  // Mouse hover effect state
  const [mouseOverColor, setMouseOverColor] = useState(null);

  const mouseOverOn = () => {
    setMouseOverColor("#88c483");
  };

  const mouseOverOff = () => {
    setMouseOverColor(null);
  };

  const [capVal, setCapVal] = useState(null)

  return (
    <div className="create">
      <h2> Contact Us </h2>
      <form onSubmit={handleSubmit(sendEmail)}>
        {/* Example generic input fields */}
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

        <label>Enquiry Type</label>
        <Controller
          name="dropdown_selection"
          control={control}
          render={({ field }) => (
            <select {...field} defaultValue="" required>
              <option hidden value="">Select an option</option>
              <option value="option_1">General Inquiry</option>
              <option value="option_2">Service Request</option>
              <option value="option_3">Feedback/Suggestions</option>
              <option value="option_4">Complaint</option>
              <option value="option_5">Billing and Paymentst</option>
              <option value="option_6">Technical Issue</option>
              <option value="option_7">Event Registration</option>
            </select>
          )}
        />


        <label>Date</label>
        <input 
          type="datetime-local"
          min={dateTimeLocalNow}
          {...register("date")}
        />

        <label>Message</label>
        <textarea {...register("message")} />
        
        <ReCAPTCHA
            sitekey="6Lcwy2oqAAAAACQ7wjth6CB3TyaAgOeOsSNYEd6i"
            onChange={val => setCapVal(val)}
          />

        <input 
          type="submit" 
          value="Send" 
          style={{ backgroundColor: mouseOverColor }}
          onMouseOver={mouseOverOn}
          onMouseOut={mouseOverOff}
          disabled = {!capVal}
        />
      </form>
    </div>
  );
};

export default GenericFillForm;
