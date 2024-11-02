import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from "react-hook-form";
import "./styles/FillForm.css";
import Swal from "sweetalert2";
import { API_URL } from "../constants"; // Make sure API_URL is correctly set


const ChildcareFillForm = () => {
  const { handleSubmit, register, control } = useForm();
  const [roomOptions, setRoomOptions] = useState([]);
  const [mouseOverColor, setMouseOverColor] = useState(null);

  // Fetch room options from Strapi API
  useEffect(() => {
    const fetchRoomOptions = async () => {
      try {
        const response = await fetch(`${API_URL}/childcare?populate=deep`); // Replace with your actual Strapi API endpoint
        const data = await response.json();

        // Extract Titles from each Card
        const titles = data.data.attributes.Card.map(card => card.Title);
        setRoomOptions(titles);
      } catch (error) {
        console.error("Error fetching room options:", error);
      }
    };

    fetchRoomOptions();
  }, []);

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_k9jmtei",
        "template_3dovd5a",
        data,
        { publicKey: "ohvmA21rpFFSx3pig" }
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Form Sent!",
            text: "Kindly Wait for Our Response.",
            icon: "success",
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const dateTimeLocalNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60_000
  ).toISOString().slice(0, 16);

  const mouseOverOn = () => setMouseOverColor("#88c483");
  const mouseOverOff = () => setMouseOverColor(null);

  return (
    <div className="create">
      <h2>Childcare Form</h2>
      <form onSubmit={handleSubmit(sendEmail)}>
        <label>Name</label>
        <input type="text" {...register("user_name")} required />

        <label>Email</label>
        <input type="email" {...register("user_email")} required />

        <label>Room Type</label>
        <Controller
          name="childcare_type"
          control={control}
          render={({ field }) => (
            <select {...field} defaultValue="" required>
              <option hidden value="">
                Select a group
              </option>
              {roomOptions.map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
            </select>
          )}
        />

        <label>Number of Children</label>
        <input type="text" pattern="[0-9]*" {...register("child_number")} required />

        <label>Age of Children</label>
        <input type="text" pattern="[0-9]*" {...register("child_age")} required />

        <label>Commencement Date</label>
        <input
          type="datetime-local"
          min={dateTimeLocalNow}
          {...register("date")}
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

export default ChildcareFillForm;
