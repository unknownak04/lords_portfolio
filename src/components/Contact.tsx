import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-9325350688",
      href: "tel:+919325350688"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "aavishkarkamble04@gmail.com", 
      href: "mailto:aavishkarkamble04@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/aavishkar-kamble"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/aavishkarkamble"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="contact" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Contact</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Let's Work <br className="hidden sm:block" />Together
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Ready to start your next project? Let's connect and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborating on exciting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 glass-card hover:shadow-elegant-hover transition-all duration-300 group"
                >
                  <div className="rounded-full bg-pulse-50 w-12 h-12 flex items-center justify-center text-pulse-500 group-hover:bg-pulse-100 transition-colors duration-200">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-pulse-600 transition-colors duration-200">
                      {contact.label}
                    </h4>
                    <p className="text-sm text-gray-600">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Based in Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 fade-in-element">
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;