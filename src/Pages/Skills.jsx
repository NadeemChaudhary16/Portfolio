import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import './Skills.css'

const Skills = () => {
  const skillSet=[
    {
      name:"HTML",
      image:<FaHtml5 size={70}/>
    },
    {
      name:"CSS",
      image:<FaCss3Alt size={70}/>
    },
    {
      name:"Tailwindcss",
      image:<SiTailwindcss size={70}/>
    },
    {
      name:"Javascript",
      image:<TbBrandJavascript size={70}/>
    },
    {
      name:"Java",
      image:<FaJava size={70}/>
    },
    {
      name:"React",
      image:<FaReact size={70}/>
    },
    {
      name:"Node.js",
      image:<FaNodeJs size={70}/>
    },
    {
      name:"Express",
      image:<SiExpress size={70}/>
    },
    {
      name:"MySQL",
      image:<GrMysql size={70}/>
    },
    {
      name:"MongoDB",
      image:<SiMongodb size={70}/>
    },
    {
      name:"Git",
      image:<FaGitAlt size={70}/>
    }
  ]

  return (
    <div className="pt-16" id="skills">
      <h1 className="text-center text-3xl sm:text-4xl text-white pt-4 px-8">Professional <span className="text-[#567cbf]">Skillset</span></h1>
      <div className="flex justify-center mt-5 px-8 flex-wrap">
        {skillSet.map((item, i) => (
          <div key={i} className="hover:shadow-md hover:shadow-blue-700/70 w-60 h-32 border-[1.7px] text-white border-[#5a76a4] rounded-lg m-6 mb-14 p-3  flex flex-col justify-center items-center" id="skill">
            {item.image}
            <p className="italic">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
