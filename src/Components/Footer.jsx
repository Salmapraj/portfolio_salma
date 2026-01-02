import React from 'react'
import {motion} from "framer-motion"
import {ArrowUp} from "lucide-react"
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#33272a] text-white py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-8xl ">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e78fb3] rounded-full flex items-center justify-center">
              <span className="font-bold text-[#33272a]">S</span>
            </div>
            <span className="font-bold text-lg">Salama</span>
          </div>
          
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Salama Prajapati. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-[#e78fb3] rounded-full flex items-center justify-center hover:bg-[#ffc6c7] transition-colors"
          >
            <ArrowUp size={18} className="text-[#33272a]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}


export default Footer