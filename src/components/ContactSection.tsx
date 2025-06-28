
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300">
            Have a project in mind? Let's discuss how we can bring it to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-lg font-medium">{portfolioData.personal.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <p className="text-lg font-medium">{portfolioData.personal.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-lg font-medium">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a
                href={portfolioData.personal.github}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.personal.portfolio}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-4">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  <p className="text-indigo-400 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 {portfolioData.personal.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
