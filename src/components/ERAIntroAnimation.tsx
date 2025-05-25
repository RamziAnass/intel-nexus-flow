
import React, { useEffect, useState } from 'react';

interface ERAIntroAnimationProps {
  onComplete?: () => void;
}

const ERAIntroAnimation: React.FC<ERAIntroAnimationProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 border-4 border-primary rounded-full flex items-center justify-center animate-pulse">
            <div className="w-24 h-24 border-2 border-accent rounded-full"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold font-mono mb-4 tracking-tight text-primary">
          ERA
        </h1>
        <p className="text-lg text-muted-foreground font-mono">
          Enhanced Research & Analysis
        </p>
        <div className="mt-4">
          <div className="w-64 h-1 bg-muted rounded-full mx-auto">
            <div className="h-1 bg-primary rounded-full animate-pulse" style={{width: '60%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERAIntroAnimation;
