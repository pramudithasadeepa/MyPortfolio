import React from 'react'
import html from "../assets/html.png";
import mui from "../assets/mui.png";
import react from "../assets/react.png";
import css from "../assets/css3.png";
import tailwing from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png"
import git from "../assets/git.png";
import postman from "../assets/postman.png";
import ps from "../assets/ps.png";


const Tech1 = [
       {
         id: 1,
         src: react,
         title: "React",
         style: "shadow-blue-500",
       },
       {
         id: 2,
         src: html,
         title: "Html",
         style: "shadow-orange-500",
      },
      {
        id: 3,
        src:css,
        title: "CSS",
        style: "shadow-blue-500",
     },
     {
        id: 4,
        src: mui,
        title: "MUI",
        style: "shadow-blue-500",
     },
     {
        id: 5,
        src: tailwing,
        title: "tailwing",
        style: "shadow-blue-500",
     },
    
     ];

     const Tech2 = [
        {
          id: 1,
          src: nodejs,
          title: "Nodejs",
          style: "shadow-green-500",
        },
        {
          id: 2,
          src: express,
          title: "Expressjs",
          style: "shadow-gray-500",
       },
       {
        id: 3,
        src: mysql,
        title: "MySQL",
        style: "shadow-blue-500",
     },
     {
        id: 4,
        src: mongodb,
        title: "MongoDB",
        style: "shadow-green-500",
     },
    
   
      ];

      const Tech3 = [
        {
          id: 1,
          src: java,
          title: "Java",
          style: "shadow-blue-500",
        },
        {
          id: 2,
          src: javascript,
          title: "Javascript",
          style: "shadow-yellow-500",
       },
       {
        id: 3,
        src: c,
        title: "C",
        style: "shadow-blue-500",
     },
     {
        id: 4,
        src: python,
        title: "Python",
        style: "shadow-yellow-500",
     },
  
    
   
      ];


      const Tech4 = [
        {
          id: 1,
          src: git,
          title: "Git",
          style: "shadow-red-500",
        },
        {
          id: 2,
          src: postman,
          title: "Postman",
          style: "shadow-orange-500",
       },
       {
        id: 3,
        src: ps,
        title: "Photoshop",
        style: "shadow-blue-500",
     },
      ];


export default function Technologies() {
  return (
    <div className="bg-black text-white py-20" id="project">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
         <div className="text-4xl font-bold text-center mb-12">
         <span className="border-b-4 border-white">Technologies</span>
        </div>

        <div>
        <div className="text-3xl font-bold text-left mb-4">
          Front-End Development{" "}
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-6 gap-10 text-center py-5 px-12 sm:px-0'>
        {Tech1.map(({ id, src, title, style }) => (
            <div 
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
            </div>
             ))}
        </div>
        </div>

        <div>
        <div className="text-3xl font-bold text-left mb-4 mt-8">
          Back-End Development{" "}
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-6 gap-10 text-center py-5 px-12 sm:px-0'>
        {Tech2.map(({ id, src, title, style }) => (
            <div 
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
            </div>
             ))}
        </div>
        </div>

        <div>
        <div className="text-3xl font-bold text-left mb-4 mt-8">
          Programming Language{" "}
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-6 gap-10 text-center py-5 px-12 sm:px-0'>
        {Tech3.map(({ id, src, title, style }) => (
            <div 
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
            </div>
             ))}
        </div>
        </div>

        <div>
        <div className="text-3xl font-bold text-left mb-4 mt-8">
          Others{" "}
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-6 gap-10 text-center py-5 px-12 sm:px-0'>
        {Tech4.map(({ id, src, title, style }) => (
            <div 
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
            </div>
             ))}
        </div>
        </div>


    </div>
    </div>
  )
}
