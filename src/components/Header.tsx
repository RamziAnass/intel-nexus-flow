
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-full py-4 px-6 border-b border-border">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <h1 className="text-xl font-bold font-mono tracking-tight">NexusWatch</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-mono transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Cartographie
            </Link>
            <Link 
              to="/sources" 
              className={`text-sm font-mono transition-colors ${
                location.pathname === '/sources' 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Explorer les sources
            </Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
