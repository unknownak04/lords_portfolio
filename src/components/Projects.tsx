// // // import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// // // import {
// // //   ChevronLeft,
// // //   ChevronRight,
// // //   Github,
// // //   ExternalLink,
// // //   Code,
// // //   Database,
// // //   Brain,
// // //   Smartphone,
// // //   Globe,
// // //   Zap,
// // // } from "lucide-react";
// // // import { cn } from "@/lib/utils";
// // // import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// // // const ShinTitle: React.FC = () => {
// // //   return (
// // //     <div className="text-center mb-8 sm:mb-12" aria-hidden={false}>
// // //       <div className="inline-flex items-center gap-4 justify-center mb-4">
// // //         {/* Playful badge / mascot emoji */}
// // //         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg transform transition-transform duration-300 hover:rotate-6 hover:scale-110">
// // //           <span className="text-xl">😜</span>
// // //         </div>
// // //         <div className="text-left">
// // //           <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
// // //             Shinchan Vibes
// // //           </div>
// // //           <h2 className="text-2xl sm:text-3xl font-display font-bold gradient-text-orange leading-tight">
// // //             Mischief, Code & Creative Projects
// // //           </h2>
// // //           <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-xl">
// // //             Peek at my playful projects — quirky, practical, and built to ship. Looking for internships or roles — this little rascal is ready!
// // //           </p>
// // //         </div>
// // //       </div>
// // //       {/* CTA buttons */}
// // //       <div className="mt-4 flex items-center justify-center gap-3">
// // //         <a
// // //           href="#contact"
// // //           className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-md transform hover:scale-105 transition-all duration-200 font-semibold backdrop-blur-sm"
// // //         >
// // //           Hire this rascal 😜
// // //         </a>
// // //         <a
// // //           href="#projects"
// // //           className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 dark:border-orange-600 rounded-full text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-slate-800/50 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-200 backdrop-blur-sm"
// // //         >
// // //           See portfolio
// // //         </a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // interface Project {
// // //   id: number;
// // //   title: string;
// // //   description: string;
// // //   technologies: string[];
// // //   features: string[];
// // //   image: string;
// // //   icon: React.ReactNode;
// // //   color: string;
// // //   gradient: string;
// // //   category: string;
// // // }

// // // const Projects: React.FC = () => {
// // //   const [currentIndex, setCurrentIndex] = useState<number>(0);
// // //   const [isAnimating, setIsAnimating] = useState<boolean>(false);
// // //   const isAnimatingRef = useRef<boolean>(false);
// // //   const [isMobile, setIsMobile] = useState<boolean>(false);
// // //   const [isLoading, setIsLoading] = useState<boolean>(true);

// // //   const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });

// // //   const projects: Project[] = useMemo(
// // //     () => [
// // //       {
// // //         id: 1,
// // //         title: "News Website",
// // //         description: "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates with efficient data fetching and responsive layouts.",
// // //         technologies: ["Express.js", "React.js", "Node.js", "Shadcn APIs", "Tailwind"],
// // //         features: [
// // //           "Integrated third-party APIs for dynamic and up-to-date news content",
// // //           "Utilized Axios for efficient API calls with fast and reliable data retrieval",
// // //           "Leveraged React, Tailwind CSS, and ShadCN to build a responsive interface"
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop&auto=format",
// // //         icon: <Code className="w-5 h-5" />,
// // //         color: "from-orange-400 to-orange-600",
// // //         gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
// // //         category: "Web Development",
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "Salary Prediction ML App",
// // //         description: "Machine learning-powered web application for salary prediction using various algorithms. Features interactive visualizations and comprehensive data analysis capabilities.",
// // //         technologies: ["Python", "Streamlit", "SVM", "Random Forest", "Pandas", "NumPy"],
// // //         features: [
// // //           "Developed machine learning model to predict salaries based on Stack Overflow data",
// // //           "Utilized the Streamlit library for user-friendly web interface",
// // //           "Implemented machine learning algorithms including SVM and Random Forest"
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format",
// // //         icon: <Brain className="w-5 h-5" />,
// // //         color: "from-orange-500 to-red-500",
// // //         gradient: "bg-gradient-to-br from-orange-50 to-red-50",
// // //         category: "Machine Learning",
// // //       },
// // //       {
// // //         id: 3,
// // //         title: "E-Commerce Platform",
// // //         description: "Full-stack e-commerce solution with modern shopping cart, payment integration, and inventory management. Built with scalable architecture and responsive design.",
// // //         technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "Express.js", "JWT"],
// // //         features: [
// // //           "Implemented secure payment processing with Stripe integration",
// // //           "Built responsive product catalog with advanced filtering and search",
// // //           "Developed admin dashboard for inventory and order management"
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
// // //         icon: <Database className="w-5 h-5" />,
// // //         color: "from-orange-600 to-amber-600",
// // //         gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
// // //         category: "Full Stack",
// // //       },
// // //       {
// // //         id: 4,
// // //         title: "Task Management Dashboard",
// // //         description: "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface for enhanced productivity.",
// // //         technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS", "Redux"],
// // //         features: [
// // //           "Real-time collaboration with WebSocket implementation",
// // //           "Drag-and-drop task management with intuitive interface",
// // //           "Team member assignment and progress tracking"
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
// // //         icon: <Smartphone className="w-5 h-5" />,
// // //         color: "from-amber-500 to-orange-500",
// // //         gradient: "bg-gradient-to-br from-amber-50 to-orange-50",
// // //         category: "Productivity",
// // //       },
// // //       {
// // //         id: 5,
// // //         title: "Weather Analytics App",
// // //         description: "Advanced weather forecasting application with interactive maps, historical data analysis, and personalized weather alerts using multiple weather APIs.",
// // //         technologies: ["React.js", "Chart.js", "Weather APIs", "Geolocation", "PWA", "TypeScript"],
// // //         features: [
// // //           "Integration with multiple weather APIs for accurate forecasting",
// // //           "Interactive weather maps with satellite imagery",
// // //           "Historical weather data analysis and trends"
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&auto=format",
// // //         icon: <Globe className="w-5 h-5" />,
// // //         color: "from-orange-400 to-yellow-500",
// // //         gradient: "bg-gradient-to-br from-orange-50 to-yellow-50",
// // //         category: "Data Analytics",
// // //       },
// // //       {
// // //         id: 6,
// // //         title: "Social Media Dashboard",
// // //         description: "Comprehensive social media management platform with analytics, scheduling, and multi-platform posting capabilities for content creators and businesses.",
// // //         technologies: ["React.js", "Node.js", "Social APIs", "Chart.js", "Cron Jobs", "Redis"],
// // //         features: [
// // //           "Multi-platform posting to Twitter, Instagram, and LinkedIn",
// // //           "Advanced analytics with engagement tracking",
// // //           "Content scheduling with automated posting"
// // //         ],
// // //         image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop&auto=format",
// // //         icon: <Zap className="w-5 h-5" />,
// // //         color: "from-red-500 to-orange-500",
// // //         gradient: "bg-gradient-to-br from-red-50 to-orange-50",
// // //         category: "Social Media",
// // //       },
// // //     ],
// // //     []
// // //   );

// // //   useEffect(() => {
// // //     const checkMobile = () => setIsMobile(window.innerWidth < 768);
// // //     checkMobile();
// // //     window.addEventListener("resize", checkMobile);
// // //     return () => window.removeEventListener("resize", checkMobile);
// // //   }, []);

// // //   useEffect(() => {
// // //     const timer = setTimeout(() => setIsLoading(false), 800);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   const startAnimating = (duration = 500) => {
// // //     setIsAnimating(true);
// // //     isAnimatingRef.current = true;
// // //     window.setTimeout(() => {
// // //       setIsAnimating(false);
// // //       isAnimatingRef.current = false;
// // //     }, duration);
// // //   };

// // //   const goToNext = useCallback(() => {
// // //     if (isAnimatingRef.current || projects.length <= 1) return;
// // //     startAnimating();
// // //     setCurrentIndex((p) => (p + 1) % projects.length);
// // //   }, [projects.length]);

// // //   const goToPrev = useCallback(() => {
// // //     if (isAnimatingRef.current || projects.length <= 1) return;
// // //     startAnimating();
// // //     setCurrentIndex((p) => (p === 0 ? projects.length - 1 : p - 1));
// // //   }, [projects.length]);

// // //   const goToSlide = useCallback(
// // //     (index: number) => {
// // //       if (isAnimatingRef.current || index === currentIndex || index < 0 || index >= projects.length) return;
// // //       startAnimating();
// // //       setCurrentIndex(index);
// // //     },
// // //     [currentIndex, projects.length]
// // //   );

// // //   const getVisibleProjects = useCallback(() => {
// // //     if (projects.length === 0) return [] as (Project & { position?: string })[];

// // //     if (isMobile) return [{ ...projects[currentIndex], position: "center" }];

// // //     const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
// // //     const nextIndex = (currentIndex + 1) % projects.length;

// // //     return [
// // //       { ...projects[prevIndex], position: "left" },
// // //       { ...projects[currentIndex], position: "center" },
// // //       { ...projects[nextIndex], position: "right" },
// // //     ];
// // //   }, [currentIndex, isMobile, projects]);

// // //   if (isLoading) {
// // //     return (
// // //       <section className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-br from-gray-50 dark:from-slate-900 via-orange-50/30 dark:via-slate-800/30 to-orange-100/20 dark:to-slate-700/20" id="projects">
// // //         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-orange-200/40 dark:from-orange-900/20 to-transparent rounded-full blur-3xl animate-float"></div>
// // //         <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-orange-300/30 dark:from-orange-800/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

// // //         <div className="section-container">
// // //           <div className="text-center mb-10 sm:mb-16">
// // //             <div className="animate-pulse">
// // //               <div className="h-8 bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-700 rounded-full w-40 mx-auto mb-4 skeleton-orange"></div>
// // //               <div className="h-16 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-2xl w-96 mx-auto mb-6 skeleton-orange"></div>
// // //               <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 rounded-lg w-80 mx-auto skeleton"></div>
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
// // //             {[1, 2, 3].map((i) => (
// // //               <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
// // //                 <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 rounded-xl mb-4 skeleton-orange relative overflow-hidden">
// // //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-slate-400/20 to-transparent animate-shimmer-wave"></div>
// // //                 </div>
// // //                 <div className="card-glass-orange p-6 sm:p-8">
// // //                   <div className="flex items-center space-x-3 mb-4">
// // //                     <div className="w-12 h-12 bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-700 rounded-full skeleton-orange"></div>
// // //                     <div className="h-6 bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-700 rounded w-3/4 skeleton-orange"></div>
// // //                   </div>
// // //                   <div className="space-y-2 mb-4">
// // //                     <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 rounded w-full skeleton"></div>
// // //                     <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 rounded w-2/3 skeleton"></div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     );
// // //   }

// // //   const visibleProjects = getVisibleProjects();

// // //   return (
// // //     <section
// // //       className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-br from-gray-50 dark:from-slate-900 via-orange-50/30 dark:via-slate-800/30 to-orange-100/20 dark:to-slate-700/20 overflow-hidden"
// // //       id="projects"
// // //     >
// // //       {/* Background decoration */}
// // //       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-orange-200/40 dark:from-orange-900/20 to-transparent rounded-full blur-3xl animate-float"></div>
// // //       <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-orange-300/30 dark:from-orange-800/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
// // //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-orange-100/20 dark:from-orange-900/10 to-yellow-100/20 dark:to-amber-900/10 rounded-full blur-3xl animate-pulse"></div>

// // //       <div className="section-container relative z-10">
// // //         {/* Enhanced Header with Shinchan Vibes */}
// // //         <div ref={headerRef} className={cn(
// // //           "transition-all duration-700",
// // //           headerVisible ? "animate-slide-in-from-bottom opacity-100" : "opacity-0"
// // //         )}>
// // //           <ShinTitle />
// // //         </div>

// // //         {/* Carousel Container */}
// // //         <div className="relative max-w-7xl mx-auto">
// // //           {/* Navigation Arrows - Only show if more than 1 project */}
// // //           {!isMobile && projects.length > 1 && (
// // //             <>
// // //               <button
// // //                 onClick={goToPrev}
// // //                 disabled={isAnimating}
// // //                 className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-orange-200/50 dark:border-slate-600/50 hover:border-orange-300 dark:hover:border-slate-500 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-110 active:scale-95"
// // //                 aria-label="Previous project"
// // //               >
// // //                 <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors group-hover:scale-110" />
// // //               </button>

// // //               <button
// // //                 onClick={goToNext}
// // //                 disabled={isAnimating}
// // //                 className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-orange-200/50 dark:border-slate-600/50 hover:border-orange-300 dark:hover:border-slate-500 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-110 active:scale-95"
// // //                 aria-label="Next project"
// // //               >
// // //                 <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors group-hover:scale-110" />
// // //               </button>
// // //             </>
// // //           )}

// // //           {/* Projects Grid */}
// // //           <div className={cn(
// // //             "grid gap-6 lg:gap-8 max-w-6xl mx-auto transition-all duration-500",
// // //             isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"
// // //           )}>
// // //             {visibleProjects.map((project, index) => (
// // //               <article
// // //                 key={`${project.id}-${currentIndex}`}
// // //                 className={cn(
// // //                   "transition-all duration-500 transform",
// // //                   !isMobile && project.position === 'center' ? 'lg:scale-105 lg:z-10' : 'lg:scale-95 lg:opacity-80',
// // //                   isAnimating ? 'animate-pulse' : '',
// // //                   "hover:scale-105 hover:z-20"
// // //                 )}
// // //                 style={{
// // //                   animationDelay: `${index * 150}ms`
// // //                 }}
// // //               >
// // //                 {/* Project Image */}
// // //                 <div className="mb-6 relative overflow-hidden rounded-2xl group cursor-pointer">
// // //                   <div className="relative h-56 rounded-2xl overflow-hidden">
// // //                     <img
// // //                       src={project.image}
// // //                       alt={project.title}
// // //                       className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
// // //                       loading="lazy"
// // //                     />
// // //                     <div className={cn(
// // //                       "absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-500",
// // //                       project.color,
// // //                       "group-hover:opacity-40"
// // //                     )} />
// // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

// // //                     {/* Category Badge */}
// // //                     <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
// // //                       {project.category}
// // //                     </div>

// // //                     {/* Hover Overlay */}
// // //                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
// // //                       <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
// // //                         {project.icon}
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Project Card */}
// // //                 <div className={cn(
// // //                   "card-glass-orange p-6 sm:p-8 h-full hover:shadow-2xl transition-all duration-500 border border-orange-100/50 dark:border-slate-700/50 hover:border-orange-200/70 dark:hover:border-slate-600/70 group relative overflow-hidden",
// // //                   project.gradient
// // //                 )}>
// // //                   {/* Card Background Pattern */}
// // //                   <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
// // //                     <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
// // //                   </div>

// // //                   <div className="relative z-10">
// // //                     <div className="flex items-center space-x-3 mb-4">
// // //                       <div className={cn(
// // //                         "rounded-2xl w-14 h-14 flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
// // //                         `bg-gradient-to-r ${project.color}`
// // //                       )}>
// // //                         {project.icon}
// // //                       </div>
// // //                       <div>
// // //                         <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 font-display group-hover:text-orange-800 dark:group-hover:text-orange-300 transition-colors duration-300">
// // //                           {project.title}
// // //                         </h3>
// // //                         <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">{project.category}</p>
// // //                       </div>
// // //                     </div>

// // //                     <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">
// // //                       {project.description}
// // //                     </p>

// // //                     <div className="mb-6">
// // //                       <h4 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 font-display flex items-center">
// // //                         <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
// // //                         Key Features:
// // //                       </h4>
// // //                       <ul className="space-y-2">
// // //                         {project.features.slice(0, 3).map((feature, idx) => (
// // //                           <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start group/item">
// // //                             <span className="text-orange-500 mr-3 mt-1 font-bold group-hover/item:scale-125 transition-transform duration-200">•</span>
// // //                             <span className="leading-relaxed group-hover/item:text-gray-800 dark:group-hover/item:text-gray-100 transition-colors duration-200">{feature}</span>
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>

// // //                     <div className="mb-8">
// // //                       <h4 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 font-display flex items-center">
// // //                         <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
// // //                         Technologies:
// // //                       </h4>
// // //                       <div className="flex flex-wrap gap-2">
// // //                         {project.technologies.map((tech, idx) => (
// // //                           <span
// // //                             key={idx}
// // //                             className={cn(
// // //                               "px-3 py-1.5 text-xs rounded-full border transition-all duration-200 font-medium hover:scale-105 cursor-default",
// // //                               idx < 2
// // //                                 ? "bg-orange-50 dark:bg-slate-800/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700 animate-pulse"
// // //                                 : "bg-gray-50 dark:bg-slate-800/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-slate-600 hover:border-orange-300 dark:hover:border-orange-500 hover:bg-orange-100 dark:hover:bg-slate-700/50"
// // //                             )}
// // //                           >
// // //                             {tech}
// // //                           </span>
// // //                         ))}
// // //                       </div>
// // //                     </div>

// // //                     <div className="flex space-x-3 mt-auto">
// // //                       <button className="flex items-center space-x-2 px-5 py-2.5 bg-gray-800 dark:bg-slate-700 hover:bg-gray-900 dark:hover:bg-slate-600 text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group/btn">
// // //                         <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
// // //                         <span>Code</span>
// // //                       </button>
// // //                       <button className="flex items-center space-x-2 px-5 py-2.5 border-2 border-orange-300 dark:border-orange-600 text-orange-700 dark:text-orange-300 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-800 dark:hover:text-orange-200 hover:bg-orange-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group/btn">
// // //                         <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
// // //                         <span>Live Demo</span>
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </article>
// // //             ))}
// // //           </div>

// // //           {/* Project Indicators */}
// // //           {projects.length > 1 && (
// // //             <div className="flex items-center justify-center mt-10 space-x-3">
// // //               {projects.map((_, index) => (
// // //                 <button
// // //                   key={index}
// // //                   onClick={() => goToSlide(index)}
// // //                   disabled={isAnimating}
// // //                   className={cn(
// // //                     "transition-all duration-300 disabled:cursor-not-allowed hover:scale-125",
// // //                     index === currentIndex
// // //                       ? "w-10 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"
// // //                       : "w-3 h-3 bg-orange-200 dark:bg-slate-600 hover:bg-orange-300 dark:hover:bg-slate-500 rounded-full hover:shadow-md"
// // //                   )}
// // //                   aria-label={`Go to project ${index + 1}`}
// // //                 />
// // //               ))}
// // //             </div>
// // //           )}

// // //           <div className="text-center mt-6">
// // //             <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
// // //               <span className="text-orange-600 dark:text-orange-400 font-bold">{currentIndex + 1}</span> of <span className="text-orange-600 dark:text-orange-400 font-bold">{projects.length}</span> projects
// // //             </p>
// // //           </div>

// // //           {/* Mobile Navigation */}
// // //           {isMobile && projects.length > 1 && (
// // //             <div className="flex justify-center space-x-4 mt-8">
// // //               <button
// // //                 onClick={goToPrev}
// // //                 disabled={isAnimating}
// // //                 className="flex items-center space-x-2 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-orange-200 dark:border-slate-600 text-orange-700 dark:text-orange-300 rounded-xl hover:border-orange-300 dark:hover:border-slate-500 hover:bg-orange-50 dark:hover:bg-slate-700/50 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
// // //               >
// // //                 <ChevronLeft className="w-5 h-5" />
// // //                 <span>Previous</span>
// // //               </button>
// // //               <button
// // //                 onClick={goToNext}
// // //                 disabled={isAnimating}
// // //                 className="flex items-center space-x-2 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-orange-200 dark:border-slate-600 text-orange-700 dark:text-orange-300 rounded-xl hover:border-orange-300 dark:hover:border-slate-500 hover:bg-orange-50 dark:hover:bg-slate-700/50 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
// // //               >
// // //                 <span>Next</span>
// // //                 <ChevronRight className="w-5 h-5" />
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;

















// // // If using Next.js app/route, uncomment:
// // // "use client";

// // import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// // import {
// //   ChevronLeft,
// //   ChevronRight,
// //   Github,
// //   ExternalLink,
// //   Code,
// //   Database,
// //   Brain,
// //   Smartphone,
// //   Globe,
// //   Zap,
// // } from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// // interface Project {
// //   id: number;
// //   title: string;
// //   description: string;
// //   technologies: string[];
// //   features: string[];
// //   image: string;
// //   icon: React.ReactNode;
// //   color: string;
// //   gradient: string;
// //   category: string;
// // }

// // /* ---------- Tiny TechTag component (animated/highlighted) ---------- */
// // const TechTag: React.FC<{ label: string; highlighted?: boolean }> = ({ label, highlighted }) => {
// //   return (
// //     <span
// //       className={cn(
// //         "inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border font-medium transition-transform duration-200",
// //         highlighted
// //           ? "bg-orange-50 dark:bg-slate-800/50 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700 animate-pulse scale-[1.02]"
// //           : "bg-gray-50 dark:bg-slate-800/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-slate-600 hover:scale-105"
// //       )}
// //     >
// //       <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
// //         <circle cx="4" cy="4" r="4" fill={highlighted ? "#FB923C" : "#CBD5E1"} />
// //       </svg>
// //       {label}
// //     </span>
// //   );
// // };

// // /* ---------------- Shinchan-style header ---------------- */
// // const ShinTitle: React.FC = () => {
// //   return (
// //     <div className="text-center mb-8 sm:mb-12" aria-hidden={false}>
// //       <div className="inline-flex items-center gap-4 justify-center mb-4">
// //         {/* Playful badge / mascot emoji */}
// //         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg transform transition-transform duration-300 hover:rotate-6 hover:scale-110">
// //           <span className="text-xl">😜</span>
// //         </div>
// //         <div className="text-left">
// //           <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
// //             Shinchan Vibes
// //           </div>
// //           <h2 className="text-2xl sm:text-3xl font-display font-bold gradient-text-orange leading-tight">
// //             Mischief, Code & Creative Projects
// //           </h2>
// //           <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-xl">
// //             Peek at my playful projects — quirky, practical, and built to ship. Looking for internships or roles — this little rascal is ready!
// //           </p>
// //         </div>
// //       </div>
// //       {/* CTA buttons */}
// //       <div className="mt-4 flex items-center justify-center gap-3">
// //         <a
// //           href="#contact"
// //           className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-md transform hover:scale-105 transition-all duration-200 font-semibold backdrop-blur-sm"
// //         >
// //           Hire this rascal 😜
// //         </a>
// //         <a
// //           href="#projects"
// //           className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 dark:border-orange-600 rounded-full text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-slate-800/50 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-200 backdrop-blur-sm"
// //         >
// //           See portfolio
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // /* ---------------- Main Projects component (carousel) ---------------- */
// // const Projects: React.FC = () => {
// //   const [currentIndex, setCurrentIndex] = useState<number>(0);
// //   const [isAnimating, setIsAnimating] = useState<boolean>(false);
// //   const isAnimatingRef = useRef<boolean>(false);
// //   const [isMobile, setIsMobile] = useState<boolean>(false);
// //   const [isLoading, setIsLoading] = useState<boolean>(true);

// //   const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });

// //   const projects: Project[] = useMemo(
// //     () => [
// //       {
// //         id: 1,
// //         title: "News Website",
// //         description:
// //           "A comprehensive news platform featuring modern design and dynamic content. Integrated third-party APIs for real-time news updates with efficient data fetching and responsive layouts.",
// //         technologies: ["Express.js", "React.js", "Node.js", "Shadcn APIs", "Tailwind"],
// //         features: [
// //           "Integrated third-party APIs for dynamic and up-to-date news content",
// //           "Utilized Axios for efficient API calls with fast and reliable data retrieval",
// //           "Leveraged React, Tailwind CSS, and ShadCN to build a responsive interface",
// //         ],
// //         image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=700&fit=crop&auto=format",
// //         icon: <Code className="w-5 h-5" />,
// //         color: "from-orange-400 to-orange-600",
// //         gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
// //         category: "Web Development",
// //       },
// //       {
// //         id: 2,
// //         title: "Salary Prediction ML App",
// //         description:
// //           "Machine learning-powered web application for salary prediction using various algorithms. Features interactive visualizations and comprehensive data analysis capabilities.",
// //         technologies: ["Python", "Streamlit", "SVM", "Random Forest", "Pandas", "NumPy"],
// //         features: [
// //           "Developed machine learning model to predict salaries based on Stack Overflow data",
// //           "Utilized the Streamlit library for user-friendly web interface",
// //           "Implemented machine learning algorithms including SVM and Random Forest",
// //         ],
// //         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format",
// //         icon: <Brain className="w-5 h-5" />,
// //         color: "from-orange-500 to-red-500",
// //         gradient: "bg-gradient-to-br from-orange-50 to-red-50",
// //         category: "Machine Learning",
// //       },
// //       {
// //         id: 3,
// //         title: "E-Commerce Platform",
// //         description:
// //           "Full-stack e-commerce solution with modern shopping cart, payment integration, and inventory management. Built with scalable architecture and responsive design.",
// //         technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "Express.js", "JWT"],
// //         features: [
// //           "Implemented secure payment processing with Stripe integration",
// //           "Built responsive product catalog with advanced filtering and search",
// //           "Developed admin dashboard for inventory and order management",
// //         ],
// //         image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop&auto=format",
// //         icon: <Database className="w-5 h-5" />,
// //         color: "from-orange-600 to-amber-600",
// //         gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
// //         category: "Full Stack",
// //       },
// //       {
// //         id: 4,
// //         title: "Task Management Dashboard",
// //         description:
// //           "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface for enhanced productivity.",
// //         technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS", "Redux"],
// //         features: [
// //           "Real-time collaboration with WebSocket implementation",
// //           "Drag-and-drop task management with intuitive interface",
// //           "Team member assignment and progress tracking",
// //         ],
// //         image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=700&fit=crop&auto=format",
// //         icon: <Smartphone className="w-5 h-5" />,
// //         color: "from-amber-500 to-orange-500",
// //         gradient: "bg-gradient-to-br from-amber-50 to-orange-50",
// //         category: "Productivity",
// //       },
// //       {
// //         id: 5,
// //         title: "Weather Analytics App",
// //         description:
// //           "Advanced weather forecasting application with interactive maps, historical data analysis, and personalized weather alerts using multiple weather APIs.",
// //         technologies: ["React.js", "Chart.js", "Weather APIs", "Geolocation", "PWA", "TypeScript"],
// //         features: [
// //           "Integration with multiple weather APIs for accurate forecasting",
// //           "Interactive weather maps with satellite imagery",
// //           "Historical weather data analysis and trends",
// //         ],
// //         image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=700&fit=crop&auto=format",
// //         icon: <Globe className="w-5 h-5" />,
// //         color: "from-orange-400 to-yellow-500",
// //         gradient: "bg-gradient-to-br from-orange-50 to-yellow-50",
// //         category: "Data Analytics",
// //       },
// //       {
// //         id: 6,
// //         title: "Social Media Dashboard",
// //         description:
// //           "Comprehensive social media management platform with analytics, scheduling, and multi-platform posting capabilities for content creators and businesses.",
// //         technologies: ["React.js", "Node.js", "Social APIs", "Chart.js", "Cron Jobs", "Redis"],
// //         features: [
// //           "Multi-platform posting to Twitter, Instagram, and LinkedIn",
// //           "Advanced analytics with engagement tracking",
// //           "Content scheduling with automated posting",
// //         ],
// //         image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=700&fit=crop&auto=format",
// //         icon: <Zap className="w-5 h-5" />,
// //         color: "from-red-500 to-orange-500",
// //         gradient: "bg-gradient-to-br from-red-50 to-orange-50",
// //         category: "Social Media",
// //       },
// //     ],
// //     []
// //   );

// //   useEffect(() => {
// //     const checkMobile = () => setIsMobile(window.innerWidth < 768);
// //     checkMobile();
// //     window.addEventListener("resize", checkMobile);
// //     return () => window.removeEventListener("resize", checkMobile);
// //   }, []);

// //   useEffect(() => {
// //     const timer = setTimeout(() => setIsLoading(false), 600);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const startAnimating = (duration = 420) => {
// //     setIsAnimating(true);
// //     isAnimatingRef.current = true;
// //     window.setTimeout(() => {
// //       setIsAnimating(false);
// //       isAnimatingRef.current = false;
// //     }, duration);
// //   };

// //   const goToNext = useCallback(() => {
// //     if (isAnimatingRef.current || projects.length <= 1) return;
// //     startAnimating();
// //     setCurrentIndex((p) => (p + 1) % projects.length);
// //   }, [projects.length]);

// //   const goToPrev = useCallback(() => {
// //     if (isAnimatingRef.current || projects.length <= 1) return;
// //     startAnimating();
// //     setCurrentIndex((p) => (p === 0 ? projects.length - 1 : p - 1));
// //   }, [projects.length]);

// //   const goToSlide = useCallback(
// //     (index: number) => {
// //       if (isAnimatingRef.current || index === currentIndex || index < 0 || index >= projects.length) return;
// //       startAnimating();
// //       setCurrentIndex(index);
// //     },
// //     [currentIndex, projects.length]
// //   );

// //   const getVisibleProjects = useCallback(() => {
// //     if (projects.length === 0) return [] as (Project & { position?: string })[];

// //     if (isMobile) return [{ ...projects[currentIndex], position: "center" }];

// //     const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
// //     const nextIndex = (currentIndex + 1) % projects.length;

// //     return [
// //       { ...projects[prevIndex], position: "left" },
// //       { ...projects[currentIndex], position: "center" },
// //       { ...projects[nextIndex], position: "right" },
// //     ];
// //   }, [currentIndex, isMobile, projects]);

// //   if (isLoading) {
// //     return (
// //       <section
// //         className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-br from-gray-50 dark:from-slate-900 via-orange-50/30 dark:via-slate-800/30 to-orange-100/20 dark:to-slate-700/20"
// //         id="projects"
// //       >
// //         <div className="section-container">
// //           <div className="text-center mb-10 sm:mb-16">
// //             <div className="animate-pulse">
// //               <div className="h-8 bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-700 rounded-full w-40 mx-auto mb-4"></div>
// //               <div className="h-16 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-2xl w-96 mx-auto mb-6"></div>
// //               <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 rounded-lg w-80 mx-auto"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   const visibleProjects = getVisibleProjects();

// //   return (
// //     <section
// //       className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-br from-gray-50 dark:from-slate-900 via-orange-50/30 dark:via-slate-800/30 to-orange-100/20 dark:to-slate-700/20 overflow-hidden"
// //       id="projects"
// //     >
// //       {/* Background decoration */}
// //       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-orange-200/40 dark:from-orange-900/20 to-transparent rounded-full blur-3xl animate-float"></div>
// //       <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-orange-300/30 dark:from-orange-800/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
// //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-orange-100/20 dark:from-orange-900/10 to-yellow-100/20 dark:to-amber-900/10 rounded-full blur-3xl animate-pulse"></div>

// //       <div className="section-container relative z-10">
// //         {/* Enhanced Header with Shinchan Vibes */}
// //         <div
// //           ref={headerRef}
// //           className={cn("transition-all duration-700", headerVisible ? "animate-slide-in-from-bottom opacity-100" : "opacity-0")}
// //         >
// //           <ShinTitle />
// //         </div>

// //         {/* Carousel Container */}
// //         <div className="relative max-w-7xl mx-auto">
// //           {/* Navigation Arrows - Only show if more than 1 project */}
// //           {!isMobile && projects.length > 1 && (
// //             <>
// //               <button
// //                 onClick={goToPrev}
// //                 disabled={isAnimating}
// //                 className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-orange-200/50 dark:border-slate-600/50 hover:border-orange-300 dark:hover:border-slate-500 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-110 active:scale-95"
// //                 aria-label="Previous project"
// //               >
// //                 <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors group-hover:scale-110" />
// //               </button>

// //               <button
// //                 onClick={goToNext}
// //                 disabled={isAnimating}
// //                 className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-orange-200/50 dark:border-slate-600/50 hover:border-orange-300 dark:hover:border-slate-500 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-110 active:scale-95"
// //                 aria-label="Next project"
// //               >
// //                 <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors group-hover:scale-110" />
// //               </button>
// //             </>
// //           )}

// //           {/* Projects Grid */}
// //           <div
// //             className={cn(
// //               "grid gap-6 lg:gap-8 max-w-6xl mx-auto transition-all duration-500",
// //               isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"
// //             )}
// //           >
// //             {visibleProjects.map((project, index) => (
// //               <article
// //                 key={`${project.id}-${currentIndex}`}
// //                 className={cn(
// //                   "transition-all duration-500 transform",
// //                   !isMobile && project.position === "center" ? "lg:scale-105 lg:z-10" : "lg:scale-95 lg:opacity-80",
// //                   isAnimating ? "animate-pulse" : "",
// //                   "hover:scale-105 hover:z-20"
// //                 )}
// //                 style={{
// //                   animationDelay: `${index * 150}ms`,
// //                   maxWidth: 360,
// //                 }}
// //               >
// //                 {/* Project Image */}
// //                 <div className="mb-6 relative overflow-hidden rounded-2xl group cursor-pointer">
// //                   <div className="relative h-44 rounded-2xl overflow-hidden">
// //                     <img
// //                       src={project.image}
// //                       alt={project.title}
// //                       className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
// //                       loading="lazy"
// //                     />
// //                     <div
// //                       className={cn("absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-500", project.color, "group-hover:opacity-40")}
// //                     />
// //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

// //                     {/* Category Badge */}
// //                     <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
// //                       {project.category}
// //                     </div>

// //                     {/* Hover Overlay */}
// //                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
// //                       <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
// //                         {project.icon}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Project Card */}
// //                 <div
// //                   className={cn(
// //                     "card-glass-orange p-6 sm:p-8 h-full hover:shadow-2xl transition-all duration-500 border border-orange-100/50 dark:border-slate-700/50 hover:border-orange-200/70 dark:hover:border-slate-600/70 group relative overflow-hidden",
// //                     project.gradient
// //                   )}
// //                 >
// //                   {/* Card Background Pattern */}
// //                   <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
// //                     <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
// //                   </div>

// //                   <div className="relative z-10">
// //                     <div className="flex items-center space-x-3 mb-4">
// //                       <div
// //                         className={cn(
// //                           "rounded-2xl w-14 h-14 flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
// //                           `bg-gradient-to-r ${project.color}`
// //                         )}
// //                       >
// //                         {project.icon}
// //                       </div>
// //                       <div>
// //                         <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 font-display group-hover:text-orange-800 dark:group-hover:text-orange-300 transition-colors duration-300">
// //                           {project.title}
// //                         </h3>
// //                         <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">{project.category}</p>
// //                       </div>
// //                     </div>

// //                     <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">
// //                       {project.description}
// //                     </p>

// //                     <div className="mb-6">
// //                       <h4 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 font-display flex items-center">
// //                         <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
// //                         Key Features:
// //                       </h4>
// //                       <ul className="space-y-2">
// //                         {project.features.slice(0, 3).map((feature, idx) => (
// //                           <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start group/item">
// //                             <span className="text-orange-500 mr-3 mt-1 font-bold group-hover/item:scale-125 transition-transform duration-200">•</span>
// //                             <span className="leading-relaxed group-hover/item:text-gray-800 dark:group-hover/item:text-gray-100 transition-colors duration-200">{feature}</span>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>

// //                     <div className="mb-8">
// //                       <h4 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 font-display flex items-center">
// //                         <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
// //                         Technologies:
// //                       </h4>
// //                       <div className="flex flex-wrap gap-2">
// //                         {project.technologies.map((tech, idx) => (
// //                           <TechTag key={`${tech}-${idx}`} label={tech} highlighted={idx < 2} />
// //                         ))}
// //                       </div>
// //                     </div>

// //                     <div className="flex space-x-3 mt-auto">
// //                       <button className="flex items-center space-x-2 px-5 py-2.5 bg-gray-800 dark:bg-slate-700 hover:bg-gray-900 dark:hover:bg-slate-600 text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group/btn">
// //                         <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
// //                         <span>Code</span>
// //                       </button>
// //                       <button className="flex items-center space-x-2 px-5 py-2.5 border-2 border-orange-300 dark:border-orange-600 text-orange-700 dark:text-orange-300 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-800 dark:hover:text-orange-200 hover:bg-orange-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group/btn">
// //                         <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
// //                         <span>Live Demo</span>
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>

// //           {/* Project Indicators */}
// //           {projects.length > 1 && (
// //             <div className="flex items-center justify-center mt-10 space-x-3">
// //               {projects.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => goToSlide(index)}
// //                   disabled={isAnimating}
// //                   className={cn(
// //                     "transition-all duration-300 disabled:cursor-not-allowed hover:scale-125",
// //                     index === currentIndex
// //                       ? "w-10 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"
// //                       : "w-3 h-3 bg-orange-200 dark:bg-slate-600 hover:bg-orange-300 dark:hover:bg-slate-500 rounded-full hover:shadow-md"
// //                   )}
// //                   aria-label={`Go to project ${index + 1}`}
// //                 />
// //               ))}
// //             </div>
// //           )}

// //           <div className="text-center mt-6">
// //             <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
// //               <span className="text-orange-600 dark:text-orange-400 font-bold">{currentIndex + 1}</span> of{" "}
// //               <span className="text-orange-600 dark:text-orange-400 font-bold">{projects.length}</span> projects
// //             </p>
// //           </div>

// //           {/* Mobile Navigation */}
// //           {isMobile && projects.length > 1 && (
// //             <div className="flex justify-center space-x-4 mt-8">
// //               <button
// //                 onClick={goToPrev}
// //                 disabled={isAnimating}
// //                 className="flex items-center space-x-2 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-orange-200 dark:border-slate-600 text-orange-700 dark:text-orange-300 rounded-xl hover:border-orange-300 dark:hover:border-slate-500 hover:bg-orange-50 dark:hover:bg-slate-700/50 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
// //               >
// //                 <ChevronLeft className="w-5 h-5" />
// //                 <span>Previous</span>
// //               </button>
// //               <button
// //                 onClick={goToNext}
// //                 disabled={isAnimating}
// //                 className="flex items-center space-x-2 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-orange-200 dark:border-slate-600 text-orange-700 dark:text-orange-300 rounded-xl hover:border-orange-300 dark:hover:border-slate-500 hover:bg-orange-50 dark:hover:bg-slate-700/50 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
// //               >
// //                 <span>Next</span>
// //                 <ChevronRight className="w-5 h-5" />
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

















// // If using Next.js app/route, uncomment:
// // "use client";

// import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Github,
//   ExternalLink,
//   Code,
//   Database,
//   Brain,
//   Smartphone,
//   Globe,
//   Zap,
//   Plus,
//   Minus,
//   Info,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   technologies: string[];
//   features: string[];
//   image: string;
//   icon: React.ReactNode;
//   color: string;
//   gradient: string;
//   category: string;
// }

// /* compact animated tech tag */
// const TechTag: React.FC<{ label: string; highlighted?: boolean }> = ({ label, highlighted }) => {
//   return (
//     <span
//       className={cn(
//         "inline-flex items-center gap-2 text-[11px] px-2 py-0.5 rounded-full border transition-transform duration-200 select-none",
//         highlighted
//           ? "bg-orange-50 dark:bg-slate-800/50 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700 animate-pulse"
//           : "bg-gray-50 dark:bg-slate-800/20 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-slate-600 hover:scale-105"
//       )}
//     >
//       <svg width="6" height="6" viewBox="0 0 6 6" className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="3" cy="3" r="3" fill={highlighted ? "#FB923C" : "#CBD5E1"} />
//       </svg>
//       {label}
//     </span>
//   );
// };

// /* doodly header but professional copy */
// const DoodlyHeader: React.FC = () => {
//   return (
//     <div className="text-center mb-6 sm:mb-10">
//       <div className="mx-auto inline-flex items-center gap-3">
//         <div
//           className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md transform transition-transform hover:rotate-3"
//           aria-hidden
//         >
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//             <path d="M3 21l6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M14 7l7-4-4 7-7 4 4-7z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </div>

//         <div className="text-left">
//           <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Doodly Projects</div>
//           <h2 className="text-xl sm:text-2xl font-bold">Playful UI — Practical code</h2>
//           <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-xl">
//             Compact previews — click to expand. I build production-ready apps with a playful look. Open to internships & junior roles.
//           </p>
//         </div>
//       </div>
//       <div className="mt-4 flex items-center justify-center gap-3">
//         <a
//           href="#contact"
//           className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm shadow-sm hover:scale-105 transition"
//         >
//           I'm open to internships
//         </a>
//         <a href="#projects" className="px-3 py-1 border rounded-full text-sm text-orange-700 hover:bg-orange-50 transition">
//           View portfolio
//         </a>
//       </div>
//     </div>
//   );
// };

// const Projects: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);
//   const isAnimatingRef = useRef<boolean>(false);
//   const [isMobile, setIsMobile] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   // track which card is expanded (for compact view)
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 120 });

//   const projects: Project[] = useMemo(
//     () => [
//       {
//         id: 1,
//         title: "News Website",
//         description: "Modern news platform with real-time updates and responsive UI.",
//         technologies: ["Express", "React", "Tailwind"],
//         features: ["Third-party APIs", "Axios caching", "Responsive layouts"],
//         image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=700&fit=crop&auto=format",
//         icon: <Code className="w-4 h-4" />,
//         color: "from-orange-400 to-orange-600",
//         gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
//         category: "Web",
//       },
//       {
//         id: 2,
//         title: "Salary Predictor",
//         description: "ML app that predicts salaries with interactive visualizations.",
//         technologies: ["Python", "Streamlit", "RF"],
//         features: ["Model pipelines", "Plotly charts", "User inputs"],
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format",
//         icon: <Brain className="w-4 h-4" />,
//         color: "from-orange-500 to-red-500",
//         gradient: "bg-gradient-to-br from-orange-50 to-red-50",
//         category: "ML",
//       },
//       {
//         id: 3,
//         title: "E-Commerce",
//         description: "Scalable store with payments and admin dashboard.",
//         technologies: ["React", "Node", "MongoDB"],
//         features: ["Stripe", "Inventory", "Auth"],
//         image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop&auto=format",
//         icon: <Database className="w-4 h-4" />,
//         color: "from-orange-600 to-amber-600",
//         gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
//         category: "Full Stack",
//       },
//       // add others as needed...
//     ],
//     []
//   );

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const t = setTimeout(() => setIsLoading(false), 450);
//     return () => clearTimeout(t);
//   }, []);

//   const startAnimating = (duration = 380) => {
//     setIsAnimating(true);
//     isAnimatingRef.current = true;
//     window.setTimeout(() => {
//       setIsAnimating(false);
//       isAnimatingRef.current = false;
//     }, duration);
//   };

//   const goToNext = useCallback(() => {
//     if (isAnimatingRef.current || projects.length <= 1) return;
//     startAnimating();
//     setCurrentIndex((p) => (p + 1) % projects.length);
//     setExpandedIndex(null);
//   }, [projects.length]);

//   const goToPrev = useCallback(() => {
//     if (isAnimatingRef.current || projects.length <= 1) return;
//     startAnimating();
//     setCurrentIndex((p) => (p === 0 ? projects.length - 1 : p - 1));
//     setExpandedIndex(null);
//   }, [projects.length]);

//   const goToSlide = useCallback(
//     (index: number) => {
//       if (isAnimatingRef.current || index === currentIndex || index < 0 || index >= projects.length) return;
//       startAnimating();
//       setCurrentIndex(index);
//       setExpandedIndex(null);
//     },
//     [currentIndex, projects.length]
//   );

//   const toggleExpand = (idx: number) => {
//     setExpandedIndex((prev) => (prev === idx ? null : idx));
//   };

//   const getVisibleProjects = useCallback(() => {
//     if (projects.length === 0) return [] as (Project & { position?: string })[];
//     if (isMobile) return [{ ...projects[currentIndex], position: "center", visibleIndex: 0 } as any];
//     const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
//     const nextIndex = (currentIndex + 1) % projects.length;
//     return [
//       { ...projects[prevIndex], position: "left", visibleIndex: -1 } as any,
//       { ...projects[currentIndex], position: "center", visibleIndex: 0 } as any,
//       { ...projects[nextIndex], position: "right", visibleIndex: 1 } as any,
//     ];
//   }, [currentIndex, isMobile, projects]);

//   if (isLoading) {
//     return (
//       <section id="projects" className="py-10 relative bg-gradient-to-br from-gray-50 dark:from-slate-900 overflow-hidden">
//         <div className="section-container">
//           <div className="h-24 bg-white/40 dark:bg-slate-800/40 rounded-lg animate-pulse" />
//         </div>
//       </section>
//     );
//   }

//   const visible = getVisibleProjects();

//   return (
//     <section id="projects" className="py-10 relative bg-gradient-to-br from-gray-50 dark:from-slate-900 overflow-hidden">
//       {/* subtle doodle SVG accents */}
//       <svg className="absolute left-2 top-4 opacity-10 w-40 h-40 pointer-events-none" viewBox="0 0 100 100" fill="none">
//         <path d="M10 80 Q 50 10 90 80" stroke="#FDE68A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>

//       <div className="section-container relative z-10">
//         <div ref={headerRef} className={cn("transition-all", headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3")}>
//           <DoodlyHeader />
//         </div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* arrows */}
//           {!isMobile && projects.length > 1 && (
//             <>
//               <button
//                 onClick={goToPrev}
//                 disabled={isAnimating}
//                 aria-label="Previous"
//                 className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-sm flex items-center justify-center hover:scale-105 transition"
//               >
//                 <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </button>
//               <button
//                 onClick={goToNext}
//                 disabled={isAnimating}
//                 aria-label="Next"
//                 className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-sm flex items-center justify-center hover:scale-105 transition"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </button>
//             </>
//           )}

//           {/* compact grid */}
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl items-start">
//               {visible.map((project, i) => {
//                 const idx = (currentIndex + (project.visibleIndex ?? 0) + projects.length) % projects.length;
//                 const isCenter = project.position === "center";
//                 const isExpanded = expandedIndex === idx;
//                 return (
//                   <article
//                     key={`${project.id}-${project.position}`}
//                     className={cn(
//                       "bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm transform transition-all",
//                       isCenter ? "scale-100 shadow-md" : "scale-95 opacity-85",
//                       "w-full"
//                     )}
//                     style={{ maxWidth: 320 }}
//                   >
//                     <div className="relative h-36 overflow-hidden">
//                       <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-slate-800/80 rounded-full text-xs font-semibold text-orange-700 dark:text-orange-300 border border-orange-100">
//                         {project.category}
//                       </div>
//                       {/* doodle corner */}
//                       <div className="absolute right-3 bottom-3 rounded-full bg-white/75 dark:bg-slate-800/75 px-2 py-1 text-xs flex items-center gap-2 border">
//                         <span className="text-xs">{project.icon}</span>
//                         <span className="text-xs font-medium">Preview</span>
//                       </div>
//                     </div>

//                     <div className="p-3 sm:p-4">
//                       <div className="flex items-start gap-3">
//                         <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white shadow", `bg-gradient-to-r ${project.color}`)}>
//                           {project.icon}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center gap-2">
//                             <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100 truncate">{project.title}</h3>
//                             <button
//                               onClick={() => toggleExpand(idx)}
//                               aria-label={isExpanded ? "collapse" : "expand"}
//                               className="ml-auto rounded-full p-1 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
//                             >
//                               {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
//                             </button>
//                           </div>
//                           <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 truncate">{project.description}</p>
//                         </div>
//                       </div>

//                       {/* tech tags small */}
//                       <div className="mt-3 flex flex-wrap gap-2">
//                         {project.technologies.map((t, tidx) => (
//                           <TechTag key={`${t}-${tidx}`} label={t} highlighted={tidx < 2} />
//                         ))}
//                       </div>

//                       {/* expanded details (collapsible) */}
//                       <div
//                         className={cn(
//                           "mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all overflow-hidden",
//                           isExpanded ? "max-h-96" : "max-h-0"
//                         )}
//                       >
//                         <div className="pt-2">
//                           <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-200 mb-1">Key features</h4>
//                           <ul className="text-xs space-y-1">
//                             {project.features.map((f, fi) => (
//                               <li key={fi} className="flex items-start gap-2">
//                                 <span className="text-orange-500 mt-1">•</span>
//                                 <span className="leading-tight">{f}</span>
//                               </li>
//                             ))}
//                           </ul>

//                           <div className="mt-3 flex gap-2 items-center">
//                             <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-md text-sm hover:scale-105 transition">
//                               <Github className="w-4 h-4" /> Code
//                             </button>
//                             <button className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm text-orange-700 hover:bg-orange-50 transition">
//                               <ExternalLink className="w-4 h-4" /> Live
//                             </button>
//                             <button className="ml-auto text-xs text-gray-500 flex items-center gap-1">
//                               <Info className="w-4 h-4" /> Clicked view
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>

//           {/* indicators */}
//           <div className="flex items-center justify-center gap-3 mt-6">
//             {projects.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToSlide(i)}
//                 disabled={isAnimating}
//                 className={cn(
//                   "w-3 h-3 rounded-full transition-transform",
//                   i === currentIndex ? "scale-125 bg-orange-500 shadow" : "bg-gray-200 dark:bg-slate-600"
//                 )}
//               />
//             ))}
//           </div>

//           {/* small counter */}
//           <div className="text-center mt-3 text-xs text-gray-500">
//             <strong className="text-orange-600">{currentIndex + 1}</strong> / <strong>{projects.length}</strong>
//           </div>

//           {/* mobile nav */}
//           {isMobile && projects.length > 1 && (
//             <div className="flex justify-center gap-3 mt-4">
//               <button onClick={goToPrev} disabled={isAnimating} className="px-3 py-2 bg-white dark:bg-slate-800 rounded-md shadow">
//                 Prev
//               </button>
//               <button onClick={goToNext} disabled={isAnimating} className="px-3 py-2 bg-white dark:bg-slate-800 rounded-md shadow">
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;









//aavishkarone

// "use client";

// import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Github,
//   ExternalLink,
//   Code,
//   Database,
//   Brain,
//   Smartphone,
//   Globe,
//   Zap,
//   Info,
//   Plus,
//   Minus,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// /* ------------------------------------------------------------------
//   Projects.tsx - Creative, persuasive header + doodly styling
//   - Prominent title: "Please look at my projects and hire me"
//   - Doodly underline, mascot pulse, wobble CTA
//   - Compact but readable cards, expand-on-demand
//   - Keyboard navigation, swipe, accessible
// -------------------------------------------------------------------*/

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   technologies: string[];
//   features: string[];
//   image: string;
//   icon: React.ReactNode;
//   color: string;
//   gradient: string;
//   category: string;
// }

// /* tiny animated tech tag */
// const TechTag: React.FC<{ label: string; highlighted?: boolean }> = ({ label, highlighted }) => (
//   <span
//     className={cn(
//       "inline-flex items-center gap-2 text-[12px] px-2 py-0.5 rounded-full border select-none transition-transform duration-200",
//       highlighted
//         ? "bg-orange-50 dark:bg-slate-800/50 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700 animate-[pulse_1.6s_infinite]"
//         : "bg-gray-50 dark:bg-slate-800/20 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-slate-600 hover:scale-105"
//     )}
//   >
//     <svg className="flex-shrink-0" width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="3" cy="3" r="3" fill={highlighted ? "#FB923C" : "#CBD5E1"} />
//     </svg>
//     {label}
//   </span>
// );

// /* original doodle mascot */
// const DoodleMascot: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//     <path d="M6 46c10-12 24-14 38-6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
//     <circle cx="20" cy="24" r="2.6" fill="#fff" />
//     <circle cx="34" cy="24" r="2.6" fill="#fff" />
//     <path d="M14 34c5 6 14 6 20 0" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
//   </svg>
// );

// /* ---------------- Header with direct hiring ask ---------------- */
// const BigAskHeader: React.FC = () => {
//   return (
//     <div className="text-center mb-6 sm:mb-10 relative">
//       <div className="flex items-center justify-center gap-4">
//         <div
//           className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-2xl transform transition-transform duration-300 hover:scale-105 animate-[pulse_2.4s_infinite]"
//           aria-hidden
//         >
//           <DoodleMascot className="w-7 h-7" />
//         </div>

//         <div className="text-left max-w-3xl">
//           <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide">please look </div>

//           {/* Main request/title — big and clear */}
//           <h1 className="text-2xl sm:text-3xl md:text-3xl font-display font-bold leading-tight mt-1 flex items-center gap-3">
//             {/* short playful prefix */}
//             <span className="text-orange-500 text-lg transform -translate-y-0.5">✨</span>

//             <span className="inline-block">
//               Please look at my projects <span className="text-orange-600">— hire me</span>
//             </span>
//           </h1>

//           {/* animated hand-drawn underline */}
//           <div className="mt-1 h-6 relative">
//             <svg className="w-56 h-6 mx-0" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M2 12 Q60 0 110 12 T218 12"
//                 stroke="#FB923C"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="stroke-dasharray-[300] stroke-dashoffset-[300] animate-draw"
//                 style={{ opacity: 0.85 }}
//               />
//             </svg>
//           </div>

//           <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
//             Compact previews first — expand for details. I’m actively seeking internships / junior roles — I ship features that matter.
//           </p>
//         </div>
//       </div>

//       {/* Wobble CTA to draw recruiter attention */}
//       <div className="mt-4 flex justify-center gap-3">
//         <a
//           href="#contact"
//           className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-wobble"
//           aria-label="Contact me to hire"
//         >
//           Hire me — Let's chat
//         </a>

//         <a className="inline-flex items-center gap-2 px-3 py-1 border rounded-full text-sm text-orange-700 hover:bg-orange-50 transition" href="#projects">
//           View portfolio
//         </a>
//       </div>

//       {/* small celebratory dots that fade in with header */}
//       <div className="absolute right-6 top-0 pointer-events-none">
//         <div className="w-2 h-2 rounded-full bg-yellow-300 opacity-0 animate-[pop_700ms_ease_400ms_forwards]" />
//       </div>

//       <style jsx>{`
//         /* simple draw animation for underline */
//         @keyframes draw {
//           to { stroke-dashoffset: 0; }
//         }
//         .animate-draw { animation: draw 900ms cubic-bezier(.2,.9,.3,1) forwards; }
//         @keyframes wobble {
//           0% { transform: translateY(0) rotate(0deg); }
//           25% { transform: translateY(-3px) rotate(-2deg); }
//           50% { transform: translateY(0) rotate(0deg); }
//           75% { transform: translateY(-2px) rotate(2deg); }
//           100% { transform: translateY(0) rotate(0deg); }
//         }
//         .animate-wobble { animation: wobble 1600ms infinite ease-in-out; }
//         @keyframes pop {
//           to { opacity: 1; transform: translateY(-2px) scale(1); }
//         }
//       `}</style>
//     </div>
//   );
// };

// /* ---------------- Main component ---------------- */
// const Projects: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const isAnimatingRef = useRef(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
//   const [mounted, setMounted] = useState(false);

//   const touchStartX = useRef<number | null>(null);
//   const touchDeltaX = useRef(0);

//   const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });

//   const projects: Project[] = useMemo(
//     () => [
//       {
//         id: 1,
//         title: "News Website",
//         description: "Real-time news platform with efficient fetching and polished UI.",
//         technologies: ["Express.js", "React.js", "Tailwind"],
//         features: ["Third-party APIs", "Axios caching", "Responsive components"],
//         image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Code className="w-4 h-4" />,
//         color: "from-orange-400 to-orange-600",
//         gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
//         category: "Web",
//       },
//       {
//         id: 2,
//         title: "Salary Predictor",
//         description: "ML-backed salary predictions with interactive visualizations.",
//         technologies: ["Python", "Streamlit", "RandomForest"],
//         features: ["Model pipelines", "Plotly charts", "User calibration"],
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Brain className="w-4 h-4" />,
//         color: "from-orange-500 to-red-500",
//         gradient: "bg-gradient-to-br from-orange-50 to-red-50",
//         category: "Machine Learning",
//       },
//       {
//         id: 3,
//         title: "E-Commerce Platform",
//         description: "Scalable store with Stripe payments and admin dashboard.",
//         technologies: ["React.js", "Node.js", "MongoDB"],
//         features: ["Stripe", "Inventory", "Search"],
//         image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Database className="w-4 h-4" />,
//         color: "from-orange-600 to-amber-600",
//         gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
//         category: "Full Stack",
//       },
//       {
//         id: 4,
//         title: "Task Manager",
//         description: "Realtime board with drag/drop and permissions.",
//         technologies: ["React.js", "Socket.io", "Tailwind"],
//         features: ["Realtime sync", "Drag & drop", "Team permissions"],
//         image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Smartphone className="w-4 h-4" />,
//         color: "from-amber-500 to-orange-500",
//         gradient: "bg-gradient-to-br from-amber-50 to-orange-50",
//         category: "Productivity",
//       },
//       {
//         id: 5,
//         title: "Weather Analytics",
//         description: "Maps & trends with historical analysis and alerts.",
//         technologies: ["React.js", "Chart.js", "PWA"],
//         features: ["Map layers", "Historical trends", "Push alerts"],
//         image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Globe className="w-4 h-4" />,
//         color: "from-orange-400 to-yellow-500",
//         gradient: "bg-gradient-to-br from-orange-50 to-yellow-50",
//         category: "Data",
//       },
//       {
//         id: 6,
//         title: "Social Dashboard",
//         description: "Scheduling, analytics and cross-posting for creators.",
//         technologies: ["React.js", "Node.js", "Redis"],
//         features: ["Scheduling", "Analytics", "Multi-platform"],
//         image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Zap className="w-4 h-4" />,
//         color: "from-red-500 to-orange-500",
//         gradient: "bg-gradient-to-br from-red-50 to-orange-50",
//         category: "Social",
//       },
//     ],
//     []
//   );

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 900);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   useEffect(() => {
//     const t = setTimeout(() => setIsLoading(false), 420);
//     const m = setTimeout(() => setMounted(true), 80);
//     return () => {
//       clearTimeout(t);
//       clearTimeout(m);
//     };
//   }, []);

//   const startAnimating = (duration = 420) => {
//     setIsAnimating(true);
//     isAnimatingRef.current = true;
//     window.setTimeout(() => {
//       setIsAnimating(false);
//       isAnimatingRef.current = false;
//     }, duration);
//   };

//   const goToNext = useCallback(() => {
//     if (isAnimatingRef.current || projects.length <= 1) return;
//     startAnimating();
//     setCurrentIndex((p) => (p + 1) % projects.length);
//     setExpandedIndex(null);
//   }, [projects.length]);

//   const goToPrev = useCallback(() => {
//     if (isAnimatingRef.current || projects.length <= 1) return;
//     startAnimating();
//     setCurrentIndex((p) => (p === 0 ? projects.length - 1 : p - 1));
//     setExpandedIndex(null);
//   }, [projects.length]);

//   const goToSlide = useCallback(
//     (index: number) => {
//       if (isAnimatingRef.current || index === currentIndex || index < 0 || index >= projects.length) return;
//       startAnimating();
//       setCurrentIndex(index);
//       setExpandedIndex(null);
//     },
//     [currentIndex, projects.length]
//   );

//   const toggleExpand = (index: number) => setExpandedIndex((prev) => (prev === index ? null : index));

//   // keyboard
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") goToNext();
//       if (e.key === "ArrowLeft") goToPrev();
//       if (e.key === "Escape") setExpandedIndex(null);
//       if (e.key === "Enter" && document.activeElement?.getAttribute("data-expand-index")) {
//         const idx = Number(document.activeElement.getAttribute("data-expand-index"));
//         toggleExpand(idx);
//       }
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [goToNext, goToPrev]);

//   // swipe
//   useEffect(() => {
//     const onTouchStart = (e: TouchEvent) => {
//       touchDeltaX.current = 0;
//       touchStartX.current = e.touches?.[0]?.clientX ?? null;
//     };
//     const onTouchMove = (e: TouchEvent) => {
//       if (touchStartX.current == null) return;
//       touchDeltaX.current = (e.touches?.[0]?.clientX ?? 0) - (touchStartX.current ?? 0);
//     };
//     const onTouchEnd = () => {
//       if (touchStartX.current == null) return;
//       const delta = touchDeltaX.current;
//       const threshold = 60;
//       if (delta > threshold) goToPrev();
//       else if (delta < -threshold) goToNext();
//       touchStartX.current = null;
//       touchDeltaX.current = 0;
//     };

//     window.addEventListener("touchstart", onTouchStart, { passive: true });
//     window.addEventListener("touchmove", onTouchMove, { passive: true });
//     window.addEventListener("touchend", onTouchEnd);
//     return () => {
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchmove", onTouchMove);
//       window.removeEventListener("touchend", onTouchEnd);
//     };
//   }, [goToNext, goToPrev]);

//   // visible slice
//   const visible = useMemo(() => {
//     if (projects.length === 0) return [];
//     if (isMobile) return [{ ...projects[currentIndex], position: "center", offset: 0 }];
//     const prev = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
//     const next = (currentIndex + 1) % projects.length;
//     return [
//       { ...projects[prev], position: "left", offset: -1 },
//       { ...projects[currentIndex], position: "center", offset: 0 },
//       { ...projects[next], position: "right", offset: 1 },
//     ];
//   }, [currentIndex, isMobile, projects]);

//   if (isLoading) {
//     return (
//       <section id="projects" className="py-12 relative bg-gradient-to-br from-gray-50 dark:from-slate-900 overflow-hidden">
//         <div className="section-container">
//           <div className="h-28 rounded-xl bg-white/40 dark:bg-slate-800/40 animate-pulse" />
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="projects" className="py-12 relative bg-gradient-to-br from-gray-50 dark:from-slate-900 overflow-hidden">
//       {/* faint doodle background */}
//       <svg className="absolute -left-8 top-12 opacity-8 pointer-events-none" width="220" height="200" viewBox="0 0 220 200" fill="none">
//         <path d="M10 150 Q110 10 210 150" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.12" />
//       </svg>

//       <div className="section-container relative z-10">
//         <div ref={headerRef} className={cn("mb-6 transition-all duration-700", headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2")}>
//           <BigAskHeader />
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           {/* arrows */}
//           {!isMobile && projects.length > 1 && (
//             <>
//               <button
//                 onClick={goToPrev}
//                 disabled={isAnimating}
//                 aria-label="Previous project"
//                 className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 dark:bg-slate-800/90 rounded-full shadow-md hover:scale-105 transition transform"
//               >
//                 <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </button>

//               <button
//                 onClick={goToNext}
//                 disabled={isAnimating}
//                 aria-label="Next project"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 dark:bg-slate-800/90 rounded-full shadow-md hover:scale-105 transition transform"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </button>
//             </>
//           )}

//           {/* cards row */}
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl items-start">
//               {visible.map((p, i) => {
//                 const realIndex = (currentIndex + (p.offset ?? 0) + projects.length) % projects.length;
//                 const isCenter = p.position === "center";
//                 const isExpanded = expandedIndex === realIndex;

//                 return (
//                   <article
//                     key={`${p.id}-${p.position}`}
//                     className={cn(
//                       "bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow transform transition-all duration-350",
//                       isCenter ? "scale-[1.02] shadow-lg" : "scale-[0.98] opacity-90",
//                       mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//                     )}
//                     style={{
//                       maxWidth: isCenter ? 460 : 380,
//                       transitionDelay: `${i * 80}ms`,
//                     }}
//                     aria-labelledby={`project-${p.id}-title`}
//                   >
//                     <div className="relative h-44 overflow-hidden">
//                       <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute top-3 left-3 px-2 py-1 bg-white/95 dark:bg-slate-800/85 rounded-full text-xs font-semibold text-orange-700 dark:text-orange-300 border border-orange-100">
//                         {p.category}
//                       </div>

//                       <div className="absolute right-3 bottom-3 rounded-full bg-white/75 dark:bg-slate-800/75 px-2 py-1 text-xs flex items-center gap-2 border">
//                         <span className="text-xs">{p.icon}</span>
//                         <span className="text-xs font-medium">Peek</span>
//                       </div>
//                     </div>

//                     <div className="p-4 sm:p-5">
//                       <div className="flex items-start gap-3">
//                         <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center text-white shadow", `bg-gradient-to-r ${p.color}`)}>{p.icon}</div>

//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center gap-2">
//                             <h3 id={`project-${p.id}-title`} className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
//                               {p.title}
//                             </h3>

//                             <button
//                               data-expand-index={realIndex}
//                               onClick={() => toggleExpand(realIndex)}
//                               aria-expanded={isExpanded}
//                               aria-controls={`project-${p.id}-details`}
//                               className="ml-auto rounded-full p-1 hover:bg-gray-100 dark:hover:bg-slate-700 transition focus:outline-none focus:ring-2 focus:ring-orange-300"
//                             >
//                               {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
//                             </button>
//                           </div>

//                           <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 line-clamp-2">{p.description}</p>
//                         </div>
//                       </div>

//                       <div className="mt-3 flex flex-wrap gap-2">
//                         {p.technologies.map((t, idx) => (
//                           <TechTag key={`${t}-${idx}`} label={t} highlighted={idx < 2} />
//                         ))}
//                       </div>

//                       <div
//                         id={`project-${p.id}-details`}
//                         className={cn(
//                           "mt-3 text-sm text-gray-700 dark:text-gray-300 overflow-hidden transition-[max-height,opacity,transform] duration-300",
//                           isExpanded ? "max-h-[640px] opacity-100 transform-none" : "max-h-0 opacity-0 -translate-y-2"
//                         )}
//                       >
//                         <div className="pt-2">
//                           <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-200 mb-1">Key features</h4>
//                           <ul className="text-xs space-y-1">
//                             {p.features.map((f, fi) => (
//                               <li key={fi} className="flex items-start gap-2">
//                                 <span className="text-orange-500 mt-1">•</span>
//                                 <span className="leading-tight">{f}</span>
//                               </li>
//                             ))}
//                           </ul>

//                           <div className="mt-3 flex gap-2 items-center">
//                             <a className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-md text-sm hover:scale-105 transition" href="#" role="button">
//                               <Github className="w-4 h-4" /> Code
//                             </a>

//                             <a className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm text-orange-700 hover:bg-orange-50 transition" href="#" role="button">
//                               <ExternalLink className="w-4 h-4" /> Live
//                             </a>

//                             <div className="ml-auto text-xs text-gray-500 flex items-center gap-1">
//                               <Info className="w-4 h-4" /> Click expand to view
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>

//           {/* indicators */}
//           <div className="flex items-center justify-center gap-3 mt-6">
//             {projects.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToSlide(i)}
//                 disabled={isAnimating}
//                 aria-label={`Go to project ${i + 1}`}
//                 className={cn(
//                   "w-3 h-3 rounded-full transition-transform",
//                   i === currentIndex ? "scale-125 bg-gradient-to-r from-orange-500 to-orange-600 shadow" : "bg-gray-200 dark:bg-slate-600"
//                 )}
//               />
//             ))}
//           </div>

//           <div className="text-center mt-3 text-sm text-gray-500">
//             <strong className="text-orange-600">{currentIndex + 1}</strong> / <strong>{projects.length}</strong>
//           </div>

//           {/* mobile nav */}
//           {isMobile && projects.length > 1 && (
//             <div className="flex justify-center gap-3 mt-4">
//               <button onClick={goToPrev} disabled={isAnimating} className="px-3 py-2 bg-white dark:bg-slate-800 rounded-md shadow">
//                 Prev
//               </button>
//               <button onClick={goToNext} disabled={isAnimating} className="px-3 py-2 bg-white dark:bg-slate-800 rounded-md shadow">
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



// "use client";

// import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Github,
//   ExternalLink,
//   Code,
//   Database,
//   Brain,
//   Smartphone,
//   Globe,
//   Zap,
//   Info,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// /* -------------------------------------------------------------
//    Doodly header + CTA (playful, no explicit "Shinchan" mention)
// --------------------------------------------------------------*/
// const DoodleMascot: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//     <path d="M6 46c10-12 24-14 38-6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
//     <circle cx="20" cy="24" r="2.6" fill="#fff" />
//     <circle cx="34" cy="24" r="2.6" fill="#fff" />
//     <path d="M14 34c5 6 14 6 20 0" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
//   </svg>
// );

// const BigAskHeader: React.FC = () => {
//   return (
//     <div className="text-center mb-8 sm:mb-12 relative">
//       <div className="inline-flex items-center gap-4 justify-center mb-3">
//         <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-110 animate-pulse">
//           <DoodleMascot className="w-6 h-6" />
//         </div>
//         <div className="text-left">
//           <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Portfolio</div>
//           <h1 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
//             Please look at my projects <span className="text-orange-600">— hire me</span>
//           </h1>
//           <div className="mt-1 h-6">
//             <svg className="w-56 h-6" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//               <path
//                 d="M2 12 Q60 0 110 12 T218 12"
//                 stroke="#FB923C"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="animate-draw"
//               />
//             </svg>
//           </div>
//           <p className="text-sm text-gray-600 mt-1">
//             Compact previews, details visible. Open to internships & junior roles.
//           </p>
//         </div>
//       </div>
//       <div className="mt-3 flex items-center justify-center gap-3">
//         <a
//           href="#contact"
//           className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-md transform hover:scale-105 transition"
//         >
//           Let’s talk
//         </a>
//         <a
//           href="#projects"
//           className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 rounded-full text-orange-700 hover:bg-orange-50 transition"
//         >
//           Browse all
//         </a>
//       </div>

//       {/* keyframes for underline */}
//       <style jsx>{`
//         @keyframes draw {
//           from { stroke-dasharray: 300; stroke-dashoffset: 300; }
//           to { stroke-dasharray: 300; stroke-dashoffset: 0; }
//         }
//         .animate-draw { animation: draw 900ms cubic-bezier(.2,.9,.3,1) forwards; }
//       `}</style>
//     </div>
//   );
// };

// /* -------------------------------------------------------------
//    Types & small components
// --------------------------------------------------------------*/
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   technologies: string[];
//   features: string[];
//   image: string;
//   icon: React.ReactNode;
//   color: string;
//   gradient: string;
//   category: string;
// }

// const TechTag: React.FC<{ label: string; highlighted?: boolean }> = ({ label, highlighted }) => (
//   <span
//     className={cn(
//       "inline-flex items-center gap-2 text-[12px] px-2 py-0.5 rounded-full border select-none transition-transform duration-200",
//       highlighted
//         ? "bg-orange-50 text-orange-800 border-orange-200 animate-pulse"
//         : "bg-gray-50 text-gray-700 border-gray-200 hover:scale-105"
//     )}
//   >
//     <svg className="flex-shrink-0" width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//       <circle cx="3" cy="3" r="3" fill={highlighted ? "#FB923C" : "#CBD5E1"} />
//     </svg>
//     {label}
//   </span>
// );

// /* -------------------------------------------------------------
//    Main component
// --------------------------------------------------------------*/
// const Projects: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const isAnimatingRef = useRef(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   const touchStartX = useRef<number | null>(null);
//   const touchDeltaX = useRef(0);

//   const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });

//   const projects: Project[] = useMemo(
//     () => [
//       {
//         id: 1,
//         title: "News Website",
//         description: "Real-time news platform with efficient fetching and polished UI.",
//         technologies: ["Express.js", "React.js", "Tailwind", "Axios"],
//         features: ["Third-party APIs", "Optimized fetch", "Responsive components"],
//         image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Code className="w-4 h-4" />,
//         color: "from-orange-400 to-orange-600",
//         gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
//         category: "Web",
//       },
//       {
//         id: 2,
//         title: "Salary Predictor",
//         description: "ML-backed salary predictions with interactive visualizations.",
//         technologies: ["Python", "Streamlit", "RandomForest", "Pandas"],
//         features: ["Model pipelines", "Plotly charts", "User calibration"],
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Brain className="w-4 h-4" />,
//         color: "from-orange-500 to-red-500",
//         gradient: "bg-gradient-to-br from-orange-50 to-red-50",
//         category: "Machine Learning",
//       },
//       {
//         id: 3,
//         title: "E-Commerce Platform",
//         description: "Scalable store with Stripe payments and admin dashboard.",
//         technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
//         features: ["Secure checkout", "Inventory", "Search & filters"],
//         image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Database className="w-4 h-4" />,
//         color: "from-orange-600 to-amber-600",
//         gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
//         category: "Full Stack",
//       },
//       {
//         id: 4,
//         title: "Task Manager",
//         description: "Realtime board with drag & drop and team permissions.",
//         technologies: ["React.js", "Socket.io", "Tailwind", "Redux"],
//         features: ["Realtime sync", "Kanban UX", "Team roles"],
//         image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Smartphone className="w-4 h-4" />,
//         color: "from-amber-500 to-orange-500",
//         gradient: "bg-gradient-to-br from-amber-50 to-orange-50",
//         category: "Productivity",
//       },
//       {
//         id: 5,
//         title: "Weather Analytics",
//         description: "Maps & trends with historical analysis and alerts.",
//         technologies: ["React.js", "Chart.js", "PWA", "TypeScript"],
//         features: ["Map layers", "Historical trends", "Push alerts"],
//         image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Globe className="w-4 h-4" />,
//         color: "from-orange-400 to-yellow-500",
//         gradient: "bg-gradient-to-br from-orange-50 to-yellow-50",
//         category: "Data",
//       },
//       {
//         id: 6,
//         title: "Social Dashboard",
//         description: "Scheduling, analytics and cross-posting for creators.",
//         technologies: ["React.js", "Node.js", "Redis", "Cron"],
//         features: ["Scheduler", "Engagement analytics", "Multi-platform"],
//         image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=700&fit=crop&auto=format&q=80",
//         icon: <Zap className="w-4 h-4" />,
//         color: "from-red-500 to-orange-500",
//         gradient: "bg-gradient-to-br from-red-50 to-orange-50",
//         category: "Social",
//       },
//     ],
//     []
//   );

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 900);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   useEffect(() => {
//     const t = setTimeout(() => setIsLoading(false), 420);
//     const m = setTimeout(() => setMounted(true), 80);
//     return () => {
//       clearTimeout(t);
//       clearTimeout(m);
//     };
//   }, []);

//   const startAnimating = (duration = 420) => {
//     setIsAnimating(true);
//     isAnimatingRef.current = true;
//     window.setTimeout(() => {
//       setIsAnimating(false);
//       isAnimatingRef.current = false;
//     }, duration);
//   };

//   const goToNext = useCallback(() => {
//     if (isAnimatingRef.current || projects.length <= 1) return;
//     startAnimating();
//     setCurrentIndex((p) => (p + 1) % projects.length);
//   }, [projects.length]);

//   const goToPrev = useCallback(() => {
//     if (isAnimatingRef.current || projects.length <= 1) return;
//     startAnimating();
//     setCurrentIndex((p) => (p === 0 ? projects.length - 1 : p - 1));
//   }, [projects.length]);

//   const goToSlide = useCallback(
//     (index: number) => {
//       if (isAnimatingRef.current || index === currentIndex || index < 0 || index >= projects.length) return;
//       startAnimating();
//       setCurrentIndex(index);
//     },
//     [currentIndex, projects.length]
//   );

//   // keyboard
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") goToNext();
//       if (e.key === "ArrowLeft") goToPrev();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [goToNext, goToPrev]);

//   // swipe
//   useEffect(() => {
//     const onTouchStart = (e: TouchEvent) => {
//       touchDeltaX.current = 0;
//       touchStartX.current = e.touches?.[0]?.clientX ?? null;
//     };
//     const onTouchMove = (e: TouchEvent) => {
//       if (touchStartX.current == null) return;
//       touchDeltaX.current = (e.touches?.[0]?.clientX ?? 0) - (touchStartX.current ?? 0);
//     };
//     const onTouchEnd = () => {
//       if (touchStartX.current == null) return;
//       const delta = touchDeltaX.current;
//       const threshold = 60;
//       if (delta > threshold) goToPrev();
//       else if (delta < -threshold) goToNext();
//       touchStartX.current = null;
//       touchDeltaX.current = 0;
//     };

//     window.addEventListener("touchstart", onTouchStart, { passive: true });
//     window.addEventListener("touchmove", onTouchMove, { passive: true });
//     window.addEventListener("touchend", onTouchEnd);
//     return () => {
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchmove", onTouchMove);
//       window.removeEventListener("touchend", onTouchEnd);
//     };
//   }, [goToNext, goToPrev]);

//   const visible = useMemo(() => {
//     if (projects.length === 0) return [];
//     if (isMobile) return [{ ...projects[currentIndex], position: "center", offset: 0 }];
//     const prev = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
//     const next = (currentIndex + 1) % projects.length;
//     return [
//       { ...projects[prev], position: "left", offset: -1 },
//       { ...projects[currentIndex], position: "center", offset: 0 },
//       { ...projects[next], position: "right", offset: 1 },
//     ];
//   }, [currentIndex, isMobile, projects]);
// {/* Playful Title Section */}
// <div className="text-center relative mb-12 px-4">
//   {/* Doodle-like squiggles */}
//   <div className="absolute left-10 top-0 w-16 h-16 text-yellow-400 opacity-50 animate-bounce">
//     <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3">
//       <path d="M10 32 Q 32 10, 54 32 Q 32 54, 10 32 Z" />
//     </svg>
//   </div>
//   <div className="absolute right-10 top-4 w-12 h-12 text-pink-400 opacity-70 animate-spin-slow">
//     <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3">
//       <circle cx="32" cy="32" r="28" />
//     </svg>
//   </div>

//   {/* Title text */}
//   <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
//     ✨ Please take a peek at my projects — and maybe hire me? ✨
//   </h2>
//   <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//     Crafted with curiosity, a pinch of chaos, and plenty of ❤️
//   </p>
// </div>

//   if (isLoading) {
//     return (
//       <section id="projects" className="py-12 relative bg-gradient-to-br from-gray-50 overflow-hidden">
//         <div className="section-container">
//           <div className="h-24 rounded-xl bg-white/40 animate-pulse" />
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="projects" className="py-12 relative bg-gradient-to-br from-gray-50 via-orange-50/30 to-orange-100/20 overflow-hidden">
//       {/* background doodles */}
//       <svg className="absolute -left-8 top-10 opacity-10 pointer-events-none" width="220" height="200" viewBox="0 0 220 200" fill="none" aria-hidden>
//         <path d="M10 150 Q110 10 210 150" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//       <svg className="absolute right-[-40px] bottom-[-20px] opacity-10 pointer-events-none" width="260" height="220" viewBox="0 0 260 220" fill="none" aria-hidden>
//         <path d="M20 170 Q130 40 240 170" stroke="#FDBA74" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>

//       <div className="section-container relative z-10">
//         {/* Header with doodly title */}
//         <div
//           ref={headerRef}
//           className={cn(
//             "transition-all duration-700",
//             headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
//           )}
//         >
//           <BigAskHeader />
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           {/* arrows */}
//           {!isMobile && projects.length > 1 && (
//             <>
//               <button
//                 onClick={goToPrev}
//                 disabled={isAnimating}
//                 aria-label="Previous project"
//                 className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 rounded-full shadow-md hover:scale-105 transition"
//               >
//                 <ChevronLeft className="w-5 h-5 text-gray-700" />
//               </button>
//               <button
//                 onClick={goToNext}
//                 disabled={isAnimating}
//                 aria-label="Next project"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 rounded-full shadow-md hover:scale-105 transition"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-700" />
//               </button>
//             </>
//           )}

//           {/* cards row — slightly smaller & always extended */}
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl items-start">
//               {visible.map((p, i) => {
//                 const isCenter = p.position === "center";
//                 return (
//                   <article
//                     key={`${p.id}-${p.position}`}
//                     className={cn(
//                       "bg-white rounded-2xl overflow-hidden shadow transform transition-all duration-300",
//                       isCenter ? "scale-[1.02] shadow-lg" : "scale-[0.98] opacity-90",
//                       mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//                     )}
//                     style={{
//                       maxWidth: isCenter ? 420 : 360, // **slightly smaller** than earlier
//                       transitionDelay: `${i * 80}ms`,
//                     }}
//                     aria-labelledby={`project-${p.id}-title`}
//                   >
//                     {/* image */}
//                     <div className="relative h-44 overflow-hidden">
//                       <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/0 to-black/10" aria-hidden />
//                       <div className="absolute top-3 left-3 px-2 py-1 bg-white/95 rounded-full text-xs font-semibold text-orange-700 border border-orange-100">
//                         {p.category}
//                       </div>
//                       <div className="absolute right-3 bottom-3 rounded-full bg-white/80 px-2 py-1 text-xs flex items-center gap-2 border">
//                         <span className="text-xs">{p.icon}</span>
//                         <span className="text-xs font-medium">Preview</span>
//                       </div>
//                     </div>

//                     {/* content — details visible */}
//                     <div className="p-4 sm:p-5">
//                       <div className="flex items-start gap-3">
//                         <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center text-white shadow", `bg-gradient-to-r ${p.color}`)}>
//                           {p.icon}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center gap-2">
//                             <h3 id={`project-${p.id}-title`} className="text-lg font-semibold text-gray-800 truncate">
//                               {p.title}
//                             </h3>
//                             <div className="ml-auto text-xs text-gray-500 flex items-center gap-1">
//                               <Info className="w-4 h-4" /> Details visible
//                             </div>
//                           </div>
//                           <p className="text-sm text-gray-500 mt-1 line-clamp-2">{p.description}</p>
//                         </div>
//                       </div>

//                       {/* tech tags */}
//                       <div className="mt-3 flex flex-wrap gap-2">
//                         {p.technologies.map((t, idx) => (
//                           <TechTag key={`${t}-${idx}`} label={t} highlighted={idx < 2} />
//                         ))}
//                       </div>

//                       {/* details (always open but compact) */}
//                       <div className="mt-3 text-sm text-gray-700 overflow-hidden max-h-[160px]">
//                         <div className="pt-2">
//                           <h4 className="text-xs font-semibold text-gray-600 mb-1">Key features</h4>
//                           <ul className="text-xs space-y-1">
//                             {p.features.map((f, fi) => (
//                               <li key={fi} className="flex items-start gap-2">
//                                 <span className="text-orange-500 mt-1">•</span>
//                                 <span className="leading-tight">{f}</span>
//                               </li>
//                             ))}
//                           </ul>

//                           <div className="mt-3 flex gap-2 items-center">
//                             <a className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-md text-sm hover:scale-105 transition" href="#" role="button">
//                               <Github className="w-4 h-4" /> Code
//                             </a>
//                             <a className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm text-orange-700 hover:bg-orange-50 transition" href="#" role="button">
//                               <ExternalLink className="w-4 h-4" /> Live
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>

//           {/* indicators */}
//           <div className="flex items-center justify-center gap-3 mt-6">
//             {projects.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToSlide(i)}
//                 disabled={isAnimating}
//                 aria-label={`Go to project ${i + 1}`}
//                 className={cn(
//                   "w-3 h-3 rounded-full transition-transform",
//                   i === currentIndex ? "scale-125 bg-gradient-to-r from-orange-500 to-orange-600 shadow" : "bg-gray-200"
//                 )}
//               />
//             ))}
//           </div>

//           <div className="text-center mt-3 text-sm text-gray-500">
//             <strong className="text-orange-600">{currentIndex + 1}</strong> / <strong>{projects.length}</strong>
//           </div>

//           {/* mobile nav */}
//           {isMobile && projects.length > 1 && (
//             <div className="flex justify-center gap-3 mt-4">
//               <button onClick={goToPrev} disabled={isAnimating} className="px-3 py-2 bg-white rounded-md shadow">
//                 Prev
//               </button>
//               <button onClick={goToNext} disabled={isAnimating} className="px-3 py-2 bg-white rounded-md shadow">
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Code,
  Database,
  Brain,
  Smartphone,
  Globe,
  Zap,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------
   Doodly header + CTA (playful, no explicit "Shinchan" mention)
   NOTE: merged the playful title into this header to avoid double
   header spacing that pushed the cards down.
--------------------------------------------------------------*/
const DoodleMascot: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M6 46c10-12 24-14 38-6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
    <circle cx="20" cy="24" r="2.6" fill="#fff" />
    <circle cx="34" cy="24" r="2.6" fill="#fff" />
    <path d="M14 34c5 6 14 6 20 0" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
  </svg>
);

const BigAskHeader: React.FC = () => {
  return (
    <div className="text-center mb-4 sm:mb-6 relative">
      {/* playful ornaments */}
      <div className="absolute left-6 top-0 w-12 h-12 text-yellow-400 opacity-50 animate-bounce pointer-events-none">
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M10 32 Q 32 10, 54 32 Q 32 54, 10 32 Z" />
        </svg>
      </div>
      <div className="absolute right-8 top-3 w-10 h-10 text-pink-400 opacity-70 animate-spin-slow pointer-events-none">
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <circle cx="32" cy="32" r="28" />
        </svg>
      </div>

      <div className="inline-flex items-center gap-4 justify-center mb-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-110 animate-pulse">
          <DoodleMascot className="w-6 h-6" />
        </div>
        <div className="text-left">
          <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Portfolio</div>

          {/* <-- Using the title text you gave earlier exactly --> */}
          <h1 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
            ✨ Please take a peek at my projects — and maybe hire me? ✨
          </h1>

          <div className="mt-1 h-6">
            <svg className="w-56 h-6" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path
                d="M2 12 Q60 0 110 12 T218 12"
                stroke="#FB923C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Crafted with curiosity, a pinch of chaos, and plenty of ❤️
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-md transform hover:scale-105 transition"
        >
          Let’s talk
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 rounded-full text-orange-700 hover:bg-orange-50 transition"
        >
          Browse all
        </a>
      </div>

      <style jsx>{`
        @keyframes draw {
          from { stroke-dasharray: 300; stroke-dashoffset: 300; }
          to { stroke-dasharray: 300; stroke-dashoffset: 0; }
        }
        .animate-draw { animation: draw 900ms cubic-bezier(.2,.9,.3,1) forwards; }
      `}</style>
    </div>
  );
};

/* -------------------------------------------------------------
   Types & small components
--------------------------------------------------------------*/
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  category: string;
}

const TechTag: React.FC<{ label: string; highlighted?: boolean }> = ({ label, highlighted }) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 text-[12px] px-2 py-0.5 rounded-full border select-none transition-transform duration-200",
      highlighted
        ? "bg-orange-50 text-orange-800 border-orange-200 animate-pulse"
        : "bg-gray-50 text-gray-700 border-gray-200 hover:scale-105"
    )}
  >
    <svg className="flex-shrink-0" width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="3" cy="3" r="3" fill={highlighted ? "#FB923C" : "#CBD5E1"} />
    </svg>
    {label}
  </span>
);

/* -------------------------------------------------------------
   Main component
--------------------------------------------------------------*/
const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true); // Always show header

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "News Website",
        description: "Real-time news platform with efficient fetching and polished UI.",
        technologies: ["Express.js", "React.js", "Tailwind", "Axios"],
        features: ["Third-party APIs", "Optimized fetch", "Responsive components"],
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=700&fit=crop&auto=format&q=80",
        icon: <Code className="w-4 h-4" />,
        color: "from-orange-400 to-orange-600",
        gradient: "bg-gradient-to-br from-orange-50 to-orange-100",
        category: "Web",
      },
      {
        id: 2,
        title: "Salary Predictor",
        description: "ML-backed salary predictions with interactive visualizations.",
        technologies: ["Python", "Streamlit", "RandomForest", "Pandas"],
        features: ["Model pipelines", "Plotly charts", "User calibration"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format&q=80",
        icon: <Brain className="w-4 h-4" />,
        color: "from-orange-500 to-red-500",
        gradient: "bg-gradient-to-br from-orange-50 to-red-50",
        category: "Machine Learning",
      },
      {
        id: 3,
        title: "E-Commerce Platform",
        description: "Scalable store with Stripe payments and admin dashboard.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
        features: ["Secure checkout", "Inventory", "Search & filters"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop&auto=format&q=80",
        icon: <Database className="w-4 h-4" />,
        color: "from-orange-600 to-amber-600",
        gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
        category: "Full Stack",
      },
      {
        id: 4,
        title: "Task Manager",
        description: "Realtime board with drag & drop and team permissions.",
        technologies: ["React.js", "Socket.io", "Tailwind", "Redux"],
        features: ["Realtime sync", "Kanban UX", "Team roles"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=700&fit=crop&auto=format&q=80",
        icon: <Smartphone className="w-4 h-4" />,
        color: "from-amber-500 to-orange-500",
        gradient: "bg-gradient-to-br from-amber-50 to-orange-50",
        category: "Productivity",
      },
      {
        id: 5,
        title: "Weather Analytics",
        description: "Maps & trends with historical analysis and alerts.",
        technologies: ["React.js", "Chart.js", "PWA", "TypeScript"],
        features: ["Map layers", "Historical trends", "Push alerts"],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=700&fit=crop&auto=format&q=80",
        icon: <Globe className="w-4 h-4" />,
        color: "from-orange-400 to-yellow-500",
        gradient: "bg-gradient-to-br from-orange-50 to-yellow-50",
        category: "Data",
      },
      {
        id: 6,
        title: "Social Dashboard",
        description: "Scheduling, analytics and cross-posting for creators.",
        technologies: ["React.js", "Node.js", "Redis", "Cron"],
        features: ["Scheduler", "Engagement analytics", "Multi-platform"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=700&fit=crop&auto=format&q=80",
        icon: <Zap className="w-4 h-4" />,
        color: "from-red-500 to-orange-500",
        gradient: "bg-gradient-to-br from-red-50 to-orange-50",
        category: "Social",
      },
    ],
    []
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 420);
    const m = setTimeout(() => setMounted(true), 80);
    return () => {
      clearTimeout(t);
      clearTimeout(m);
    };
  }, []);

  const startAnimating = (duration = 420) => {
    setIsAnimating(true);
    isAnimatingRef.current = true;
    window.setTimeout(() => {
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }, duration);
  };

  const goToNext = useCallback(() => {
    if (isAnimatingRef.current || projects.length <= 1) return;
    startAnimating();
    setCurrentIndex((p) => (p + 1) % projects.length);
  }, [projects.length]);

  const goToPrev = useCallback(() => {
    if (isAnimatingRef.current || projects.length <= 1) return;
    startAnimating();
    setCurrentIndex((p) => (p === 0 ? projects.length - 1 : p - 1));
  }, [projects.length]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimatingRef.current || index === currentIndex || index < 0 || index >= projects.length) return;
      startAnimating();
      setCurrentIndex(index);
    },
    [currentIndex, projects.length]
  );

  // keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goToNext, goToPrev]);

  // swipe
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchDeltaX.current = 0;
      touchStartX.current = e.touches?.[0]?.clientX ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartX.current == null) return;
      touchDeltaX.current = (e.touches?.[0]?.clientX ?? 0) - (touchStartX.current ?? 0);
    };
    const onTouchEnd = () => {
      if (touchStartX.current == null) return;
      const delta = touchDeltaX.current;
      const threshold = 60;
      if (delta > threshold) goToPrev();
      else if (delta < -threshold) goToNext();
      touchStartX.current = null;
      touchDeltaX.current = 0;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [goToNext, goToPrev]);

  const visible = useMemo(() => {
    if (projects.length === 0) return [];
    if (isMobile) return [{ ...projects[currentIndex], position: "center", offset: 0 }];
    const prev = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    const next = (currentIndex + 1) % projects.length;
    return [
      { ...projects[prev], position: "left", offset: -1 },
      { ...projects[currentIndex], position: "center", offset: 0 },
      { ...projects[next], position: "right", offset: 1 },
    ];
  }, [currentIndex, isMobile, projects]);

  if (isLoading) {
    return (
      <section id="projects" className="py-12 relative bg-gradient-to-br from-gray-50 overflow-hidden">
        <div className="section-container">
          <div className="h-24 rounded-xl bg-white/40 animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12 relative bg-gradient-to-br from-gray-50 via-orange-50/30 to-orange-100/20 overflow-hidden">
      {/* background doodles */}
      <svg className="absolute -left-8 top-10 opacity-10 pointer-events-none" width="220" height="200" viewBox="0 0 220 200" fill="none" aria-hidden>
        <path d="M10 150 Q110 10 210 150" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="absolute right-[-40px] bottom-[-20px] opacity-10 pointer-events-none" width="260" height="220" viewBox="0 0 260 220" fill="none" aria-hidden>
        <path d="M20 170 Q130 40 240 170" stroke="#FDBA74" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="section-container relative z-10">
        {/* Fixed header - always visible */}
        <div className={cn(
          "transition-all duration-700",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        )}>
          <BigAskHeader />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* arrows */}
          {!isMobile && projects.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                disabled={isAnimating}
                aria-label="Previous project"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 rounded-full shadow-md hover:scale-105 transition"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={goToNext}
                disabled={isAnimating}
                aria-label="Next project"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 rounded-full shadow-md hover:scale-105 transition"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}

          {/* cards row — slightly smaller & always extended */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl items-start">
              {visible.map((p, i) => {
                const isCenter = p.position === "center";
                return (
                  <article
                    key={`${p.id}-${p.position}`}
                    className={cn(
                      "bg-white rounded-2xl overflow-hidden shadow transform transition-all duration-300",
                      isCenter ? "scale-[1.02] shadow-lg" : "scale-[0.98] opacity-90",
                      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                    style={{
                      maxWidth: isCenter ? 420 : 360,
                      transitionDelay: `${i * 80}ms`,
                    }}
                    aria-labelledby={`project-${p.id}-title`}
                  >
                    {/* image */}
                    <div className="relative h-44 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/0 to-black/10" aria-hidden />
                      <div className="absolute top-3 left-3 px-2 py-1 bg-white/95 rounded-full text-xs font-semibold text-orange-700 border border-orange-100">
                        {p.category}
                      </div>
                      <div className="absolute right-3 bottom-3 rounded-full bg-white/80 px-2 py-1 text-xs flex items-center gap-2 border">
                        <span className="text-xs">{p.icon}</span>
                        <span className="text-xs font-medium">Preview</span>
                      </div>
                    </div>

                    {/* content — details visible */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center text-white shadow", `bg-gradient-to-r ${p.color}`)}>
                          {p.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 id={`project-${p.id}-title`} className="text-lg font-semibold text-gray-800 truncate">
                              {p.title}
                            </h3>
                            <div className="ml-auto text-xs text-gray-500 flex items-center gap-1">
                              <Info className="w-4 h-4" /> Details visible
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{p.description}</p>
                        </div>
                      </div>

                      {/* tech tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.technologies.map((t, idx) => (
                          <TechTag key={`${t}-${idx}`} label={t} highlighted={idx < 2} />
                        ))}
                      </div>

                      {/* details (always open but compact) */}
                      <div className="mt-3 text-sm text-gray-700 overflow-hidden max-h-[160px]">
                        <div className="pt-2">
                          <h4 className="text-xs font-semibold text-gray-600 mb-1">Key features</h4>
                          <ul className="text-xs space-y-1">
                            {p.features.map((f, fi) => (
                              <li key={fi} className="flex items-start gap-2">
                                <span className="text-orange-500 mt-1">•</span>
                                <span className="leading-tight">{f}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-3 flex gap-2 items-center">
                            <a className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-md text-sm hover:scale-105 transition" href="#" role="button">
                              <Github className="w-4 h-4" /> Code
                            </a>
                            <a className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm text-orange-700 hover:bg-orange-50 transition" href="#" role="button">
                              <ExternalLink className="w-4 h-4" /> Live
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* indicators */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                disabled={isAnimating}
                aria-label={`Go to project ${i + 1}`}
                className={cn(
                  "w-3 h-3 rounded-full transition-transform",
                  i === currentIndex ? "scale-125 bg-gradient-to-r from-orange-500 to-orange-600 shadow" : "bg-gray-200"
                )}
              />
            ))}
          </div>

          <div className="text-center mt-3 text-sm text-gray-500">
            <strong className="text-orange-600">{currentIndex + 1}</strong> / <strong>{projects.length}</strong>
          </div>

          {/* mobile nav */}
          {isMobile && projects.length > 1 && (
            <div className="flex justify-center gap-3 mt-4">
              <button onClick={goToPrev} disabled={isAnimating} className="px-3 py-2 bg-white rounded-md shadow">
                Prev
              </button>
              <button onClick={goToNext} disabled={isAnimating} className="px-3 py-2 bg-white rounded-md shadow">
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;