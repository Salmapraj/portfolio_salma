import React from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
// import girl from "/images/girl.png"
import mail from "/images/mail.png";
import linkedin from "/images/linkedin.png";
import git from "/images/git.png";
import girlbanner from "/images/girlbanner.png";
import Skills from "./Skills";
import About from "./About";
import { Code2, Database, Palette, Terminal, Github } from "lucide-react";
import Project from "./Project";
function Hero() {
  // Portfolio Data - Updated from CV
  const portfolioData = {
    name: "Salama Prajapati",
    title: "Frontend Developer",
    tagline: "",
    email: "salmaprajapati322@gmail.com",
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
      { name: "HTML & CSS", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "JavaScript", icon: Terminal, level: 85 },
      { name: "React.js", icon: Code2 },
      { name: "Node.js", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Express.js", icon: Terminal },
      { name: "Next.js", icon: Code2 },
      { name: "Shadcn UI", icon: Palette },
      { name: "Git & GitHub", icon: Github },
      { name: "Figma", icon: Palette },
      { name: "SQL", icon: Database },
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
    <>
      <div className="flex flex-col-reverse justify-between   gap-6 px-17 lg:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          viewport={{ once: true }}
          className="flex flex-col ml-0 text-[#996A71] flex-wrap mt-65 text-sm lg:text-xl"
        >
          <span className=" font-extrabold  text-[#996A71] font-sora  text-xl lg:text-5xl">
            Hello, I am Salama Prajapati
          </span>
          <span className=" font-extrabold font-sora text-2xl lg:text-3xl mt-4">
            Aspiring{" "}
            <span
              className="text-white text-2xl ml-2 font-extrabold lg:text-3xl "
              style={{ WebkitTextStroke: "1px black" }}
            >
              Software Developer
            </span>
          </span>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex gap-8 mt-10"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="">
                <img src={mail} alt="" className="w-15 h-12" />
              </a>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://github.com/Salmapraj" target="_blank">
                <img src={git} alt="" className="w-15 h-12" />
              </a>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://www.linkedin.com/in/salama-prajapati/ "
                target="_blank"
              >
                <img src={linkedin} alt="" className="w-15 h-12" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          viewport={{ once: true }}
          className="mb-30 "
        >
          <img src={girlbanner} alt="" className="w-100 lg:w-[600px]" />
        </motion.div>

        {/* <motion.button
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="bg-red-200 border p-2"
      >
        Click Me
      </motion.button> */}
      </div>
      <About portfolioData={portfolioData} />
      <Skills skills={portfolioData.skills} />
      <Project portfolioData={portfolioData} />
    </>
  );
}

export default Hero;
