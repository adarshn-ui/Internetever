import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CTA() {
  const navigate = useNavigate();
  
  return (
    <section className="bg-gradient-to-br from-[#1A237E] via-[#8B4789] to-[#C62828] py-32 relative overflow-hidden">
      {/* OPTIMIZED Background - NO HEAVY 3D TRANSFORMS */}
      <div className="absolute inset-0">
        {/* Simplified Floating Shapes - NO rotateX/rotateY */}
        <motion.div
          className="absolute top-20 left-[10%] w-24 h-24 bg-white/10 border border-white/20 rounded-2xl shadow-lg"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-40 right-[15%] w-20 h-20 bg-white/10 border border-white/20 rounded-xl shadow-lg"
          animate={{
            y: [0, 12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-32 left-[20%] w-16 h-16 bg-white/10 border border-white/20 rounded-xl shadow-lg"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute bottom-20 right-[25%] w-20 h-20 bg-white/10 border border-white/20 rounded-xl shadow-lg"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Floating Rings - SIMPLIFIED */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-32 h-32"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
          <div className="absolute inset-4 border border-white/5 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-[12%] w-28 h-28"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
          <div className="absolute inset-3 border border-white/5 rounded-full"></div>
        </motion.div>

        {/* Mesh Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}></div>
        </div>

        {/* Gradient Orbs - REDUCED BLUR */}
        <div 
          className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 245, 248, 0.3), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white mb-8 shadow-md"
          >
            <span className="text-sm font-medium">✨ Ready to elevate your digital presence?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight"
          >
            Let's create something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5F8] via-white to-[#F8F5FF]">extraordinary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with our team in Dubai. Let's discuss how we can transform your vision into a digital masterpiece that drives real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              className="group px-10 py-5 bg-white hover:bg-gradient-to-r hover:from-[#FFF5F8] hover:to-white text-[#8B4789] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              onClick={() => navigate('/get-started')}
            >
              <span className="text-lg font-medium">Begin Your Journey</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
              View Success Stories
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}