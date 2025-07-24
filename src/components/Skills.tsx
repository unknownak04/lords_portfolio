import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Node.js", "Express.js", "Tailwind"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["Java", "DSA", "OOPs", "JavaScript", "HTML5", "CSS3", "SQL"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Canva", "Figma", "UiZard", "Ms-Office"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const certifications = [
    "Machine Learning Certification from Stanford Online and DeepLearning.AI",
    "Web Development from Udemy: 'The Complete 2023 Web Development Bootcamp' by Angela Yu",
    "Python from Udemy: 'Python for Machine Learning & Data Science Masterclass' by Jose Portilla",
    "Linux and Java Certification from Spoken Tutorial, IIT Bombay"
  ];

  const achievements = [
    "Participated in hackathons such as Technovanza, Quasar, and Smart India Hackathon",
    "Engaged in various technical presentation competitions",
    "Competed in multiple presentation and competitive programming competitions"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="skills" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Skills & Achievements</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Technical Expertise & <br className="hidden sm:block" />Accomplishments
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            A comprehensive overview of my technical skills, certifications, and achievements in technology.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="opacity-0 fade-in-element">
              <div className="glass-card p-6 h-full">
                <div className={cn(
                  "w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white bg-gradient-to-r",
                  category.color
                )}>
                  <span className="text-xl font-bold">{category.title.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border hover:border-pulse-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Certifications & Courses</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="opacity-0 fade-in-element">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{achievement}</p>
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

export default Skills;