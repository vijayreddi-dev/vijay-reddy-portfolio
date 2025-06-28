
import { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolio.json';

const TechStackSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Slower, smoother animation

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a brief delay
    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1000);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="tech" className="py-12 md:py-20 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Tech Stack
          </h2>
          <p className="text-base md:text-lg text-gray-600 animate-fade-in">
            Technologies I work with to create amazing experiences
          </p>
        </div>
        
        <div className="relative overflow-hidden bg-white/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          <div
            ref={scrollRef}
            className="flex space-x-4 md:space-x-8 py-4 md:py-8 overflow-hidden"
            style={{ 
              width: 'fit-content',
              scrollBehavior: 'smooth'
            }}
          >
            {/* Duplicate the array multiple times for seamless infinite scroll */}
            {[...portfolioData.techStack, ...portfolioData.techStack, ...portfolioData.techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 bg-white rounded-xl p-3 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[120px] md:min-w-[180px] lg:min-w-[200px] text-center group hover:scale-110 transform cursor-pointer animate-scale-in"
                style={{
                  animationDelay: `${(index % portfolioData.techStack.length) * 0.1}s`
                }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 group-hover:animate-bounce transition-all duration-300 group-hover:scale-125">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base lg:text-lg group-hover:text-indigo-600 transition-colors duration-300">
                  {tech.name}
                </h3>
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-200 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse opacity-40"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + i}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
