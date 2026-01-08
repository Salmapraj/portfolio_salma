import React from "react";
import { motion } from "framer-motion";
import { div, h2 } from "framer-motion/client";
function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-15">
      <div className="max-w-8xl mx-56">
        <h1 className="text-4xl font-semibold  mb-15 text-[#996A71]">
          My Skills
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {skills.map((skill) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h1 className="text-xl font-semibold text-gray-500 mb-8">{skill.category}</h1>
              <div key={skill.category} className="flex  items-center gap-26">
                {skill.items.map((it) => (
                  <div key={it.name} className="flex flex-col justify-center gap-3  items-center">
                    <img src={it.icon} alt={it.name} width={60}  />

                    <h2>{it.name}</h2>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
