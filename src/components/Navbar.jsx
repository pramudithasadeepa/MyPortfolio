import React, { useState } from "react";
import mylogo from "../assets/twlogo.png";

// Main Navbar Component
export default function Navbar({
  introRef,
  aboutRef,
  projectsRef,
  technologiesRef,
  contactRef,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Custom smooth scroll function
  const smoothScrollTo = (targetY, duration = 1000) => {
    const startY = window.pageYOffset;
    const difference = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress is between 0 and 1

      window.scrollTo(0, startY + difference * progress); // Smoothly scroll to the target position

      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation); // Continue the animation
      }
    }

    window.requestAnimationFrame(animation);
  };

  const handleScroll = (ref) => {
    if (ref === introRef) {
      smoothScrollTo(0, 1500); // Slow scroll to the top over 2 seconds
    } else if (ref && ref.current) {
      const elementPosition = ref.current.offsetTop;
      smoothScrollTo(elementPosition, 1500); // Slow scroll to section over 2 seconds
    }
    setMobileMenuOpen(false); // Close mobile menu on click
  };

  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 mr-5 md:hidden lg:block">
                <img src={mylogo} />
              </div>
              <div className="text-white text-2xl font-bold">Pramuditha</div>
            </div>

            {/* Centered Nav Items (Hidden on mobile) */}
            <div className="hidden sm:flex flex-grow justify-center space-x-4">
              <button
                onClick={() => handleScroll(introRef)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => handleScroll(aboutRef)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About Me
              </button>
              <button
                onClick={() => handleScroll(projectsRef)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => handleScroll(technologiesRef)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Tech Stack
              </button>
              <button
                onClick={() => handleScroll(contactRef)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>

            {/* Connect Button (Hidden on small screens) */}
            <div>
              <button
                onClick={() => handleScroll(contactRef)}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
              >
                Connect Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center w-10 rounded-md p-2 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border-solid border-5 border-white"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <span>&#x2715;</span> // Close icon (X)
                ) : (
                  <span>&#9776;</span> // Menu icon (Bars)
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <button
                onClick={() => handleScroll(introRef)}
                className="w-full rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </button>
              <button
                onClick={() => handleScroll(aboutRef)}
                className="w-full block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About Me
              </button>
              <button
                onClick={() => handleScroll(projectsRef)}
                className="w-full block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </button>
              <button
                onClick={() => handleScroll(technologiesRef)}
                className="w-full block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Tech Stack
              </button>
              <button
                onClick={() => handleScroll(contactRef)}
                className="w-full block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Add some padding to the top of your main content to avoid being hidden behind the fixed navbar */}
      <div className="pt-16"></div>{" "}
      {/* Adjust this value based on the navbar height */}
    </div>
  );
}
