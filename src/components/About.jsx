import React from 'react'

export default function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
      <div className="text-4xl font-bold text-center mb-12">
         <span className="border-b-4 border-white">About Me</span>
      </div>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <div className='flex-1'>
            <p className='text-lg'>
            I am an IT undergraduate at the University of Moratuwa, with a passion for full-stack 
            development and a focus on building modern, responsive web applications. My technical 
            expertise spans both frontend and backend technologies, with hands-on experience in 
            Java, Python, JavaScript, React.js, Node.js, and Express.js, along with database management
             skills. I thrive in problem-solving environments and excel as a collaborative team player.
             With strong time management skills, I am always eager to learn, adapt, and take on new 
             challenges to continuously improve my skills.
            </p>
            </div>
        </div>

        <h2 className='text-4xl font-bold text-center mt-[40px]'>Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-[30px] ">
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
          transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-7">
                    University of Moratuwa<br/>
                    Expected 2026<br/>
                    BScHons in Information Technology
            </h3>
            <p className="text-gray-300 mb-4">
            I am an undergraduate at the University of Moratuwa, pursuing a BSc (Hons) in Information Technology.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
          transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-7">
            Ruhunu Vijayaba College
            </h3>
            <p className="text-gray-300 mb-4">
            In 2020, I completed the GCE Advanced Level in the Physical Science stream</p>
          </div>
      </div>

      </div>
    </div>
  )
}
