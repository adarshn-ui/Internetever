import { motion } from 'motion/react';
import { Logo } from './Logo';

export function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#FFF8F0] via-[#FAF3EB] to-[#F5EDE3] flex items-center justify-center"
    >
      {/* Decorative Background Elements - SIMPLIFIED */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(26, 35, 126, 0.2), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(198, 40, 40, 0.2), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 w-full max-w-2xl px-4">
        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center w-full"
        >
          <Logo className="h-48 mx-auto" />
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex flex-col items-center justify-center gap-3 w-full"
        >
          {/* Animated Dots */}
          <div className="flex gap-2 items-center justify-center w-full">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828]"
              />
            ))}
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[#5A4A42] text-sm tracking-wider text-center w-full"
          >
            Loading Experience
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center w-full"
        >
          <p className="text-[#8B7D77] text-xs tracking-widest uppercase text-center w-full">
            Dubai's Premier Digital Partner
          </p>
        </motion.div>
      </div>

      {/* Animated Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8D5C4]"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </motion.div>
  );
}
