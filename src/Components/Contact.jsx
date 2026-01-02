function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Contact Me" />

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

            <div className="space-y-6">
              <ContactInfo
                icon={Mail}
                label="Email"
                value={portfolioData.email}
                href={`mailto:${portfolioData.email}`}
              />
              <ContactInfo
                icon={Phone}
                label="Phone"
                value={portfolioData.phone}
                href={`tel:${portfolioData.phone}`}
              />
              <ContactInfo
                icon={MapPin}
                label="Location"
                value={portfolioData.location}
              />
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <SocialButton href={portfolioData.social.github} icon={Github} />
              <SocialButton
                href={portfolioData.social.linkedin}
                icon={Linkedin}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-none shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#33272a] mb-2">
                      Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="border-gray-200 focus:border-[#e78fb3] focus:ring-[#e78fb3]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#33272a] mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      className="border-gray-200 focus:border-[#e78fb3] focus:ring-[#e78fb3]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#33272a] mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="border-gray-200 focus:border-[#e78fb3] focus:ring-[#e78fb3] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-[#e78fb3] hover:bg-[#d67fa3] text-[#33272a] font-semibold py-6 rounded-xl shadow-lg"
                  >
                    {sending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
