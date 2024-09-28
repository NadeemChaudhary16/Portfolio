import React, { useState, useRef } from "react";
import Button from "@mui/joy/Button";
import { IoIosSend } from "react-icons/io";
import './Contact.css';
import toast from "react-hot-toast";
import BioCard from "../Components/BioCard";
import Tilt from "react-parallax-tilt";
import emailjs from '@emailjs/browser';  // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef();  // Create a ref for the form

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Use EmailJS to send the email
  function submitHandler(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.VITE_SERVICE_ID,    // Replace with your EmailJS service ID
        process.env.VITE_TEMPLATE_ID,    // Replace with your EmailJS template ID
        formRef.current,       // Pass the form reference
        process.env.VITE_PUBLIC_KEY      // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");  // Display success message
          console.log("Message sent successfully");
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");  // Display error message
          console.log("Failed to send message...", error);
        }
      );

    // Reset form data
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="flex flex-col justify-between items-center pt-16 px-8" id="contact">
      <h1 className="text-white text-center text-3xl sm:text-4xl py-4">Contact Me</h1>
      <form
        ref={formRef}  // Reference the form for EmailJS
        onSubmit={submitHandler}
        className="text-white flex flex-col gap-4 form-container"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Leave your message!"
            value={formData.message}
            onChange={changeHandler}
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <Button className="flex justify-center items-center gap-2" type="submit">
          Send <IoIosSend size={20} />
        </Button>
      </form>
      <div className="pt-16">
        <Tilt>
          <BioCard />
        </Tilt>
      </div>
    </div>
  );
};

export default Contact;
