import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

export default function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] overflow-y-auto overflow-x-hidden bg-white text-darkBlue  z-100">
      
      <Navbar />
      
      <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
        <HeroSection />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </div>

      <Footer />
    </div>
  );
}
