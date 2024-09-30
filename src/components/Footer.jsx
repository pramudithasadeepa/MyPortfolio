import React from "react";
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="border-t border-gray-600 pt-4 md:flex-row 
          justify-between items-center"
        >
         
         <div className="flex justify-center items-center space-x-8 my-4 mb-5">
            <a href="https://www.facebook.com/profile.php?id=100004857944891&mibextid=ZbWKwL" className="text-gray-400 hover:text-white">
              <span className="text-3xl"><FaFacebook /></span>
            </a>
            <a href="https://www.linkedin.com/in/pramuditha-sadeepa/" className="text-gray-400 hover:text-white">
              <span className="text-3xl"><FaLinkedin /></span>
            </a>
            <a href="https://github.com/pramudithasadeepa?tab=repositories" className="text-gray-400 hover:text-white">     
              <span className="text-3xl"> <FaGithub /></span>
            </a>
          </div>

           <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pramuditha Sadeepa. All rights reserved.
          </p>
          {/* <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
