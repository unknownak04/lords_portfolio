
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showThemeSelector, setShowThemeSelector] = useState(true);
  const { setTheme } = useTheme();

  const handleThemeSelect = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme);
    setShowThemeSelector(false);
    
    // Add a small delay before showing the main content
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Skip theme selection if user has already selected a theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setShowThemeSelector(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  if (isLoading || showThemeSelector) {
    return <PageLoader onThemeSelect={handleThemeSelect} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-0"> {/* Remove spacing between sections */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
