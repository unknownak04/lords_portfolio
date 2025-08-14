import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface PageLoaderProps {
  onThemeSelect?: (theme: 'light' | 'dark') => void;
}

const RocketIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rocket Body */}
    <path
      d="M50 10 L60 70 L50 75 L40 70 Z"
      fill="currentColor"
      opacity="0.8"
    />
    {/* Rocket Nose */}
    <path
      d="M50 10 L45 25 L55 25 Z"
      fill="currentColor"
    />
    {/* Rocket Fins */}
    <path
      d="M40 60 L35 75 L40 70 Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M60 60 L65 75 L60 70 Z"
      fill="currentColor"
      opacity="0.6"
    />
    {/* Window */}
    <circle
      cx="50"
      cy="35"
      r="4"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
);

const PageLoader: React.FC<PageLoaderProps> = ({ onThemeSelect }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | null>(null);
  const [rocketPosition, setRocketPosition] = useState(0);
  
  const loadingSteps = [
    { text: "Initializing systems...", icon: "🔧" },
    { text: "Loading components...", icon: "⚙️" },
    { text: "Preparing launch...", icon: "🚀" },
    { text: "Final checks...", icon: "✅" },
    { text: "Ready for takeoff!", icon: "🌟" }
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowThemeSelector(true), 800);
          return 100;
        }
        return prev + 1.2;
      });
    }, 40);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % loadingSteps.length);
    }, 1000);

    const rocketInterval = setInterval(() => {
      setRocketPosition(prev => (prev + 0.5) % 100);
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearInterval(rocketInterval);
    };
  }, []);

  const handleThemeSelect = (theme: 'light' | 'dark') => {
    setSelectedTheme(theme);
    setTimeout(() => {
      onThemeSelect?.(theme);
    }, 1000);
  };

  if (showThemeSelector && !selectedTheme) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)
              `
            }}
          />
        </div>

        {/* Theme Selection */}
        <div className="relative z-10 text-center">
          <div className="mb-8 animate-bounce-in">
            <div className="relative">
              <img 
                src="/logs.png" 
                alt="Aavishkar Kamble" 
                className="h-20 sm:h-24 mx-auto opacity-90 drop-shadow-lg animate-float" 
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-slide-in-from-bottom font-display">
            Choose Your Experience
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 animate-slide-in-from-bottom delay-200">
            Select your preferred theme
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in delay-400">
            {/* Light Mode */}
            <button
              onClick={() => handleThemeSelect('light')}
              className="group relative p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[180px]"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <Sun className="w-6 h-6 text-gray-700 group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Light Mode</h3>
              <p className="text-gray-600 text-sm">Clean & Bright</p>
            </button>

            {/* Dark Mode */}
            <button
              onClick={() => handleThemeSelect('dark')}
              className="group relative p-6 bg-gray-900 border-2 border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[180px]"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-800 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <Moon className="w-6 h-6 text-gray-300 group-hover:-rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dark Mode</h3>
              <p className="text-gray-400 text-sm">Sleek & Modern</p>
            </button>
          </div>

          <div className="mt-8 animate-fade-in delay-600">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You can change this anytime in the navigation bar
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedTheme) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="text-center animate-zoom-in">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-2 border-gray-300 dark:border-gray-600 rounded-full animate-spin"></div>
            <div className="absolute inset-2 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
              {selectedTheme === 'light' ? (
                <Sun className="w-6 h-6 text-gray-700 animate-pulse" />
              ) : (
                <Moon className="w-6 h-6 text-gray-300 animate-pulse" />
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Loading {selectedTheme === 'light' ? 'Light' : 'Dark'} Mode...
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Preparing your experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>
      
      <div className="relative z-10 text-center">
        {/* Logo Section */}
        <div className="mb-8 relative">
          <img 
            src="/logs.png" 
            alt="Aavishkar Kamble" 
            className="h-16 sm:h-20 mx-auto opacity-90 drop-shadow-lg animate-float" 
          />
        </div>

        {/* Rocket Animation */}
        <div className="mb-8 relative h-32 flex items-center justify-center">
          <div className="relative w-24 h-24">
            {/* Launch Pad */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-400 rounded-full opacity-50"></div>
            
            {/* Rocket */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out"
              style={{ 
                bottom: `${rocketPosition}%`,
                transform: `translateX(-50%) rotate(${rocketPosition * 0.5}deg)`
              }}
            >
              <RocketIcon className="w-8 h-8 text-gray-700" />
              
              {/* Exhaust Trail */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-1 bg-gradient-to-b from-gray-400 to-transparent opacity-60 animate-pulse" 
                     style={{ height: `${Math.min(rocketPosition * 0.5, 20)}px` }}></div>
              </div>
            </div>

            {/* Stars */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gray-500 rounded-full animate-pulse"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${10 + Math.random() * 40}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 animate-slide-in-from-bottom font-display">
            Aavishkar Kamble
          </h1>
          
          <div className="h-6 flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 animate-slide-in-from-left delay-300">
              <span className="text-lg animate-bounce" style={{ animationDelay: '0s' }}>
                {loadingSteps[currentStep]?.icon}
              </span>
              <p className="text-lg text-gray-600 font-medium">
                {loadingSteps[currentStep]?.text}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto mb-8 animate-slide-in-from-right delay-500">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-wave"></div>
            </div>
          </div>
          
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-gray-500">Loading...</span>
            <span className="text-gray-700 font-bold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Steps Indicator */}
        <div className="flex justify-center space-x-2 mb-8 animate-zoom-in delay-700">
          {loadingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index <= currentStep 
                  ? 'bg-gray-700 scale-125' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <div className="animate-fade-in delay-1000">
          <p className="text-sm text-gray-500 italic max-w-md mx-auto">
            "Launching dreams into reality, one line of code at a time"
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;