import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We immerse ourselves in understanding your vision, goals, and the unique story you want to tell.',
    color: 'from-[#1A237E] to-[#3949AB]',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We craft elegant experiences that blend aesthetic beauty with strategic purpose.',
    color: 'from-[#6A1B9A] to-[#8B4789]',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our artisans develop with precision, creating digital products that are robust and refined.',
    color: 'from-[#8B4789] to-[#AD1457]',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We orchestrate seamless deployments, ensuring your digital presence debuts flawlessly.',
    color: 'from-[#C62828] to-[#D32F2F]',
  },
  {
    number: '05',
    title: 'Evolve',
    description: 'We nurture continuous growth through dedicated support and strategic enhancements.',
    color: 'from-[#D32F2F] to-[#E53935]',
  },
];

export function Process() {
  return (
    <section id="process" className="bg-gradient-to-br from-[#F8F5FF] via-[#FFF5F8] to-[#FFF8F0] py-32 relative overflow-hidden">
      {/* Vibrant Background Elements - OPTIMIZED */}
      <div 
        className="absolute top-1/3 left-0 w-[350px] h-[350px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(26, 35, 126, 0.1), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div 
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(198, 40, 40, 0.1), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-[#8B4789]/30 mb-6 shadow-sm"
          >
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828]">
              🎯 Our Approach
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl text-[#2D2520] mb-6"
          >
            A journey to excellence
          </motion.h2>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Vibrant Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#1A237E]/20 via-[#8B4789]/40 to-[#C62828]/20 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="group relative"
              >
                {/* Number with vibrant gradient - SIMPLIFIED HOVER */}
                <div className={`relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hover:scale-105 transition-transform`}>
                  <span className="text-3xl text-white font-light">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className="p-5 rounded-2xl bg-white/60 border border-transparent group-hover:border-[#8B4789]/30 group-hover:bg-white transition-all duration-300 group-hover:shadow-lg">
                  <h3 className={`text-2xl text-[#2D2520] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${step.color} transition-all`}>{step.title}</h3>
                  <p className="text-[#6B5D57] leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className={`w-1 h-12 bg-gradient-to-b ${step.color} rounded-full opacity-40`}></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}