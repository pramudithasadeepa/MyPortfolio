import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpg";
import portimage from "../assets/portimage.png";
import {FaGithub} from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "XPress",
    discription: "Courier Service Management System(second year project)",
    description2:
      "This system is designed to manage personal courier services and handle communication failures and a lack of trust in outside providers",
    image: project1,
    technologies: "React,Node,Express,MysQL",
    imagewidth: "100%",
    imageHeight: "200px",
    gname:"Github LInk :",
    gicon:<FaGithub />,
    github: "https://github.com/Courier-Service-Project",
  },
  {
    id: 2,
    name: "Automated Liquid Dispenser System",
    discription: "First year Hardware Project",
    description2:
      "Developed an automated oil dispenser system for industrial and commercial use, optimizing efficiency and precision while reducing manual handling and wastage. Gained experience in embedded systems through this project",
    image: project2,
    technologies: "Arduino",
    imagewidth: "100%",
    imageHeight: "200px",
    gname:"",
    github: "",
  },
  {
    id: 3,
    name: "portfolio",
    discription: "",
    description2:
      "I built my portfolio website using React for the frontend, Tailwind CSS for styling, and Nodemailer to handle email functionality, providing a clean and responsive design with seamless communication capabilities.",
    image: portimage,
    technologies: "React,tailwingcss,NodeMailer",
    imagewidth: "100%",
    imageHeight: "200px",
    gname:"Github LInk :",
    gicon:<FaGithub />,
    github: "https://github.com/pramudithasadeepa/MyPortfolio",
  },
];

export default function Projects() {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-white">Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-green-400
          transform transition-transform duration-300 hover:scale-105
          shadow-green-400 shadow-md"
            >
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: project.imageWidth,
                  height: project.imageHeight,
                }}
                className="rounded-lg mb-4 
            object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <h3 className="mb-2">{project.discription}</h3>
              {/* <p className="text-gray-100">
                Role : <span className="text-gray-400">{project.role}</span>
              </p> */}
              <p className="text-gray-100 mb-4">
                Description :{" "}
                <span className="text-gray-400">{project.description2}</span>
              </p>
              <p className="text-gray-100 mb-4">
                Technologies : <br />
                <div className="text-white rounded p-2 border-b-4 border-2 border-green-500 inline-block mt-3">
                  {project.technologies}
                </div>
              </p>
              {/* <a href={project.github} className="inline-block bg-gradient-to-r 
            from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
            rel="noopener noreferrer">GitHub</a> */}
          <p className="text-gray-100">
                {project.gname} <br />
              </p>
            <div className="pt-4">
            <a
              href={project.github}
              className="text-gray-400 hover:text-white"
            >
              <span className="text-3xl">
                {" "}
                {project.gicon}
              </span>
            </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
