import studynotionImg from "../assets/projects/studynotion.png";
import shoppingCartImg from "../assets/projects/shopping_cart.png";
import devDetectiveImg from "../assets/projects/devdetective.png";
import weatherImg from "../assets/projects/weatherapp.png";
import passwordGeneratorImg from "../assets/projects/password_generator.png";
import razorpayCloneImg from '../assets/projects/razorpay_clone.png';
import discordCloneImg from '../assets/projects/discord_clone.png';
import nikeCloneImg from "../assets/projects/nike_clone.png";
import imageGalleryImg from "../assets/projects/imagegallery.png";
import portfolioImg from "../assets/projects/portfolio.png";

export const projects = [
  {
    group: "MERN Full Stack",
    projects: [
      {
        id: "project1",
        image: studynotionImg,
        skills: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
        ],
        name: "StudyNotion App",
        visitLink: "https://studynotion-frontend-flame.vercel.app/",
        sourceCodeLink: "https://www.github.com/jaydeepbariya/studynotion_app",
      },
    ],
  },
  {
    group: "ReactJS",
    projects: [
      {
        id: "project2",
        image: shoppingCartImg,
        skills: ["JavaScript", "Tailwind CSS", "React", "Redux"],
        name: "ShoppingCart App",
        visitLink: "https://shopping-cart-redux-gilt.vercel.app/",
        sourceCodeLink:
          "https://www.github.com/jaydeepbariya/ShoppingCartRedux",
      },
    ],
  },
  {
    group: "Javascript",
    projects: [
      {
        id: "project3",
        skills: ["HTML5", "CSS3", "JavaScript"],
        name: "DevDetective App",
        image: devDetectiveImg,
        visitLink: "https://jaydeepbariya.github.io/DevDetective/",
        sourceCodeLink: "https://www.github.com/jaydeepbariya/DevDetective",
      },
      {
        id: "project4",
        skills: ["HTML5", "CSS3", "JavaScript"],
        name: "Weather App",
        image: weatherImg,
        visitLink: "https://jaydeepbariya.github.io/WeatherApp/",
        sourceCodeLink: "https://github.com/jaydeepbariya/WeatherApp",
      },
      {
        id: "project5",
        skills: ["HTML5", "CSS3", "JavaScript"],
        name: "PasswordGenerator App",
        image: passwordGeneratorImg,
        visitLink: "https://jaydeepbariya.github.io/PasswordGenerator/",
        sourceCodeLink: "https://github.com/jaydeepbariya/PasswordGenerator",
      },
    ],
  },
  {
    group: "Tailwind",
    projects: [
      {
        id: "project6",
        skills: ["HTML5", "Tailwind"],
        name: "Razorpay Clone",
        image: razorpayCloneImg,
        visitLink: "https://incomparable-belekoy-d1ee93.netlify.app/",
        sourceCodeLink: "https://github.com/jaydeepbariya/Razorpay_Clone",
      },
      {
        id: "project7",
        skills: ["HTML5", "Tailwind"],
        name: "Discord Clone",
        image: discordCloneImg,
        visitLink: "https://delightful-strudel-75e683.netlify.app/",
        sourceCodeLink: "https://github.com/jaydeepbariya/Discord_Clone",
      },
      {
        id: "project8",
        skills: ["HTML5", "Tailwind"],
        name: "Nike Clone",
        image: nikeCloneImg,
        visitLink: "https://fastidious-gnome-320c5a.netlify.app/",
        sourceCodeLink:
          "https://github.com/jaydeepbariya/nike_landing_page_clone",
      },
    ],
  },
  {
    group: "HTML and CSS",
    projects: [
      {
        id: "project9",
        skills: ["HTML5", "CSS"],
        name: "Image Gallery",
        image: imageGalleryImg,
        visitLink: "https://jaydeepbariya.github.io/ImageGallery/",
        sourceCodeLink: "https://github.com/jaydeepbariya/ImageGallery",
      },
      {
        id: "project10",
        skills: ["HTML5", "CSS"],
        name: "Portfolio App",
        image: portfolioImg,
        visitLink: "https://jaydeepbariya.github.io/PortfolioWebsite/",
        sourceCodeLink: "https://github.com/jaydeepbariya/PortfolioWebsite",
      },
    ],
  },
];

export const groups = [
  "MERN Full Stack",
  "ReactJS",
  "Javascript",
  "Tailwind",
  "HTML and CSS"
];
