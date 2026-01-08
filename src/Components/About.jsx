import { motion } from "framer-motion";

function About({ portfolioData }) {
  return (
    <section id="about" className="py-20 scroll-smooth px-8 sm:px-6 lg:px-15 ">
      <div className="max-w-8xl mx-56 ">
        <motion.h1 
        initial={{y:-50,opacity:0}}
whileInView={{y:0,opacity:1}}
transition={{duration:0.5}}

className="text-4xl font-semibold  text-center mb-15 text-[#996A71]">About me</motion.h1>
        <div className="mt-13 ">
        

          {/* Content */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl text-gray-600 leading-relaxed">
              {portfolioData.about.description}
            </p>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
