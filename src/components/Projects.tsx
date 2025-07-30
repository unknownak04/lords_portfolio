// import React, { useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";
// import { Github, ExternalLink, Code, Database, Brain } from "lucide-react";

// const Projects = () => {
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
//               }, index * 200);
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

//   const projects = [
//     {
//       title: "News Website",
//       description: "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates with efficient data fetching and responsive layouts.",
//       technologies: ["Express.js", "React.js", "Node.js", "Shadcn APIs", "Tailwind"],
//       features: [
//         "Integrated third-party APIs for dynamic and up-to-date news content",
//         "Utilized Axios for efficient API calls with fast and reliable data retrieval", 
//         "Leveraged React, Tailwind CSS, and ShadCN to build a responsive, user-friendly interface"
//       ],
//       icon: <Code className="w-6 h-6" />,
//       color: "from-blue-500 to-purple-600"
//     },
//     {
//       title: "Salary Prediction Web Application",
//       description: "Machine learning-powered web application for salary prediction using various algorithms. Features interactive visualizations and comprehensive data analysis capabilities.",
//       technologies: ["Machine Learning", "Streamlit", "SVM", "Random Forest"],
//       features: [
//         "Developed machine learning model to predict salaries based on Stack Overflow Developer Survey data (2020)",
//         "Utilized the Streamlit library for user-friendly web interface deployed on GitHub Pages",
//         "Implemented machine learning algorithms including Support Vector Machine (SVM) and Random Forest",
//         "Integrated interactive visualizations to display data insights and prediction results"
//       ],
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-green-500 to-teal-600"
//     },
//     {
//       title: "Salary Prediction Web Application",
//       description: "Machine learning-powered web application for salary prediction using various algorithms. Features interactive visualizations and comprehensive data analysis capabilities.",
//       technologies: ["Machine Learning", "Streamlit", "SVM", "Random Forest"],
//       features: [
//         "Developed machine learning model to predict salaries based on Stack Overflow Developer Survey data (2020)",
//         "Utilized the Streamlit library for user-friendly web interface deployed on GitHub Pages",
//         "Implemented machine learning algorithms including Support Vector Machine (SVM) and Random Forest",
//         "Integrated interactive visualizations to display data insights and prediction results"
//       ],
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-green-500 to-teal-600"
//     }
//   ];

//   return (
//     <section className="py-12 sm:py-16 md:py-20 relative bg-gray-50" id="projects" ref={sectionRef}>
//       <div className="section-container">
//         <div className="text-center mb-10 sm:mb-16">
//           <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
//             <span>Projects</span>
//           </div>
//           <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
//             Featured <br className="hidden sm:block" />Projects
//           </h2>
//           <p className="section-subtitle mx-auto opacity-0 fade-in-element">
//             A showcase of my technical skills and creative problem-solving through real-world applications.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//           {projects.map((project, index) => (
//             <div 
//               key={index}
//               className="opacity-0 fade-in-element"
//             >
//               <div className="glass-card p-6 sm:p-8 h-full hover:shadow-elegant-hover transition-all duration-300">
//                 <div className="flex items-center space-x-3 mb-4">
//                   <div className={cn(
//                     "rounded-full w-12 h-12 flex items-center justify-center text-white",
//                     `bg-gradient-to-r ${project.color}`
//                   )}>
//                     {project.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//                 </div>
                
//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 <div className="mb-4">
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
//                   <ul className="space-y-1">
//                     {project.features.map((feature, idx) => (
//                       <li key={idx} className="text-sm text-gray-600 flex items-start">
//                         <span className="text-pulse-500 mr-2 mt-1">•</span>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, idx) => (
//                       <span 
//                         key={idx} 
//                         className="px-3 py-1 bg-pulse-50 text-pulse-600 text-xs rounded-full border border-pulse-200"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="flex space-x-3 mt-auto">
//                   <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm">
//                     <Github className="w-4 h-4" />
//                     <span>Code</span>
//                   </button>
//                   <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-pulse-500 hover:text-pulse-500 transition-colors duration-200 text-sm">
//                     <ExternalLink className="w-4 h-4" />
//                     <span>Live Demo</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

//sdssdsdsdsdsdsdsdsdsdsdsdsduidhsfhsfhsifhishdifhihserus this ishfhsdofioiu oijsoifo sodifjsodifsdofijsdofjsdoifsdofjsodifjsdijfosdfjsoidf











// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Github, ExternalLink, Code, Database, Brain } from "lucide-react";
// import { cn } from "@/lib/utils";

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const elements = entry.target.querySelectorAll(".fade-in-element");
//             elements.forEach((el, index) => {
//               setTimeout(() => {
//                 el.classList.add("animate-fade-in");
//               }, index * 200);
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

//   const projects = [
//     {
//       title: "News Website",
//       description: "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates with efficient data fetching and responsive layouts.",
//       technologies: ["Express.js", "React.js", "Node.js", "Shadcn APIs", "Tailwind"],
//       features: [
//         "Integrated third-party APIs for dynamic and up-to-date news content",
//         "Utilized Axios for efficient API calls with fast and reliable data retrieval", 
//         "Leveraged React, Tailwind CSS, and ShadCN to build a responsive, user-friendly interface"
//       ],
//       image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=240&fit=crop&auto=format",
//       icon: <Code className="w-6 h-6" />,
//       color: "from-blue-500 to-purple-600"
//     },
//     {
//       title: "Salary Prediction Web Application",
//       description: "Machine learning-powered web application for salary prediction using various algorithms. Features interactive visualizations and comprehensive data analysis capabilities.",
//       technologies: ["Machine Learning", "Streamlit", "SVM", "Random Forest"],
//       features: [
//         "Developed machine learning model to predict salaries based on Stack Overflow Developer Survey data (2020)",
//         "Utilized the Streamlit library for user-friendly web interface deployed on GitHub Pages",
//         "Implemented machine learning algorithms including Support Vector Machine (SVM) and Random Forest",
//         "Integrated interactive visualizations to display data insights and prediction results"
//       ],
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&auto=format",
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-green-500 to-teal-600"
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack e-commerce solution with modern shopping cart, payment integration, and inventory management. Built with scalable architecture and responsive design.",
//       technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "Express.js"],
//       features: [
//         "Implemented secure payment processing with Stripe integration",
//         "Built responsive product catalog with advanced filtering and search",
//         "Developed admin dashboard for inventory and order management",
//         "Created user authentication system with JWT tokens"
//       ],
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop&auto=format",
//       icon: <Database className="w-6 h-6" />,
//       color: "from-orange-500 to-red-600"
//     },
//     {
//       title: "Task Management Dashboard",
//       description: "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface for enhanced productivity.",
//       technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS"],
//       features: [
//         "Real-time collaboration with WebSocket implementation",
//         "Drag-and-drop task management with intuitive interface",
//         "Team member assignment and progress tracking",
//         "Advanced filtering and project analytics dashboard"
//       ],
//       image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop&auto=format",
//       icon: <Code className="w-6 h-6" />,
//       color: "from-indigo-500 to-purple-600"
//     },
//     {
//       title: "Weather Analytics App",
//       description: "Advanced weather forecasting application with interactive maps, historical data analysis, and personalized weather alerts using multiple weather APIs.",
//       technologies: ["React.js", "Chart.js", "Weather APIs", "Geolocation", "PWA"],
//       features: [
//         "Integration with multiple weather APIs for accurate forecasting",
//         "Interactive weather maps with satellite imagery",
//         "Historical weather data analysis and trends",
//         "Push notifications for severe weather alerts"
//       ],
//       image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=240&fit=crop&auto=format",
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-cyan-500 to-blue-600"
//     },
//     {
//       title: "Social Media Dashboard",
//       description: "Comprehensive social media management platform with analytics, scheduling, and multi-platform posting capabilities for content creators and businesses.",
//       technologies: ["React.js", "Node.js", "Social APIs", "Chart.js", "Cron Jobs"],
//       features: [
//         "Multi-platform posting to Twitter, Instagram, and LinkedIn",
//         "Advanced analytics with engagement tracking",
//         "Content scheduling with automated posting",
//         "Hashtag optimization and trend analysis"
//       ],
//       image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=240&fit=crop&auto=format",
//       icon: <Database className="w-6 h-6" />,
//       color: "from-pink-500 to-rose-600"
//     }
//   ];

//   const nextProject = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevProject = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const getVisibleProjects = () => {
//     const visible = [];
//     const total = projects.length;
    
//     // Show 3 projects: previous, current, next
//     for (let i = -1; i <= 1; i++) {
//       const index = (currentIndex + i + total) % total;
//       visible.push({
//         ...projects[index],
//         originalIndex: index,
//         position: i === -1 ? 'left' : i === 0 ? 'center' : 'right'
//       });
//     }
    
//     return visible;
//   };

//   return (
//     <section className="py-12 sm:py-16 md:py-20 relative bg-gray-50" id="projects" ref={sectionRef}>
//       <div className="section-container">
//         <div className="text-center mb-10 sm:mb-16">
//           <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
//             <span>Projects</span>
//           </div>
//           <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
//             Featured <br className="hidden sm:block" />Projects
//           </h2>
//           <p className="section-subtitle mx-auto opacity-0 fade-in-element">
//             A showcase of my technical skills and creative problem-solving through real-world applications.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative">
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevProject}
//             disabled={isAnimating}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200 hover:border-pulse-300 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <ChevronLeft className="w-5 h-5 text-gray-600" />
//           </button>
          
//           <button
//             onClick={nextProject}
//             disabled={isAnimating}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200 hover:border-pulse-300 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <ChevronRight className="w-5 h-5 text-gray-600" />
//           </button>

//           {/* Projects Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
//             {getVisibleProjects().map((project, index) => (
//               <div 
//                 key={`${project.originalIndex}-${currentIndex}`}
//                 className={cn(
//                   "opacity-0 fade-in-element transition-all duration-500",
//                   project.position === 'center' ? 'lg:scale-105 lg:z-10' : 'lg:scale-95 lg:opacity-75'
//                 )}
//               >
//                 {/* Project Image Section */}
//                 <div className="mb-4">
//                   <div className="relative h-48 rounded-xl overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className={cn(
//                       "absolute inset-0 bg-gradient-to-br opacity-20",
//                       project.color
//                     )} />
//                   </div>
//                 </div>

//                 {/* Project Card */}
//                 <div className="glass-card p-6 sm:p-8 h-full hover:shadow-elegant-hover transition-all duration-300">
//                   <div className="flex items-center space-x-3 mb-4">
//                     <div className={cn(
//                       "rounded-full w-12 h-12 flex items-center justify-center text-white",
//                       `bg-gradient-to-r ${project.color}`
//                     )}>
//                       {project.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//                   </div>
                  
//                   <p className="text-gray-600 mb-4 leading-relaxed">
//                     {project.description}
//                   </p>
                  
//                   <div className="mb-4">
//                     <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
//                     <ul className="space-y-1">
//                       {project.features.slice(0, 3).map((feature, idx) => (
//                         <li key={idx} className="text-sm text-gray-600 flex items-start">
//                           <span className="text-pulse-500 mr-2 mt-1">•</span>
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="mb-6">
//                     <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, idx) => (
//                         <span 
//                           key={idx} 
//                           className="px-3 py-1 bg-pulse-50 text-pulse-600 text-xs rounded-full border border-pulse-200"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div className="flex space-x-3 mt-auto">
//                     <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm">
//                       <Github className="w-4 h-4" />
//                       <span>Code</span>
//                     </button>
//                     <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-pulse-500 hover:text-pulse-500 transition-colors duration-200 text-sm">
//                       <ExternalLink className="w-4 h-4" />
//                       <span>Live Demo</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Project Indicators */}
//           <div className="flex items-center justify-center mt-8 space-x-2">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   if (!isAnimating) {
//                     setIsAnimating(true);
//                     setCurrentIndex(index);
//                     setTimeout(() => setIsAnimating(false), 500);
//                   }
//                 }}
//                 className={cn(
//                   "w-2 h-2 rounded-full transition-all duration-300",
//                   index === currentIndex 
//                     ? "bg-pulse-500 w-8" 
//                     : "bg-gray-300 hover:bg-gray-400"
//                 )}
//               />
//             ))}
//           </div>
          
//           <div className="text-center mt-4">
//             <p className="text-sm text-gray-500">
//               {currentIndex + 1} of {projects.length}
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .section-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1rem;
//         }
        
//         .pulse-chip {
//           display: inline-flex;
//           align-items: center;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(135deg, #fed7aa, #fecaca);
//           color: #ea580c;
//           border-radius: 9999px;
//           font-size: 0.875rem;
//           font-weight: 500;
//         }
        
//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #111827;
//           line-height: 1.2;
//         }
        
//         .section-subtitle {
//           font-size: 1.125rem;
//           color: #6b7280;
//           max-width: 32rem;
//         }
        
//         .glass-card {
//           background: rgba(255, 255, 255, 0.8);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 1rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//         }
        
//         .shadow-elegant-hover {
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//         }
        
//         .animate-fade-in {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//         }
        
//         .fade-in-element {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all 0.6s ease-out;
//         }
        
//         @media (min-width: 1024px) {
//           .section-title {
//             font-size: 3rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;






















// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Github, ExternalLink, Code, Database, Brain, Smartphone, Globe, Zap } from "lucide-react";
// import { cn } from "@/lib/utils";

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [slideDirection, setSlideDirection] = useState('');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const elements = entry.target.querySelectorAll(".fade-in-element");
//             elements.forEach((el, index) => {
//               setTimeout(() => {
//                 el.classList.add("animate-fade-in");
//               }, index * 200);
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

//   const projects = [
//     {
//       title: "News Website",
//       description: "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates.",
//       technologies: ["Express.js", "React.js", "Node.js", "Shadcn APIs", "Tailwind"],
//       features: [
//         "Integrated third-party APIs for dynamic and up-to-date news content",
//         "Utilized Axios for efficient API calls with fast and reliable data retrieval", 
//         "Leveraged React, Tailwind CSS, and ShadCN to build a responsive interface"
//       ],
//       image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop&auto=format",
//       icon: <Code className="w-6 h-6" />,
//       color: "from-blue-500 to-purple-600"
//     },
//     {
//       title: "Salary Prediction Web Application",
//       description: "Machine learning-powered web application for salary prediction using various algorithms. Features interactive visualizations and data analysis.",
//       technologies: ["Machine Learning", "Streamlit", "SVM", "Random Forest"],
//       features: [
//         "Developed machine learning model to predict salaries based on Stack Overflow data",
//         "Utilized the Streamlit library for user-friendly web interface",
//         "Implemented machine learning algorithms including SVM and Random Forest"
//       ],
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format",
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-green-500 to-teal-600"
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack e-commerce solution with modern shopping cart, payment integration, and inventory management. Built with scalable architecture.",
//       technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "Express.js"],
//       features: [
//         "Implemented secure payment processing with Stripe integration",
//         "Built responsive product catalog with advanced filtering and search",
//         "Developed admin dashboard for inventory and order management"
//       ],
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&auto=format",
//       icon: <Database className="w-6 h-6" />,
//       color: "from-orange-500 to-red-600"
//     },
//     {
//       title: "Task Management Dashboard",
//       description: "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
//       technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS"],
//       features: [
//         "Real-time collaboration with WebSocket implementation",
//         "Drag-and-drop task management with intuitive interface",
//         "Team member assignment and progress tracking"
//       ],
//       image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop&auto=format",
//       icon: <Code className="w-6 h-6" />,
//       color: "from-indigo-500 to-purple-600"
//     },
//     {
//       title: "Weather Analytics App",
//       description: "Advanced weather forecasting application with interactive maps, historical data analysis, and personalized weather alerts.",
//       technologies: ["React.js", "Chart.js", "Weather APIs", "Geolocation", "PWA"],
//       features: [
//         "Integration with multiple weather APIs for accurate forecasting",
//         "Interactive weather maps with satellite imagery",
//         "Historical weather data analysis and trends"
//       ],
//       image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop&auto=format",
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-cyan-500 to-blue-600"
//     },
//     {
//       title: "Social Media Dashboard",
//       description: "Comprehensive social media management platform with analytics, scheduling, and multi-platform posting capabilities.",
//       technologies: ["React.js", "Node.js", "Social APIs", "Chart.js", "Cron Jobs"],
//       features: [
//         "Multi-platform posting to Twitter, Instagram, and LinkedIn",
//         "Advanced analytics with engagement tracking",
//         "Content scheduling with automated posting"
//       ],
//       image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&auto=format",
//       icon: <Database className="w-6 h-6" />,
//       color: "from-pink-500 to-rose-600"
//     },
//     {
//       title: "Mobile Banking App",
//       description: "Secure mobile banking application with biometric authentication, real-time transactions, and advanced financial analytics.",
//       technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Biometrics"],
//       features: [
//         "Biometric authentication for enhanced security",
//         "Real-time transaction monitoring and alerts",
//         "Advanced spending analytics and budgeting tools"
//       ],
//       image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop&auto=format",
//       icon: <Smartphone className="w-6 h-6" />,
//       color: "from-emerald-500 to-cyan-600"
//     },
//     {
//       title: "Portfolio Website",
//       description: "Modern portfolio website with interactive animations, dark/light mode, and optimized performance for showcasing creative work.",
//       technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
//       features: [
//         "Interactive animations with Framer Motion",
//         "Dark/light mode with smooth transitions",
//         "Optimized performance and SEO"
//       ],
//       image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop&auto=format",
//       icon: <Globe className="w-6 h-6" />,
//       color: "from-violet-500 to-purple-600"
//     },
//     {
//       title: "AI Chatbot Platform",
//       description: "Intelligent chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
//       technologies: ["Python", "TensorFlow", "Flask", "NLP", "WebSocket"],
//       features: [
//         "Natural language processing with advanced AI models",
//         "Multi-language support with real-time translation",
//         "Seamless integration with popular messaging platforms"
//       ],
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&auto=format",
//       icon: <Zap className="w-6 h-6" />,
//       color: "from-amber-500 to-orange-600"
//     }
//   ];

//   const nextProject = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setSlideDirection('slide-left');
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % projects.length);
//       setSlideDirection('');
//       setTimeout(() => setIsAnimating(false), 100);
//     }, 250);
//   };

//   const prevProject = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setSlideDirection('slide-right');
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//       setSlideDirection('');
//       setTimeout(() => setIsAnimating(false), 100);
//     }, 250);
//   };

//   const getVisibleProjects = () => {
//     const visible = [];
//     const total = projects.length;
    
//     for (let i = -1; i <= 1; i++) {
//       const index = (currentIndex + i + total) % total;
//       visible.push({
//         ...projects[index],
//         originalIndex: index,
//         position: i === -1 ? 'left' : i === 0 ? 'center' : 'right'
//       });
//     }
    
//     return visible;
//   };

//   return (
//     <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" id="projects" ref={sectionRef}>
//       {/* 3D Background with Blur Effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="section-container relative z-10">
//         <div className="text-center mb-10 sm:mb-16">
//           <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element backdrop-blur-sm">
//             <span>Projects</span>
//           </div>
//           <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
//             Featured <br className="hidden sm:block" />Projects
//           </h2>
//           <p className="section-subtitle mx-auto opacity-0 fade-in-element">
//             A showcase of my technical skills and creative problem-solving through real-world applications.
//           </p>
//         </div>

//         {/* 3D Glass Carousel Container */}
//         <div className="relative max-w-7xl mx-auto">
//           <div className="glass-carousel-bg rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
            
//             {/* Navigation Arrows with Proper Spacing */}
//             <button
//               onClick={prevProject}
//               disabled={isAnimating}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 glass-nav-button group disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
//             </button>
            
//             <button
//               onClick={nextProject}
//               disabled={isAnimating}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 glass-nav-button group disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
//             </button>

//             {/* Projects Grid with Sliding Animation */}
//             <div className="overflow-hidden mx-16">
//               <div className={cn(
//                 "grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out",
//                 slideDirection === 'slide-left' && 'transform translate-x-full opacity-0',
//                 slideDirection === 'slide-right' && 'transform -translate-x-full opacity-0'
//               )}>
//                 {getVisibleProjects().map((project, index) => (
//                   <div 
//                     key={`${project.originalIndex}-${currentIndex}`}
//                     className={cn(
//                       "opacity-0 fade-in-element transition-all duration-700 transform-gpu",
//                       project.position === 'center' ? 'lg:scale-110 lg:z-10' : 'lg:scale-95 lg:opacity-80'
//                     )}
//                   >
//                     {/* Project Image Section with 3D Effect */}
//                     <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
//                       <div className="relative h-44 rounded-2xl overflow-hidden glass-image-container">
//                         <img 
//                           src={project.image} 
//                           alt={project.title}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className={cn(
//                           "absolute inset-0 bg-gradient-to-br opacity-30 mix-blend-overlay",
//                           project.color
//                         )} />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//                       </div>
//                     </div>

//                     {/* Project Card with Enhanced Glass Effect */}
//                     <div className="glass-project-card group hover:glass-project-card-hover transition-all duration-500 transform hover:-translate-y-2">
//                       <div className="flex items-center space-x-3 mb-4">
//                         <div className={cn(
//                           "rounded-full w-12 h-12 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300",
//                           `bg-gradient-to-r ${project.color}`
//                         )}>
//                           {project.icon}
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
//                           {project.title}
//                         </h3>
//                       </div>
                      
//                       <p className="text-gray-600 mb-4 leading-relaxed text-sm">
//                         {project.description}
//                       </p>
                      
//                       <div className="mb-4">
//                         <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h4>
//                         <ul className="space-y-1">
//                           {project.features.slice(0, 2).map((feature, idx) => (
//                             <li key={idx} className="text-xs text-gray-600 flex items-start">
//                               <span className="text-pulse-500 mr-2 mt-0.5">•</span>
//                               <span className="line-clamp-2">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
                      
//                       <div className="mb-5">
//                         <h4 className="text-xs font-semibold text-gray-700 mb-2">Technologies:</h4>
//                         <div className="flex flex-wrap gap-1.5">
//                           {project.technologies.slice(0, 4).map((tech, idx) => (
//                             <span 
//                               key={idx} 
//                               className="px-2 py-1 bg-pulse-50/80 backdrop-blur-sm text-pulse-600 text-xs rounded-full border border-pulse-200/50"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div className="flex space-x-2">
//                         <button className="glass-button flex-1 group/btn">
//                           <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
//                           <span>Code</span>
//                         </button>
//                         <button className="glass-button-secondary flex-1 group/btn">
//                           <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
//                           <span>Demo</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Project Indicators */}
//             <div className="flex items-center justify-center mt-8 space-x-2">
//               {projects.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     if (!isAnimating && index !== currentIndex) {
//                       setIsAnimating(true);
//                       setSlideDirection(index > currentIndex ? 'slide-left' : 'slide-right');
//                       setTimeout(() => {
//                         setCurrentIndex(index);
//                         setSlideDirection('');
//                         setTimeout(() => setIsAnimating(false), 100);
//                       }, 250);
//                     }
//                   }}
//                   className={cn(
//                     "transition-all duration-300 rounded-full backdrop-blur-sm",
//                     index === currentIndex 
//                       ? "bg-gradient-to-r from-pulse-400 to-pulse-600 w-8 h-3 shadow-lg" 
//                       : "bg-white/40 w-3 h-3 hover:bg-white/60 hover:scale-110"
//                   )}
//                 />
//               ))}
//             </div>
            
//             <div className="text-center mt-4">
//               <p className="text-sm text-gray-500/80 backdrop-blur-sm">
//                 {currentIndex + 1} of {projects.length}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .section-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 1rem;
//         }
        
//         .pulse-chip {
//           display: inline-flex;
//           align-items: center;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(135deg, rgba(254, 215, 170, 0.8), rgba(254, 202, 202, 0.8));
//           color: #ea580c;
//           border-radius: 9999px;
//           font-size: 0.875rem;
//           font-weight: 500;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }
        
//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #111827;
//           line-height: 1.2;
//         }
        
//         .section-subtitle {
//           font-size: 1.125rem;
//           color: #6b7280;
//           max-width: 32rem;
//         }
        
//         .glass-carousel-bg {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
//           backdrop-filter: blur(20px);
//           box-shadow: 
//             0 25px 50px -12px rgba(0, 0, 0, 0.25),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1);
//         }
        
//         .glass-image-container {
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         .glass-project-card {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
//           backdrop-filter: blur(15px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 1.5rem;
//           padding: 1.5rem;
//           box-shadow: 
//             0 10px 15px -3px rgba(0, 0, 0, 0.1),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1);
//         }
        
//         .glass-project-card-hover {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
//           box-shadow: 
//             0 25px 50px -12px rgba(0, 0, 0, 0.25),
//             inset 0 1px 0 rgba(255, 255, 255, 0.2);
//           border-color: rgba(255, 255, 255, 0.3);
//         }
        
//         .glass-nav-button {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
//           backdrop-filter: blur(15px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//         }
        
//         .glass-nav-button:hover {
//           background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8));
//           border-color: rgba(255, 255, 255, 0.4);
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
//         }
        
//         .glass-button {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(135deg, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.8));
//           color: white;
//           border-radius: 0.75rem;
//           font-size: 0.875rem;
//           font-weight: 500;
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           transition: all 0.3s ease;
//         }
        
//         .glass-button:hover {
//           background: linear-gradient(135deg, rgba(17, 24, 39, 1), rgba(55, 65, 81, 0.9));
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
//         }
        
//         .glass-button-secondary {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
//           color: #374151;
//           border-radius: 0.75rem;
//           font-size: 0.875rem;
//           font-weight: 500;
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           transition: all 0.3s ease;
//         }
        
//         .glass-button-secondary:hover {
//           background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(251, 146, 60, 0.2));
//           color: #ea580c;
//           border-color: rgba(249, 115, 22, 0.3);
//         }
        
//         .animate-fade-in {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//         }
        
//         .fade-in-element {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all 0.6s ease-out;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         @media (min-width: 1024px) {
//           .section-title {
//             font-size: 3rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;

























// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Github, ExternalLink, Code, Database, Brain, Smartphone, Globe, Zap, Palette, Film } from "lucide-react";
// import { cn } from "@/lib/utils";

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [slideDirection, setSlideDirection] = useState('');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const elements = entry.target.querySelectorAll(".fade-in-element");
//             elements.forEach((el, index) => {
//               setTimeout(() => {
//                 el.classList.add("animate-fade-in");
//               }, index * 150); // Slightly faster stagger
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

//   // Expanded project list for better carousel testing
//   const projects = [
//     {
//       title: "News Website",
//       description: "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates.",
//       technologies: ["Express.js", "React.js", "Node.js", "Shadcn UI", "Tailwind"],
//       features: [
//         "Integrated third-party APIs for dynamic and up-to-date news content",
//         "Utilized Axios for efficient API calls with fast and reliable data retrieval", 
//         "Leveraged React, Tailwind CSS, and ShadCN to build a responsive interface"
//       ],
//       image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop&auto=format",
//       icon: <Code className="w-6 h-6" />,
//       color: "from-blue-500 to-purple-600"
//     },
//     {
//       title: "Salary Prediction App",
//       description: "A machine learning-powered web application for salary prediction using various algorithms, featuring interactive data visualizations.",
//       technologies: ["Machine Learning", "Streamlit", "SVM", "Random Forest"],
//       features: [
//         "Developed ML model to predict salaries based on Stack Overflow data",
//         "Utilized Streamlit library for a user-friendly web interface",
//         "Implemented algorithms including SVM and Random Forest"
//       ],
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop&auto=format",
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-green-500 to-teal-600"
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack e-commerce solution with a modern shopping cart, payment integration, and inventory management, built with a scalable architecture.",
//       technologies: ["React.js", "Node.js", "MongoDB", "Stripe API"],
//       features: [
//         "Implemented secure payment processing with Stripe integration",
//         "Built responsive product catalog with advanced filtering and search",
//         "Developed admin dashboard for inventory and order management"
//       ],
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop&auto=format",
//       icon: <Database className="w-6 h-6" />,
//       color: "from-orange-500 to-red-600"
//     },
//     {
//       title: "AI Chatbot Platform",
//       description: "Intelligent chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
//       technologies: ["Python", "TensorFlow", "Flask", "NLP", "WebSocket"],
//       features: [
//         "Natural language processing with advanced AI models",
//         "Multi-language support with real-time translation",
//         "Seamless integration with popular messaging platforms"
//       ],
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=220&fit=crop&auto=format",
//       icon: <Zap className="w-6 h-6" />,
//       color: "from-amber-500 to-orange-600"
//     },
//     {
//       title: "Portfolio Website",
//       description: "Modern portfolio with interactive animations, dark/light mode, and optimized performance for showcasing creative work.",
//       technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
//       features: [
//         "Interactive animations with Framer Motion for a fluid experience",
//         "Dark/light mode with smooth transitions and theme persistence",
//         "Optimized for performance and SEO using Next.js features"
//       ],
//       image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=220&fit=crop&auto=format",
//       icon: <Globe className="w-6 h-6" />,
//       color: "from-violet-500 to-purple-600"
//     },
//     {
//       title: "Mobile Banking App",
//       description: "Secure mobile banking application with biometric authentication, real-time transactions, and advanced financial analytics.",
//       technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Biometrics"],
//       features: [
//         "Biometric authentication for enhanced login security",
//         "Real-time transaction monitoring and push notification alerts",
//         "Advanced spending analytics and budgeting tools"
//       ],
//       image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=220&fit=crop&auto=format",
//       icon: <Smartphone className="w-6 h-6" />,
//       color: "from-emerald-500 to-cyan-600"
//     },
//     {
//       title: "Design Tool Clone",
//       description: "A collaborative real-time design application inspired by Figma, featuring a live cursor, comments, and reactions.",
//       technologies: ["Next.js 14", "Liveblocks", "Fabric.js", "Shadcn UI"],
//       features: [
//           "Real-time collaboration with live cursors and presence",
//           "Interactive canvas with shape creation and manipulation",
//           "Commenting and reaction system for design feedback"
//       ],
//       image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&h=220&fit=crop&auto=format",
//       icon: <Palette className="w-6 h-6" />,
//       color: "from-pink-500 to-rose-500"
//     },
//     {
//         title: "Animated Movie App",
//         description: "A visually engaging application for discovering and tracking animated movies, built with server-side rendering and infinite scroll.",
//         technologies: ["Next.js", "Framer Motion", "Server Actions"],
//         features: [
//             "Infinite scroll for seamless Browse of movie content",
//             "Stunning animations and transitions using Framer Motion",
//             "Efficient data fetching with Next.js Server Actions"
//         ],
//         image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=220&fit=crop&auto=format",
//         icon: <Film className="w-6 h-6" />,
//         color: "from-indigo-500 to-fuchsia-500"
//     }
//   ];

//   const nextProject = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setSlideDirection('slide-left');
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % projects.length);
//       setSlideDirection('');
//       setTimeout(() => setIsAnimating(false), 50); // Shorter delay after state update
//     }, 300); // Animation duration
//   };

//   const prevProject = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setSlideDirection('slide-right');
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//       setSlideDirection('');
//       setTimeout(() => setIsAnimating(false), 50);
//     }, 300);
//   };

//   const getVisibleProjects = () => {
//     const visible = [];
//     const total = projects.length;
    
//     // On large screens, show 3 projects. On smaller screens, only show the current one.
//     const range = window.innerWidth >= 1024 ? 1 : 0;

//     for (let i = -range; i <= range; i++) {
//       const index = (currentIndex + i + total) % total;
//       visible.push({
//         ...projects[index],
//         originalIndex: index,
//         position: i === -1 ? 'left' : i === 0 ? 'center' : 'right'
//       });
//     }
    
//     return visible;
//   };
  
//   // A small helper to re-render on resize to switch between 1 and 3 card views
//   const [visibleProjects, setVisibleProjects] = useState(getVisibleProjects());
//   useEffect(() => {
//     const handleResize = () => setVisibleProjects(getVisibleProjects());
//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initial call
//     return () => window.removeEventListener('resize', handleResize);
//   }, [currentIndex]);


//   return (
//     <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" id="projects" ref={sectionRef}>
//       {/* Updated 3D Background with orange tint */}
//       <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-rose-50/30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="section-container relative z-10">
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="pulse-chip mx-auto mb-4 opacity-0 fade-in-element backdrop-blur-sm">
//             <span>Showcase</span>
//           </div>
//           <h2 className="section-title mb-4 opacity-0 fade-in-element">
//             Featured Projects
//           </h2>
//           <p className="section-subtitle mx-auto opacity-0 fade-in-element">
//             A selection of my work, demonstrating technical skills and creative problem-solving.
//           </p>
//         </div>

//         {/* 3D Glass Carousel with Inset Effect */}
//         <div className="relative max-w-7xl mx-auto">
//           <div className="glass-carousel-bg rounded-3xl p-4 sm:p-8 backdrop-blur-xl shadow-2xl">
            
//             <div className="relative flex items-center justify-center">
//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevProject}
//                 disabled={isAnimating}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-nav-button group disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
//               </button>
              
//               <button
//                 onClick={nextProject}
//                 disabled={isAnimating}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-nav-button group disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
//               </button>

//               {/* Projects Grid Container */}
//               <div className="overflow-hidden w-full max-w-sm lg:max-w-none">
//                 <div className={cn(
//                   "grid grid-cols-1 lg:grid-cols-3 gap-8 transition-transform duration-300 ease-in-out",
//                   isAnimating && slideDirection === 'slide-left' && '-translate-x-full opacity-0',
//                   isAnimating && slideDirection === 'slide-right' && 'translate-x-full opacity-0'
//                 )}>
//                   {visibleProjects.map((project) => (
//                     <div 
//                       key={`${project.originalIndex}-${currentIndex}`} // Key ensures re-render on change
//                       className={cn(
//                         "opacity-0 fade-in-element transition-all duration-500 transform-gpu group",
//                         project.position === 'center' 
//                           ? 'lg:scale-105 lg:z-10' 
//                           : 'lg:scale-95 lg:opacity-70 lg:blur-[2px] hover:!blur-0',
//                         // On mobile, all cards are centered and fully visible
//                         'lg:hover:!opacity-100 lg:hover:!scale-100'
//                       )}
//                     >
//                       {/* UNIFIED PROJECT CARD: Image and content are now in one container */}
//                       <div className="glass-project-card hover:glass-project-card-hover transition-all duration-500 transform lg:group-hover:-translate-y-2 rounded-2xl overflow-hidden">
                        
//                         {/* Image Section */}
//                         <div className="relative h-48">
//                            <img 
//                             src={project.image} 
//                             alt={project.title}
//                             className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
//                           />
//                           <div className={cn(
//                             "absolute inset-0 bg-gradient-to-br opacity-20 mix-blend-multiply",
//                             project.color
//                           )} />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                         </div>

//                         {/* Content Section */}
//                         <div className="p-5">
//                           <div className="flex items-center space-x-3 mb-4">
//                             <div className={cn(
//                               "rounded-full w-12 h-12 flex items-center justify-center text-white shadow-lg transform transition-transform duration-300",
//                               `bg-gradient-to-r ${project.color}`
//                             )}>
//                               {project.icon}
//                             </div>
//                             <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300">
//                               {project.title}
//                             </h3>
//                           </div>
                          
//                           <p className="text-gray-600 mb-4 leading-relaxed text-sm">
//                             {project.description}
//                           </p>
                          
//                           <div className="mb-4">
//                             <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h4>
//                             <ul className="space-y-1.5">
//                               {project.features.slice(0, 2).map((feature, idx) => (
//                                 <li key={idx} className="text-xs text-gray-600 flex items-start">
//                                   <span className="text-orange-500 mr-2 mt-0.5">•</span>
//                                   <span>{feature}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
                          
//                           <div className="mb-5">
//                             <h4 className="text-xs font-semibold text-gray-700 mb-2">Technologies:</h4>
//                             <div className="flex flex-wrap gap-1.5">
//                               {project.technologies.slice(0, 4).map((tech, idx) => (
//                                 <span 
//                                   key={idx} 
//                                   className="px-2 py-1 bg-orange-100/60 text-orange-700 text-xs rounded-full border border-orange-200/50"
//                                 >
//                                   {tech}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
                          
//                           <div className="flex space-x-2">
//                             <button className="glass-button flex-1 group/btn">
//                               <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
//                               <span>Code</span>
//                             </button>
//                             <button className="glass-button-secondary flex-1 group/btn">
//                               <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
//                               <span>Demo</span>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Carousel Indicators */}
//             <div className="flex items-center justify-center mt-8 space-x-2">
//               {projects.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     if (!isAnimating && index !== currentIndex) {
//                       setIsAnimating(true);
//                       setSlideDirection(index > currentIndex ? 'slide-left' : 'slide-right');
//                       setTimeout(() => {
//                         setCurrentIndex(index);
//                         setSlideDirection('');
//                         setTimeout(() => setIsAnimating(false), 50);
//                       }, 300);
//                     }
//                   }}
//                   className={cn(
//                     "transition-all duration-300 rounded-full backdrop-blur-sm",
//                     index === currentIndex 
//                       ? "bg-gradient-to-r from-orange-400 to-orange-600 w-6 h-2.5 shadow-lg" 
//                       : "bg-white/50 w-2.5 h-2.5 hover:bg-white/80 hover:scale-110"
//                   )}
//                 />
//               ))}
//             </div>

//             {/* Mobile navigation buttons */}
//             <div className="lg:hidden flex justify-center items-center gap-4 mt-6">
//                 <button onClick={prevProject} disabled={isAnimating} className="w-12 h-12 glass-nav-button group">
//                     <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-white" />
//                 </button>
//                 <p className="text-sm text-gray-600/80 backdrop-blur-sm tabular-nums">
//                     {currentIndex + 1} / {projects.length}
//                 </p>
//                 <button onClick={nextProject} disabled={isAnimating} className="w-12 h-12 glass-nav-button group">
//                     <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-white" />
//                 </button>
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .section-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 1rem;
//         }
        
//         .pulse-chip {
//           display: inline-flex;
//           align-items: center;
//           padding: 0.5rem 1.25rem;
//           background: linear-gradient(135deg, rgba(254, 215, 170, 0.8), rgba(254, 202, 202, 0.8));
//           color: #ea580c;
//           border-radius: 9999px;
//           font-size: 0.875rem;
//           font-weight: 500;
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
        
//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #1f2937;
//           line-height: 1.2;
//         }
        
//         .section-subtitle {
//           font-size: 1.125rem;
//           color: #4b5563;
//           max-width: 36rem;
//         }
        
//         /* Inset effect for the main carousel background */
//         .glass-carousel-bg {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
//           backdrop-filter: blur(24px);
//           box-shadow: 
//             0 25px 50px -12px rgba(0, 0, 0, 0.15),
//             inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
//             inset 0 2px 4px -2px rgba(0, 0, 0, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
        
//         /* UNIFIED project card styling */
//         .glass-project-card {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2));
//           backdrop-filter: blur(15px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07);
//         }
        
//         .glass-project-card-hover {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4));
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
//           border-color: rgba(255, 255, 255, 0.4);
//         }
        
//         .glass-nav-button {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//         }
        
//         .glass-nav-button:hover {
//           background: linear-gradient(135deg, rgba(249, 115, 22, 0.8), rgba(234, 88, 12, 0.8));
//           border-color: rgba(255, 255, 255, 0.4);
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
//         }
        
//         .glass-button {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.8));
//           color: white;
//           border-radius: 0.75rem;
//           font-size: 0.875rem;
//           font-weight: 500;
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           transition: all 0.3s ease;
//         }
        
//         .glass-button:hover {
//           background: linear-gradient(135deg, rgba(17, 24, 39, 1), rgba(55, 65, 81, 0.9));
//           box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.3);
//         }
        
//         .glass-button-secondary {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2));
//           color: #374151;
//           border-radius: 0.75rem;
//           font-size: 0.875rem;
//           font-weight: 500;
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           transition: all 0.3s ease;
//         }
        
//         .glass-button-secondary:hover {
//           background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(251, 146, 60, 0.2));
//           color: #ea580c;
//           border-color: rgba(249, 115, 22, 0.4);
//         }
        
//         .animate-fade-in {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//         }
        
//         .fade-in-element {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//         }
        
//         @media (min-width: 1024px) {
//           .section-title {
//             font-size: 3rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;// wroking agree true1













// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Github, ExternalLink, Code, Database, Brain, Smartphone, Globe, Zap, Palette, Film, Star } from "lucide-react";
// import { cn } from "@/lib/utils";

// // A new component for the card to encapsulate the parallax logic
// const ProjectCard = ({ project, position }) => {
//   const cardRef = useRef(null);

//   // Parallax effect for desktop only
//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card || window.innerWidth < 1024) return;

//     const handleMouseMove = (e) => {
//       const { left, top, width, height } = card.getBoundingClientRect();
//       const x = (e.clientX - left - width / 2) / 20; // Reduced intensity
//       const y = (e.clientY - top - height / 2) / 20;
//       card.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`;
//     };

//     const handleMouseLeave = () => {
//       card.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
//     };

//     const parentGroup = card.closest('.group');
//     parentGroup.addEventListener('mousemove', handleMouseMove);
//     parentGroup.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       parentGroup.removeEventListener('mousemove', handleMouseMove);
//       parentGroup.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       className={cn(
//         "transition-all duration-500 ease-in-out transform-gpu group",
//         position === 'center'
//           ? 'lg:scale-100 lg:z-10'
//           // FIX: Increased opacity for better visibility
//           : 'lg:scale-90 lg:opacity-90',
//         'lg:hover:!opacity-100 lg:hover:!scale-100 lg:hover:z-20'
//       )}
//     >
//       <div ref={cardRef} className={cn("project-card rounded-2xl overflow-hidden relative", project.highlight && "highlighted-card")} style={{ transformStyle: "preserve-3d" }}>
//         {project.highlight && (
//           <div className="highlight-badge">
//             <Star className="w-3 h-3 mr-1.5" />
//             Featured
//           </div>
//         )}
//         <div className="relative h-52">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//         </div>
//         <div className="p-6 bg-white">
//           <h3 className="anim-underline text-xl font-bold text-gray-800 mb-3">
//             {project.title}
//           </h3>
//           <p className="text-gray-600 mb-5 leading-relaxed text-sm">
//             {project.description}
//           </p>
//           <div className="mb-5">
//             <h4 className="anim-underline text-sm font-semibold text-gray-700 mb-3 inline-block">Key Features</h4>
//             <ul className="space-y-2">
//               {project.features.map((feature, idx) => (
//                 <li key={idx} className="text-sm text-gray-600 flex items-start">
//                   <span className="text-orange-500 mr-2.5 mt-1 flex-shrink-0">•</span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="mb-6">
//             <h4 className="anim-underline text-sm font-semibold text-gray-700 mb-3 inline-block">Technologies</h4>
//             <div className="flex flex-wrap gap-2">
//               {project.technologies.map((tech, idx) => (
//                 <span key={idx} className="tech-tag">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="flex space-x-3 pt-2">
//             <button className="button-primary flex-1 group/btn">
//               <Github className="w-4 h-4" />
//               <span>Code</span>
//             </button>
//             <button className="button-secondary flex-1 group/btn">
//               <ExternalLink className="w-4 h-4" />
//               <span>Live Demo</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [slideDirection, setSlideDirection] = useState('none');
//   const projectsContainerRef = useRef(null);

//   // DYNAMIC CONTENT: Added more features and technologies to test layout
//   const projects = [
//     {
//       title: "News Website",
//       description: "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates and article searching.",
//       technologies: ["Express.js", "React.js", "Node.js", "Shadcn APIs", "Tailwind", "Axios"],
//       features: [
//         "Integrated third-party APIs for dynamic news content",
//         "Utilized Axios for efficient API calls with fast data retrieval",
//         "Leveraged React & Tailwind for a fully responsive interface",
//       ],
//       image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop&auto=format",
//       icon: <Code className="w-6 h-6" />,
//       color: "from-blue-500 to-purple-600"
//     },
//     {
//       title: "Salary Prediction App",
//       description: "A machine learning-powered web application for salary prediction using various algorithms, featuring interactive data visualizations.",
//       technologies: ["Machine Learning", "Streamlit", "SVM", "Random Forest"],
//       features: [
//         "Developed ML model to predict salaries based on Stack Overflow data",
//         "Utilized Streamlit library for a user-friendly web interface",
//       ],
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop&auto=format",
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-green-500 to-teal-600"
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack e-commerce solution with a modern shopping cart, payment integration, and inventory management.",
//       technologies: ["React.js", "Node.js", "MongoDB", "Stripe API"],
//       features: [
//         "Implemented secure payment processing with Stripe integration",
//         "Built responsive product catalog with advanced filtering and search",
//       ],
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop&auto=format",
//       icon: <Database className="w-6 h-6" />,
//       color: "from-orange-500 to-red-600",
//       highlight: true // HIGHLIGHT TAG
//     },
//     {
//       title: "Design Tool Clone",
//       description: "A collaborative real-time design application inspired by Figma, featuring a live cursor, comments, and reactions.",
//       technologies: ["Next.js 14", "Liveblocks", "Fabric.js", "Shadcn UI"],
//       features: [
//           "Real-time collaboration with live cursors and presence",
//           "Interactive canvas with shape creation and manipulation",
//       ],
//       image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&h=220&fit=crop&auto=format",
//       icon: <Palette className="w-6 h-6" />,
//       color: "from-pink-500 to-rose-500"
//     },
//     {
//         title: "Animated Movie App",
//         description: "A visually engaging application for discovering and tracking animated movies, built with server-side rendering and infinite scroll.",
//         technologies: ["Next.js", "Framer Motion", "Server Actions"],
//         features: [
//             "Infinite scroll for seamless browsing of movie content",
//             "Stunning animations and transitions using Framer Motion",
//         ],
//         image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=220&fit=crop&auto=format",
//         icon: <Film className="w-6 h-6" />,
//         color: "from-indigo-500 to-fuchsia-500"
//     }
//   ];

//   // SLIDING CAROUSEL LOGIC
//   const handleNavigation = (direction) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setSlideDirection(direction);

//     setTimeout(() => {
//       if (direction === 'next') {
//         setCurrentIndex((prev) => (prev + 1) % projects.length);
//       } else {
//         setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//       }
//       setSlideDirection('none');
//       setIsAnimating(false);
//     }, 500); // Match transition duration
//   };

//   const getVisibleIndices = () => {
//     const total = projects.length;
//     if (window.innerWidth < 1024) {
//       return [currentIndex];
//     }
//     return [
//       (currentIndex - 1 + total) % total,
//       currentIndex,
//       (currentIndex + 1) % total
//     ];
//   };
  
//   const [visibleIndices, setVisibleIndices] = useState(getVisibleIndices());

//   useEffect(() => {
//     if (slideDirection === 'none') {
//       setVisibleIndices(getVisibleIndices());
//     }
//   }, [currentIndex, slideDirection]);
  
//   useEffect(() => {
//     const handleResize = () => setVisibleIndices(getVisibleIndices());
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <section className="py-20 sm:py-24 md:py-28 bg-gray-50/70 overflow-hidden" id="projects">
//       <div className="section-container">
//         <div className="text-center mb-14 sm:mb-20">
//           <span className="pulse-chip mx-auto mb-4">Showcase</span>
//           <h2 className="section-title mb-4">Featured Projects</h2>
//           <p className="section-subtitle mx-auto">A selection of my work, demonstrating technical skills and creative problem-solving.</p>
//         </div>

//         <div className="relative">
//           <div className="relative flex items-center justify-center lg:px-20">
//             <button
//               onClick={() => handleNavigation('prev')}
//               disabled={isAnimating}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 nav-button group disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
//             >
//               <ChevronLeft className="w-7 h-7" />
//             </button>
//             <button
//               onClick={() => handleNavigation('next')}
//               disabled={isAnimating}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 nav-button group disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
//             >
//               <ChevronRight className="w-7 h-7" />
//             </button>

//             <div ref={projectsContainerRef} className="w-full lg:w-[calc(100%-10rem)] overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{
//                   transform: slideDirection === 'next' ? 'translateX(-100%)' : slideDirection === 'prev' ? 'translateX(100%)' : 'translateX(0)',
//                 }}
//               >
//                 {visibleIndices.map((index, i) => (
//                   <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-4 lg:px-6">
//                     <ProjectCard
//                       project={projects[index]}
//                       position={i === 1 || window.innerWidth < 1024 ? 'center' : 'side'}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
            
//           <div className="flex items-center justify-center mt-12 space-x-3">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   if (!isAnimating && index !== currentIndex) {
//                     handleNavigation(index > currentIndex ? 'next' : 'prev');
//                   }
//                 }}
//                 className={cn(
//                   "transition-all duration-300 rounded-full",
//                   index === currentIndex 
//                     ? "bg-orange-500 w-8 h-3" 
//                     : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
//                 )}
//               />
//             ))}
//           </div>

//           <div className="lg:hidden flex justify-center items-center gap-4 mt-8">
//             <button onClick={() => handleNavigation('prev')} disabled={isAnimating} className="w-12 h-12 nav-button group"><ChevronLeft className="w-6 h-6" /></button>
//             <p className="text-sm text-gray-600 tabular-nums">{currentIndex + 1} / {projects.length}</p>
//             <button onClick={() => handleNavigation('next')} disabled={isAnimating} className="w-12 h-12 nav-button group"><ChevronRight className="w-6 h-6" /></button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .section-container { max-width: 1536px; margin: 0 auto; padding: 0 1rem; }
//         .pulse-chip { display: inline-flex; align-items: center; padding: 0.5rem 1.25rem; background-color: #fff7ed; color: #c2410c; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; border: 1px solid #fed7aa; }
//         .section-title { font-size: 2.5rem; font-weight: 800; color: #1f2937; line-height: 1.2; }
//         .section-subtitle { font-size: 1.125rem; color: #4b5563; max-width: 42rem; }

//         .project-card {
//           background-color: #ffffff;
//           border: 1px solid #e5e7eb;
//           transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
//           box-shadow: 0 4px 6px -1px rgba(0,0,0,0.03), 0 2px 4px -2px rgba(0,0,0,0.03);
//         }
//         .group:hover .project-card {
//           box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
//         }
        
//         /* HIGHLIGHT STYLES */
//         .highlighted-card {
//           box-shadow: 0 0 0 2px #fff, 0 0 0 4px #fb923c;
//         }
//         .highlight-badge {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           z-index: 10;
//           display: inline-flex;
//           align-items: center;
//           padding: 0.35rem 0.75rem;
//           background-image: linear-gradient(to right, #fb923c, #f97316);
//           color: white;
//           border-radius: 9999px;
//           font-size: 0.75rem;
//           font-weight: 600;
//         }

//         /* ANIMATING UNDERLINE */
//         .anim-underline {
//           position: relative;
//           display: inline-block;
//         }
//         .anim-underline::after {
//           content: '';
//           position: absolute;
//           bottom: -4px;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background-color: #f97316;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.3s ease-in-out;
//         }
//         .group:hover .anim-underline::after {
//           transform: scaleX(1);
//         }

//         .nav-button { background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #4b5563; box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.07); border: 1px solid #e5e7eb; transition: all 0.2s ease; }
//         .nav-button:hover { border-color: #fb923c; color: #f97316; box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1); }
//         .tech-tag { padding: 0.3rem 0.8rem; background-color: #fff7ed; color: #c2410c; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; border: 1px solid #fed7aa; }
//         .button-primary { display: flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 0.6rem 1rem; background-color: #1f2937; color: white; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; }
//         .button-primary:hover { background-color: #374151; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
//         .button-secondary { display: flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 0.6rem 1rem; background-color: #ffffff; color: #374151; border-radius: 0.5rem; font-weight: 500; border: 1px solid #d1d5db; transition: all 0.2s; }
//         .button-secondary:hover { background-color: #f9fafb; border-color: #9ca3af; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.05); }

//         @media (min-width: 1024px) {
//           .section-title { font-size: 3.25rem; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;




//prof-2

// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Github, ExternalLink, Code, Database, Brain, Smartphone, Globe, Zap, Palette, Film, Star } from "lucide-react";

// // Utility function for class names
// const cn = (...classes) => classes.filter(Boolean).join(' ');

// // A new component for the card to encapsulate the parallax logic
// const ProjectCard = ({ project, position }) => {
//   const cardRef = useRef(null);

//   // Parallax effect for desktop only
//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card || window.innerWidth < 1024) return;

//     const handleMouseMove = (e) => {
//       const { left, top, width, height } = card.getBoundingClientRect();
//       const x = (e.clientX - left - width / 2) / 20; // Reduced intensity
//       const y = (e.clientY - top - height / 2) / 20;
//       card.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`;
//     };

//     const handleMouseLeave = () => {
//       card.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
//     };

//     const parentGroup = card.closest('.group');
//     if (parentGroup) {
//       parentGroup.addEventListener('mousemove', handleMouseMove);
//       parentGroup.addEventListener('mouseleave', handleMouseLeave);

//       return () => {
//         parentGroup.removeEventListener('mousemove', handleMouseMove);
//         parentGroup.removeEventListener('mouseleave', handleMouseLeave);
//       };
//     }
//   }, []);

//   return (
//     <div
//       className={cn(
//         "transition-all duration-500 ease-in-out transform-gpu group",
//         position === 'center'
//           ? 'lg:scale-100 lg:z-10'
//           : 'lg:scale-90 lg:opacity-90',
//         'lg:hover:!opacity-100 lg:hover:!scale-100 lg:hover:z-20'
//       )}
//     >
//       <div ref={cardRef} className="minimal-project-card" style={{ transformStyle: "preserve-3d" }}>
//         {project.highlight && (
//           <div className="highlight-badge">
//             <Star className="w-3 h-3 mr-1.5" />
//             Featured
//           </div>
//         )}
        
//         {/* Card Image Container with Minimal Design */}
//         <div className="minimal-card-image-container">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="minimal-card-image transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="minimal-card-image-overlay" />
//           <div className="minimal-card-image-border" />
//           <div className="minimal-card-image-shadow" />
//         </div>

//         {/* Card Content */}
//         <div className="minimal-card-content">
//           <h3 className="anim-underline text-xl font-bold text-gray-800 mb-3 px-1">
//             {project.title}
//           </h3>
//           <p className="text-sm text-neutral-500 px-1 pb-2 mb-5 leading-relaxed">
//             {project.description}
//           </p>
//           <div className="mb-5 px-1">
//             <h4 className="anim-underline text-sm font-semibold text-gray-700 mb-3 inline-block">Key Features</h4>
//             <ul className="space-y-2">
//               {project.features.map((feature, idx) => (
//                 <li key={idx} className="text-sm text-gray-600 flex items-start">
//                   <span className="text-orange-500 mr-2.5 mt-1 flex-shrink-0">•</span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="mb-6 px-1">
//             <h4 className="anim-underline text-sm font-semibold text-gray-700 mb-3 inline-block">Technologies</h4>
//             <div className="flex flex-wrap gap-2">
//               {project.technologies.map((tech, idx) => (
//                 <span key={idx} className="tech-tag">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="flex space-x-3 pt-2 px-1">
//             <button className="button-primary flex-1 group/btn">
//               <Github className="w-4 h-4" />
//               <span>Code</span>
//             </button>
//             <button className="button-secondary flex-1 group/btn">
//               <ExternalLink className="w-4 h-4" />
//               <span>Live Demo</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [slideDirection, setSlideDirection] = useState('none');
//   const projectsContainerRef = useRef(null);

//   // DYNAMIC CONTENT: Added more features and technologies to test layout
//   const projects = [
//     {
//       title: "News Website",
//       description: "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates and article searching.",
//       technologies: ["Express.js", "React.js", "Node.js", "Shadcn APIs", "Tailwind", "Axios"],
//       features: [
//         "Integrated third-party APIs for dynamic news content",
//         "Utilized Axios for efficient API calls with fast data retrieval",
//         "Leveraged React & Tailwind for a fully responsive interface",
//       ],
//       image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop&auto=format",
//       icon: <Code className="w-6 h-6" />,
//       color: "from-blue-500 to-purple-600"
//     },
//     {
//       title: "Salary Prediction App",
//       description: "A machine learning-powered web application for salary prediction using various algorithms, featuring interactive data visualizations.",
//       technologies: ["Machine Learning", "Streamlit", "SVM", "Random Forest"],
//       features: [
//         "Developed ML model to predict salaries based on Stack Overflow data",
//         "Utilized Streamlit library for a user-friendly web interface",
//       ],
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop&auto=format",
//       icon: <Brain className="w-6 h-6" />,
//       color: "from-green-500 to-teal-600"
//     },
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack e-commerce solution with a modern shopping cart, payment integration, and inventory management.",
//       technologies: ["React.js", "Node.js", "MongoDB", "Stripe API"],
//       features: [
//         "Implemented secure payment processing with Stripe integration",
//         "Built responsive product catalog with advanced filtering and search",
//       ],
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop&auto=format",
//       icon: <Database className="w-6 h-6" />,
//       color: "from-orange-500 to-red-600",
//       highlight: true // HIGHLIGHT TAG
//     },
//     {
//       title: "Design Tool Clone",
//       description: "A collaborative real-time design application inspired by Figma, featuring a live cursor, comments, and reactions.",
//       technologies: ["Next.js 14", "Liveblocks", "Fabric.js", "Shadcn UI"],
//       features: [
//           "Real-time collaboration with live cursors and presence",
//           "Interactive canvas with shape creation and manipulation",
//       ],
//       image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&h=220&fit=crop&auto=format",
//       icon: <Palette className="w-6 h-6" />,
//       color: "from-pink-500 to-rose-500"
//     },
//     {
//         title: "Animated Movie App",
//         description: "A visually engaging application for discovering and tracking animated movies, built with server-side rendering and infinite scroll.",
//         technologies: ["Next.js", "Framer Motion", "Server Actions"],
//         features: [
//             "Infinite scroll for seamless browsing of movie content",
//             "Stunning animations and transitions using Framer Motion",
//         ],
//         image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=220&fit=crop&auto=format",
//         icon: <Film className="w-6 h-6" />,
//         color: "from-indigo-500 to-fuchsia-500"
//     }
//   ];

//   // SLIDING CAROUSEL LOGIC
//   const handleNavigation = (direction) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setSlideDirection(direction);

//     setTimeout(() => {
//       if (direction === 'next') {
//         setCurrentIndex((prev) => (prev + 1) % projects.length);
//       } else {
//         setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//       }
//       setSlideDirection('none');
//       setIsAnimating(false);
//     }, 500); // Match transition duration
//   };

//   const getVisibleIndices = () => {
//     const total = projects.length;
//     if (typeof window !== 'undefined' && window.innerWidth < 1024) {
//       return [currentIndex];
//     }
//     return [
//       (currentIndex - 1 + total) % total,
//       currentIndex,
//       (currentIndex + 1) % total
//     ];
//   };
  
//   const [visibleIndices, setVisibleIndices] = useState(() => getVisibleIndices());

//   useEffect(() => {
//     if (slideDirection === 'none') {
//       setVisibleIndices(getVisibleIndices());
//     }
//   }, [currentIndex, slideDirection]);
  
//   useEffect(() => {
//     const handleResize = () => setVisibleIndices(getVisibleIndices());
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <section className="py-20 sm:py-24 md:py-28 bg-gray-50/70 overflow-hidden" id="projects">
//       <div className="section-container">
//         <div className="text-center mb-14 sm:mb-20">
//           <span className="pulse-chip mx-auto mb-4">Showcase</span>
//           <h2 className="section-title mb-4">Featured Projects</h2>
//           <p className="section-subtitle mx-auto">A selection of my work, demonstrating technical skills and creative problem-solving.</p>
//         </div>

//         <div className="relative">
//           <div className="relative flex items-center justify-center lg:px-20">
//             <button
//               onClick={() => handleNavigation('prev')}
//               disabled={isAnimating}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 nav-button group disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
//             >
//               <ChevronLeft className="w-7 h-7" />
//             </button>
//             <button
//               onClick={() => handleNavigation('next')}
//               disabled={isAnimating}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 nav-button group disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
//             >
//               <ChevronRight className="w-7 h-7" />
//             </button>

//             <div ref={projectsContainerRef} className="w-full lg:w-[calc(100%-10rem)] overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{
//                   transform: slideDirection === 'next' ? 'translateX(-100%)' : slideDirection === 'prev' ? 'translateX(100%)' : 'translateX(0)',
//                 }}
//               >
//                 {visibleIndices.map((index, i) => (
//                   <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-4 lg:px-6">
//                     <ProjectCard
//                       project={projects[index]}
//                       position={i === 1 || (typeof window !== 'undefined' && window.innerWidth < 1024) ? 'center' : 'side'}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
            
//           <div className="flex items-center justify-center mt-12 space-x-3">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   if (!isAnimating && index !== currentIndex) {
//                     handleNavigation(index > currentIndex ? 'next' : 'prev');
//                   }
//                 }}
//                 className={cn(
//                   "transition-all duration-300 rounded-full",
//                   index === currentIndex 
//                     ? "bg-orange-500 w-8 h-3" 
//                     : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
//                 )}
//               />
//             ))}
//           </div>

//           <div className="lg:hidden flex justify-center items-center gap-4 mt-8">
//             <button onClick={() => handleNavigation('prev')} disabled={isAnimating} className="w-12 h-12 nav-button group"><ChevronLeft className="w-6 h-6" /></button>
//             <p className="text-sm text-gray-600 tabular-nums">{currentIndex + 1} / {projects.length}</p>
//             <button onClick={() => handleNavigation('next')} disabled={isAnimating} className="w-12 h-12 nav-button group"><ChevronRight className="w-6 h-6" /></button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .section-container { max-width: 1536px; margin: 0 auto; padding: 0 1rem; }
//         .pulse-chip { display: inline-flex; align-items: center; padding: 0.5rem 1.25rem; background-color: #fff7ed; color: #c2410c; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; border: 1px solid #fed7aa; }
//         .section-title { font-size: 2.5rem; font-weight: 800; color: #1f2937; line-height: 1.2; }
//         .section-subtitle { font-size: 1.125rem; color: #4b5563; max-width: 42rem; }

//         /* MINIMAL CARD STYLES - Integrated from MinimalCard components */
//         .minimal-project-card {
//           border-radius: 24px;
//           background-color: #fafafa;
//           padding: 8px;
//           transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
//           box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(255,252,240,0.5) inset, 0px 0px 0px 1px hsla(0,0%,100%,0.1) inset, 0px 0px 1px 0px rgba(28,27,26,0.5);
//           box-shadow: rgba(17,24,28,0.08) 0 0 0 1px, rgba(17,24,28,0.08) 0 1px 2px -1px, rgba(17,24,28,0.04) 0 2px 4px;
//           position: relative;
//         }
        
//         .group:hover .minimal-project-card {
//           background-color: #f5f5f5;
//           box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
//         }

//         /* MINIMAL CARD IMAGE STYLES */
//         .minimal-card-image-container {
//           position: relative;
//           margin-bottom: 24px;
//           height: 190px;
//           width: 100%;
//           border-radius: 20px;
//           box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(255,252,240,0.5) inset, 0px 0px 0px 1px hsla(0,0%,100%,0.1) inset, 0px 0px 1px 0px rgba(28,27,26,0.5);
//         }

//         .minimal-card-image {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           border-radius: 16px;
//           object-fit: cover;
//         }

//         .minimal-card-image-overlay {
//           position: absolute;
//           inset: 0;
//           border-radius: 16px;
//         }

//         .minimal-card-image-border {
//           position: absolute;
//           inset: 0;
//           border-radius: 16px;
//           box-shadow: 0px 0px 0px 1px rgba(0,0,0,.07), 0px 0px 0px 3px #fff, 0px 0px 0px 4px rgba(0,0,0,.08);
//         }

//         .minimal-card-image-shadow {
//           position: absolute;
//           inset: 0;
//           border-radius: 16px;
//         }

//         .minimal-card-content {
//           padding: 16px 8px 8px 8px;
//         }

//         /* HIGHLIGHT STYLES - Keeping original orange theme */
//         .minimal-project-card:has(.highlight-badge) {
//           box-shadow: 0 0 0 2px #fff, 0 0 0 4px #fb923c;
//         }
//         .highlight-badge {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           z-index: 10;
//           display: inline-flex;
//           align-items: center;
//           padding: 0.35rem 0.75rem;
//           background-image: linear-gradient(to right, #fb923c, #f97316);
//           color: white;
//           border-radius: 9999px;
//           font-size: 0.75rem;
//           font-weight: 600;
//         }

//         /* ANIMATING UNDERLINE - Keeping original orange theme */
//         .anim-underline {
//           position: relative;
//           display: inline-block;
//         }
//         .anim-underline::after {
//           content: '';
//           position: absolute;
//           bottom: -4px;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background-color: #f97316;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.3s ease-in-out;
//         }
//         .group:hover .anim-underline::after {
//           transform: scaleX(1);
//         }

//         /* ORIGINAL NAVIGATION AND BUTTON STYLES */
//         .nav-button { background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #4b5563; box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.07); border: 1px solid #e5e7eb; transition: all 0.2s ease; }
//         .nav-button:hover { border-color: #fb923c; color: #f97316; box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1); }
//         .tech-tag { padding: 0.3rem 0.8rem; background-color: #fff7ed; color: #c2410c; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; border: 1px solid #fed7aa; }
//         .button-primary { display: flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 0.6rem 1rem; background-color: #1f2937; color: white; border-radius: 0.5rem; font-weight: 500; transition: all 0.2s; }
//         .button-primary:hover { background-color: #374151; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
//         .button-secondary { display: flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 0.6rem 1rem; background-color: #ffffff; color: #374151; border-radius: 0.5rem; font-weight: 500; border: 1px solid #d1d5db; transition: all 0.2s; }
//         .button-secondary:hover { background-color: #f9fafb; border-color: #9ca3af; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.05); }

//         @media (min-width: 1024px) {
//           .section-title { font-size: 3.25rem; }
//         }

//         /* Dark mode support for minimal cards */
//         .dark .minimal-project-card {
//           background-color: #262626;
//           box-shadow: 0 1px 0 0 rgba(255,255,255,0.03) inset, 0 0 0 1px rgba(255,255,255,0.03) inset, 0 0 0 1px rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.1), 0 4px 4px 0 rgba(0,0,0,0.1), 0 8px 8px 0 rgba(0,0,0,0.1);
//         }
        
//         .dark .group:hover .minimal-project-card {
//           background-color: rgba(38,38,38,0.8);
//         }

//         .dark .minimal-card-image-border {
//           box-shadow: 0px 0px 0px 1px rgba(0,0,0,.07), 0px 0px 0px 3px rgba(100,100,100,0.3), 0px 0px 0px 4px rgba(0,0,0,.08);
//         }

//         .dark .minimal-card-image-shadow {
//           box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.15), 0px 1px 1px 0px rgba(0,0,0,0.15) inset, 0px 0px 0px 1px rgba(0,0,0,0.15) inset, 0px 0px 1px 0px rgba(0,0,0,0.15);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;
















import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Reusable MinimalCard components (inlined for clarity)
const MinimalCard = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[24px] bg-white p-2 shadow-sm transition-colors hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-800/80",
      "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
      "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
MinimalCard.displayName = "MinimalCard";

const MinimalCardImage = React.forwardRef(({ className, src, alt, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative mb-6 h-[190px] w-full rounded-[20px] overflow-hidden",
      "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
      "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
      className
    )}
    {...props}
  >
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 size-full rounded-[16px] object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 rounded-[16px] pointer-events-none">
      <div
        className={cn(
          "absolute inset-0 rounded-[16px]",
          "shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)]",
          "dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-[16px]",
          "dark:shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15),0px_1px_1px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_1px_rgba(0,0,0,0.15)_inset,0px_0px_1px_0px_rgba(0,0,0,0.15)]"
        )}
      />
    </div>
  </div>
));
MinimalCardImage.displayName = "MinimalCardImage";

const MinimalCardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("mt-2 px-1 text-lg font-semibold leading-tight text-gray-800", className)}
    {...props}
  />
));
MinimalCardTitle.displayName = "MinimalCardTitle";

const MinimalCardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("px-1 pb-2 text-sm text-gray-600", className)}
    {...props}
  />
));
MinimalCardDescription.displayName = "MinimalCardDescription";

const MinimalCardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
MinimalCardContent.displayName = "MinimalCardContent";

// ProjectCard using MinimalCard styling but original layout
const ProjectCard = ({ project, position }) => {
  const cardRef = useRef(null);

  // Parallax effect (desktop only)
  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.innerWidth < 1024) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;
      card.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };

    const parentGroup = card.closest('.group');
    parentGroup.addEventListener('mousemove', handleMouseMove);
    parentGroup.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parentGroup.removeEventListener('mousemove', handleMouseMove);
      parentGroup.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={cn(
        "transition-all duration-500 ease-in-out transform-gpu group",
        position === 'center' ? 'lg:scale-100 lg:z-10' : 'lg:scale-90 lg:opacity-90',
        'lg:hover:!opacity-100 lg:hover:!scale-100 lg:hover:z-20'
      )}
    >
      <MinimalCard ref={cardRef} style={{ transformStyle: "preserve-3d" }}>
        {project.highlight && (
          <div className="highlight-badge absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-full shadow-md">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}
        <MinimalCardImage src={project.image} alt={project.title} />
        <MinimalCardContent>
          <MinimalCardTitle className="anim-underline text-xl font-bold text-gray-800 mb-3">
            {project.title}
          </MinimalCardTitle>
          <MinimalCardDescription className="mb-5 leading-relaxed">
            {project.description}
          </MinimalCardDescription>

          {/* Learn More Button */}
          <button
            className="button-primary flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Learn More</span>
          </button>
        </MinimalCardContent>
      </MinimalCard>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('none');
  const projectsContainerRef = useRef(null);

  const projects = [
    {
      title: "News Website",
      description: "A comprehensive news platform featuring modern design and dynamic content.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop&auto=format",
      highlight: false,
    },
    {
      title: "Salary Prediction App",
      description: "A machine learning-powered web application for salary prediction using various algorithms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop&auto=format",
      highlight: false,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with a modern shopping cart and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop&auto=format",
      highlight: true,
    },
    {
      title: "Design Tool Clone",
      description: "A collaborative real-time design application inspired by Figma.",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&h=220&fit=crop&auto=format",
      highlight: false,
    },
    {
      title: "Animated Movie App",
      description: "A visually engaging application for discovering animated movies.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=220&fit=crop&auto=format",
      highlight: false,
    },
  ];

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }
      setSlideDirection('none');
      setIsAnimating(false);
    }, 500); // Match transition duration
  };

  const getVisibleIndices = () => {
    const total = projects.length;
    if (window.innerWidth < 1024) return [currentIndex];
    return [
      (currentIndex - 1 + total) % total,
      currentIndex,
      (currentIndex + 1) % total,
    ];
  };

  const [visibleIndices, setVisibleIndices] = useState(getVisibleIndices());

  useEffect(() => {
    if (slideDirection === 'none') {
      setVisibleIndices(getVisibleIndices());
    }
  }, [currentIndex, slideDirection]);

  useEffect(() => {
    const handleResize = () => setVisibleIndices(getVisibleIndices());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-gray-50/70 overflow-hidden" id="projects">
      <div className="section-container">
        <div className="text-center mb-14 sm:mb-20">
          <span className="pulse-chip mx-auto mb-4">Showcase</span>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle mx-auto">A selection of my work, demonstrating technical skills and creative problem-solving.</p>
        </div>

        <div className="relative">
          <div className="relative flex items-center justify-center lg:px-20">
            <button
              onClick={() => handleNavigation('prev')}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 nav-button group disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={() => handleNavigation('next')}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 nav-button group disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            <div ref={projectsContainerRef} className="w-full lg:w-[calc(100%-10rem)] overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform:
                    slideDirection === 'next'
                      ? 'translateX(-100%)'
                      : slideDirection === 'prev'
                        ? 'translateX(100%)'
                        : 'translateX(0)',
                }}
              >
                {visibleIndices.map((index, i) => (
                  <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-4 lg:px-6">
                    <ProjectCard
                      project={projects[index]}
                      position={i === 1 || window.innerWidth < 1024 ? 'center' : 'side'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center mt-12 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    handleNavigation(index > currentIndex ? 'next' : 'prev');
                  }
                }}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentIndex
                    ? "bg-orange-500 w-8 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                )}
              />
            ))}
          </div>

          {/* Mobile nav */}
          <div className="lg:hidden flex justify-center items-center gap-4 mt-8">
            <button onClick={() => handleNavigation('prev')} disabled={isAnimating} className="w-12 h-12 nav-button group">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <p className="text-sm text-gray-600 tabular-nums">{currentIndex + 1} / {projects.length}</p>
            <button onClick={() => handleNavigation('next')} disabled={isAnimating} className="w-12 h-12 nav-button group">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .section-container { max-width: 1536px; margin: 0 auto; padding: 0 1rem; }
        .pulse-chip { 
          display: inline-flex; align-items: center; padding: 0.5rem 1.25rem; 
          background-color: #fff7ed; color: #c2410c; border-radius: 9999px; 
          font-size: 0.875rem; font-weight: 600; border: 1px solid #fed7aa; 
        }
        .section-title { 
          font-size: 2.5rem; font-weight: 800; color: #1f2937; line-height: 1.2; 
        }
        .section-subtitle { 
          font-size: 1.125rem; color: #4b5563; max-width: 42rem; 
        }
        .nav-button { 
          background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; 
          color: #4b5563; box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.07); border: 1px solid #e5e7eb; transition: all 0.2s ease; 
        }
        .nav-button:hover { 
          border-color: #fb923c; color: #f97316; box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1); 
        }
        .anim-underline {
          position: relative; display: inline-block;
        }
        .anim-underline::after {
          content: ''; position: absolute; bottom: -4px; left: 0; width: 100%; height: 2px;
          background-color: #f97316; transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }
        .group:hover .anim-underline::after {
          transform: scaleX(1);
        }
        @media (min-width: 1024px) {
          .section-title { font-size: 3.25rem; }
        }
      `}</style>
    </section>
  );
};

export default Projects;