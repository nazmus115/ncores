import React, { useState, useMemo } from 'react';
import { 
  Menu, X, ArrowRight, Code2, Globe, Cpu, 
  Lock, ExternalLink, Mail, MapPin, Phone, 
  Sparkles, CheckCircle2, CheckCircle, Layers, Send
} from 'lucide-react';

// Update your company details right here
const COMPANY_INFO = {
  name: 'ncores',
  tagline: 'We build fast websites, smart software, and digital tools to help your business grow.',
  email: 'nazmus.s2004@gmail.com',
  phone: '+880 1715445330',
  location: 'Dhaka, Bangladesh'
};

// We use a simple, clean font from Google Fonts
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #ffffff;
      color: #0f172a;
    }
    
    .glass-nav {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    
    .blue-gradient-text {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}</style>
);

// Here is the list of your 4 projects
const INITIAL_PROJECTS = [
  {
    id: 'pickles-corner',
    name: 'Pickles Corner',
    domain: 'picklescorner.store',
    url: 'https://picklescorner.store',
    category: 'public',
    type: 'E-Commerce Store',
    badge: 'Live Website',
    badgeType: 'public',
    description: 'A fast and beautiful online store. Built to load quickly on mobile phones and make buying easy for customers.',
    metrics: ['Very Fast Loading', 'Mobile Friendly', 'Secure Payments'],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Shopify'],
    longDescription: 'Pickles Corner is an online shop that needs to handle many products and customers at the same time. We built it to be super fast and easy to use on any device.',
  },
  {
    id: 'zaytaa',
    name: 'Zaytaa Platform',
    domain: 'zaytaa.com',
    url: 'https://zaytaa.com',
    category: 'public',
    type: 'E-Commerce Store',
    badge: 'Live Website',
    badgeType: 'public',
    description: 'A modern digital platform and store. It offers a great experience for users and makes content easy to manage.',
    metrics: ['Smooth Animations', 'Easy Content Edit', 'Fast Worldwide'],
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Supabase'],
    longDescription: 'Zaytaa wanted a website that looks like a high-end brand. We built a beautiful web app where users can easily find products and read stories.',
  },
  {
    id: 'binder',
    name: 'Binder System',
    domain: 'Private Office Tool',
    url: null,
    category: 'private',
    type: 'Office Work Hub',
    badge: 'Private Project',
    badgeType: 'private',
    description: 'A secure software made for Hashimukh to handle member and internal finance management.',
    metrics: ['High Security', 'Team Access Control', 'Live Updates'],
    tech: ['React', 'Node.js', 'Supabase', 'Database Systems', 'Secure Login'],
    longDescription: 'Binder is a private system made for a company. It puts all their files, approvals, and daily work into one safe place that only staff can open.',
  },
  {
    id: 'crm-suite',
    name: 'Custom CRM System',
    domain: 'Private Tool',
    url: null,
    category: 'private',
    type: 'Customer Tool',
    badge: 'Private Project',
    badgeType: 'private',
    description: 'A smart CRM for Chartared Accountants office to manage their client information.',
    metrics: ['Saves Time', 'Automatic Emails', 'Clear Reports'],
    tech: ['Python', 'Django', 'MySql'],
    longDescription: 'This tools helps users to handle client information, access client informaion from different devices. Users can see current running clients, paid & unpaid status and features needed for a company to run at ease.',
  }
];

// Here is the list of services you provide
const SERVICES = [
  {
    id: 'web-dev',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: 'Website Development',
    description: 'We build fast, beautiful websites and online stores that look great on computers and mobile phones.',
  },
  {
    id: 'custom-software',
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    title: 'Custom Software',
    description: 'We create special software and private office tools made just for your business needs.',
  },
  {
    id: 'ai-automation',
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
    title: 'Smart Automation',
    description: 'We use AI and smart tools to do boring, repetitive work automatically, saving you time and money.',
  },
  {
    id: 'cloud',
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    title: 'Cloud & Servers',
    description: 'We set up secure and strong servers so your website or app stays online and runs fast all the time.',
  }
];

export default function App() {
  // State for opening menus and popups
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all'); // all, public, private
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // State for the contact form
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to show a small success message at the bottom
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Filter the projects based on the button clicked
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return INITIAL_PROJECTS;
    return INITIAL_PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  // Handle contact form send button
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Pretend to send data for 1 second
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      showToast('Thank you! Your message has been sent successfully.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <FontLoader />

      {/* Small Message Popup (Toast) */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 glass-nav border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo area */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900 block leading-none">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] font-bold uppercase text-blue-600 block mt-1">
                Software & Web Services
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Our Work</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a href="#contact" className="px-5 py-2.5 text-sm font-bold rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-colors">
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-3 font-bold text-slate-700">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Our Work</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Professional Web & Software Studio</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 max-w-4xl mx-auto leading-tight mb-6">
            Building Modern Web Apps & <br className="hidden md:block" />
            <span className="blue-gradient-text">Custom Office Software</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {COMPANY_INFO.tagline} We work with you to make systems that are fast, easy to use, and safe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#work" className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-all">
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-bold border border-slate-300 flex items-center justify-center transition-all">
              Contact Us
            </a>
          </div>

          {/* Quick Info blocks */}
          <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center md:text-left">
            <div>
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase">Custom Work</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Fast</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase">Loading Speed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Secure</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase">Data Protection</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Friendly</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase">Support Team</div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="services" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center md:text-left md:flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">What We Do</span>
              <h2 className="text-3xl font-bold text-slate-900">Services We Offer</h2>
            </div>
            <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm">
              We help businesses upgrade their technology with modern websites and smart internal software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="work" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Our Projects</span>
            <h2 className="text-3xl font-bold text-slate-900">Selected Work & Private Tools</h2>
          </div>

          {/* Project Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button onClick={() => setActiveFilter('all')} className={`px-4 py-2 rounded-lg text-sm font-bold ${activeFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-300 text-slate-600'}`}>All Work</button>
            <button onClick={() => setActiveFilter('public')} className={`px-4 py-2 rounded-lg text-sm font-bold ${activeFilter === 'public' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-300 text-slate-600'}`}>Public Websites</button>
            <button onClick={() => setActiveFilter('private')} className={`px-4 py-2 rounded-lg text-sm font-bold ${activeFilter === 'private' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-300 text-slate-600'}`}>Private Office Tools</button>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{project.name}</h3>
                      <span className="text-sm text-slate-500">{project.type}</span>
                    </div>
                    {/* Public or Private Badge */}
                    {project.badgeType === 'public' ? (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Public
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-full border border-orange-200 flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Private Tool
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-6 space-y-2">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-lg border border-slate-300 hover:border-blue-600 text-slate-800 hover:text-blue-600 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  Read More Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-lg hover:bg-slate-200">
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
            <p className="text-blue-600 text-sm font-bold mb-6">{selectedProject.domain}</p>

            <div className="space-y-4 text-slate-700 text-sm">
              <p className="leading-relaxed">{selectedProject.longDescription}</p>
              
              <h4 className="font-bold text-slate-900 mt-6">Tools We Used (Technology Stack):</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded text-xs font-bold text-slate-600">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end gap-4">
              {selectedProject.url && (
                <a href={selectedProject.url} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg text-sm flex items-center gap-2 hover:bg-blue-700">
                  Open Website <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button onClick={() => setSelectedProject(null)} className="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm hover:bg-slate-200">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Contact Information & About */}
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Contact Us</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's talk about your project</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We are ready to build beautiful web platforms or private office software for you. Send us a message and we will reply as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Email Us</div>
                    <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Call Us</div>
                    <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Location</div>
                    <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div id="contact" className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-sm" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-sm" 
                    placeholder="john@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">How can we help?</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-sm" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-8 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <Code2 className="w-5 h-5 text-blue-400" />
            {COMPANY_INFO.name}
          </div>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}