import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { div } from "framer-motion/client";
function Project({ portfolioData }) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-8xl mx-56">
        <h1 className="text-4xl font-semibold  mb-15 text-[#996A71]"> Projects</h1>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl border-none shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <Github size={18} className="text-[#33272a]" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <ExternalLink size={18} className="text-[#33272a]" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#33272a]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      // <Badge key={tech} variant="secondary" className="bg-[#ffc6c7]/50 text-[#33272a] text-xs">
                      //   {tech}
                      // </Badge>
                      <div> {tech}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
