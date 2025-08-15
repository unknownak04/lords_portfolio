// import React, { useState, useEffect } from 'react';

// interface PageLoaderProps {
//   onThemeSelect?: (theme: 'light' | 'dark') => void;
// }

// const PageLoader: React.FC<PageLoaderProps> = ({ onThemeSelect }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             onThemeSelect?.('light'); // Always use light mode
//           }, 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 50);

//     return () => {
//       clearInterval(progressInterval);
//     };
//   }, [onThemeSelect]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-black mb-8">
//           Loading
//         </h1>
        
//         {/* Simple progress bar */}
//         <div className="w-64 mx-auto">
//           <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
//             <div 
//               className="h-full bg-black rounded-full transition-all duration-300 ease-out"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//           <div className="mt-2 text-sm text-gray-600">
//             {Math.round(progress)}%
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageLoader;

import React, { useState, useEffect } from 'react';

interface PageLoaderProps {
  onThemeSelect?: (theme: 'light' | 'dark') => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onThemeSelect }) => {
  const [progress, setProgress] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onThemeSelect?.('light');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const rotationInterval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 20);

    return () => {
      clearInterval(progressInterval);
      clearInterval(rotationInterval);
    };
  }, [onThemeSelect]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
      {/* Technical grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="black" strokeWidth="0.5" />
          </pattern>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.5" fill="black" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Orbital mechanics diagram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-[600px] h-[600px]" viewBox="0 0 600 600">
          {/* Orbital paths */}
          <g transform="translate(300,300)">
            {/* Elliptical orbits */}
            <ellipse cx="0" cy="0" rx="250" ry="180" fill="none" stroke="black" strokeWidth="0.5" 
              opacity="0.2" transform={`rotate(${rotation * 0.5})`} />
            <ellipse cx="0" cy="0" rx="200" ry="140" fill="none" stroke="black" strokeWidth="0.5" 
              opacity="0.3" transform={`rotate(${-rotation * 0.7})`} />
            <ellipse cx="0" cy="0" rx="150" ry="100" fill="none" stroke="black" strokeWidth="0.5" 
              opacity="0.4" transform={`rotate(${rotation})`} />
            
            {/* Orbital nodes */}
            <circle cx={Math.cos(rotation * 0.01) * 250} cy={Math.sin(rotation * 0.01) * 180} 
              r="3" fill="black" opacity={progress > 20 ? 0.8 : 0.2} />
            <circle cx={Math.cos(-rotation * 0.015) * 200} cy={Math.sin(-rotation * 0.015) * 140} 
              r="2" fill="black" opacity={progress > 40 ? 0.8 : 0.2} />
            <circle cx={Math.cos(rotation * 0.02) * 150} cy={Math.sin(rotation * 0.02) * 100} 
              r="2" fill="black" opacity={progress > 60 ? 0.8 : 0.2} />
          </g>
        </svg>
      </div>

      {/* Main technical schematic */}
      <div className="relative z-10">
        <svg className="w-[400px] h-[400px]" viewBox="0 0 400 400">
          {/* Starship technical drawing */}
          <g transform="translate(200,200)">
            {/* Main vehicle structure */}
            <g opacity={progress > 10 ? 1 : 0.2} style={{ transition: 'opacity 0.5s' }}>
              {/* Fuselage cross-section */}
              <rect x="-20" y="-80" width="40" height="120" fill="none" stroke="black" strokeWidth="1.5" />
              
              {/* Internal structure lines */}
              <line x1="-20" y1="-60" x2="20" y2="-60" stroke="black" strokeWidth="0.5" />
              <line x1="-20" y1="-40" x2="20" y2="-40" stroke="black" strokeWidth="0.5" />
              <line x1="-20" y1="-20" x2="20" y2="-20" stroke="black" strokeWidth="0.5" />
              <line x1="-20" y1="0" x2="20" y2="0" stroke="black" strokeWidth="0.5" />
              <line x1="-20" y1="20" x2="20" y2="20" stroke="black" strokeWidth="0.5" />
              
              {/* Nose cone geometry */}
              <path d="M -20 -80 L 0 -110 L 20 -80" fill="none" stroke="black" strokeWidth="1.5" />
              <line x1="0" y1="-110" x2="0" y2="-80" stroke="black" strokeWidth="0.5" strokeDasharray="2,2" />
            </g>

            {/* Engine cluster schematic */}
            <g opacity={progress > 30 ? 1 : 0.2} style={{ transition: 'opacity 0.5s' }}>
              {/* Center engine */}
              <circle cx="0" cy="50" r="8" fill="none" stroke="black" strokeWidth="1" />
              <circle cx="0" cy="50" r="6" fill="none" stroke="black" strokeWidth="0.5" />
              
              {/* Outer engines in hexagonal pattern */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <circle cx="0" cy="65" r="6" fill="none" stroke="black" strokeWidth="1" />
                  <circle cx="0" cy="65" r="4" fill="none" stroke="black" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="0" y2="59" stroke="black" strokeWidth="0.5" />
                </g>
              ))}
              
              {/* Gimbal range indicators */}
              <path d="M -15 45 A 15 15 0 0 1 15 45" fill="none" stroke="black" strokeWidth="0.3" strokeDasharray="1,2" />
            </g>

            {/* Grid fins technical detail */}
            <g opacity={progress > 50 ? 1 : 0.2} style={{ transition: 'opacity 0.5s' }}>
              {/* Left fin */}
              <g transform="translate(-35, -50)">
                <rect x="0" y="0" width="12" height="20" fill="none" stroke="black" strokeWidth="1" />
                <line x1="3" y1="0" x2="3" y2="20" stroke="black" strokeWidth="0.5" />
                <line x1="6" y1="0" x2="6" y2="20" stroke="black" strokeWidth="0.5" />
                <line x1="9" y1="0" x2="9" y2="20" stroke="black" strokeWidth="0.5" />
                <line x1="0" y1="5" x2="12" y2="5" stroke="black" strokeWidth="0.5" />
                <line x1="0" y1="10" x2="12" y2="10" stroke="black" strokeWidth="0.5" />
                <line x1="0" y1="15" x2="12" y2="15" stroke="black" strokeWidth="0.5" />
              </g>
              
              {/* Right fin */}
              <g transform="translate(23, -50)">
                <rect x="0" y="0" width="12" height="20" fill="none" stroke="black" strokeWidth="1" />
                <line x1="3" y1="0" x2="3" y2="20" stroke="black" strokeWidth="0.5" />
                <line x1="6" y1="0" x2="6" y2="20" stroke="black" strokeWidth="0.5" />
                <line x1="9" y1="0" x2="9" y2="20" stroke="black" strokeWidth="0.5" />
                <line x1="0" y1="5" x2="12" y2="5" stroke="black" strokeWidth="0.5" />
                <line x1="0" y1="10" x2="12" y2="10" stroke="black" strokeWidth="0.5" />
                <line x1="0" y1="15" x2="12" y2="15" stroke="black" strokeWidth="0.5" />
              </g>
            </g>

            {/* Heat shield tiles pattern */}
            <g opacity={progress > 70 ? 1 : 0.2} style={{ transition: 'opacity 0.5s' }}>
              {[...Array(8)].map((_, i) => (
                <g key={i}>
                  <rect x="-10" y={-70 + i * 10} width="5" height="8" 
                    fill="none" stroke="black" strokeWidth="0.3" />
                  <rect x="-5" y={-70 + i * 10} width="5" height="8" 
                    fill="none" stroke="black" strokeWidth="0.3" />
                  <rect x="0" y={-70 + i * 10} width="5" height="8" 
                    fill="none" stroke="black" strokeWidth="0.3" />
                  <rect x="5" y={-70 + i * 10} width="5" height="8" 
                    fill="none" stroke="black" strokeWidth="0.3" />
                </g>
              ))}
            </g>

            {/* Technical annotations and measurements */}
            <g opacity={progress > 40 ? 0.5 : 0} style={{ transition: 'opacity 0.5s' }}>
              {/* Dimension lines */}
              <line x1="-40" y1="-110" x2="-40" y2="80" stroke="black" strokeWidth="0.3" />
              <line x1="-42" y1="-110" x2="-38" y2="-110" stroke="black" strokeWidth="0.3" />
              <line x1="-42" y1="80" x2="-38" y2="80" stroke="black" strokeWidth="0.3" />
              
              <line x1="-30" y1="90" x2="30" y2="90" stroke="black" strokeWidth="0.3" />
              <line x1="-30" y1="88" x2="-30" y2="92" stroke="black" strokeWidth="0.3" />
              <line x1="30" y1="88" x2="30" y2="92" stroke="black" strokeWidth="0.3" />
              
              {/* Angular measurements */}
              <path d="M 30 -50 A 50 50 0 0 1 50 -30" fill="none" stroke="black" strokeWidth="0.3" />
              <circle cx="35" cy="-45" r="1" fill="black" />
              <circle cx="45" cy="-35" r="1" fill="black" />
            </g>

            {/* Trajectory calculations visualization */}
            <g opacity={progress > 60 ? 1 : 0} style={{ transition: 'opacity 0.5s' }}>
              <path d="M -100 30 Q -50 -20 0 -40 Q 50 -60 100 -30" 
                fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="4,2" />
              <circle cx={-100 + progress * 2} cy={30 - progress * 0.7} r="2" fill="black" />
            </g>

            {/* Aerodynamic flow lines */}
            <g opacity={progress > 80 ? 0.3 : 0} style={{ transition: 'opacity 0.5s' }}>
              <path d="M -60 -100 Q -25 -90 -25 -70" fill="none" stroke="black" strokeWidth="0.5" />
              <path d="M -60 -80 Q -25 -75 -25 -60" fill="none" stroke="black" strokeWidth="0.5" />
              <path d="M -60 -60 Q -25 -60 -25 -50" fill="none" stroke="black" strokeWidth="0.5" />
              <path d="M 60 -100 Q 25 -90 25 -70" fill="none" stroke="black" strokeWidth="0.5" />
              <path d="M 60 -80 Q 25 -75 25 -60" fill="none" stroke="black" strokeWidth="0.5" />
              <path d="M 60 -60 Q 25 -60 25 -50" fill="none" stroke="black" strokeWidth="0.5" />
            </g>
          </g>

          {/* Complex geometric overlays */}
          <g opacity="0.2">
            {/* Golden ratio spiral */}
            <path d="M 200 200 Q 250 200 250 150 Q 250 100 200 100 Q 150 100 150 150 Q 150 250 250 250"
              fill="none" stroke="black" strokeWidth="0.5" />
            
            {/* Technical circles */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="black" strokeWidth="0.3" strokeDasharray="10,5" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="black" strokeWidth="0.3" strokeDasharray="5,5" />
          </g>

          {/* Data visualization elements */}
          <g transform="translate(50, 350)">
            {[...Array(20)].map((_, i) => (
              <rect key={i} x={i * 15} y={0} width="10" 
                height={Math.sin(i * 0.5 + progress * 0.1) * 10 + 15}
                fill={i * 5 < progress ? "black" : "none"}
                stroke="black" strokeWidth="0.5"
                opacity={i * 5 < progress ? 0.8 : 0.3} />
            ))}
          </g>
        </svg>

        {/* Minimal progress indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64">
          <div className="relative h-[1px] bg-black/20">
            <div 
              className="absolute h-full bg-black transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
            <div 
              className="absolute w-2 h-2 bg-black rounded-full"
              style={{ 
                left: `${progress}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
          <div className="mt-2 text-center">
            <span className="text-[10px] font-mono text-black/60">
              {progress.toString().padStart(3, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Corner technical indicators */}
      <div className="absolute top-4 left-4">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <g opacity="0.4">
            <line x1="0" y1="30" x2="60" y2="30" stroke="black" strokeWidth="0.5" />
            <line x1="30" y1="0" x2="30" y2="60" stroke="black" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="20" fill="none" stroke="black" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="10" fill="none" stroke="black" strokeWidth="0.5" />
            <circle cx="30" cy="30" r={progress / 5} fill="black" opacity="0.3" />
          </g>
        </svg>
      </div>

      <div className="absolute top-4 right-4">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <g opacity="0.4">
            {[0, 45, 90, 135].map(angle => (
              <line key={angle} x1="30" y1="30" 
                x2={30 + Math.cos(angle * Math.PI / 180) * 25} 
                y2={30 + Math.sin(angle * Math.PI / 180) * 25}
                stroke="black" strokeWidth="0.5" />
            ))}
            <polygon points="30,10 50,30 30,50 10,30" fill="none" stroke="black" strokeWidth="0.5" />
            <polygon points="30,20 40,30 30,40 20,30" fill="black" opacity={progress > 50 ? 0.3 : 0} />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-4 left-4">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <g opacity="0.4">
            <rect x="10" y="10" width="40" height="40" fill="none" stroke="black" strokeWidth="0.5" 
              transform={`rotate(${rotation * 0.2} 30 30)`} />
            <rect x="20" y="20" width="20" height="20" fill="none" stroke="black" strokeWidth="0.5" 
              transform={`rotate(${-rotation * 0.3} 30 30)`} />
            <circle cx="30" cy="30" r="3" fill="black" opacity="0.5" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-4 right-4">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <g opacity="0.4">
            <path d="M 30 10 L 50 25 L 50 45 L 30 60 L 10 45 L 10 25 Z" 
              fill="none" stroke="black" strokeWidth="0.5" />
            <path d="M 30 20 L 40 27.5 L 40 37.5 L 30 45 L 20 37.5 L 20 27.5 Z" 
              fill="black" opacity={progress > 75 ? 0.3 : 0} />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PageLoader;