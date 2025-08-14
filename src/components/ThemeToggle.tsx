import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-xl transition-all duration-500 group overflow-hidden",
        "bg-white/80 dark:bg-slate-800/80 backdrop-blur-md",
        "border border-orange-200/50 dark:border-slate-600/50",
        "hover:border-orange-300 dark:hover:border-slate-500",
        "shadow-lg hover:shadow-xl",
        "hover:scale-110 active:scale-95"
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background Gradient */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        theme === 'light' 
          ? "bg-gradient-to-br from-orange-100 to-yellow-100" 
          : "bg-gradient-to-br from-slate-700 to-slate-800"
      )} />
      
      {/* Icon Container */}
      <div className="relative z-10 w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun 
          className={cn(
            "absolute w-5 h-5 text-orange-500 transition-all duration-500",
            theme === 'light' 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-180 scale-75"
          )}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={cn(
            "absolute w-5 h-5 text-slate-400 dark:text-slate-300 transition-all duration-500",
            theme === 'dark' 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-180 scale-75"
          )}
        />
      </div>
      
      {/* Ripple Effect */}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-active:opacity-100 transition-opacity duration-200",
        theme === 'light' 
          ? "bg-orange-200/50" 
          : "bg-slate-600/50"
      )} />
      
      {/* Glow Effect */}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm",
        theme === 'light' 
          ? "bg-orange-300/30" 
          : "bg-slate-500/30"
      )} />
    </button>
  );
};

export default ThemeToggle;