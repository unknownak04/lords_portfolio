// import React, { useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";

// const Skills = () => {
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

//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       skills: ["Node.js", "Express.js", "Tailwind"],
//       color: "from-blue-500 to-indigo-600"
//     },
//     {
//       title: "Frameworks & Libraries", 
//       skills: ["Java", "DSA", "OOPs", "JavaScript", "HTML5", "CSS3", "SQL"],
//       color: "from-green-500 to-emerald-600"
//     },
//     {
//       title: "Tools & Technologies",
//       skills: ["Git", "GitHub", "Canva", "Figma", "UiZard", "Ms-Office"],
//       color: "from-purple-500 to-pink-600"
//     }
//   ];

//   const certifications = [
//     "Machine Learning Certification from Stanford Online and DeepLearning.AI",
//     "Web Development from Udemy: 'The Complete 2023 Web Development Bootcamp' by Angela Yu",
//     "Python from Udemy: 'Python for Machine Learning & Data Science Masterclass' by Jose Portilla",
//     "Linux and Java Certification from Spoken Tutorial, IIT Bombay"
//   ];

//   const achievements = [
//     "Participated in hackathons such as Technovanza, Quasar, and Smart India Hackathon",
//     "Engaged in various technical presentation competitions",
//     "Competed in multiple presentation and competitive programming competitions"
//   ];

//   return (
//     <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="skills" ref={sectionRef}>
//       <div className="section-container">
//         <div className="text-center mb-10 sm:mb-16">
//           <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
//             <span>Skills & Achievements</span>
//           </div>
//           <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
//             Technical Expertise & <br className="hidden sm:block" />Accomplishments
//           </h2>
//           <p className="section-subtitle mx-auto opacity-0 fade-in-element">
//             A comprehensive overview of my technical skills, certifications, and achievements in technology.
//           </p>
//         </div>

//         {/* Skills */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {skillCategories.map((category, index) => (
//             <div key={index} className="opacity-0 fade-in-element">
//               <div className="glass-card p-6 h-full">
//                 <div className={cn(
//                   "w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white bg-gradient-to-r",
//                   category.color
//                 )}>
//                   <span className="text-xl font-bold">{category.title.charAt(0)}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-4 text-gray-800">{category.title}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, idx) => (
//                     <span 
//                       key={idx} 
//                       className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border hover:border-pulse-300 transition-colors duration-200"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Certifications */}
//           <div className="opacity-0 fade-in-element">
//             <h3 className="text-2xl font-semibold mb-6 text-gray-800">Certifications & Courses</h3>
//             <div className="space-y-4">
//               {certifications.map((cert, index) => (
//                 <div key={index} className="glass-card p-4">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></div>
//                     <p className="text-gray-600 text-sm leading-relaxed">{cert}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Achievements */}
//           <div className="opacity-0 fade-in-element">
//             <h3 className="text-2xl font-semibold mb-6 text-gray-800">Achievements</h3>
//             <div className="space-y-4">
//               {achievements.map((achievement, index) => (
//                 <div key={index} className="glass-card p-4">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                     <p className="text-gray-600 text-sm leading-relaxed">{achievement}</p>
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

// export default Skills;
































// import React, { useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";

// const Skills = () => {
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
//               }, index * 80); // slightly faster than before
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

//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       skills: ["Node.js", "Express.js", "Tailwind"],
//       color: "from-blue-500 to-indigo-600",
//     },
//     {
//       title: "Frameworks & Libraries",
//       skills: ["Java", "DSA", "OOPs", "JavaScript", "HTML5", "CSS3", "SQL"],
//       color: "from-green-500 to-emerald-600",
//     },
//     {
//       title: "Tools & Technologies",
//       skills: ["Git", "GitHub", "Canva", "Figma", "UiZard", "Ms-Office"],
//       color: "from-purple-500 to-pink-600",
//     },
//   ];

//   const certifications = [
//     {
//       title: "Machine Learning Specialization",
//       issuer: "Stanford Online & DeepLearning.AI",
//       logo: "/images/stanford-logo.svg", // Replace with actual path or CDN URL
//       detail: "Foundations of ML, neural networks, and deep learning by Andrew Ng.",
//     },
//     {
//       title: "The Complete 2023 Web Development Bootcamp",
//       issuer: "Udemy - Angela Yu",
//       logo: "/images/udemy-logo.svg", // Optional: use real path or emoji fallback
//       detail: "Full-stack development with modern tools and frameworks.",
//     },
//     {
//       title: "Python for ML & Data Science Masterclass",
//       issuer: "Udemy - Jose Portilla",
//       logo: "/images/udemy-logo.svg",
//       detail: "Hands-on Python, Pandas, NumPy, and Scikit-learn.",
//     },
//     {
//       title: "Linux and Java Certification",
//       issuer: "Spoken Tutorial, IIT Bombay",
//       logo: "/images/iitb-logo.svg", // Optional: use actual logo or fallback
//       detail: "Core Java and Linux command line proficiency.",
//     },
//   ];

//   const achievements = [
//     "Hackathons: Technovanza, Quasar, Smart India Hackathon",
//     "Technical presentations on AI, Web Dev, and OOPs",
//     "Competitive programming & coding challenges",
//   ];

//   return (
//     <section
//       className="py-12 sm:py-16 md:py-20 relative bg-white"
//       id="skills"
//       ref={sectionRef}
//     >
//       {/* Add horizontal padding to prevent edge sticking */}
//       <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="text-center mb-8 sm:mb-10">
//           <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
//             <span>Skills & Achievements</span>
//           </div>
//           <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
//             Technical Expertise & <br className="hidden sm:block" /> Accomplishments
//           </h2>
//           <p className="section-subtitle mx-auto opacity-0 fade-in-element max-w-xl">
//             A concise overview of my technical skills, certifications, and key achievements.
//           </p>
//         </div>

//         {/* Skills Grid (compact) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
//           {skillCategories.map((category, index) => (
//             <div key={index} className="opacity-0 fade-in-element">
//               <div className="glass-card p-5 h-full border border-gray-200/50">
//                 <div
//                   className={cn(
//                     "w-10 h-10 rounded-lg mb-3 flex items-center justify-center text-white bg-gradient-to-r shadow-sm",
//                     category.color
//                   )}
//                 >
//                   <span className="text-sm font-bold">
//                     {category.title.charAt(0)}
//                   </span>
//                 </div>
//                 <h3 className="text-base font-semibold mb-3 text-gray-800">{category.title}</h3>
//                 <div className="flex flex-wrap gap-1.5">
//                   {category.skills.map((skill, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full border hover:border-pulse-300 transition-colors duration-200 text-nowrap"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Certifications & Achievements (tight layout) */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Certifications */}
//           <div className="opacity-0 fade-in-element">
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">🎓 Certifications</h3>
//             <div className="space-y-3">
//               {certifications.map((cert, index) => (
//                 <div key={index} className="glass-card p-3 border border-gray-200/50">
//                   <div className="flex items-start gap-2.5">
//                     {/* Logo or Fallback */}
//                     <div className="flex-shrink-0 mt-0.5">
//                       {cert.logo ? (
//                         <img
//                           src={cert.logo}
//                           alt={`${cert.issuer} logo`}
//                           className="w-6 h-6 object-contain rounded border border-gray-200"
//                         />
//                       ) : (
//                         <span className="text-sm">📘</span>
//                       )}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-gray-800 text-sm font-medium leading-tight">
//                         {cert.title}
//                       </p>
//                       <p className="text-pulse-600 text-xs font-medium mt-0.5">{cert.issuer}</p>
//                       <p className="text-gray-500 text-xs mt-1 leading-tight">{cert.detail}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Achievements */}
//           <div className="opacity-0 fade-in-element">
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">🏆 Achievements</h3>
//             <div className="space-y-3">
//               {achievements.map((achievement, index) => (
//                 <div key={index} className="glass-card p-3 border border-gray-200/50">
//                   <div className="flex items-start gap-2.5">
//                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
//                     <p className="text-gray-600 text-sm leading-tight">{achievement}</p>
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

// export default Skills;















import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Enhanced scroll animations
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });
  const { containerRef: skillsRef, visibleItems: skillsVisible } = useStaggeredScrollAnimation(3, { delay: 200 });
  const { elementRef: certsRef, isVisible: certsVisible } = useScrollAnimation({ delay: 300 });
  const { elementRef: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation({ delay: 400 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 80);
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
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Java", "DSA", "OOPs", "JavaScript", "HTML5", "CSS3", "SQL"],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Canva", "Figma", "UiZard", "Ms-Office"],
      color: "from-purple-500 to-pink-600",
    },
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online & DeepLearning.AI",
      logo: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png",
      detail: "Foundations of ML, neural networks, and deep learning by Andrew Ng.",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy - Angela Yu",
      logo: "https://static.cdnlogo.com/logos/u/69/udemy.svg",
      detail: "Full-stack development with modern tools and frameworks.",
    },
    {
      title: "Python for ML & Data Science Masterclass",
      issuer: "Udemy - Jose Portilla",
      logo: "https://static.cdnlogo.com/logos/u/69/udemy.svg",
      detail: "Hands-on Python, Pandas, NumPy, and Scikit-learn.",
    },
    {
      title: "Linux and Java Certification",
      issuer: "Spoken Tutorial, IIT Bombay",
      logo: "https://www.iitb.ac.in/mems/sites/www.mems.iitb.ac.in/themes/touchm/logo.png",
      detail: "Core Java and Linux command line proficiency.",
    },
  ];

  const achievements = [
    "Hackathons: Technovanza, Quasar, Smart India Hackathon",
    "Technical presentations on AI, Web Dev, and OOPs",
    "Competitive programming & coding challenges",
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 relative bg-white"
      id="skills"
      ref={sectionRef}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10" ref={headerRef}>
          <div className={cn(
            "pulse-chip mx-auto mb-3 sm:mb-4 glass-morphism hover:animate-glow-pulse transition-all duration-700",
            headerVisible ? "animate-bounce-in opacity-100" : "opacity-0"
          )}>
            <span>Skills & Achievements</span>
          </div>
          <h2 className={cn(
            "section-title mb-3 sm:mb-4 gradient-text-orange font-display transition-all duration-700 delay-200",
            headerVisible ? "animate-slide-in-from-bottom opacity-100" : "opacity-0"
          )}>
            Technical Expertise & <br className="hidden sm:block" /> Accomplishments
          </h2>
          <p className={cn(
            "section-subtitle mx-auto max-w-xl transition-all duration-700 delay-400",
            headerVisible ? "animate-zoom-in opacity-100" : "opacity-0"
          )}>
            A concise overview of my technical skills, certifications, and key achievements.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10" ref={skillsRef}>
          {skillCategories.map((category, index) => (
            <div key={index} className={cn(
              "transition-all duration-700",
              skillsVisible[index] ? "animate-rotate-scale opacity-100" : "opacity-0"
            )} style={{ animationDelay: `${index * 200}ms` }}>
              <div className="glass-card-enhanced p-5 h-full hover-lift-rotate hover-glow-orange">
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg mb-3 flex items-center justify-center text-white bg-gradient-to-r shadow-sm",
                    category.color
                  )}
                >
                  <span className="text-sm font-bold">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-3 text-gray-800">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full border hover:border-pulse-300 transition-colors duration-200 text-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Certifications */}
          <div className={cn(
            "transition-all duration-700",
            certsVisible ? "animate-slide-in-from-left opacity-100" : "opacity-0"
          )} ref={certsRef}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">🎓 Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-3 border border-gray-200/50">
                  <div className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 mt-0.5">
                      {cert.logo ? (
                        // <img
                        //   src={cert.logo}
                        //   alt={`${cert.issuer} logo`}
                        //   className="w-6 h-6 object-contain rounded border border-gray-200"
                        // />
                        <div className="w-9 h-9 p-0.5 bg-white rounded border border-gray-200 flex items-center justify-center shadow-sm">
  <img
    src={cert.logo}
    alt={`${cert.issuer} logo`}
    className="max-h-6 max-w-full object-contain"
  />
</div>

                      ) : (
                        <span className="text-sm">📘</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-800 text-sm font-medium leading-tight">
                        {cert.title}
                      </p>
                      <p className="text-pulse-600 text-xs font-medium mt-0.5">{cert.issuer}</p>
                      <p className="text-gray-500 text-xs mt-1 leading-tight">{cert.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            achievementsVisible ? "animate-slide-in-from-right opacity-100" : "opacity-0"
          )} ref={achievementsRef}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">🏆 Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card p-3 border border-gray-200/50">
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-tight">{achievement}</p>
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
