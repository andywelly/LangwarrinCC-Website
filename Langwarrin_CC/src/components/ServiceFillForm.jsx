import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from 'react-hook-form';
import "./styles/FillForm.css";
import Swal from 'sweetalert2';
import { API_URL } from "../constants"; // Make sure API_URL is correctly set


const ServiceFillForm = () => {
  const { handleSubmit, register, control } = useForm();
  const [courseOptions, setCourseOptions] = useState([]);
  const [mouseOverColor, setMouseOverColor] = useState(null);

  // Fetch service data from the Strapi API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_URL}/service?populate=deep`); 
        const data = await response.json();

        // Check if response has data and attributes
        const serviceGroups = data.data.attributes.ServiceGroup;

        // Extract titles from each ServiceGroup -> ServiceCard -> Title
        const titles = serviceGroups.flatMap(group =>
          group.ServiceCard.map(card => card.Title)
        );

        setCourseOptions(titles);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
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
      <h2> Course Enquiry and Enrolment </h2>
      <form onSubmit={handleSubmit(sendEmail)}>
        <label>Name</label>
        <input type="text" {...register("user_name")} required />
        
        <label>Email</label>
        <input type="email" {...register("user_email")} required />

        <label> Course Type </label>
        <Controller
          name="room_type"
          control={control}
          render={({ field }) => (
            <select {...field} defaultValue="" required>
              <option hidden value="">Select a Course</option>
              {courseOptions.map((title, index) => (
                <option key={index} value={title}>{title}</option>
              ))}
            </select>
          )}
        />

        <label>Start of Enrolment</label>
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

export default ServiceFillForm;
