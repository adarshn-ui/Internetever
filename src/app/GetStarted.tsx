import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Mail, Phone, MapPin, Send, User, Building2, FileText, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    place: '',
    requirement: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! Our team will get in touch with you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      place: '',
      requirement: '',
      description: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div
              style={{
                background: 'radial-gradient(circle, rgba(26, 35, 126, 0.2), transparent 70%)',
                filter: 'blur(60px)',
                width: '100%',
                height: '100%',
              }}
            />
          </motion.div>
          <motion.div 
            className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-20"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div
              style={{
                background: 'radial-gradient(circle, rgba(198, 40, 40, 0.2), transparent 70%)',
                filter: 'blur(60px)',
                width: '100%',
                height: '100%',
              }}
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2D2520] mb-4">
              Let's Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828]">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-lg text-[#6B5D57] max-w-2xl mx-auto">
              Share your vision with us, and we'll turn it into reality. Our team is ready to elevate your digital presence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-[#D4AF37]/20"
            >
              <h2 className="text-2xl text-[#2D2520] mb-6 flex items-center gap-3">
                <MessageSquare className="w-7 h-7 text-[#8B4789]" />
                Send Us Your Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2D2520] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B4789]" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2D2520] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B4789]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2D2520] mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B4789]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="place" className="block text-sm font-medium text-[#2D2520] mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B4789]" />
                      <input
                        type="text"
                        id="place"
                        name="place"
                        required
                        value={formData.place}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                        placeholder="Dubai, UAE"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#2D2520] mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B4789]" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirement" className="block text-sm font-medium text-[#2D2520] mb-2">
                    Service Required *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-4 w-5 h-5 text-[#8B4789]" />
                    <select
                      id="requirement"
                      name="requirement"
                      required
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="ecommerce">E-Commerce Platform</option>
                      <option value="webapp">Web Application</option>
                      <option value="mobileapp">Mobile App Development</option>
                      <option value="seo">SEO & Digital Marketing</option>
                      <option value="enterprise">Enterprise Software</option>
                      <option value="consulting">Digital Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-[#2D2520] mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] text-white rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <span className="text-lg">Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Talk to Us */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#D4AF37]/20">
                <h2 className="text-2xl text-[#2D2520] mb-6">
                  Or Talk to Us Directly
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#2D2520] mb-2">Email Us</h3>
                      <a href="mailto:info@internetever.com" className="text-[#8B4789] hover:underline block">
                        info@internetever.com
                      </a>
                      <a href="mailto:sales@internetever.com" className="text-[#8B4789] hover:underline block">
                        sales@internetever.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#2D2520] mb-2">Call Us</h3>
                      <a href="tel:+97143214567" className="text-[#8B4789] hover:underline block">
                        +971 4 321 4567
                      </a>
                      <a href="tel:+971501234567" className="text-[#8B4789] hover:underline block">
                        +971 50 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#2D2520] mb-2">Visit Us</h3>
                      <p className="text-[#6B5D57] leading-relaxed">
                        Internetever Digital Solutions<br />
                        Office 2401, Burj Al Salam Tower<br />
                        Sheikh Zayed Road<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#1A237E]/5 via-[#8B4789]/5 to-[#C62828]/5 rounded-2xl p-8 border border-[#D4AF37]/20">
                <h3 className="text-xl text-[#2D2520] mb-4">Business Hours</h3>
                <div className="space-y-2 text-[#6B5D57]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-[#2D2520]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-[#2D2520]">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-[#2D2520]">Closed</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#D4AF37]/20">
                <h3 className="text-xl text-[#2D2520] mb-4">Why Partner With Us?</h3>
                <ul className="space-y-3 text-[#6B5D57]">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B4789] to-[#C62828] mt-2 flex-shrink-0"></span>
                    <span>500+ Successful Projects Delivered</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B4789] to-[#C62828] mt-2 flex-shrink-0"></span>
                    <span>100% Client Satisfaction Rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B4789] to-[#C62828] mt-2 flex-shrink-0"></span>
                    <span>Expert Team Based in Dubai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B4789] to-[#C62828] mt-2 flex-shrink-0"></span>
                    <span>Cutting-Edge Technology Solutions</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
