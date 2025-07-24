import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
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
              }, index * 200);
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

  const experience = {
    title: "Web Development Intern",
    company: "CodeSoft",
    duration: "October 2023",
    location: "Remote",
    description: "Gained hands-on experience in web development during this intensive internship program.",
    responsibilities: [
      "Developed responsive web applications using HTML, CSS, and JavaScript",
      "Utilized React.js for dynamic UI component development and state management",
      "Worked with Node.js and Express.js to develop backend services and manage server-side operations",
      "Implemented database operations with MongoDB for storing and retrieving user data"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"]
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-gray-50" id="experience" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Experience</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Professional <br className="hidden sm:block" />Experience
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            My journey in the tech industry and the valuable experience I've gained.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="opacity-0 fade-in-element">
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-pulse-50 w-12 h-12 flex items-center justify-center text-pulse-500 flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <h4 className="text-lg font-medium text-pulse-600">{experience.company}</h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-pulse-500 mr-2 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-pulse-50 text-pulse-600 text-xs rounded-full border border-pulse-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;