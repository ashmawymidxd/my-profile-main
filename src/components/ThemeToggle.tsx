import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return true;
  const savedTheme = localStorage.getItem('theme');
  // Dark is the default unless the user explicitly chose light
  return savedTheme !== 'light';
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  // Keep the <html> class in sync with state
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="glass-card p-2 border-border/30 hover:border-border/50"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-foreground" />
      ) : (
        <Moon className="w-4 h-4 text-foreground" />
      )}
    </Button>
  );
};

export default ThemeToggle;