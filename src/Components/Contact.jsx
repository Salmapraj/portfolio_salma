import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import {
  Send,
  Contact,
  Mail,
  MapPin,
  GithubIcon,
  Linkedin,
} from "lucide-react";

function ContactSection({ portfolioData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_zo7rag8",
        "template_t3eicoj",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "d6mC2eBW1ENtMhffA"
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-50">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold  text-center mb-15 text-[#996A71]"
        >
          Contact me
        </motion.h1>
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#33272a] mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-6 mb-5">
              <div className="flex  gap-4">
                <Mail />
                <p>{portfolioData.email}</p>
              </div>
              <div className="flex gap-4">
                <Contact />
                <p>{portfolioData.phone}</p>
              </div>
              <div className="flex gap-4">
                <MapPin value={portfolioData.location} />
                <p>{portfolioData.location}</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold"> Social Links</h1>{" "}
            <div className="mt-2 flex gap-4">
              <a href="https://github.com/Salmapraj" target="_blank">
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/salama-prajapati/ "
                target="_blank"
              >
                <Linkedin />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-none shadow-xl rounded-lg  ">
              <div className="p-6 sm:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 flex flex-col items-center"
                >
                  <div>
                    <label className="block  text-sm font-medium text-[#33272a] mb-2">
                      Name
                    </label>
                    <input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="border-gray-300 outline-gray-400 w-100 border rounded-lg p-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#33272a] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      className="border-gray-300 outline-gray-400 w-100 border rounded-lg p-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#33272a] mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="border-gray-300 outline-gray-400 w-100 border rounded-lg p-1"
                    />
                  </div>
                  <div className="flex gap-8 w-100 items-center justify-center rounded-xl bg-[#e78fb3] hover:bg-[#d67fa3] text-[#33272a]">
                    <button
                      type="submit"
                      disabled={sending}
                      className="   font-semibold py-4  shadow-lg"
                    >
                      {sending ? "Sending..." : <>Send Message</>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
