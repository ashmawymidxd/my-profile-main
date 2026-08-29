import { useState, useEffect, useCallback } from 'react';
import { ChevronUp, ArrowUp, Sparkles } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const updateScrollInfo = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    setScrollProgress(Math.min(progress, 100));
    setIsVisible(scrollTop > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollInfo, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollInfo);
  }, [updateScrollInfo]);

  // Show tooltip briefly when button first appears
  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        const hideTimer = setTimeout(() => setShowTooltip(false), 2000);
        return () => clearTimeout(hideTimer);
      }, 500);
      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Calculate stroke-dashoffset for circular progress
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
      }`}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          showTooltip
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="relative bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
          Back to top
          <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-foreground" />
        </div>
      </div>

      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-14 h-14 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        {/* Background */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isHovered
              ? 'bg-gradient-to-br from-primary to-primary-glow shadow-2xl shadow-primary/40 scale-105'
              : 'bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/10'
          }`}
        />

        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 50 50"
        >
          {/* Background circle */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/10"
          />
          {/* Progress circle */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150 ease-out"
            style={{
              filter: isHovered ? 'drop-shadow(0 0 6px rgba(var(--primary), 0.5))' : 'none',
            }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
            </linearGradient>
          </defs>
        </svg>

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div
            className={`transition-all duration-500 ${
              isHovered ? 'text-white scale-110 -translate-y-0.5' : 'text-primary'
            }`}
          >
            <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
          </div>
        </div>

        {/* Sparkle effects on hover */}
        {isHovered && (
          <>
            <Sparkles
              className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-pulse"
              style={{ animationDuration: '1s' }}
            />
            <Sparkles
              className="absolute -bottom-1 -left-1 w-3 h-3 text-cyan-400 animate-pulse"
              style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}
            />
          </>
        )}

        {/* Percentage text on hover */}
        <div
          className={`absolute -top-8 left-1/2 -translate-x-1/2 transition-all duration-300 ${
            isHovered
              ? 'opacity-100 -translate-y-1'
              : 'opacity-0 translate-y-0'
          }`}
        >
          <div className="bg-foreground text-background text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;