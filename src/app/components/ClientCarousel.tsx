import { motion } from 'motion/react';
import clientLogos from 'figma:asset/8f3d597d5701785c4ed1083645d955e1054ed9d1.png';

export function ClientCarousel() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FFF8F0] via-[#F8F5FF] to-[#FFF5F8] relative overflow-hidden">
      {/* Background Accent - Simplified */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 71, 137, 0.1), transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-[#8B4789]/30 mb-4 shadow-sm">
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828]">
              🤝 Trusted By
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-[#2D2520] mb-2">
            Our Clients
          </h2>
          <p className="text-[#6B5D57] max-w-2xl mx-auto">
            Trusted by leading organizations worldwide
          </p>
        </div>

        {/* Carousel - Pure CSS animation, no JS overhead */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex will-change-transform"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex-shrink-0 px-8">
                  <img
                    src={clientLogos}
                    alt="Client Logos"
                    loading="lazy"
                    className="h-24 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    style={{ willChange: 'opacity' }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFF8F0] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFF8F0] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}