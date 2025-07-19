import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, MapPin, Linkedin, Github, Twitter, Menu, X, ExternalLink, Code, Palette, Database, Zap, ArrowUp } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 300);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`${mobile ? 'block w-full text-left px-4 py-2' : 'px-4 py-2'
        } text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium ${activeSection === href ? 'text-purple-600 bg-purple-50 rounded-lg' : ''
        }`}
    >
      {children}
    </button>
  );

  const SkillCard = ({ icon: Icon, title, skills, color }) => (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const ProjectCard = ({ title, description, image, tech, demoLink, codeLink }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
      <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="text-6xl">{title.includes('Dairy') ? '🥛' : title.includes('Stack') ? '💬' : '💰'}</div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {demoLink && (
            <a href={demoLink} className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {codeLink && (
            <a href={codeLink} className="flex items-center gap-1 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200">
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express.js", "Flask", "REST APIs"],
      color: "bg-gradient-to-r from-green-500 to-teal-600"
    },
    {
      icon: Palette,
      title: "Database & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Docker", "AWS", "Kubernetes"],
      color: "bg-gradient-to-r from-pink-500 to-rose-600"
    },
    {
      icon: Zap,
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "SQL"],
      color: "bg-gradient-to-r from-orange-500 to-red-600"
    }
  ];

  const projects = [
    {
      title: "Dairy Guard",
      description: "A smart Dairy Quality Analyzer that predicts milk quality (Low/Medium/High) from input parameters using Random Forest and SVM, provides AI-powered suggestions, and visualizes insights through interactive graphs.",
      tech: ["React", "Flask", "MongoDB", "Machine Learning", "Random Forest", "SVM"],
      demoLink: "#",
      codeLink: "https://github.com/Atharva0920/Milk-Quality-Prediction"
    },
    {
      title: "Stack Overflow Clone",
      description: "A Stack Overflow clone with secure authentication (JWT & bcrypt), question-answer functionality, tag-based filtering, and Stripe integration for premium features.",
      tech: ["React", "Redux", "MongoDB", "Node.js", "JWT", "bcrypt"],
      demoLink: "https://stack-overflow-clone-31.netlify.app/",
      codeLink: "https://github.com/Atharva0920/Stack-Overflow-Clone/tree/main"
    },
    {
      title: "Personal Finance Tracker",
      description: "In Development⚒️⚒️... A comprehensive personal finance management application with AI-powered insights and recommendations.",
      tech: ["React", "Spring Boot", "MySQL", "AI"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Atharva Ganmote
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <NavLink href="home" mobile>Home</NavLink>
              <NavLink href="about" mobile>About</NavLink>
              <NavLink href="skills" mobile>Skills</NavLink>
              <NavLink href="projects" mobile>Projects</NavLink>
              <NavLink href="contact" mobile>Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-6xl shadow-lg">
              👨‍💻
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Atharva Ganmote
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">Software Developer</p>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            I love building clean, intuitive digital experiences. I'm always exploring new ideas and pushing what I can create next.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  👋 Hey! I'm Atharva, a Computer Science grad with a strong foundation in software development. I'm passionate about full-stack development, AI, and creating seamless user experiences that make a real impact.
                </p>
                <p>
                  🚀 My journey into tech began with a simple curiosity about how things work behind the screen. That curiosity quickly turned into a drive to explore different tools, frameworks, and technologies — always learning, building, and solving real-world problems.
                </p>
                <p>
                  👨‍💻 When I'm not coding, I'm usually learning something new — exploring the latest tech trends, working on side projects, or improving my skills one challenge at a time. I enjoy the process of continuous growth and always look forward to what's next.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">atharvaganmote00@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Pune, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                  <p className="text-gray-600">linkedin.com/in/atharva0920</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={() => alert('Thank you for your message! This is a demo form.')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:atharvaganmote00@gmail.com" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/atharva0920" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400">&copy; 2025 Atharva Ganmote. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;