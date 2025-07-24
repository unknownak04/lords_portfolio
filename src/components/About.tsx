import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
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

  const education = [
    {
      degree: "Bachelor's in Information Technology (B.E)",
      institution: "Vasantdada Patil Pratishthan's College of Engineering, Mumbai",
      location: "Mumbai University",
      year: "2021-2025",
      gpa: "7.98 CGPA"
    },
    {
      degree: "HSC: Science",
      institution: "S. E. S. JR College, Solapur",
      location: "State Board of Education",
      year: "2021",
      gpa: "79.60%"
    },
    {
      degree: "SSC",
      institution: "Indian Model School, Solapur",
      location: "State Board of Education", 
      year: "2019",
      gpa: "77.20%"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="about" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>About Me</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Passionate About <br className="hidden sm:block" />Technology & Innovation
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element max-w-3xl">
            I'm a dedicated Computer Science graduate with expertise in full-stack development, 
            machine learning, and modern web technologies. Always eager to learn and tackle new challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Personal Info */}
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get to know me</h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                I'm a passionate full-stack developer currently pursuing my Bachelor's degree 
                in Information Technology. With hands-on experience in the MERN stack, machine learning, 
                and modern web technologies, I love building solutions that make a difference.
              </p>
              <p className="leading-relaxed">
                My journey includes developing responsive web applications, implementing machine learning 
                algorithms, and working with various frameworks and tools. I'm always excited to learn 
                new technologies and collaborate on innovative projects.
              </p>
              <div className="flex items-center space-x-2 pt-2">
                <MapPin className="w-4 h-4 text-pulse-500" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-4 sm:p-6">
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-pulse-50 w-10 h-10 flex items-center justify-center text-pulse-500 mt-1">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{edu.degree}</h4>
                      <p className="text-sm text-gray-600 mb-1">{edu.institution}</p>
                      <p className="text-xs text-gray-500 mb-2">{edu.location}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{edu.year}</span>
                        </div>
                        <span className="font-medium text-pulse-600">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;