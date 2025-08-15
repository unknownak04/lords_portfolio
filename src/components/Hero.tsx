import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { ArrowRight } from "lucide-react";

import LottieAnimation from "./LottieAnimation";



const Hero = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLImageElement>(null);

  const [lottieData, setLottieData] = useState<any>(null);

  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {

    // Check if mobile on mount and when window resizes

    const checkMobile = () => {

      setIsMobile(window.innerWidth < 768);

    };

    

    checkMobile();

    window.addEventListener('resize', checkMobile);

    

    return () => window.removeEventListener('resize', checkMobile);

  }, []);



  useEffect(() => {

    fetch('/loop-header.lottie')

      .then(response => response.json())

      .then(data => setLottieData(data))

      .catch(error => console.error("Error loading Lottie animation:", error));

  }, []);



  useEffect(() => {

    // Skip effect on mobile

    if (isMobile) return;

    

    const handleMouseMove = (e: MouseEvent) => {

      if (!containerRef.current || !imageRef.current) return;

      

      const {

        left,

        top,

        width,

        height

      } = containerRef.current.getBoundingClientRect();

      const x = (e.clientX - left) / width - 0.5;

      const y = (e.clientY - top) / height - 0.5;



      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;

    };

    

    const handleMouseLeave = () => {

      if (!imageRef.current) return;

      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;

    };

    

    const container = containerRef.current;

    if (container) {

      container.addEventListener("mousemove", handleMouseMove);

      container.addEventListener("mouseleave", handleMouseLeave);

    }

    

    return () => {

      if (container) {

        container.removeEventListener("mousemove", handleMouseMove);

        container.removeEventListener("mouseleave", handleMouseLeave);

      }

    };

  }, [isMobile]);

  

  useEffect(() => {

    // Skip parallax on mobile

    if (isMobile) return;

    

    const handleScroll = () => {

      const scrollY = window.scrollY;

      const elements = document.querySelectorAll('.parallax');

      elements.forEach(el => {

        const element = el as HTMLElement;

        const speed = parseFloat(element.dataset.speed || '0.1');

        const yPos = -scrollY * speed;

        element.style.setProperty('--parallax-y', `${yPos}px`);

      });

    };

    

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);

  }, [isMobile]);

  

  return (

    <section 

      className="overflow-hidden relative bg-cover" 

      id="hero" 

      style={{

        backgroundImage: 'url("/Header-background.webp")',

        backgroundPosition: isMobile ? 'center center' : 'center 30%', 

        height: isMobile ? 'auto' : '100vh',

        minHeight: isMobile ? '100vh' : 'auto',

        paddingTop: isMobile ? '80px' : '100px', // Account for navbar

        paddingBottom: isMobile ? '40px' : '60px',

        paddingLeft: isMobile ? '16px' : '20px',

        paddingRight: isMobile ? '16px' : '20px'

      }}

    >

      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>

      

      <div className="container px-4 sm:px-6 lg:px-8 h-full flex items-center" ref={containerRef}>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center w-full">

          <div className="w-full lg:w-1/2">

              <div 

                className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-slide-in-up inline-flex items-center px-4 py-2 text-sm rounded-full glass-morphism hover:animate-glow-pulse" 

                style={{ animationDelay: "0.1s" }}

              >

                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white mr-2 text-xs animate-float">👋</span>

                <span className="font-medium">Hello! I'm Aavishkar</span>

              </div>

            

            <h1 

              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-slide-in-left gradient-text-orange font-display" 

              style={{ animationDelay: "0.3s" }}

            >

              Aavishkar Kamble<br className="hidden sm:inline" />

              <span className="gradient-text-warm">Full Stack Developer</span>

            </h1>

            

            <p 

              style={{ animationDelay: "0.5s" }} 

              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-slide-in-right text-gray-700 font-normal text-base sm:text-lg text-left"

            >

              Computer Science Graduate specializing in MERN Stack, Machine Learning, and modern web technologies.Also a great vibe coder

            </p>

            

            <div 

              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-scale-in" 

              style={{ animationDelay: "0.7s" }}

            >

              <a 

                href="#contact" 

                className="flex items-center justify-center group w-full sm:w-auto text-center" 

                style={{

                  backgroundColor: '#FE5C02',

                  borderRadius: '1440px',

                  boxSizing: 'border-box',

                  color: '#FFFFFF',

                  cursor: 'pointer',

                  fontSize: isMobile ? '16px' : '14px',

                  lineHeight: '20px',

                  padding: isMobile ? '18px 28px' : '16px 24px',

                  border: '1px solid white',

                  minHeight: isMobile ? '48px' : 'auto',

                }}

              >

                Get In Touch

                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />

              </a>

              <a 

                href="#projects" 

                className="flex items-center justify-center group w-full sm:w-auto text-center" 

                style={{

                  backgroundColor: 'transparent',

                  borderRadius: '1440px',

                  boxSizing: 'border-box',

                  color: '#1f2937',

                  cursor: 'pointer',

                  fontSize: isMobile ? '16px' : '14px',

                  lineHeight: '20px',

                  padding: isMobile ? '18px 28px' : '16px 24px',

                  border: '1px solid #d1d5db',

                  minHeight: isMobile ? '48px' : 'auto',

                }}

              >

                View Projects

                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />

              </a>

            </div>

          </div>

          

          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0 flex items-center justify-center" style={{ maxHeight: isMobile ? 'calc(100vh - 300px)' : 'calc(100vh - 200px)' }}>

            {lottieData ? (

              <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>

                <LottieAnimation 

                  animationPath={lottieData} 

                  className="w-full h-auto max-w-lg mx-auto"

                  loop={true}

                  autoplay={true}

                />

              </div>

            ) : (

              <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl animate-fade-in" style={{ animationDelay: "0.9s" }}>

                <img 

                  ref={imageRef} 

                  src="/lovable-uploads/36.jpg" 

                  alt="Aavishkar Kamble - Full Stack Developer" 

                  className="w-auto h-auto max-w-full transition-transform duration-500 ease-out rounded-2xl sm:rounded-3xl" 

                  style={{ 

                    transformStyle: 'preserve-3d',

                    maxHeight: isMobile ? 'calc(100vh - 300px)' : 'calc(100vh - 200px)',

                    objectFit: 'contain'

                  }} 

                />

                <div 

                  className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none" 

                  style={{ 

                    backgroundImage: 'url("/hero-imag.e.jpg")', 

                    backgroundSize: 'cover', 

                    backgroundPosition: 'center', 

                    mixBlendMode: 'overlay', 

                    opacity: 0.3 

                  }}

                ></div>

              </div>

            )}

          </div>

        </div>

      </div>

      

      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>

    </section>

  );

};



export default Hero;