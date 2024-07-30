import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaDatabase, FaGitAlt, 
  FaDocker, FaJenkins, FaAws, FaLinux, FaNpm 
} from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiSpring, SiMongodb, SiSocketdotio, SiNginx, SiKubernetes } from 'react-icons/si';

export const skillsArray = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux }
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaNodeJs },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Java", icon: FaJava },
      { name: "SpringBoot", icon: SiSpring }
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "SQL", icon: FaDatabase },
      { name: "MongoDB", icon: SiMongodb }
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "Jenkins", icon: FaJenkins },
      { name: "Linux", icon: FaLinux },
      { name: "NgInx", icon: SiNginx },
      { name: "AWS", icon: FaAws }
    ],
  }
];

export default skillsArray;
