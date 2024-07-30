import React, { useState } from "react";
import { RxCrossCircled, RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const [openMobileNavbar, setOpenNavbar] = useState(false);
  const { darkMode } = useTheme();
  return (
    <div className={`w-full py-2 shadow-md shadow-purple-500 px-4 rounded-md ${darkMode ? "bg-black text-white" : ""}`}>
      <div className="w-11/12 mx-auto py-3 flex justify-between items-center max-md:flex-col">
        <div className="text-xl font-semibold">
          <p>
            <span className={`text-darkBlue ${darkMode ? "bg-black text-white" : ""}`}>{"<"}</span>Jaydeep Bariya
            <span className={`text-darkBlue ${darkMode ? "bg-black text-white" : ""}`}>{"/>"}</span>
          </p>
        </div>

        {/* Desktop Navbar */}
        <nav className={`w-3/5 flex justify-between items-center list-none text-sm max-md:hidden`}>
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
          <li className="cursor-pointer  max-md:py-2hover:text-blue-500">
            <a href="#contact">Contact</a>
          </li>
        </nav>

        {/* Mobile Navbar Toggle Button */}
        <button className="hidden absolute right-3 top-3 max-md:block" onClick={() => setOpenNavbar(!openMobileNavbar)}>
          {openMobileNavbar ? <RxCrossCircled size={35} /> : <RxHamburgerMenu size={35} />}
        </button>

        {/* Mobile Navbar */}
        <nav className={`w-2/5 hidden list-none text-sm max-md:block max-md:${openMobileNavbar ? "flex-col" : "hidden"} max-md:justify-center max-md:items-center max-md:my-6 max-md:gap-3`}>
          <li className="cursor-pointer hover:text-blue-500 max-md:my-3 max-md:text-center max-md:py-2">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500 max-md:my-3 max-md:text-center max-md:py-2">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500 max-md:my-3 max-md:text-center max-md:py-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500 max-md:my-3 max-md:text-center max-md:py-2">
            <a href="#experience">Experience</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500 max-md:my-3 max-md:text-center max-md:py-2">
            <a href="#contact">Contact</a>
          </li>
        </nav>

        {/* GitHub Profile Button */}
        <button className="text-purple-600 rounded-md outline outline-[1px] text-sm px-3 py-1 outline-purple-600 bg-transparent hover:bg-purple-600 hover:text-white transition-all duration-200 max-md:my-8">
          <a href="https://www.github.com/jaydeepbariya">Github Profile</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
