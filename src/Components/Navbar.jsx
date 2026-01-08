import React, { useState } from "react";
import logo from "/images/logo.png";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }} //Starts 100px above the top of the screen
      animate={{ y: 0, opacity: 1 }} //Animates the navbar into position (top)
      transition={{ duration: 0.8 }}
      className=""
    >
      <div className="text-[#996A71]  text-md flex z-50 bg-[#eebbc3] space-x-3 px-4 py-3  justify-between items-center lg:text-[18px]  ">
        {/* left logo */}
        <div
          // whileHover={{ scale: 1.1 }}
          className="flex space-x-2 items-center"
        >
          <span className=" text-lg  lg:text-2xl font-bold font-sora cursor-pointer">
            Salama
          </span>
        </div>

        <ul className="hidden md:hidden lg:flex justify-between  text-xl cursor-pointer items-center gap-11 font-semibold ">
          <li className="relative group">
            About me
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#33272a] transition-all duration-300 group-hover:w-full"></span>
          </li>{" "}
          <li className="relative group">
            Skills
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#33272a] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#33272a] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            Contact me{" "}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#33272a] transition-all duration-300 group-hover:w-full"></span>
          </li>{" "}
        </ul>
        <motion.button
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.4, ease: easeInOut }}
          className="hidden  shadow-sm bg-[#e78fb3] hover:bg-[#e8839d] p-2 text-gray-100 font-semibold  px-6 py-3  lg:flex items-center space-x-2 rounded shadow-xl"
        >
          <a href="/cv.pdf" download="Salama-CV.pdf">
            <span className="text-[#996A71]"> Resume</span>
          </a>
          <Download size={20} className="text-[#996A71]" />
        </motion.button>
        <motion.div whileTap={{ scale: 0.6 }} className="lg:hidden">
          <Menu
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </motion.div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-cols space-y-12 gap-6 fixed inset-0 bg-[#ffc6c7] lg:hidden justify-center items-center "
        >
          <ul className="space-y-8 font-semibold text-2xl underline ">
            
            <Link href="#about">
            <li>About me</li>
            </Link>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact me</li>
            <li>
              <a
                href="/cv.pdf"
                download="Salama-CV.pdf"
                className="shadow-sm  px-6 py-3 flex items-center gap-2 rounded-md shadow-sm hover:bg-gray-100 transition
"
              >
                <span className="text-[#996A71]"> Resume</span> <Download size={20} />
              </a>
            </li>
          </ul>
          <div className="text-right">
            <X
              size={40}
              onClick={() => setOpen(false)}
              className="cursor-pointer absolute top-5 right-5 border rounded p-1"
            />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
