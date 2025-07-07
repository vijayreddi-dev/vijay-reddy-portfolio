
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award } from 'lucide-react';
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
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gray-800 border border-indigo-500/40 rounded-xl flex flex-col items-center text-center p-4 shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600/20 mb-3 group-hover:bg-indigo-600/40 transition-colors">
                    <Award size={28} className="text-indigo-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 truncate w-full" title={cert.name}>{cert.name}</h4>
                  <p className="text-xs text-indigo-300 mb-2 truncate w-full" title={cert.issuer}>{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mb-3">{cert.date}</p>
                  <a
                    href={cert.credentialUrl}
                    className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold hover:bg-indigo-500/40 hover:text-white transition-colors inline-flex items-center space-x-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Credential</span>
                    <ExternalLink size={13} />
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
