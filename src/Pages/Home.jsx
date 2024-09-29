import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import avatar from "../assets/avatar.svg";
import pdf from "../assets/Nadeem_Ch_Resume.pdf";
import Tilt from "react-parallax-tilt";
import Hello from '../assets/Hello.gif'
import "./Home.css";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Front-end Developer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Developer ",
      "Web Developer",
      // "Backend Developer",
      "Coder",
    ],
    typeSpeed: 100,
    backSpeed: 90,
    backDelay: 1000,
    loop: {},
  });
  return (
    <div className="home pt-32 pb-8 font-semibold  flex flex-col justify-center items-center  flex-wrap relative px-8  text-center" id="home">
      <div className="">
        <Tilt>
          <img src={avatar} alt="avatar" loading="lazy"/>
        </Tilt>
      </div>
      <div className="">
        <div className="flex justify-center pt-4">
        <p className=" hello flex text-lg ">
          Hello &nbsp;<img src={Hello} alt="Hello" width="25px" loading="lazy" />, I'm
        </p>
        </div>
        <h1 className=" name font-medium  text-3xl sm:text-4xl"> Nadeem Chaudhary</h1>
        
        <br />
        <span className="text-white font-normal text-2xl sm:text-3xl">{text}</span>
        <span className="text-3xl">
          <Cursor cursorStyle="|" cursorColor="white " />
          
        </span>
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant="outlined"
         sx={{
                bgcolor: "#3ca242",
                color: "#fff",
                borderRadius:"20px",
                "&:hover": { bgcolor: "white", color: "black" },
              }}
             >
             <HashLink smooth to="#contact" >Hire Me</HashLink>
          
        </Button>
        <Button variant="outlined"
         sx={{
                bgcolor: "#00b7e5",
                color: "black",
                borderRadius:"20px",
                "&:hover": { bgcolor: "#2196f3", color: "white" },
              }}>
          <a href={pdf} target="_blank" download>
            Download CV
          </a>
        </Button>
      </div>
     
    </div>
  );
};

export default Home;
