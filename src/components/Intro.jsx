import React from "react";
import MYImage from "../assets/myphoto1.png.png";
import { TypeAnimation } from "react-type-animation";
import "../components/Intro.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Intro = () => {
  const handleViewCV = () => {
    window.open(
      "https://drive.google.com/file/d/1mfza9lVum2zmz0tpIiDnCNAofYGBivED/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
        <div className="imagebox mt-8 w-80 h-80 object-cover lg:w-[420px] lg:h-[420px]">
          <div className="content">
            <img src={MYImage} />

            {/* <img
          src={MYImage}
          alt="Pramuditha Sadeepa"
          // className="mb-0 lg:mb-0 w-60 h-70 md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px] object-cover transform transition-transform duration-300 hover:scale-105"
        /> */}
          </div>
        </div>
        <div className="lg:ml-[200px] lg:pt-[80px] pt-[50px]">
          <h1 className="lg:text-4xl md:text-4xl text-3xl leading-relaxed font-bold lg:leading-relaxed">
            <div className="text-center md:text-center lg:text-left ">
              Hi I'm
              <br />
              <span className="lg:text-5xl ">Pramuditha Sadeepa</span>
              <br />
            </div>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Programmer",
                2000,
                "UI/UX Desiginer",
                2000,
              ]}
              speed={200}
              className="text-gradient md:text-left"
              wrapper="span"
              repeat={Infinity}
            />
          </h1>
          <div className="mt-5 space-x-4">
            <button
              onClick={handleViewCV}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
              View my CV
            </button>
            {/* <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
              Github
            </button> */}
          </div>

          <div className="mt-[30px] space-x-8 flex">
            <a
              href="https://www.linkedin.com/in/pramuditha-sadeepa/"
              className="text-gray-400 hover:text-white"
            >
              <span className="text-3xl">
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://github.com/pramudithasadeepa?tab=repositories"
              className="text-gray-400 hover:text-white"
            >
              <span className="text-3xl">
                {" "}
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100004857944891&mibextid=ZbWKwL"
              className="text-gray-400 hover:text-white"
            >
              <span className="text-3xl">
                <FaFacebook />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
