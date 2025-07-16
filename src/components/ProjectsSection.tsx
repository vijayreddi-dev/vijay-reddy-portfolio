
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import ProjectDetail from './ProjectDetail';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

  const handleProjectClick = (project: typeof portfolioData.projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Projects
            </h2>
            <p className="text-lg text-gray-600">
              Some of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <div
                key={project?.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 transform cursor-pointer relative"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Type Badge */}
                {project?.type && (
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold z-20
                      ${project?.type === 'real-time' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}
                  >
                    {project?.type === 'real-time' ? 'Real-Time Project' : 'Personal Project'}
                  </span>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-gray-800 font-medium">
                      View Details
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project?.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project?.description}
                  </p>
                  
                  <div className="flex space-x-4">
                    {project?.showLiveDemo && (
                      <a
                        href={project?.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project?.showSourceCode && (
                      <a
                        href={project?.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={handleCloseDetail}
        />
      )}
    </>
  );
};

export default ProjectsSection;
