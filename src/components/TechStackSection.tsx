
import { useEffect, useState } from 'react';
import portfolioData from '../data/portfolio.json';

const TechStackSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('tech');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: '0.5s' }}></div>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Technologies and tools I use to craft exceptional digital experiences
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {portfolioData.techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-3xl md:text-4xl mb-3 group-hover:animate-bounce transition-all duration-300 group-hover:scale-125">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Floating Tech Icons Animation */}
        <div className="mt-16 relative h-20 overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-scroll-infinite space-x-8 whitespace-nowrap">
              {/* First set */}
              {portfolioData.techStack.map((tech, index) => (
                <div key={`scroll-1-${index}`} className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-lg">{tech.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {portfolioData.techStack.map((tech, index) => (
                <div key={`scroll-2-${index}`} className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10"></div>
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{portfolioData.techStack.length}+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">∞</div>
            <div className="text-gray-600">Learning Journey</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
