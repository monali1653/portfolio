import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#339933" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>

        
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src="/images/ubslogo-removebg-preview.png" alt="UBS logo" className="w-14 h-14 object-contain" />
          <span className="text-white">
            <h2 className="leading-tight">Hackathon Participant, UBS</h2>
            <p className="text-sm leading-tight font-thin">3 April, 2025 - 4 April, 2025</p>
            <ul className="text-sm p-2">
              <li>- Selected for the UBS Hackathon held in Pune through a national-level college screening test conducted by UBS.</li>
              <li>- Collaborated with a team to solve a real-world problem by working on the frontend, integrating it with backend services and an LLM.</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
