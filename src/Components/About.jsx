import { motion } from "framer-motion";

function About({ portfolioData }) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-8xl mx-12">
        <h1 className="text-4xl font-semibold  mb-15 text-[#996A71]">About me</h1>
        <div className="mt-13 ">
        

          {/* Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              {portfolioData.about.description}
            </p>

           
            {/* Education & Experience */}
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#33272a] mb-3">
                  Education
                </h3>
                {portfolioData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-[#ffc6c7]/30 rounded-xl p-4 mb-3"
                  >
                    <p className="font-semibold text-[#33272a]">{edu.degree}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#33272a] mb-3">
                  Experience
                </h3>
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="bg-[#ffc6c7]/30 rounded-xl p-4">
                    <p className="font-semibold text-[#33272a]">
                      {exp.position}
                    </p>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                    <p className="text-sm text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
