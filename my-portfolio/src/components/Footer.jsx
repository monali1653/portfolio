import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center mb-2">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:monalisasamal1653@gmail.com"
            className="hover:underline"
          >
            monalisasamal1653@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center mb-2">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/monali-sasamal-6a22a8260"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/monali1653"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
