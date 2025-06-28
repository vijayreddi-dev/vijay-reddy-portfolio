
import portfolioData from '../data/portfolio.json';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
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
          
          {/* Animated Text Section */}
          <div className="animate-scale-in">
            <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl">
              {/* Animated Hello Text */}
              <div className="text-center">
                <div className="mb-6">
                  <span className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                    Hello
                  </span>
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full animate-scale-in" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <span className="text-xl md:text-2xl text-gray-700 font-medium">I am</span>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 relative">
                    <span className="relative z-10">Vijay Reddy</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 blur-lg animate-glow"></div>
                  </h1>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '1.6s' }}>
                  <p className="text-lg md:text-xl text-gray-600 font-medium bg-white/50 backdrop-blur-sm rounded-2xl py-3 px-6 inline-block shadow-lg">
                    Frontend Developer
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-indigo-200 rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 bg-purple-200 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-4 w-4 h-4 bg-pink-200 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
