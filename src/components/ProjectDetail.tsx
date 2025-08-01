
import { X, ExternalLink, Github, Calendar, Code, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import portfolioData from '../data/portfolio.json';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  showLiveDemo?: boolean; // Added for conditional rendering
  showSourceCode?: boolean; // Added for conditional rendering
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in no-scrollbar">
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-2xl"></div>
          <button
            title="Close"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar size={16} />
              <span>2024 Project</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Zap className="text-indigo-600" size={24} />
              About This Project
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {project.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              This project showcases modern web development practices with a focus on user experience, 
              performance optimization, and clean code architecture. Built with attention to detail and 
              scalability in mind, it demonstrates proficiency in frontend technologies and design principles.
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Code className="text-indigo-600" size={20} />
              Technologies Used
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologies.map((tech) => {
                // Find icon from techStack
                const techStackIcon = portfolioData.techStack?.find(t => t.name.toLowerCase() === tech.toLowerCase() || t.name.replace(/\s/g, '').toLowerCase() === tech.replace(/\s/g, '').toLowerCase());
                return (
                  <Card key={tech} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        {techStackIcon && typeof techStackIcon.icon === 'string' && techStackIcon.icon.startsWith('/') ? (
                          <img src={techStackIcon.icon} alt={tech + ' icon'} title={tech} className="w-8 h-8 mx-auto" />
                        ) : (
                          <span className="text-2xl">🔧</span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Responsive design that works on all devices</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Modern UI/UX with smooth animations</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Performance optimized for fast loading</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Clean and maintainable code structure</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.showLiveDemo && (
              <a
                href={project.liveUrl}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
                <span className="font-medium">View Live Demo</span>
              </a>
            )}
            {project.showSourceCode && (
              <a
                href={project.githubUrl}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                <span className="font-medium">View Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
