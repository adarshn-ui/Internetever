import { ImageWithFallback } from './figma/ImageWithFallback';

export function Logo({ className = "h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A237E" />
          <stop offset="50%" stopColor="#8B4789" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
      </defs>
      
      <g>
        <text 
          x="18" 
          y="33" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="26" 
          fontWeight="300" 
          letterSpacing="-1.2"
          fill="#2D2520"
        >
          internet
        </text>
        <text 
          x="91" 
          y="33" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="26" 
          fontWeight="600" 
          letterSpacing="-1.2"
          fill="url(#logoGradient)"
        >
          ever
        </text>
      </g>
    </svg>
  );
}

// Minimal version for smaller spaces
export function LogoMark({ className = "h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="markGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A237E" />
          <stop offset="50%" stopColor="#8B4789" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
      </defs>
      
      <g>
        <text 
          x="18" 
          y="33" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="26" 
          fontWeight="300" 
          letterSpacing="-1.2"
          fill="#2D2520"
        >
          internet
        </text>
        <text 
          x="91" 
          y="33" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="26" 
          fontWeight="600" 
          letterSpacing="-1.2"
          fill="url(#markGradient)"
        >
          ever
        </text>
      </g>
    </svg>
  );
}