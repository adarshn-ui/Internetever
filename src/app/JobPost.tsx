import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ArrowLeft, MapPin, Clock, Briefcase, DollarSign, Users, Code, CheckCircle2, Send } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

// Job data (in a real app, this would come from a database/API)
const jobData: Record<string, any> = {
  'frontend-react-developer': {
    title: 'Frontend Developer',
    specialization: 'React Specialist',
    department: 'Engineering',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    experience: '3-5 years',
    salary: 'AED 15,000 - 22,000/month',
    teamSize: '8-10 developers',
    gradient: 'from-[#1A237E] via-[#8B4789] to-[#C62828]',
    
    overview: 'We are seeking a talented Frontend Developer with deep expertise in React to join our dynamic engineering team in Dubai. You will be responsible for building modern, responsive, and high-performance web applications that serve thousands of users across the Middle East region.',
    
    responsibilities: [
      'Develop and maintain cutting-edge web applications using React, TypeScript, and modern frontend technologies',
      'Collaborate with UX/UI designers to implement pixel-perfect, responsive designs',
      'Write clean, maintainable, and well-documented code following best practices',
      'Optimize applications for maximum performance and scalability',
      'Participate in code reviews and mentor junior developers',
      'Work closely with backend teams to integrate RESTful APIs and GraphQL endpoints',
      'Implement state management solutions using Redux, Zustand, or Context API',
      'Ensure cross-browser compatibility and mobile responsiveness',
      'Contribute to the technical architecture and decision-making process',
      'Stay updated with the latest frontend trends and technologies',
    ],
    
    requirements: [
      '3-5 years of professional experience in frontend development',
      'Expert-level proficiency in React.js and modern JavaScript (ES6+)',
      'Strong experience with TypeScript',
      'Solid understanding of HTML5, CSS3, and responsive design principles',
      'Experience with CSS frameworks (Tailwind CSS, Material UI, or similar)',
      'Proficiency with state management libraries (Redux, Zustand, Context API)',
      'Familiarity with Next.js or other React frameworks',
      'Experience with Git and version control workflows',
      'Understanding of RESTful APIs and asynchronous programming',
      'Strong problem-solving skills and attention to detail',
      'Excellent communication skills in English',
    ],
    
    niceToHave: [
      'Experience with React Native for mobile development',
      'Knowledge of backend technologies (Node.js, Express)',
      'Familiarity with GraphQL and Apollo Client',
      'Experience with testing frameworks (Jest, React Testing Library, Cypress)',
      'Understanding of CI/CD pipelines and DevOps practices',
      'Contributions to open-source projects',
      'Experience with design tools (Figma, Adobe XD)',
      'Arabic language proficiency',
    ],
    
    benefits: [
      'Competitive salary package (AED 15,000 - 22,000/month)',
      'Health insurance coverage for employee and family',
      'Annual flight tickets to home country',
      'Flexible working hours and hybrid work options',
      'Professional development budget for courses and conferences',
      '30 days annual leave',
      'Modern office in the heart of Dubai',
      'Latest MacBook Pro and development tools',
      'Team building activities and company events',
      'Career growth opportunities in a fast-growing company',
    ],
    
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5/CSS3',
      'Tailwind CSS',
      'Next.js',
      'Redux/Zustand',
      'Git',
      'RESTful APIs',
      'Responsive Design',
    ],
  },
};

export default function JobPost() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: '',
    coverLetter: '',
  });

  const job = jobId ? jobData[jobId] : null;

  if (!job) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-[#2D2520] mb-4">Job Not Found</h1>
          <button
            onClick={() => navigate('/careers')}
            className="px-6 py-3 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] text-white rounded-xl"
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! Our team will review your profile and get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      portfolio: '',
      resume: '',
      coverLetter: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navigation />
      
      {/* Job Header */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-br from-[#1A237E] via-[#8B4789] to-[#C62828]">
        <div className="container mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('/careers')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Careers</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-xl border border-white/30`}>
                <Code className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl text-white mb-2">
                  {job.title}
                </h1>
                <p className="text-2xl text-white/90 mb-4">{job.specialization}</p>
                <div className="flex flex-wrap gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{job.teamSize}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/20"
              >
                <h2 className="text-2xl text-[#2D2520] mb-4">About the Role</h2>
                <p className="text-[#6B5D57] leading-relaxed">{job.overview}</p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/20"
              >
                <h2 className="text-2xl text-[#2D2520] mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B4789] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B5D57]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/20"
              >
                <h2 className="text-2xl text-[#2D2520] mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B4789] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B5D57]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Nice to Have */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-[#F8F5FF] to-[#FFF5F8] rounded-2xl p-8 border border-[#D4AF37]/20"
              >
                <h2 className="text-2xl text-[#2D2520] mb-4">Nice to Have</h2>
                <ul className="space-y-3">
                  {job.niceToHave.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B4789] to-[#C62828] flex-shrink-0 mt-2"></span>
                      <span className="text-[#6B5D57]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/20"
              >
                <h2 className="text-2xl text-[#2D2520] mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  {job.benefits.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B4789] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B5D57]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#D4AF37]/20 sticky top-32"
              >
                <h3 className="text-xl text-[#2D2520] mb-4">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gradient-to-r from-[#F8F5FF] to-[#FFF5F8] text-[#8B4789] text-sm rounded-lg border border-[#8B4789]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8D5C4]">
                  <h3 className="text-xl text-[#2D2520] mb-4">Apply Now</h3>
                  <p className="text-sm text-[#6B5D57] mb-4">
                    Ready to join our team? Submit your application below.
                  </p>
                  <button
                    onClick={() => {
                      const element = document.getElementById('application-form');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] text-white rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <span>Apply for this Position</span>
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E8D5C4]">
                  <h4 className="text-sm font-medium text-[#2D2520] mb-3">Share this job</h4>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-[#F8F5FF] text-[#8B4789] rounded-lg text-sm hover:bg-[#F0E8FF] transition-colors">
                      LinkedIn
                    </button>
                    <button className="flex-1 px-3 py-2 bg-[#F8F5FF] text-[#8B4789] rounded-lg text-sm hover:bg-[#F0E8FF] transition-colors">
                      Twitter
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Application Form */}
          <motion.div
            id="application-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#D4AF37]/20">
              <h2 className="text-3xl text-[#2D2520] mb-6">Submit Your Application</h2>
              <p className="text-[#6B5D57] mb-8">
                Fill out the form below and our recruitment team will get back to you within 2-3 business days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2D2520] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2D2520] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2D2520] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-[#2D2520] mb-2">
                      Portfolio/GitHub URL
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-[#2D2520] mb-2">
                    Resume/CV URL *
                  </label>
                  <input
                    type="url"
                    id="resume"
                    name="resume"
                    required
                    value={formData.resume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all"
                    placeholder="https://drive.google.com/... or LinkedIn profile"
                  />
                  <p className="text-xs text-[#6B5D57] mt-2">
                    Please provide a link to your resume (Google Drive, Dropbox, LinkedIn, etc.)
                  </p>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-[#2D2520] mb-2">
                    Cover Letter / Why You? *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    required
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4789]/50 transition-all resize-none"
                    placeholder="Tell us why you're the perfect fit for this role..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828] text-white rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <span className="text-lg">Submit Application</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
