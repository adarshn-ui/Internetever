import { MapPin, Phone, Mail, Facebook, X, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF3EB] border-t border-[#E8D5C4] py-10">
      <div className="container mx-auto px-6">
        {/* Centered Logo and Social Icons */}
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] bg-clip-text text-transparent relative"
                style={{ fontFamily: "'Brush Script MT', cursive" }}>
              Internetever
              {/* Simplified Sparkles */}
              <span className="absolute -top-2 -right-2 text-2xl opacity-70">✨</span>
              <span className="absolute -bottom-1 -left-2 text-xl opacity-60">✨</span>
            </h2>
            <div 
              className="absolute inset-0 opacity-15 -z-10"
              style={{
                background: 'linear-gradient(to right, rgba(26, 35, 126, 0.3), rgba(139, 71, 137, 0.3), rgba(198, 40, 40, 0.3))',
                filter: 'blur(20px)',
              }}
            />
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: 'Facebook', href: '#' },
              { icon: X, label: 'X', href: 'https://x.com/interneteveruae' },
              { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/internetever/' },
              { icon: Youtube, label: 'YouTube', href: '#' }
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href !== '#' ? '_blank' : undefined}
                rel={href !== '#' ? 'noopener noreferrer' : undefined}
                className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#1A237E] via-[#8B4789] to-[#C62828] flex items-center justify-center text-white shadow-lg group overflow-hidden hover:scale-110 transition-transform duration-300"
                aria-label={label}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C62828] via-[#8B4789] to-[#1A237E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
          {/* Contact Information */}
          <div className="md:w-[400px]">
            <h4 className="text-[#2D2520] mb-3">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[#6B5D57]">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#8B4789] mt-0.5" />
                <div>
                  <p className="leading-relaxed text-sm">
                    <strong className="text-[#2D2520]">DUBAI:</strong> Executive Towers, Burj Khalifa Street, Business Bay, Dubai, United Arab Emirates
                  </p>
                </div>
              </li>
              <li className="flex gap-3 text-[#6B5D57]">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#8B4789] mt-0.5" />
                <div>
                  <p className="leading-relaxed text-sm">
                    <strong className="text-[#2D2520]">UAQ:</strong> Business Center, Umm Al Quwain, United Arab Emirates
                  </p>
                </div>
              </li>
              <li className="flex gap-3 text-[#6B5D57]">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#8B4789]" />
                <div className="space-y-1">
                  <a href="tel:+971521695718" className="block hover:text-[#8B4789] transition-colors text-sm">
                    +971 52 169 5718
                  </a>
                  <a href="tel:+971561986604" className="block hover:text-[#8B4789] transition-colors text-sm">
                    +971 56 198 6604
                  </a>
                </div>
              </li>
              <li className="flex gap-3 text-[#6B5D57]">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#8B4789]" />
                <a href="mailto:info@internetever.com" className="hover:text-[#8B4789] transition-colors text-sm">
                  info@internetever.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:ml-auto md:mr-12">
            <h4 className="text-[#2D2520] mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#6B5D57] hover:text-[#8B4789] transition-colors text-sm">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B5D57] hover:text-[#8B4789] transition-colors text-sm">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B5D57] hover:text-[#8B4789] transition-colors text-sm">
                  Web & Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B5D57] hover:text-[#8B4789] transition-colors text-sm">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#2D2520] mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#6B5D57] hover:text-[#8B4789] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B5D57] hover:text-[#8B4789] transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B5D57] hover:text-[#8B4789] transition-colors text-sm">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6B5D57] hover:text-[#8B4789] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#E8D5C4] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8B7D77] text-sm">
            🇦🇪 © {currentYear} Internetever. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#8B7D77] hover:text-[#8B4789] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#8B7D77] hover:text-[#8B4789] transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-[#8B7D77] hover:text-[#8B4789] transition-colors text-sm">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}