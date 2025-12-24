import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Sparkles, Target, Award, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Sparkles,
      title: 'Innovation-Driven',
      description: 'Our state-of-the-art Technology Labs keep us at the forefront of digital innovation'
    },
    {
      icon: Target,
      title: 'Quality Focused',
      description: 'Every project is handled by specialized teams using the latest technologies and proven methodologies'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We don\'t just deliver services—we partner with you for long-term success'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Recognized internationally with awards spanning 2019-2023'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] relative overflow-hidden">
      <Navigation />
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-[#1A237E]/10 to-[#8B4789]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-[#8B4789]/10 to-[#C62828]/10 rounded-full blur-3xl"
        />
      </div>

      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl mb-4 text-[#2C2C2C] font-light tracking-tight">
              About Internetever
            </h1>
            <p className="text-base md:text-lg text-[#5A4A42] font-light max-w-2xl mx-auto">
              Premier digital solutions provider empowering businesses across the UAE
            </p>
          </motion.div>

          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-3xl blur-sm opacity-60 transform translate-x-2 translate-y-2" />
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#E8D5C4]/30">
                <h2 className="text-2xl md:text-3xl mb-4 text-[#2C2C2C] font-light">
                  Who We Are
                </h2>
                <p className="text-base md:text-lg text-[#5A4A42] font-light leading-relaxed">
                  Internetever Technologies is a premier digital solutions provider based in the United Arab Emirates, 
                  specializing in web development, e-commerce platforms, custom software, digital marketing, SEO, and IT consultancy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] to-[#8B4789] rounded-3xl blur-md opacity-20 transform translate-x-2 translate-y-2" />
              <div className="relative bg-gradient-to-br from-[#1A237E] to-[#8B4789] rounded-3xl p-8 md:p-12 shadow-2xl">
                <h2 className="text-2xl md:text-3xl mb-4 text-white font-light">
                  Our Mission
                </h2>
                <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
                  We empower businesses to harness the full potential of the internet. Through cutting-edge technology 
                  and innovative solutions, we help organizations establish powerful digital presences that drive real growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What Sets Us Apart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl mb-8 text-center text-[#2C2C2C] font-light">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-white rounded-2xl blur-sm opacity-60 transform translate-x-1 translate-y-1" />
                  <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#E8D5C4]/30 hover:shadow-xl transition-all duration-300">
                    <div className="mb-4">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] to-[#8B4789] rounded-xl blur-md opacity-40" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#1A237E] to-[#8B4789] rounded-xl flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl mb-3 text-[#2C2C2C] font-normal">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#5A4A42] font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-3xl blur-sm opacity-60 transform translate-x-2 translate-y-2" />
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#E8D5C4]/30">
                <h2 className="text-2xl md:text-3xl mb-4 text-[#2C2C2C] font-light">
                  Our Expertise
                </h2>
                <p className="text-base md:text-lg text-[#5A4A42] font-light leading-relaxed">
                  From startups to enterprises, we deliver comprehensive digital solutions including custom business software, 
                  responsive websites, mobile applications, e-commerce platforms, and enterprise-grade systems. 
                  Our process-driven approach ensures exceptional results every time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Digital Gateway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-16"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-3xl blur-sm opacity-60 transform translate-x-2 translate-y-2" />
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#E8D5C4]/30">
                <h2 className="text-2xl md:text-3xl mb-4 text-[#2C2C2C] font-light">
                  Your Digital Gateway
                </h2>
                <p className="text-base md:text-lg text-[#5A4A42] font-light leading-relaxed">
                  In today's connected world, your website is more than a digital footprint—it's your gateway to global opportunities. 
                  We create functional, beautiful, and user-friendly digital experiences that transform how you connect with the world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B4789] to-[#C62828] rounded-3xl blur-md opacity-20 transform translate-x-2 translate-y-2" />
              <div className="relative bg-gradient-to-br from-[#8B4789] to-[#C62828] rounded-3xl p-8 md:p-12 shadow-2xl">
                <h2 className="text-2xl md:text-3xl mb-4 text-white font-light">
                  Our Promise
                </h2>
                <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
                  At Internetever Technologies, we're more than a service provider. We're your trusted partner in the digital age, 
                  committed to your success and dedicated to pushing the boundaries of what's possible with technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] to-[#8B4789] rounded-full blur-md opacity-50 transform translate-y-2 group-hover:translate-y-3 transition-transform" />
              <div className="relative px-10 py-4 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] text-white text-sm md:text-base rounded-full font-light shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                Let's Build Together
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
