import { Code, ShoppingCart, Smartphone, Megaphone, ShieldCheck, ArrowUpRight, Building2 } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    outcome: 'Elegant, high-performance websites that embody your brand and captivate your audience.',
    features: ['Bespoke Development', 'Premium Performance', 'SEO Excellence'],
    image: 'https://images.unsplash.com/photo-1741119482290-bf0566a6d404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    outcome: 'Sophisticated online stores designed to elevate customer experience and maximize revenue.',
    features: ['Conversion Optimized', 'Seamless Payments', 'Smart Inventory'],
    image: 'https://images.unsplash.com/photo-1603009135528-7ad60fc1ffe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Building2,
    title: 'Enterprise Software',
    outcome: 'Powerful, scalable enterprise solutions that streamline operations and drive business efficiency.',
    features: ['CRM Systems', 'ERP Solutions', 'FSM Platforms', 'Site Attendance'],
    image: 'https://images.unsplash.com/photo-1689942007858-7b12bf5864bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Applications',
    outcome: 'Cutting-edge digital products that deliver exceptional value and user delight.',
    features: ['Cross-Platform', 'Enterprise-Grade', 'Cloud-Powered'],
    image: 'https://images.unsplash.com/photo-1730817403408-6793f06b2a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing & Growth',
    outcome: 'Strategic campaigns that amplify your presence and drive measurable business growth.',
    features: ['Performance Marketing', 'Data-Driven Insights', 'Brand Elevation'],
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Support & Care',
    outcome: 'White-glove service ensuring your digital assets perform flawlessly, always.',
    features: ['24/7 Excellence', 'Proactive Security', 'Continuous Evolution'],
    image: 'https://images.unsplash.com/photo-1647866427893-0057366e91b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export function Services() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#F8F5FF] to-[#FFF5F8]">
      {/* Static Background - No Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 71, 137, 0.15), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-[#8B4789]/30 mb-6 shadow-sm">
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828]">
              💎 Our Services
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2D2520] mb-4">
            Premium Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828]">
              Extraordinary Results
            </span>
          </h2>
          <p className="text-lg text-[#6B5D57] max-w-2xl mx-auto">
            We deliver world-class digital solutions that transform visions into remarkable realities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white/90 border-2 border-[#8B4789]/20 rounded-3xl overflow-hidden hover:border-[#8B4789]/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  
                  {/* Icon Floating on Image */}
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A237E] via-[#8B4789] to-[#C62828] shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Vibrant Gradient Accent on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF69B4]/5 via-[#FFD700]/5 to-[#00CED1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 p-6">
                  {/* Title */}
                  <h3 className="text-2xl text-[#2D2520] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1A237E] group-hover:to-[#C62828] transition-all">{service.title}</h3>

                  {/* Outcome */}
                  <p className="text-[#6B5D57] mb-4 leading-relaxed text-sm">
                    {service.outcome}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#8B7D77]">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF69B4] via-[#8B4789] to-[#00CED1]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Discover more</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8B4789]" />
                  </div>
                </div>

                {/* Sparkle effect on hover */}
                <div className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  ✨
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}