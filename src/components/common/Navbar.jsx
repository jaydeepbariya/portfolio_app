import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full min-h-max py-4 shadow-md shadow-purple-500 px-4 rounded-md fixed bg-white"
      id="about"
    >
      <div className="w-11/12 mx-auto py-3 flex justify-between max-md:flex-col max-md:items-center max-md:gap-6">
        <div className="text-xl font-semibold">
          <p>
            <span className="text-darkBlue">{"<"}</span>Jaydeep Bariya
            <span className="text-darkBlue">{"/>"}</span>
          </p>
        </div>

        <nav className={`w-3/5 flex justify-between items-center list-none text-sm text-black max-sm:flex-col max-sm:gap-4`}>
          <li className="cursor-pointer hover:text-blue-500">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <a href="#experience">Experience</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <a href="#contact">Contact</a>
          </li>
        </nav>


        <button className="text-purple-600 rounded-md outline outline-[1px] text-sm px-3 py-1 outline-purple-600 bg-transparent hover:bg-purple-600 hover:text-white transition-all duration-200">
          <a href="https://www.github.com/jaydeepbariya">Github Profile</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
