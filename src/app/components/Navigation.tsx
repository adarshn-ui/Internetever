import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#E8D5C4]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center -ml-[18px]">
            <Link to="/">
              <Logo className="h-16" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/portfolio" className="text-[#5A4A42] hover:text-[#8B4789] transition-colors">
              Portfolio
            </Link>
            <Link to="/awards" className="text-[#5A4A42] hover:text-[#8B4789] transition-colors">
              Awards
            </Link>
            <Link to="/careers" className="text-[#5A4A42] hover:text-[#8B4789] transition-colors">
              Careers
            </Link>
            <Link to="/about" className="text-[#5A4A42] hover:text-[#8B4789] transition-colors">
              About
            </Link>
            <Link to="/get-started">
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] hover:shadow-lg text-white rounded-lg transition-all duration-300 shadow-md">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#5A4A42] p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-[#5A4A42] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#5A4A42] transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#5A4A42] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-[#E8D5C4]">
            <div className="flex flex-col gap-4">
              <Link to="/portfolio" className="text-[#5A4A42] hover:text-[#8B4789] transition-colors py-2" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
              <Link to="/awards" className="text-[#5A4A42] hover:text-[#8B4789] transition-colors py-2" onClick={() => setIsOpen(false)}>
                Awards
              </Link>
              <Link to="/careers" className="text-[#5A4A42] hover:text-[#8B4789] transition-colors py-2" onClick={() => setIsOpen(false)}>
                Careers
              </Link>
              <Link to="/about" className="text-[#5A4A42] hover:text-[#8B4789] transition-colors py-2" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/get-started" onClick={() => setIsOpen(false)}>
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] text-white rounded-lg transition-all duration-300 shadow-md">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}