import React from "react";


import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src="/public/images/about-img-removebg-preview.png" alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I'm a frontend developer with experience building responsive, user-friendly web applications. I specialize in creating seamless and interactive user interfaces using modern technologies like React.js. I enjoy transforming design concepts into functional web experiences while ensuring optimal performance and accessibility. Always eager to learn new frameworks and stay updated with the latest trends in frontend development.
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I'm a backend developer with experience in building robust and scalable server-side applications. I focus on creating secure APIs, managing databases efficiently, and ensuring smooth integration between frontend and backend. I'm passionate about writing clean, maintainable code and optimizing performance for better user experiences.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;