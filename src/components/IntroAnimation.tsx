
import React, { useEffect, useState } from 'react';

const IntroAnimation: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 border-4 border-primary rounded-full flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-accent rounded-full animate-pulse-slow"></div>
          </div>
          <div className="scanner-line top-0"></div>
        </div>
        <h1 className="text-3xl font-bold font-mono mb-2 tracking-tight text-primary">
          NexusWatch
        </h1>
        <p className="text-sm text-muted-foreground font-mono animate-fade-in">
          Initialisation du système d'analyse...
        </p>
      </div>
    </div>
  );
};

export default IntroAnimation;
