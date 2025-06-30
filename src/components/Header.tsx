
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="w-full py-4 px-6 border-b border-border">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/sources" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <h1 className="text-xl font-bold font-mono tracking-tight">NexusWatch</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/sources" 
              className="text-sm font-mono text-primary font-semibold"
            >
              Explorer les sources
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {user && (
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{user.email}</span>
            </div>
          )}
          
          <ThemeToggle />
          
          {user && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="flex items-center space-x-1"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Déconnexion</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
