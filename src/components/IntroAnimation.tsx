
import React, { useEffect, useState } from 'react';

const IntroAnimation: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 600);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearInterval(stepTimer);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Grid d'arrière-plan */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-1 opacity-10">
          {Array.from({ length: 96 }).map((_, i) => (
            <div 
              key={i} 
              className="w-8 h-8 border border-primary/20 animate-pulse"
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
        
        {/* Cercles animés */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative">
            {/* Cercle extérieur */}
            <div className="w-48 h-48 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
            
            {/* Cercles intérieurs */}
            <div className="absolute inset-4 border border-accent rounded-full animate-pulse"></div>
            <div className="absolute inset-8 border border-primary rounded-full animate-ping"></div>
            
            {/* Centre avec logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center transform rotate-45">
                <span className="text-primary-foreground font-bold text-2xl transform -rotate-45">N</span>
              </div>
            </div>
            
            {/* Points de données */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`absolute w-3 h-3 bg-accent rounded-full transition-all duration-500 ${
                  step >= i ? 'opacity-100 scale-100' : 'opacity-30 scale-50'
                }`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-80px)`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Texte moderne */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl font-bold font-mono mb-4 tracking-tight text-primary animate-fade-in">
            NEXUS<span className="text-accent">WATCH</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <span className="ml-4 text-sm text-muted-foreground font-mono">
              Initialisation du système
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
