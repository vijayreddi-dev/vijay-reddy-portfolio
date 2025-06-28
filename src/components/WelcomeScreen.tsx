
import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center animate-fade-in">
        <div className="relative mb-8">
          <img
            src={portfolioData.personal.avatar}
            alt={portfolioData.personal.name}
            className="w-32 h-32 rounded-full mx-auto shadow-2xl animate-scale-in"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
          Hello! 👋
        </h1>
        <h2 className="text-2xl md:text-3xl text-indigo-600 mb-6 animate-fade-in">
          I'm {portfolioData.personal.name}
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto animate-fade-in">
          {portfolioData.personal.welcomeMessage}
        </p>
        <div className="mt-8 flex justify-center">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
