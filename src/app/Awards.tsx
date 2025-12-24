import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

interface AwardType {
  id: number;
  year: string;
  award: string;
  organization: string;
}

const awards: AwardType[] = [
  {
    id: 1,
    year: '2023',
    award: 'Best Web Design & Development Company - UAE',
    organization: 'AI Global Media Ltd, United Kingdom'
  },
  {
    id: 2,
    year: '2021/2022',
    award: 'Web Design Agency of the Year',
    organization: 'The Middle East Prestige Awards'
  },
  {
    id: 3,
    year: '2021/22',
    award: 'Web Design Agency of the Year',
    organization: 'Corporate Livewire Global Awards'
  },
  {
    id: 4,
    year: '2020',
    award: 'Media Innovator Award - Best Online Brand Growth Specialists, UAE',
    organization: 'Corporate Vision'
  },
  {
    id: 5,
    year: '2019',
    award: 'Internet Marketing Agency of the Year - Dubai',
    organization: 'AI Publishing'
  }
];

export default function Awards() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] relative overflow-hidden">
      <Navigation />
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-[10%] w-96 h-96 bg-gradient-to-br from-[#1A237E]/10 to-[#8B4789]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-[#8B4789]/10 to-[#C62828]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#1A237E]/5 via-[#8B4789]/5 to-[#C62828]/5 rounded-full blur-3xl"
        />
      </div>

      <section className="pt-36 pb-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] blur-2xl opacity-30" />
                <div className="relative text-6xl">🏆</div>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl mb-4 text-[#2C2C2C] font-light tracking-tight">
              Awards & Recognition
            </h1>
            <p className="text-base md:text-lg text-[#5A4A42] font-light">
              Celebrating excellence in digital innovation
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Gradient Timeline Line */}
            <div className="absolute left-[39px] md:left-[59px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#1A237E] via-[#8B4789] to-[#C62828] shadow-lg" />

            {/* Awards */}
            <div className="space-y-12">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="relative flex gap-8 group"
                >
                  {/* Year Circle with 3D effect */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      {/* 3D Shadow layers */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] to-[#8B4789] rounded-full blur-md opacity-40 transform translate-x-1 translate-y-1" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] to-[#8B4789] rounded-full blur-sm opacity-60 transform translate-x-0.5 translate-y-0.5" />
                      
                      {/* Main circle */}
                      <div className="relative w-[80px] md:w-[120px] h-[80px] md:h-[120px] rounded-full bg-gradient-to-br from-[#1A237E] to-[#8B4789] flex items-center justify-center shadow-2xl border-4 border-white">
                        <span className="text-white font-light text-sm md:text-base">
                          {award.year}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card with 3D effect */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-grow pt-4 md:pt-8"
                  >
                    <div className="relative">
                      {/* 3D Card shadows */}
                      <div className="absolute inset-0 bg-white rounded-2xl blur-sm opacity-60 transform translate-x-2 translate-y-2" />
                      <div className="absolute inset-0 bg-white rounded-2xl blur-xs opacity-80 transform translate-x-1 translate-y-1" />
                      
                      {/* Main card */}
                      <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-[#E8D5C4]/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#1A237E] via-[#8B4789] to-[#C62828] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <h3 className="text-lg md:text-xl text-[#2C2C2C] mb-3 font-normal leading-relaxed">
                          {award.award}
                        </h3>
                        <p className="text-sm md:text-base text-[#5A4A42] font-light">
                          {award.organization}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Button 3D shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] to-[#8B4789] rounded-full blur-md opacity-50 transform translate-y-2 group-hover:translate-y-3 transition-transform" />
              
              {/* Main button */}
              <div className="relative px-10 py-4 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] text-white text-sm md:text-base rounded-full font-light shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                Start Your Project
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
