import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";
import "../components/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yp9iyxg",
        "template_ei29zw8",
        form.current,
        "s-3INSlZ_nahJ7-BC"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Massage has been Sucessfuly send",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: "custom-alert", //custom class here
            },
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Sorry,Something went wrong!",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-white">Contact Me</span>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 px-5">
            <h3 className="text-gradient text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>
              Whether you have a project in mind, a question, or just want to
              say hello, feel free to reach out. I'm always open to new
              opportunities, collaborations, or simply sharing ideas. Looking
              forward to hearing from you!.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:mlpramuditha3@gmail.com"
                className="hover:underline pl-[4px]"
              >
                mlpramuditha3@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span className="pl-[4px]">(+94)766022618</span>
            </div>
            <div className="mb-4 flex items-start">
              <FaMapMarkedAlt className="text-green-400 mr-2"></FaMapMarkedAlt>
              <span className="pl-[4px]">
                175/3A, <br />
                Wallasmulla Road, <br />
                Beliatta, <br />
                Southern Province,
                <br /> Sri Lanka.
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-5" ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subjects"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
