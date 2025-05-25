
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-mono text-muted-foreground">
            © 2024 ERA Sourcing - Enhanced Research & Analysis Platform
          </p>
          <p className="text-xs font-mono text-muted-foreground mt-2">
            Intelligence stratégique et veille géopolitique
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
