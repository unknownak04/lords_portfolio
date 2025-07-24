import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Code, Database, Brain } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "News Website",
      description: "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates with efficient data fetching and responsive layouts.",
      technologies: ["Express.js", "React.js", "Node.js", "Shadcn APIs", "Tailwind"],
      features: [
        "Integrated third-party APIs for dynamic and up-to-date news content",
        "Utilized Axios for efficient API calls with fast and reliable data retrieval", 
        "Leveraged React, Tailwind CSS, and ShadCN to build a responsive, user-friendly interface"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Salary Prediction Web Application",
      description: "Machine learning-powered web application for salary prediction using various algorithms. Features interactive visualizations and comprehensive data analysis capabilities.",
      technologies: ["Machine Learning", "Streamlit", "SVM", "Random Forest"],
      features: [
        "Developed machine learning model to predict salaries based on Stack Overflow Developer Survey data (2020)",
        "Utilized the Streamlit library for user-friendly web interface deployed on GitHub Pages",
        "Implemented machine learning algorithms including Support Vector Machine (SVM) and Random Forest",
        "Integrated interactive visualizations to display data insights and prediction results"
      ],
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-gray-50" id="projects" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Projects</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Featured <br className="hidden sm:block" />Projects
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            A showcase of my technical skills and creative problem-solving through real-world applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="opacity-0 fade-in-element"
            >
              <div className="glass-card p-6 sm:p-8 h-full hover:shadow-elegant-hover transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={cn(
                    "rounded-full w-12 h-12 flex items-center justify-center text-white",
                    `bg-gradient-to-r ${project.color}`
                  )}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-pulse-500 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-pulse-50 text-pulse-600 text-xs rounded-full border border-pulse-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-auto">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-pulse-500 hover:text-pulse-500 transition-colors duration-200 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;