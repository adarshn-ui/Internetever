import { useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ClientCarousel } from './components/ClientCarousel';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const portfolioProjects = [
  {
    id: 'sentrah',
    title: 'Sentrah',
    category: 'Enterprise Web Platform',
    description: 'A comprehensive digital platform delivering innovative solutions for modern businesses.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    logo: 'https://sentrah.com/wp-content/uploads/2024/01/sentrah-logo.svg',
    url: 'https://sentrah.com',
    tags: ['Web Development', 'Enterprise', 'Custom Platform'],
    gradient: 'from-[#1A237E] via-[#8B4789] to-[#C62828]',
  },
];

// Project card component
const ProjectCard = ({ project, onClick }: { project: typeof portfolioProjects[0]; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-[#8B4789]/30"
  >
    {/* Project Image */}
    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F8F5FF] to-[#FFF5F8]">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ willChange: 'transform' }}
      />
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="flex items-center gap-2 text-white">
          <span className="font-medium">Visit Website</span>
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>

      {/* Logo Badge */}
      <div className="absolute top-4 left-4 bg-white rounded-xl p-3 shadow-lg">
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          loading="lazy"
          className="h-8 w-auto object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* External Link Icon */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        <ArrowUpRight className="w-5 h-5 text-[#8B4789]" />
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6">
      <div className="mb-3">
        <span className="text-sm text-[#8B4789] font-medium">{project.category}</span>
      </div>
      
      <h3 className="text-2xl text-[#2D2520] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B4789] group-hover:to-[#C62828] transition-all">
        {project.title}
      </h3>
      
      <p className="text-[#6B5D57] mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gradient-to-r from-[#F8F5FF] to-[#FFF5F8] text-[#8B4789] text-xs rounded-lg border border-[#8B4789]/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Bottom Gradient Bar */}
    <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
  </div>
);

ProjectCard.displayName = 'ProjectCard';

function Portfolio() {
  const handleProjectClick = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navigation />
      
      {/* Hero Section - Simplified animations */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Static Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div 
            className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(26, 35, 126, 0.2), transparent 70%)',
            }}
          />
          <div 
            className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(198, 40, 40, 0.2), transparent 70%)',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-[#8B4789]/30 mb-6 shadow-sm">
              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8B4789] to-[#C62828]">
                💼 Our Portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2D2520] mb-4">
              Crafting Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A237E] via-[#8B4789] to-[#C62828]">
                Masterpieces
              </span>
            </h1>
            <p className="text-lg text-[#6B5D57] max-w-2xl mx-auto">
              Explore our collection of premium digital solutions that have transformed businesses and delighted users worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project.url)}
              />
            ))}
          </div>

          {/* Empty State */}
          {portfolioProjects.length === 1 && (
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F8F5FF] to-[#FFF5F8] border border-[#8B4789]/20">
                <span className="text-[#8B4789]">✨ More amazing projects coming soon...</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#8B4789] to-[#C62828] opacity-95" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and build something extraordinary together.
            </p>
            <a
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8B4789] rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <span className="font-medium">Start Your Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Client Carousel */}
      <ClientCarousel />

      <Footer />
    </div>
  );
}

export default Portfolio;