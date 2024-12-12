import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './contact.css'
const Contact = () => {
  // Correctly initialize the state variables using `useState`
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // `handleSubmit` should be correctly structured
  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the email service parameters
    const serviceId = "service_alrprpg";
    const templateId = "template_v5ud9nc";
    const publicKey = "8v2R5PD8mmhSiInQN";

    // Pass the correct data to the email template
    const templateParams = {
      from_name: name,
      from_email: email, // Fix: Use `email` here instead of leaving it blank
      to_name: "shaheed",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
       alert("Email sent successfully!", response);
        // Clear the form fields after successful submission
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div
    className="flex items-center justify-center min-h-screen bg-gradient-to-br bg-white"
    id="contact"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="max-w-lg w-full p-6 bg-gradient-to-br from-blue-200 to-blue-100 shadow-xl rounded-xl">
      <form onSubmit={handleSubmit} className="emailForm space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-300"
        />
        <textarea
          cols="30"
          rows="5"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow duration-300"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          Send Email
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default Contact;
