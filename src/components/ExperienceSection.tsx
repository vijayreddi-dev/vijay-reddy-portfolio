
import portfolioData from '../data/portfolio.json';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600">
            My professional journey and growth as a developer
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform md:-translate-x-px"></div>

          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4 font-medium">
                    {exp.duration}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
