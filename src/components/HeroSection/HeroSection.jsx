import React from "react";
import TypeAnimationRole from "./TypeAnimationRole";
import userImg from "../../assets/userImg.jpg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-x-8 max-md:flex-col-reverse">

      <div className="mt-8 flex justify-center items-center p-4 max-md:w-4/5 max-md:mx-auto">
        <img
          src={userImg}
          alt="hero"
          className="rounded-full border-[3px] border-solid border-blue-500 shadow-md"
          loading="lazy"
          width={250}
          height={250}
        />
      </div>

      <div className="w-[40%] mx-auto flex flex-col max-md:w-4/5 max-md:mx-auto">
        <h2 className="text-center text-[1.5rem] font-semibold">Hi, I am <span className="text-[2rem] font-bold">Jaydeep Bariya</span></h2>

        <TypeAnimationRole />

        <p className="text-center">
          I am a Software Development Engineer with 2 years of experience in
          Full Stack Web Development.
        </p>

        <div className="flex gap-x-6 my-4 mx-auto">
          <a
            href="https://www.github.com/jaydeepbariya"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub
              size={30}
              className="hover:scale-105 transition-all duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com/jsbariya_5"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram
              size={30}
              className="hover:scale-105 transition-all duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jaydeepbariya"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin
              size={30}
              className="hover:scale-105 transition-all duration-200"
            />
          </a>
          <a
            href="https://www.twitter.com/jbariya_dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter
              size={30}
              className="hover:scale-105 transition-all duration-200"
            />
          </a>
        </div>

        <div className="flex gap-6 mx-auto">
          <button className="px-3 py-2 rounded-full outline outline-[1px] outline-purple-500 my-4 hover:bg-purple-500 hover:text-white transition-all duration-200">
            <a
              href="https://drive.google.com/file/d/1Z3i6DhvcW26Z5L1L-gZdxgTENc8yFhx6/view"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </button>
          <button className="px-3 py-2 rounded-full outline outline-[1px] outline-blue-500 my-4 hover:bg-blue-500 hover:text-white transition-all duration-200">
            <a
              href="#contact"
              rel="noreferrer"
            >
              Get In Touch
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
