
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="bg-card border-border w-24 font-mono text-xs"
    >
      {isDarkMode ? 'MODE JOUR' : 'MODE NUIT'}
    </Button>
  );
};

export default ThemeToggle;
