import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Apple as WhatsApp, Mail, Phone, MapPin, Star, ArrowRight, ChevronDown, Play, Pause, Volume2, VolumeX, Award, Users, Target, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'results', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleVideo = () => {
    const video = document.getElementById('heroVideo') as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById('heroVideo') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre Mim' },
    { id: 'results', label: 'Resultados' },
    { id: 'services', label: 'Serviços' },
    { id: 'contact', label: 'Contato' }
  ];

  const transformations = [
    {
      id: 1,
      before: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      before: 'https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      before: 'https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      before: 'https://images.pexels.com/photos/6551016/pexels-photo-6551016.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      before: 'https://images.pexels.com/photos/6551178/pexels-photo-6551178.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      before: 'https://images.pexels.com/photos/6551180/pexels-photo-6551180.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const services = [
    {
      title: 'Plano Mensal',
      description: 'Acompanhamento completo com flexibilidade mensal',
      price: 'R$ 350/mês',
      features: ['Treinos personalizados', 'Suporte via WhatsApp', 'Avaliação física', 'Plano nutricional básico', 'Aulas presenciais ou online'],
      icon: Target
    },
    {
      title: 'Plano Trimestral',
      description: 'Melhor custo-benefício com compromisso de 3 meses',
      price: 'R$ 900 (3 meses)',
      features: ['Treinos personalizados', 'Suporte via WhatsApp', 'Avaliação física completa', 'Plano nutricional detalhado', 'Acompanhamento semanal', '15% de desconto'],
      icon: Zap
    }
  ];

  const stats = [
    { number: '350+', label: 'Clientes Transformados' },
    { number: '10+', label: 'Anos de Experiência' },
    { number: '95%', label: 'Taxa de Sucesso' },
    { number: '24/7', label: 'Suporte Disponível' }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                FitCoach Pro
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-slate-800 shadow-lg shadow-cyan-400/20 border border-cyan-400/30'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-slate-700 border-l-4 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            id="heroVideo"
            className="w-full h-full object-cover"
            loop
            muted={isVideoMuted}
            poster="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source src="https://videos.pexels.com/video-files/3765373/3765373-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/50"></div>
        </div>

        {/* Video Controls */}
        <div className="absolute top-24 right-4 z-20 flex space-x-2">
          <button
            onClick={toggleVideo}
            className="bg-slate-800/70 backdrop-blur-sm p-3 rounded-full hover:bg-slate-700/70 transition-all duration-300 hover:scale-110"
          >
            {isVideoPlaying ? <Pause size={20} className="text-cyan-400" /> : <Play size={20} className="text-cyan-400" />}
          </button>
          <button
            onClick={toggleMute}
            className="bg-slate-800/70 backdrop-blur-sm p-3 rounded-full hover:bg-slate-700/70 transition-all duration-300 hover:scale-110"
          >
            {isVideoMuted ? <VolumeX size={20} className="text-cyan-400" /> : <Volume2 size={20} className="text-cyan-400" />}
          </button>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Personal Trainer"
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-2xl shadow-cyan-400/40"
              />
              <div className="absolute -top-2 -right-2 bg-cyan-400 rounded-full p-2">
                <Award size={24} className="text-slate-900" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
            Transforme Sua Vida
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Educador Físico especializado em transformações reais
          </p>
          
          <p className="text-lg md:text-xl text-cyan-400 font-semibold mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Método exclusivo • Resultados comprovados • Acompanhamento personalizado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/40 hover:scale-105 flex items-center gap-3 group"
            >
              Começar Agora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-2xl hover:shadow-cyan-400/40 hover:scale-105"
            >
              Conhecer Mais
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Quem Sou <span className="text-cyan-400">Eu</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-cyan-300/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Personal Trainer"
                className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Carlos <span className="text-cyan-400">Fitness</span>
                </h3>
                <p className="text-cyan-400 text-xl font-semibold mb-6">
                  Educador Físico • CREF 123456-G/SP
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sou um Educador Físico com mais de 10 anos de experiência em transformações corporais. 
                  Especialista em emagrecimento, hipertrofia e condicionamento físico, já ajudei mais de 350 pessoas 
                  a alcançarem seus objetivos.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Minha filosofia é baseada em ciência, consistência e personalização. Acredito que cada pessoa 
                  é única e merece um plano específico para suas necessidades e objetivos.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Utilizando métodos cientificamente comprovados e um acompanhamento próximo, 
                  garantimos resultados reais e duradouros.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">350+</div>
                  <div className="text-gray-300">Clientes Transformados</div>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-300">Anos de Experiência</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Especializações</h4>
                <div className="flex flex-wrap gap-3">
                  {['CREF Ativo', 'Nutrição Esportiva', 'Hipertrofia', 'Emagrecimento', 'Funcional', 'Reabilitação'].map((cert) => (
                    <span
                      key={cert}
                      className="bg-gradient-to-r from-cyan-400/10 to-cyan-300/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/20 transition-all duration-300"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Resultados <span className="text-cyan-400">Reais</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Veja as transformações incríveis dos meus alunos. Cada resultado é único e conquistado com dedicação, método e acompanhamento personalizado.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((transformation, index) => (
              <div
                key={transformation.id}
                className="bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10 hover:scale-105 group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={transformation.before}
                      alt="Antes"
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      ANTES
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={transformation.after}
                      alt="Depois"
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      DEPOIS
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-3 text-center">
                    <span className="text-cyan-400 font-semibold text-sm">Transformação Real</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/40 hover:scale-105 flex items-center gap-3 mx-auto group"
            >
              Quero Minha Transformação
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Meus <span className="text-cyan-400">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Escolha o método que melhor se adapta ao seu estilo de vida e objetivos. Todos os planos incluem acompanhamento personalizado.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10 hover:scale-105 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-cyan-400/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-cyan-400/20 transition-all duration-300">
                      <IconComponent size={32} className="text-cyan-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="text-3xl font-bold text-cyan-400 mb-8">{service.price}</div>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
                    >
                      Escolher Plano
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Entre em <span className="text-cyan-400">Contato</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Pronto para começar sua transformação? Entre em contato e vamos conversar sobre seus objetivos. Respondo em até 2 horas!
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-8">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-2xl hover:bg-slate-900/70 transition-all duration-300">
                    <div className="bg-cyan-400/10 p-4 rounded-full">
                      <Phone className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Telefone / WhatsApp</div>
                      <div className="text-white font-semibold text-lg">(11) 99999-9999</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-2xl hover:bg-slate-900/70 transition-all duration-300">
                    <div className="bg-cyan-400/10 p-4 rounded-full">
                      <Mail className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white font-semibold text-lg">carlos@fitcoach.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-2xl hover:bg-slate-900/70 transition-all duration-300">
                    <div className="bg-cyan-400/10 p-4 rounded-full">
                      <MapPin className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Localização</div>
                      <div className="text-white font-semibold text-lg">São Paulo, SP</div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10 pt-8 border-t border-slate-700">
                  <h4 className="text-xl font-bold text-white mb-6">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-cyan-400/10 p-4 rounded-full hover:bg-cyan-400/20 transition-all duration-300 hover:scale-110 group"
                    >
                      <Instagram className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                    </a>
                    <a
                      href="#"
                      className="bg-cyan-400/10 p-4 rounded-full hover:bg-cyan-400/20 transition-all duration-300 hover:scale-110 group"
                    >
                      <Facebook className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                    </a>
                    <a
                      href="#"
                      className="bg-cyan-400/10 p-4 rounded-full hover:bg-cyan-400/20 transition-all duration-300 hover:scale-110 group"
                    >
                      <WhatsApp className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-8">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Conte-me sobre seus objetivos..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-105 flex items-center justify-center gap-3 group"
                >
                  Enviar Mensagem
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              FitCoach Pro
            </div>
            <p className="text-gray-400 mb-4">
              Transformando vidas através do fitness e bem-estar
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <WhatsApp size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-gray-500 text-sm">
                © 2024 FitCoach Pro. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;