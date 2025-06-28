
import portfolioData from '../data/portfolio.json';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {portfolioData.personal.about}
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{portfolioData.personal.title}</h3>
                <p className="text-gray-600">3+ Years Experience</p>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="w-80 h-80 rounded-2xl shadow-2xl mx-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
