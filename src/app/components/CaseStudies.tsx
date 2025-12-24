import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'Luxury E-Commerce Platform',
    category: 'E-Commerce Excellence',
    result: '450% revenue growth in 12 months',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    metrics: ['Premium user experience', 'Lightning-fast checkout', 'Multi-currency support'],
  },
  {
    title: 'Enterprise Digital Platform',
    category: 'Web Application',
    result: 'Scaled to 100,000+ active users',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    metrics: ['Zero-downtime launch', '95% user retention', 'Enterprise security'],
  },
  {
    title: 'Fieldstaff Tracking App',
    category: 'Enterprise Solution',
    result: '85% productivity boost, 50K+ daily logs',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    metrics: ['Real-time GPS tracking', 'Intelligent task automation', 'Complete workforce visibility'],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="bg-gradient-to-br from-[#FFF8F0] via-[#F8F5FF] to-[#FFF5F8] py-32 relative overflow-hidden">
      {/* Simplified Background Accents - OPTIMIZED */}
      <div 
        className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(139, 71, 137, 0.1), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(26, 35, 126, 0.1), transparent 70%)',
          filter: 'blur(60px)',
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
              💼 Case Studies
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl text-[#2D2520] mb-6"
          >
            Success stories that inspire
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#6B5D57]"
          >
            Real results from real partnerships. See how we transform businesses through digital innovation.
          </motion.p>
        </div>

        {/* Cases Grid - OPTIMIZED PREMIUM LAYOUT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              {/* Card with Premium Styling - NO HEAVY 3D */}
              <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-[#8B4789]/20 group-hover:border-[#8B4789]/40 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/80 via-[#1A237E]/40 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300"></div>
                  
                  {/* Overlay Icon - SIMPLIFIED */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-[#8B4789]" />
                  </div>
                  
                  {/* Premium Corner Accent */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#C62828]/40 via-[#8B4789]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Container with Premium Padding */}
                <div className="p-6 bg-gradient-to-b from-white to-[#F8F5FF]/20">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF69B4]/10 via-[#FFD700]/10 to-[#00CED1]/10 border border-[#8B4789]/20 mb-4 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B4789] to-[#C62828] animate-pulse"></div>
                    <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828]">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Title with Premium Typography */}
                  <h3 className="text-2xl font-light text-[#2D2520] mb-3 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1A237E] group-hover:via-[#8B4789] group-hover:to-[#C62828] leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Result with Emphasis */}
                  <div className="mb-5 pb-5 border-b border-[#8B4789]/10">
                    <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828]">
                      {project.result}
                    </p>
                  </div>

                  {/* Metrics with Premium Styling */}
                  <ul className="space-y-3">
                    {project.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-3 text-sm text-[#6B5D57]">
                        <div className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-[#8B4789]/20 to-[#C62828]/20 flex items-center justify-center border border-[#8B4789]/20 shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B4789] to-[#C62828]"></div>
                        </div>
                        <span className="leading-relaxed">{metric}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Action Text */}
                  <div className="mt-6 pt-4 border-t border-[#8B4789]/10 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-semibold tracking-wide">View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8B4789] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA - Premium Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-20"
        >
          <button className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-[#8B4789]/30 hover:border-[#8B4789]/60 bg-white/80 hover:bg-white text-[#2D2520] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            <span className="text-lg font-medium">Explore All Projects</span>
            <ArrowUpRight className="w-6 h-6 text-[#8B4789] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}