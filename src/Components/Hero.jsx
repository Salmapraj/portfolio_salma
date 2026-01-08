import React from "react";
// import girl from "/images/girl.png"


import Skills from "./Skills";
import About from "./About";
import nextjs from "../assets/icons/Nextjs.svg";
import figma from "../assets/icons/Figma.svg";
import react from "../assets/icons/React (1).svg";
import JS from "../assets/icons/JavaScript.svg";
import TS from "../assets/icons/TypeScript.svg";
import CSS from "../assets/icons/CSS3.svg";
import EX from "../assets/icons/Express.svg";
import Mysql from "../assets/icons/MySQL.svg";
import Git from "../assets/icons/GitHub.svg";
import Node from "../assets/icons/NodeJs.svg";
import Mongo from "../assets/icons/MongoDB.svg";
import jira from "../assets/icons/Jira.svg";
import tailwind from "../assets/icons/Tailwind.svg";
import shadcn from "../assets/icons/shdcn.png";
import postman from "../assets/icons/Postman.svg";
import cs from "../assets/icons/CS.svg";
import Project from "./Project";
import Intro from "./Intro";
import ContactSection from "./Contact";
function Hero() {
  const portfolioData = {
    name: "Salama Prajapati",
    title: "Frontend Developer",
    tagline: "",
    email: "salmapraz@gmail.com",
    phone: "+977 9840032218",
    location: "Madhyapur Thimi-5, Bhaktapur",
    social: {
      github: "https://github.com/Salmapraj",
      linkedin: "https://www.linkedin.com/in/salama-prajapati/",
    },
    about: {
      description:
        " I am a software developer spealizing in Javascript, ReactJs, NextJs, Nodejs, Express js ,Mongodb. I enjoy building scalable, user-focusedweb applications and turning real-world problems into clean,efficient code. I’m constantly learning new teI’m actively improvingmy skills through projects and enjoy solving problems, understanding how things work under the hood, and writing better code every day.",
    },
    skills: [
      {
        category: "Languages",
        items: [
          { name: "JavaScript", icon: JS },
          { name: "TypeScript", icon: TS },
          { name: "C", icon: cs },
        ],
      },
      {
        category: "Frameworks & Libraries",
        items: [
          { name: "React", icon: react },
          { name: "Next.js", icon: nextjs },
          { name: "Node.js", icon: Node },
          { name: "Express", icon: EX },
          { name: "CSS", icon: CSS },
          { name: "Tailwind CSS", icon: tailwind },
          { name: "Shadcn UI", icon: shadcn },
        ],
      },

      {
        category: "Tools",
        items: [
          { name: "Git", icon: Git },
          { name: "Figma", icon: figma },
          { name: "Postman", icon: postman },
          { name: "Jira", icon: jira },
        ],
      },
      {
        category: "Databases",
        items: [
          { name: "MongoDB", icon: Mongo },
          { name: "MySQL", icon: Mysql },
        ],
      },
    ],
    projects: [
      {
        title: "Movie Review",
        description:
          "A full-stack web application that allows users to explore movies, rate them, and share reviews. It integrates data from TMDB (The Movie Database) API and includes JWT authentication, searching, pagination, reviewing, movie ratings and listings.",
        image:
          "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Salmapraj/Movie-Review#",
        live: "https://movie-review-dzzu.vercel.app/",
      },
      {
        title: "Blog Application",
        description:
          "A web-based application that allows users to add, update, delete and view blogs. Features a clean interface for managing blog posts with full CRUD operations.",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express"],
        github: "https://github.com/Salmapraj/Blog-App",
        live: "#",
      },
      {
        title: "ZeroBite",
        description:
          "An e-commerce application focused on food recommendation and expiry management. This app focuses on food waste reduction by benefitting both buyer and seller parties.",
        image:
          "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
        tech: ["React.js", "Tailwind CSS", "Django REST", "PostgreSQL"],
        github: "https://github.com/Salmapraj/Zero_bite",
        live: "#",
      },
    ],
    education: [
      {
        degree:
          "Bachelor in Computer Science and Information Technology (Bsc.CSIT)",
        institution: "Bhaktapur Multiple Campus (Bhaktapur)",
        year: "2022 - Present",
      },
      {
        degree: "Higher Secondary (+2) - Science",
        institution: "Khwopa Higher Secondary School (Bhaktapur)",
        year: "2019 - 2021",
      },
    ],
    experience: [
      {
        position: "Frontend Developer",
        company: "CvArcher",
        duration: "1 month",
        description:
          "Worked on frontend using React.js, TypeScript, Tailwind, and Flowbite. Developed and maintained responsive CV templates both ATS-friendly and modern using React, Tailwind, and Flowbite.",
      },
    ],
  };

  return (
    <div className="bg-[#f6eaed]">
      <Intro />
      <About portfolioData={portfolioData} />
      <Skills skills={portfolioData.skills} />
      <Project portfolioData={portfolioData} />
      <ContactSection portfolioData={portfolioData} />
    </div>
  );
}

export default Hero;
