import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaBookReader } from "react-icons/fa";
import gif from "../assets/gif.png";
import chatImg from "../assets/ChatNow.png";
import car from "../assets/car.png";
import weather from "../assets/weather.png";
import "./Portfolio.css";
import { Bounce } from "react-awesome-reveal";

const Portfolio = () => {
  const projects = [
    {
      name: "ChatNow",
      desc: "A Full Stack chat application, featuring secure user authentication, real-time messaging, typing indicators, message notifications, and group chat creation and management.",
      stack: ["React", "HTML", "CSS", "Javascript", "Node.js", "MongoDB", "Express.js"],
      image: chatImg,
      gitHubLink: "https://github.com/NadeemChaudhary16/mern-chat-app",
      demoLink: "https://chatnow-969r.onrender.com",
    },
    {
      name: "GIF Generator",
      desc: "A React application that empowers users to create GIFs randomly or according to predefined input criteria.",
      stack: ["React", "HTML", "CSS", "Javascript"],
      image: gif,
      gitHubLink: "https://github.com/NadeemChaudhary16/Gif_Generator",
      demoLink: "https://nadeemchaudhary16.github.io/Gif_Generator/",
    },
    {
      name: "Car Rental App",
      desc: "A user‑friendly React car rental app with intuitive brand‑based filtering for seamless vehicle selection, prioritizing ease of use and navigation.",
      stack: ["React", "HTML", "CSS", "Javascript"],
      image: car,
      gitHubLink: "https://github.com/NadeemChaudhary16/React-CarRentingApp",
      demoLink: "https://nadeemchaudhary16.github.io/React-CarRentingApp/",
    },
    {
      name: "Weather App",
      desc: "A weather application with a slick and simple UI that offers real‑time meteorological insights.",
      stack: ["HTML", "CSS", "Javascript"],
      image: weather,
      gitHubLink: "https://github.com/NadeemChaudhary16/Weather_App",
      demoLink: "https://nadeemchaudhary16.github.io/Weather_App/",
    },
  ];

  return (
    <div className="pt-16" id="portfolio">
      <h1 className="text-center text-3xl sm:text-4xl px-8 text-white pt-4">
        My Recent <span className="text-[#567cbf]">Works</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 text-white pt-10 px-4 sm:px-8">
        {projects.map((project, i) => {
          return (
            <Bounce key={i}>
              <div
                className="hover:shadow-md hover:shadow-blue-700/70 flex flex-col justify-between items-center w-full max-w-[350px] h-[500px] border-2 border-[#5a76a4] rounded-xl transition-all duration-300 p-4"
              >
                <div className="rounded-xl overflow-hidden w-full h-[200px]">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                    alt={project.name}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold py-4 text-[#567cbf] text-center">
                  {project.name}
                </h3>
                <p className="text-center text-sm">{project.desc}</p>
                <div className="flex flex-wrap justify-center gap-2 items-center pt-4 text-[#567cbf]">
                  <p className="pr-2">Stack:</p>
                  {project.stack.map((skill, i) => {
                    return (
                      <span
                        key={i}
                        className="skill bg-[#21212150] border border-gray-300 rounded-3xl py-1 px-3 text-sm text-gray-300"
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-4 pt-6">
                  <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      sx={{
                        bgcolor: "#45a049",
                        color: "#fff",
                        borderRadius: "20px",
                        "&:hover": { bgcolor: "white", color: "black" },
                      }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outlined"
                      startIcon={<FaBookReader />}
                      sx={{
                        bgcolor: "#45a049",
                        color: "#fff",
                        borderRadius: "20px",
                        "&:hover": { bgcolor: "white", color: "black" },
                      }}
                    >
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </Bounce>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
