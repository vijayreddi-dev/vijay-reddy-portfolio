
import { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolio.json';

const TechStackSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section id="tech" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600">
            Technologies I work with to create amazing experiences
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 py-8 overflow-hidden"
            style={{ width: 'fit-content' }}
          >
            {/* Duplicate the array to create seamless loop */}
            {[...portfolioData.techStack, ...portfolioData.techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow min-w-[200px] text-center group hover:scale-105 transform transition-transform"
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
