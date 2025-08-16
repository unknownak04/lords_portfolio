// import React, { useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";
// import { GraduationCap, MapPin, Calendar } from "lucide-react";

// const About = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const elements = entry.target.querySelectorAll(".fade-in-element");
//             elements.forEach((el, index) => {
//               setTimeout(() => {
//                 el.classList.add("animate-fade-in");
//               }, index * 100);
//             });
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const education = [
//     {
//       degree: "Bachelor's in Information Technology (B.E)",
//       institution: "Vasantdada Patil Pratishthan's College of Engineering, Mumbai",
//       location: "Mumbai University",
//       year: "2021-2025",
//       gpa: "7.98 CGPA"
//     },
//     {
//       degree: "HSC: Science",
//       institution: "S. E. S. JR College, Solapur",
//       location: "State Board of Education",
//       year: "2021",
//       gpa: "79.60%"
//     },
//     {
//       degree: "SSC",
//       institution: "Indian Model School, Solapur",
//       location: "State Board of Education", 
//       year: "2019",
//       gpa: "77.20%"
//     }
//   ];

//   return (
//     <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="about" ref={sectionRef}>
//       <div className="section-container">
//         <div className="text-center mb-10 sm:mb-16">
//           <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
//             <span>About Me</span>
//           </div>
//           <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
//             Passionate About <br className="hidden sm:block" />Technology & Innovation
//           </h2>
//           <p className="section-subtitle mx-auto opacity-0 fade-in-element max-w-3xl">
//             I'm a dedicated Computer Science graduate with expertise in full-stack development, 
//             machine learning, and modern web technologies. Always eager to learn and tackle new challenges.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//           {/* Personal Info */}
//           <div className="opacity-0 fade-in-element">
//             <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get to know me</h3>
//             <div className="space-y-4 text-gray-600">
//               <p className="leading-relaxed">
//                 I'm a passionate full-stack developer currently pursuing my Bachelor's degree 
//                 in Information Technology. With hands-on experience in the MERN stack, machine learning, 
//                 and modern web technologies, I love building solutions that make a difference.
//               </p>
//               <p className="leading-relaxed">
//                 My journey includes developing responsive web applications, implementing machine learning 
//                 algorithms, and working with various frameworks and tools. I'm always excited to learn 
//                 new technologies and collaborate on innovative projects.
//               </p>
//               <div className="flex items-center space-x-2 pt-2">
//                 <MapPin className="w-4 h-4 text-pulse-500" />
//                 <span className="text-sm">Mumbai, India</span>
//               </div>
//             </div>
//           </div>

//           {/* Education */}
//           <div className="opacity-0 fade-in-element">
//             <h3 className="text-2xl font-semibold mb-6 text-gray-800">Education</h3>
//             <div className="space-y-6">
//               {education.map((edu, index) => (
//                 <div key={index} className="glass-card p-4 sm:p-6">
//                   <div className="flex items-start space-x-3">
//                     <div className="rounded-full bg-pulse-50 w-10 h-10 flex items-center justify-center text-pulse-500 mt-1">
//                       <GraduationCap className="w-5 h-5" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-gray-800 mb-1">{edu.degree}</h4>
//                       <p className="text-sm text-gray-600 mb-1">{edu.institution}</p>
//                       <p className="text-xs text-gray-500 mb-2">{edu.location}</p>
//                       <div className="flex items-center justify-between text-xs text-gray-500">
//                         <div className="flex items-center space-x-1">
//                           <Calendar className="w-3 h-3" />
//                           <span>{edu.year}</span>
//                         </div>
//                         <span className="font-medium text-pulse-600">{edu.gpa}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;









import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [showUnderline, setShowUnderline] = useState(false);
  
  const fullText = "Bachelor's in Information Technology (B.E)";
  
  // Enhanced scroll animations
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ delay: 300 });
  const { containerRef: educationRef, visibleItems: educationVisible } = useStaggeredScrollAnimation(3, { delay: 150 });
  
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
            
            // Start typewriter effect for latest education
            setTimeout(() => {
              let i = 0;
              const typeInterval = setInterval(() => {
                if (i < fullText.length) {
                  setTypewriterText(fullText.slice(0, i + 1));
                  i++;
                } else {
                  clearInterval(typeInterval);
                  setTimeout(() => setShowUnderline(true), 200);
                }
              }, 50);
            }, 800);
            
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
      gpa: "8.0 CGPA",
      isLatest: true
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
        <div className="text-center mb-10 sm:mb-16" ref={headerRef}>
          <div className={cn(
            "pulse-chip mx-auto mb-3 sm:mb-4 glass-morphism hover:animate-glow-pulse transition-all duration-700",
            headerVisible ? "animate-bounce-in opacity-100" : "opacity-0"
          )}>
            <span>About Me</span>
          </div>
          <h2 className={cn(
            "section-title mb-3 sm:mb-4 gradient-text-orange font-display transition-all duration-700 delay-200",
            headerVisible ? "animate-slide-in-from-left opacity-100" : "opacity-0"
          )}>
            Passionate About <br className="hidden sm:block" />Technology & Innovation
          </h2>
          <p className={cn(
            "section-subtitle mx-auto max-w-3xl transition-all duration-700 delay-400",
            headerVisible ? "animate-slide-in-from-right opacity-100" : "opacity-0"
          )}>
            I'm a dedicated Computer Science graduate with expertise in full-stack development, 
            machine learning, and modern web technologies. Always eager to learn and tackle new challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start" ref={contentRef}>
          {/* Personal Info with 3D Glass Effect */}
          <div className={cn(
            "transition-all duration-700",
            contentVisible ? "animate-slide-in-from-left opacity-100" : "opacity-0"
          )}>
            <div className="glass-card-enhanced p-6 sm:p-8 hover-lift-rotate">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 relative">
                Get to know me
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-pulse-500 to-pulse-300 rounded-full"></div>
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed text-lg">
                  I'm a <span className="font-semibold text-pulse-600 relative inline-block">
                    passionate full-stack developer
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-pulse-200 rounded-full animate-expand-width"></div>
                  </span> currently pursuing my Bachelor's degree 
                  in Information Technology. With hands-on experience in the MERN stack, machine learning, 
                  and modern web technologies, I love building solutions that make a difference.
                </p>
                <p className="leading-relaxed">
                  My journey includes developing responsive web applications, implementing machine learning 
                  algorithms, and working with various frameworks and tools. I'm always excited to learn 
                  new technologies and collaborate on innovative projects.
                </p>
                <div className="flex items-center space-x-2 pt-4">
                  <div className="w-8 h-8 bg-pulse-100 rounded-full flex items-center justify-center shadow-inner">
                    <MapPin className="w-4 h-4 text-pulse-500" />
                  </div>
                  <span className="text-sm font-medium">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education with Enhanced 3D Cards */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            contentVisible ? "animate-slide-in-from-right opacity-100" : "opacity-0"
          )}>
            <div className="glass-card-enhanced p-6 sm:p-8 hover-lift-rotate">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 relative">
                Education
                <div className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-pulse-500 to-pulse-300 rounded-full"></div>
              </h3>
              <div className="space-y-6" ref={educationRef}>
                {education.map((edu, index) => (
                  <div key={index} className={cn(
                    `education-card ${edu.isLatest ? 'featured-card' : ''} transition-all duration-700`,
                    educationVisible[index] ? "animate-zoom-in opacity-100" : "opacity-0"
                  )} style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="flex items-start space-x-4">
                      <div className="education-icon">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {edu.isLatest ? (
                            <span className="typewriter-text">
                              {typewriterText}
                              <span className="cursor">|</span>
                              {showUnderline && (
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-pulse-400 rounded-full animate-expand-width"></div>
                              )}
                            </span>
                          ) : (
                            edu.degree
                          )}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">{edu.institution}</p>
                        <p className="text-xs text-gray-500 mb-3">{edu.location}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center shadow-inner">
                              <Calendar className="w-3 h-3" />
                            </div>
                            <span>{edu.year}</span>
                          </div>
                          <div className="gpa-badge">
                            {edu.gpa}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-3d-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          transform: translateZ(0);
          transition: all 0.3s ease;
        }
        
        .glass-3d-card:hover {
          transform: translateY(-5px) translateZ(0);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(255, 255, 255, 0.3);
        }
        
        .education-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(248, 250, 252, 0.9));
          border: 1px solid rgba(226, 232, 240, 0.5);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          position: relative;
          transform: translateZ(0);
          transition: all 0.3s ease;
        }
        
        .education-card:hover {
          transform: translateY(-2px) translateZ(0);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }
        
        .featured-card {
          background: linear-gradient(135deg, rgba(255, 248, 235, 0.9), rgba(255, 252, 242, 0.8));
          border: 1px solid rgba(251, 146, 60, 0.2);
          box-shadow: 
            0 6px 20px rgba(251, 146, 60, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        
        .education-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(145deg, rgba(251, 146, 60, 0.1), rgba(251, 146, 60, 0.05));
          border: 1px solid rgba(251, 146, 60, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(251, 146, 60);
          box-shadow: 
            0 2px 8px rgba(251, 146, 60, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          flex-shrink: 0;
        }
        
        .gpa-badge {
          background: linear-gradient(145deg, rgba(251, 146, 60, 0.1), rgba(251, 146, 60, 0.05));
          border: 1px solid rgba(251, 146, 60, 0.3);
          color: rgb(194, 65, 12);
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 11px;
          box-shadow: 
            0 2px 4px rgba(251, 146, 60, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        
        .typewriter-text {
          position: relative;
          display: inline-block;
        }
        
        .cursor {
          animation: blink 1s infinite;
          color: rgb(251, 146, 60);
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes expand-width {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-expand-width {
          animation: expand-width 0.8s ease-out forwards;
        }
        
        .fade-in-element {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default About;














