"use client";

import { useEffect, useState } from "react";

export default function ScrollTrace() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hook zone starts at ~96% of viewport (40px from bottom)
  const hookZoneStart = 96;
  const isInHookZone = scrollProgress >= hookZoneStart;
  
  // Progress line height (stops at hook zone start)
  const lineHeight = Math.min(scrollProgress, hookZoneStart);

  return (
    <>
      {/* Background track */}
      <div className="side-trace" />
      
      {/* Background hook */}
      <div className="side-trace-hook">
        <svg viewBox="0 0 30 40">
          <path d="M 0 0 L 0 15 Q 0 25, 10 30 L 28 38" />
        </svg>
      </div>
      
      {/* Starting dot (fixed at top) */}
      <div className="trace-dot" />
      
      {/* Progress line */}
      <div 
        className="side-trace-progress" 
        style={{ height: `calc(${lineHeight} * (100vh - 140px) / 100)` }}
      />
      
      {/* Progress hook (lights up when reached) */}
      <div 
        className="side-trace-hook-progress"
        style={{ opacity: isInHookZone ? 1 : 0 }}
      >
        <svg viewBox="0 0 30 40">
          <path d="M 0 0 L 0 15 Q 0 25, 10 30 L 28 38" />
        </svg>
      </div>
    </>
  );
}

