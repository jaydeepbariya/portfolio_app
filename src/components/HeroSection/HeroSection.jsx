import React from "react";
import TypeAnimationRole from "./TypeAnimationRole";
import userImg from "../../assets/userImg.jpg";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex justify-between items-center gap-x-8 max-md:flex-col">
      <div className="w-2/5 mx-auto flex flex-col justify-center items-start">
        <h2 className="text-[2.5rem] font-semibold">Hi, I am</h2>
        <h2 className="text-[3rem] font-bold">Jaydeep Bariya</h2>
        <TypeAnimationRole />
        <p className="line-clamp-5">
          I am a Software Development Engineer with 2 years of experience in
          React, Node, Express, SQL, Java, Spring Boot and REST API Development.
          Specializes in Full Stack Web Development. Proven Agile Contributor
          with collaborative efforts, consistent in delivering innovative, high
          quality solutions within challenging timelines.
        </p>
        <button className="px-4 py-2 rounded-md outline outline-blue-500 my-4 hover:bg-blue-500 hover:text-white transition-all duration-200"><a href="https://drive.google.com/file/d/1Z3i6DhvcW26Z5L1L-gZdxgTENc8yFhx6/view" target="_blank" rel="noreferrer">Download CV</a></button>
      </div>

      <div className="w-2/5 flex justify-center items-center p-6">
        <img
          src={userImg}
          alt="hero"
          className="rounded-full border-[3px] border-solid border-blue-500 shadow-md"
          loading="lazy"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default HeroSection;
