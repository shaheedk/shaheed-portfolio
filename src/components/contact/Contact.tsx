import React, { useState,  } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const params = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_dm1fqhq",        // Service ID
        "template_v5ud9nc",       // Template ID
        params,
        "8v2R5PD8mmhSiInQN"       // Public Key
      )
      .then(() => {
        setStatus("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus(""), 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col items-center justify-center px-4" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-center" >
        get in touch<br /> <span className="text-4xl">CONTACT</span>
      </h2>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10" >
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4 bg-[#1F1F1F] p-4 rounded">
            <FaPhoneAlt className="text-lg" />
            <span>+91 7510846497</span>
          </div>
          <div className="flex items-center gap-4 bg-[#1F1F1F] p-4 rounded">
            <FaEnvelope className="text-lg" />
            <span>shaheedk07@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 bg-[#1F1F1F] p-4 rounded">
            <FaMapMarkerAlt className="text-lg" />
            <span>Malappuram, Kerala,india</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-[#1F1F1F] text-white placeholder-gray-400 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-[#1F1F1F] text-white placeholder-gray-400 outline-none"
            required
          />
          <textarea
            rows={5}
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded bg-[#1F1F1F] text-white placeholder-gray-400 outline-none resize-none"
            required
          />
          <button
            type="submit"
            className="bg-gray-200 text-black px-6 py-2 rounded cursor-pointer hover:bg-white transition"
          >
            Send
          </button>
          {status && (
            <p className={`text-sm mt-2 ${status.includes("success") ? "text-green-500" : "text-red-500"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
      <footer className="text-center text-sm text-gray-500 py-4">
      © 2025 Shaheed. All rights reserved.
    </footer>
    </div>
  );
};

export default Contact;