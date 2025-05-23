
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 border-b border-border">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">N</span>
          </div>
          <h1 className="text-xl font-bold font-mono tracking-tight">NexusWatch</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
