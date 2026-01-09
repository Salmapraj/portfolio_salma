import React from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import mail from "/images/mail.png";
import pp from "../assets/icons/profile.png";
import linkedin from "/images/linkedin.png";
import git from "/images/git.png";
import girlbanner from "/images/girlbanner.png";
function Intro() {
  return (
    <div>
      {" "}
      <div className="flex flex-col mx-20 justify-center  px-10 lg:flex-row lg:justify-evenly lg:items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          viewport={{ once: true }}
          className="flex flex-col ml-0 text-[#996A71] flex-wrap mt-30 text-sm lg:text-xl"
        >
          <span className=" font-bold  text-[#996A71] font-sora  text-4xl lg:text-5xl">
            Hello, I am Salama Prajapati
          </span>
          <span className=" font-bold font-sora text-3xl lg:text-3xl mt-4">
            Aspiring{" "}
            <span
              className="text-white text-3xl ml-2 font-extrabold lg:text-3xl "
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
                <img
                  src={linkedin}
                  alt=""
                  className="w-15 h-12 text-pink-300"
                />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          viewport={{ once: true }}
          className="mb-30 mt-5"
        >
          <img
            src={pp}
            alt="profile"
            className="w-[200px] shadow  h-[200px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full object-contain"
          />
        </motion.div>
      </div>
   
    </div>
  );
}

export default Intro;
