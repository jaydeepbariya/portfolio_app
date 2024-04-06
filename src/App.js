import React from "react";
import Navbar from "./components/common/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/common/Footer";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`w-full min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-darkBlue"
      }`}
    >
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <button
        className={`fixed bottom-4 right-4 px-3 py-1 rounded-md ${
          darkMode ? "bg-white text-darkBlue" : "bg-darkBlue text-white"
        }`}
        onClick={toggleTheme}
      >
        {!darkMode ? <MdDarkMode size={45} /> : <MdOutlineDarkMode size={45} />}
      </button>
    </div>
  );
}
