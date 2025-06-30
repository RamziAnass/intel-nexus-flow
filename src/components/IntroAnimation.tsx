
import React, { useEffect, useState } from 'react';

const IntroAnimation: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 500);

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
      {/* Grille d'arrière-plan organisée */}
      <div className="absolute inset-0">
        <div className="w-full h-full opacity-5 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary))_1px,_transparent_0)] bg-[length:40px_40px]"></div>
        <div className="w-full h-full opacity-10 bg-[linear-gradient(90deg,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:80px_80px]"></div>
      </div>
      
      {/* Contenu principal centré */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Logo principal avec animation */}
        <div className="relative">
          <div className="w-24 h-24 bg-primary rounded-xl flex items-center justify-center transform rotate-3 shadow-2xl animate-pulse-slow">
            <span className="text-primary-foreground font-bold text-4xl transform -rotate-3">N</span>
          </div>
          
          {/* Cercles orbitaux */}
          <div className="absolute inset-0">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 120 + step * 90}deg) translateY(-50px)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Titre avec animation de frappe */}
        <div className="text-center">
          <h1 className="text-5xl font-bold font-mono mb-2 tracking-tight text-primary">
            NEXUS<span className="text-accent">WATCH</span>
          </h1>
          <p className="text-lg text-muted-foreground font-mono">
            Intelligence des sources
          </p>
        </div>
        
        {/* Barre de progression */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${(step + 1) * 25}%` }}
          />
        </div>
        
        {/* Indicateur de chargement */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-primary rounded-full transition-all duration-300 ${
                  step >= i ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-mono ml-4">
            Initialisation...
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
