
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 border-t border-border mt-auto">
      <div className="container flex flex-col sm:flex-row justify-between items-center">
        <div className="text-xs text-muted-foreground mb-2 sm:mb-0">
          <span className="font-mono">NexusWatch</span> © {new Date().getFullYear()}
        </div>
        <div className="flex space-x-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">À propos</a>
          <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
