import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const navigate = useNavigate();

  // Carousel data
  const carouselItems = [
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Business Websites',
      description: 'Fast, responsive, and conversion-optimized websites that make your brand unforgettable'
    },
    { 
      id: 2, 
      image: 'https://images.unsplash.com/photo-1663090859310-97a1af639a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'SEO Optimization',
      description: 'Dominate search rankings with data-driven strategies that bring organic traffic and qualified leads'
    },
    { 
      id: 3, 
      image: 'https://images.unsplash.com/photo-1668854041298-4b8bbc9fbce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Web Applications',
      description: 'Scalable, cloud-ready web apps built with cutting-edge tech to power your business operations'
    },
    { 
      id: 4, 
      image: 'https://images.unsplash.com/photo-1755372740351-8d7d0fcd582c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Mobile App Development',
      description: 'Native iOS & Android apps that deliver seamless user experiences and drive engagement'
    },
    { 
      id: 5, 
      image: 'https://images.unsplash.com/photo-1594549208400-128687ad97ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'E-Commerce Solutions',
      description: 'High-converting online stores with secure payments, smart inventory, and customer loyalty tools'
    },
    { 
      id: 6, 
      image: 'https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Social Media Marketing',
      description: 'Engaging campaigns that amplify your brand voice and build authentic connections with your audience'
    },
    { 
      id: 7, 
      image: 'https://images.unsplash.com/photo-1574576839798-00b48241d0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies that drive growth, engagement, and measurable results for your brand'
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF8F0] pt-24 pb-20">
      {/* Simple Static Background - NO ANIMATIONS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div 
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(26, 35, 126, 0.15), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(198, 40, 40, 0.15), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#8B4789]/30 shadow-md mt-8 mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B4789] to-[#C62828]"></span>
            <span className="text-xs text-[#2D2520] font-medium">Dubai's Premier Digital Solutions Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#2D2520] mb-2 leading-tight">
            Digital Excellence
            <br />
            That Elevates
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828]">
              Your Vision
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-[#6B5D57] mb-4 max-w-3xl leading-relaxed">
            We craft premium digital experiences that transform businesses across the UAE and beyond.
            Your success is our masterpiece.
          </p>

          {/* Carousel Section - PURE CSS ANIMATION */}
          <div 
            className="w-full overflow-visible mb-4 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex gap-4"
                  style={{
                    animation: isPaused ? 'none' : 'scroll 25s linear infinite',
                    willChange: 'transform',
                  }}
                >
                  {[...carouselItems, ...carouselItems].map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex-shrink-0 w-[350px] h-[180px] rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]/20 bg-white/50 cursor-pointer relative transition-transform duration-300 hover:scale-105"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Always visible title at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
                        <h3 className="text-white text-base font-semibold">{item.title}</h3>
                      </div>

                      {/* Full overlay with description on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[#1A237E]/95 via-[#8B4789]/85 to-[#C62828]/75 flex flex-col justify-end p-6 pointer-events-none transition-opacity duration-200 ${
                          hoveredItem === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <h3 className="text-white text-xl mb-2 font-light tracking-wide">{item.title}</h3>
                        <p className="text-white/70 text-xs leading-relaxed font-light tracking-wide">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button 
              className="group px-8 py-4 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] text-white rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/get-started')}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              className="px-8 py-4 border-2 border-[#D4AF37]/30 bg-white/30 text-[#2D2520] rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => navigate('/portfolio')}
            >
              Explore Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Simple CSS animation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#8B4789]" />
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(-24px);
          }
          100% {
            transform: translateX(calc(-350px * 7 - 24px - 16px * 7));
          }
        }
      `}</style>
    </section>
  );
}