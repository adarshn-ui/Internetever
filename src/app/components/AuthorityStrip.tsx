import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

function CountUp({ end, suffix = '', duration = 2000, trigger }: { end: number; suffix?: string; duration?: number; trigger?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    setCount(0);
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, trigger]);

  return <>{count}{suffix}</>;
}

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 200, suffix: '+', label: 'UAE & Global Customers' },
  { value: 10, suffix: '+', label: 'Years In Market' },
];

export function AuthorityStrip() {
  const [inView, setInView] = useState(false);

  return (
    <section className="bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] py-12 relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }}></div>
      
      {/* Vibrant Static Accents - NO ANIMATION */}
      <div 
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 245, 248, 0.3), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              onViewportEnter={() => setInView(true)}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl text-white mb-2 font-light group-hover:scale-105 transition-transform">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2000} trigger={inView} />
              </div>
              <div className="text-xs md:text-sm text-white/80 font-light tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}