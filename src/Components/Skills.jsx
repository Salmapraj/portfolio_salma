import React from "react";
import { motion, AnimatePresence, spring } from "framer-motion";

function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-12">
        <h1 className="text-4xl font-semibold  mb-15 text-[#996A71]"> Skills</h1>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ffc6c7] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <skill.icon size={24} className="text-[#33272a]" />
                  </div>
                  <h3 className="font-semibold text-[#33272a] text-sm sm:text-base">
                    {skill.name}
                  </h3>
                  {/* Progress Bar */}
                  {/* <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-[#e78fb3] to-[#eebbc3] rounded-full"
                    />
                  </div>
                  */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
