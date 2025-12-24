import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const jobListings = [
  {
    id: 'frontend-react-developer',
    title: 'Frontend Developer',
    specialization: 'React Specialist',
    department: 'Engineering',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    experience: '3-5 years',
    gradient: 'from-[#1A237E] via-[#8B4789] to-[#C62828]',
    description: 'Join our team to build cutting-edge web applications using React and modern frontend technologies.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  // Add more job listings here in the future
];

export default function Careers() {
  const navigate = useNavigate();

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
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-[#8B4789]/30 mb-6 shadow-sm"
            >
              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828]">
                🚀 Join Our Team
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2D2520] mb-4">
              Build the Future of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828]">
                Digital Innovation
              </span>
            </h1>
            <p className="text-lg text-[#6B5D57] max-w-2xl mx-auto">
              Join a team of passionate creators, innovators, and problem solvers. Together, we're crafting exceptional digital experiences for clients worldwide.
            </p>
          </motion.div>

          {/* Why Join Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 border border-[#D4AF37]/20 shadow-lg">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-xl text-[#2D2520] mb-2">Premium Projects</h3>
              <p className="text-[#6B5D57]">Work on cutting-edge projects for leading brands and startups</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#D4AF37]/20 shadow-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl text-[#2D2520] mb-2">Growth & Learning</h3>
              <p className="text-[#6B5D57]">Continuous learning opportunities and career advancement</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#D4AF37]/20 shadow-lg">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-xl text-[#2D2520] mb-2">Competitive Benefits</h3>
              <p className="text-[#6B5D57]">Attractive salary, health insurance, and flexible working</p>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl text-[#2D2520] mb-8"
            >
              Open Positions
            </motion.h2>

            <div className="space-y-6">
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  onClick={() => navigate(`/careers/${job.id}`)}
                  className="group bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#8B4789]/30 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl text-[#2D2520] mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B4789] group-hover:to-[#C62828] transition-all">
                            {job.title}
                          </h3>
                          <p className="text-lg text-[#8B4789] font-medium">{job.specialization}</p>
                        </div>
                      </div>

                      <p className="text-[#6B5D57] mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gradient-to-r from-[#F8F5FF] to-[#FFF5F8] text-[#8B4789] text-sm rounded-lg border border-[#8B4789]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-[#6B5D57]">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#8B4789]" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#8B4789]" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-[#8B4789]" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[#8B4789] font-medium lg:flex-col lg:items-center"
                    >
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No positions message (optional) */}
            {jobListings.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-xl text-[#6B5D57] mb-4">
                  No open positions at the moment
                </p>
                <p className="text-[#6B5D57]">
                  But we're always looking for talented individuals! Send your resume to{' '}
                  <a href="mailto:careers@internetever.com" className="text-[#8B4789] hover:underline">
                    careers@internetever.com
                  </a>
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
