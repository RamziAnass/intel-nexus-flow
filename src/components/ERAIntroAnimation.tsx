
import React, { useEffect, useState } from 'react';

const ERAIntroAnimation: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const phases = [
      { duration: 1000, phase: 1 },
      { duration: 1500, phase: 2 },
      { duration: 2000, phase: 3 },
      { duration: 3500, phase: 4 }
    ];

    phases.forEach((p, index) => {
      setTimeout(() => setPhase(p.phase), p.duration);
    });

    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="animate-pulse-slow">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,10 L50,40 L80,40 L80,70 L20,70 L20,90" 
                    stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="50" cy="10" r="2" fill="currentColor" />
              <circle cx="80" cy="40" r="2" fill="currentColor" />
              <circle cx="20" cy="70" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="text-center relative z-10">
        {/* Central logo/emblem */}
        <div className="relative mb-8">
          <div className={`transition-all duration-1000 ${phase >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            {/* Outer rotating ring */}
            <div className="w-40 h-40 border-4 border-emerald-400 rounded-full flex items-center justify-center relative animate-spin-slow">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Inner hexagon */}
              <div className="w-24 h-24 border-2 border-cyan-400 rounded-full flex items-center justify-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-2xl font-mono">ERA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scanning lines */}
          <div className={`absolute inset-0 transition-all duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scanner"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanner" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Data streams */}
          <div className={`absolute -top-20 -bottom-20 -left-20 -right-20 transition-all duration-700 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            {[...Array(8)].map((_, i) => (
              <div key={i} 
                   className="absolute w-px h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-50"
                   style={{ 
                     left: `${12.5 * (i + 1)}%`,
                     animationDelay: `${i * 0.2}s`,
                     animation: 'pulse 2s infinite'
                   }}>
                <div className="w-2 h-2 bg-emerald-400 rounded-full absolute top-0 animate-bounce" 
                     style={{ animationDelay: `${i * 0.3}s` }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Title with typewriter effect */}
        <div className={`transition-all duration-1000 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4 tracking-tight">
            <span className="text-emerald-400">ERA</span>
            <span className="text-white mx-3">•</span>
            <span className="text-cyan-400">Sourcing</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-500 ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg text-gray-300 font-mono mb-6">
            Enhanced Research & Analysis Platform
          </p>
        </div>

        {/* Loading indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${phase >= 4 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-sm text-gray-400 font-mono mt-4 animate-fade-in">
            Initialisation du système d'analyse avancée...
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-emerald-400 opacity-50"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-emerald-400 opacity-50"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400 opacity-50"></div>
    </div>
  );
};

export default ERAIntroAnimation;
