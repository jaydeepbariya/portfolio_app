import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-blue-400 relative">
      <div className="pt-4 pb-2 text-[3rem] font-bold select-none text-white">
        Jaydeep Bariya
      </div>

      <div className="flex gap-x-[2rem] my-3 max-md:flex-col">
        <a href="#about" className="my-4">About</a>
        <a href="#skills" className="my-4">Skills</a>
        <a href="#projects" className="my-4">Projects</a>
        <a href="#experience" className="my-4">Experience</a>
        <a href="#contact" className="my-4">Contact</a>
      </div>

      <div className="flex gap-x-4 my-4">
        <a
          href="https://www.github.com/jaydeepbariya"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub
            size={30}
            className="hover:scale-105 hover:-translate-y-2 transition-all duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/jsbariya_5"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram
            size={30}
            className="hover:scale-105 hover:-translate-y-2 transition-all duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jaydeepbariya"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin
            size={30}
            className="hover:scale-105 hover:-translate-y-2 transition-all duration-200"
          />
        </a>
        <a
          href="https://www.twitter.com/jbariya_dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter
            size={30}
            className="hover:scale-105 hover:-translate-y-2 transition-all duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
