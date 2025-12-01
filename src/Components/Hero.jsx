import React from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
// import girl from "/images/girl.png"
import mail from "/images/mail.png"
import linkedin from "/images/linkedin.png"
import git from "/images/git.png"
import girlbanner from "/images/girlbanner.png";
function Hero() {
  return (
    <div className="flex flex-col-reverse items-start justify-center gap-6 p lg:flex-row">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        viewport={{ once: true }}
        className="flex flex-col  flex-wrap mt-45 text-sm lg:text-xl"
      >
        <span className=" font-extrabold font-sora lg:text-5xl">
          Hello, I am Salama Prajapati
        </span>
        <span className=" font-extrabold font-sora lg:text-3xl mt-4">
          Frontend{" "}
          <span
            className="text-white font-extrabold"
            style={{ WebkitTextStroke: "1px black" }}
          >
            Developer
          </span>
        </span>
        <p className="mt-6 text-[18px] w-160 text-gray-500">
          Passionate about technology, I specialize in Web Development. I’m
          focused on building innovative solutions and continuously expanding my
          skills. My goal is to grow as a developer and contribute to impactful
          projects in the tech industry.
        </p>

        <motion.div 
        initial={{y:10, opacity:0 }}
        animate={{opacity:1, y:0}}
         transition={{ delay: 0.6, duration: 1 }}

        className="flex gap-8 mt-10">
          <motion.div
           whileHover={{ scale: 1.1,    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
}}
whileTap={{scale: 0.95}}>
          <a href="">
          <img src={mail} alt=""  className="w-15 h-12"/>
          </a>
</motion.div>


          <motion.div
           whileHover={{ scale: 1.1,    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
}}
whileTap={{scale: 0.95}}
          >
          <a href="https://github.com/Salmapraj" target="_blank">
          <img src={git} alt="" className="w-15 h-12"/>
          </a>
          </motion.div>

          <motion.div
          whileHover={{ scale: 1.1,    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
}}
whileTap={{scale: 0.95}}
          >
            
          <a href="https://www.linkedin.com/in/salama-prajapati/ " target="_blank">
          <img 
                src={linkedin} alt="" className="w-15 h-12"/>
          </a>
                </motion.div>
        </motion.div>


      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        viewport={{ once: true }}
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
  );
}

export default Hero;
