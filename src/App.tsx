import React, { useState, useEffect } from 'react';
import { Menu, X,   Mails as Mail, Phone, MapPin, ArrowRight, ChevronDown, Play, Pause, Volume2, VolumeX, Award, Target, Zap } from 'lucide-react';
import { FaWhatsapp, FaInstagram, } from 'react-icons/fa';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('sobre');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
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
          // API DO WPP
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `
      Olá! Tenho interesse no seu serviço.
      Nome: ${formData.name}
      Email: ${formData.email}
      Telefone: ${formData.phone}
      Mensagem: ${formData.message}
        `;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = '5543984573717'; // Substitua pelo seu número de WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        setFormData({ name: '', email: '', phone: '', message: '' });
      };


  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre Mim' },
    { id: 'results', label: 'Resultados' },
    { id: 'products', label: 'Produtos' },
    { id: 'services', label: 'Serviços' },
    { id: 'contact', label: 'Contato' }
  ];

  const transformations = [
    {
      id: 1,
      before: 'images/aluna1antes.webp',
      after: 'images/aluna1depois.webp',
    },
    {
      id: 2,
      before: 'images/aluna9antes.webp',
      after: 'images/aluna9depois.webp',
    },
    {
      id: 3,
      before: 'images/aneantes.webp',
      after: 'images/anedepois.webp',
    },
    {
      id: 4,
      before: 'images/aluna4antes.webp',
      after: 'images/aluna4depois.webp',
    },
    {
      id: 5,
      before: 'images/alunaantes.webp',
      after: 'images/alunadepois.webp',
    },
    {
      id: 6,
      before: 'images/aluna5antes.webp',
      after: 'images/aluna5depois.webp',
    },
      {
      id: 6,
      before: 'images/aluna12antes.webp',
      after: 'images/aluna12depois.webp',
    },
      {
      id: 6,
      before: 'images/aluna8antes.webp',
      after: 'images/aluna8depois.webp',
    },
      {
      id: 6,
      before: 'images/aluna11antes.webp',
      after: 'images/aluna11depois.webp',
    },
  ];

  const services = [
    {
      title: 'Plano Trimestral',
      description: 'Suporte integral com opções de pagamento facilitadas',
      price: 'R$ 260/mês',
      features: ['Pagamento mensal durante 3 meses','Treinos personalizados', 'Suporte via WhatsApp', 'Avaliação Postural',],
      link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849763dae001976a68eb2c0297',
      icon: Zap
    },
       {
      title: 'Plano Semestral',
      description: 'Assistência completa com formas de pagamento que cabem no seu bolso',
      price: 'R$ 225/mês',
      features: ['Pagamento mensal durante 6 meses','Treinos personalizados', 'Suporte via WhatsApp', 'Avaliação Postural',],
      link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849764e81a01976a6a1a09023a',
      icon: Target
    },
    {
      title: 'Plano Anual',
      description: 'Melhor custo-benefício com compromisso de 12 meses',
      price: 'R$ 195/mês',
      features: ['Pagamento mensal durante 12 meses','Treinos personalizados', 'Suporte via WhatsApp', 'Avaliação Postural',],
      link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c938084976a0ea101976a5fa1710025',
      icon: Target
    },
        {
      title: 'Planos Black Friday',
      description: 'Melhor oportunidade do ano para começar sua jornada',
      price:(
    <div className="space-y-3">
      <div>
        <span className="font-medium">Trimestral: </span>
        <span className="text-gray-500 line-through">R$260</span><br />
        <span className="text-red-600 font-semibold">Por R$156/mês</span>
      </div>
      <div>
        <span className="font-medium">Semestral: </span>
        <span className="text-gray-500 line-through">R$225</span><br />
        <span className="text-red-600 font-semibold">Por R$135/mês</span>
      </div>
      <div>
        <span className="font-medium">Anual: </span>
        <span className="text-gray-500 line-through">R$195</span><br />
        <span className="text-red-600 font-semibold">Por R$117/mês</span>
      </div>
    </div>
  ),
      features: ['Promoção válida de 03/11 a 08/11'],
      link: '#',
      icon: Target
    },
  ];

  const stats = [
    { number: '470+', label: 'Alunas' },
    { number: '100%', label: 'Treinos Individualizados' },
    { number: '95%', label: 'Taxa de Sucesso' },
    { number: '8h/20h', label: 'Suporte Disponível' }
  ];

  const products = [
    {
      title: 'Corrigindo a Hipercifose Torácica',
      description: 'E-book com estratégias práticas para corrigir a postura e melhorar a estética corporal.',
      price: 'R$ 39,90',
      originalPrice: 'R$ 69,90',
      image: 'images/postura.webp',
      features: ['Planilha de treino com aplicação imediata', 'Explicações práticas dos alongamentos', 'Material claro, direto e acessível', 'Vídeos explicativos dos exercícios'],
      hotmartUrl: 'https://hotmart.com/pt-br/marketplace/produtos/corrigindo-a-hipercifose-toracica/A92252553M'
    },
    {
      title: 'Transforme sua Bunda em Glúteo',
      description: 'E-book com passo a passo para conquistar glúteos de respeito, com estratégias focadas na estética feminina e bônus exclusivo de treino.',
      price: 'R$ 39,90',
      originalPrice: 'R$ 89,90',
      image: 'images/ebookgluteo.webp',
      features: ['Indicado para iniciantes e experientes', 'Foco em estética feminina', 'Planilha bônus com treino prático', 'Conteúdo elaborado por especialista em musculação'],
      hotmartUrl: 'https://pay.hotmart.com/P84375411L?checkoutMode=10&bid=1753210942644'
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Raphael Viezorkosky
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

      <main className="pt-24"></main>

      {/* Hero Section with Video */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background , imagem de capa*/}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-0">
              <img
                src="images/wallteste.webp"
                alt="Background"
                className="w-full h-full object-cover"
              />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-900/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30"></div>
            </div>

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
                src="images/raphaperfil.webp"
                alt="Personal Trainer"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-2xl shadow-cyan-400/40"
              />
              <div className="absolute -top-2 -right-2 bg-cyan-400 rounded-full p-2">
                <Award size={24} className="text-slate-900" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
            Raphael Viezorkosky
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Musculaçāo Feminina & Estética
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
                src="images/raphaperfil2.webp"
                alt="Personal Trainer"
                className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="space-y-8 max-w-full">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 break-words whitespace-normal">
                  Raphael <span className="text-cyan-400">Viezorkosky</span>
                </h3>
                <p className="text-cyan-400 text-lg md:text-xl font-semibold mb-6 break-words whitespace-normal">
                  Prof. Educação Fisíca • CREF 035707 - PR
                </p>
              </div>
              
              {/* Tabs Navigation */}
              <div className="flex space-x-1 bg-slate-900/50 p-1 rounded-2xl">
                <button
                  onClick={() => setActiveTab('sobre')}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'sobre'
                      ? 'bg-cyan-400 text-slate-900'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                  }`}
                >
                  Sobre Mim
                </button>
                <button
                  onClick={() => setActiveTab('formacao')}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'formacao'
                      ? 'bg-cyan-400 text-slate-900'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                  }`}
                >
                  Formação
                </button>
                <button
                  onClick={() => setActiveTab('especialidades')}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'especialidades'
                      ? 'bg-cyan-400 text-slate-900'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                  }`}
                >Especialidades
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'sobre' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible text-left lg:text-justify">
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed whitespace-normal">
                Sou formado em Educação Física e especialista em Musculação Feminina e Estética, Correção Postural e Glúteos.
                Já acompanhei mais de 470 alunas no digital, em 4 continentes, sempre com foco em resultados reais e duradouros, dentro de uma consultoria que te acompanha de verdade.
              </p>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed whitespace-normal">
                Meu trabalho é baseado em ciência, vivência prática e individualidade. Cada planilha de treino é pensada exclusivamente para atender os objetivos e necessidades de cada aluna, de maneira totalmente individual, com acompanhamento direto e personalizados feito por mim, não existe ficha pronta.
              </p>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed whitespace-normal">
                Mais do que treinar, meu objetivo é te ajudar a se sentir bem com você mesma, resgatando sua autoestima por meio da estética e da performance.
              </p>
            </div>

                )}

                {activeTab === 'formacao' && (
                  <div className="space-y-6 animate-fade-in">
                    <h4 className="text-2xl font-bold text-white mb-4">Formação Acadêmica</h4>
                    <div className="space-y-4">
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                        <h5 className="text-cyan-400 font-semibold">Educação Física - Bacharelado</h5>
                        <p className="text-gray-300">Centro Universitário Filadélfia - UniFil</p>
                      </div> 
                    </div>
                   
                    <h4 className="text-2xl font-bold text-white mb-4 mt-8">Cursos e Certificações</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Qualificação em Reabilitação Funcional - BPro Fisioterapia',
                        'Treinamento de Força e Treinamento Resistido',
                        'Treinamentos Kettlebell Hardstyle - Wod Londrina',
                      
                      ].map((curso, index) => (
                        <div key={index} className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 flex items-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">{curso}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'especialidades' && (
                  <div className="space-y-6 animate-fade-in">
                    <h4 className="text-2xl font-bold text-white mb-4">Áreas de Especialização</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                        <h5 className="text-cyan-400 font-bold text-lg mb-3">Musculação Feminina</h5>
                        <p className="text-gray-300 text-sm mb-3">Protocolos personalizados para a melhora da estética corporal, com foco no público feminino.</p>
                        <ul className="text-gray-400 text-sm space-y-1">
                          <li>• Treinos específicos para membros inferiores, glúteos e correção postural.</li>
                          <li>• Divisão estratégica dos exercícios para resultados eficazes.</li>
                          <li>• Acompanhamento direto via WhatsApp para correção de exercícios.</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                        <h5 className="text-cyan-400 font-bold text-lg mb-3">Correção Postural</h5>
                        <p className="text-gray-300 text-sm mb-3">Melhore sua postura, reduza dores e previna lesões com protocolos personalizados.</p>
                        <ul className="text-gray-400 text-sm space-y-1">
                          <li>• Avaliação postural individual através de fotos pelo WhatsApp.</li>
                          <li>• Fortalecimento e alongamento de músculos específicos.</li>
                          <li>• Aprendizagem correta dos movimentos para evitar compensações.</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                        <h5 className="text-cyan-400 font-bold text-lg mb-3">Estética</h5>
                        <p className="text-gray-300 text-sm mb-3">Recupere sua silhueta com treinos direcionados aos seus objetivos.</p>
                        <ul className="text-gray-400 text-sm space-y-1">
                          <li>• Estratégia de divisões de treinos para regiões específicas.</li>
                          <li>• Protocolo elaborado de forma individualizada.</li>
                          <li>• Treinos com foco em estética.</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                        <h5 className="text-cyan-400 font-bold text-lg mb-3">Glúteos</h5>
                        <p className="text-gray-300 text-sm mb-3">Protocolos personalizados para atender seus objetivos, visando o melhor desenvolvimento do seu glúteo.</p>
                        <ul className="text-gray-400 text-sm space-y-1">
                          <li>• Seleção correta dos exercícios com base nos seus objetivos.</li>
                          <li>• Divisão estratégica para otimizar o estímulo.</li>
                          <li>• Correção dos exercícios via WhatsApp.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">470+</div>
                  <div className="text-gray-300">Alunas</div>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-gray-300">Treinos Individualizados</div>
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
              Veja as transformações incríveis das minhas alunas. Cada resultado é único e conquistado com dedicação, método e acompanhamento personalizado.
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
                      className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      ANTES
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={transformation.after}
                      alt="Depois"
                      className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
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

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Meus <span className="text-cyan-400">Produtos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Produtos digitais pensados com base em estudo, prática e no que realmente funciona.
              <br></br>Conteúdo estratégico e embasado para você alcançar seus objetivos.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                {/* tamanho do card da aba de produtos */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"

                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      OFERTA
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    <span className="text-gray-500 line-through text-lg">{product.originalPrice}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={product.hotmartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 py-3 rounded-full font-bold text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
                  >
                    Comprar Agora
                  </a>
      
                </div>
              </div>
            ))}
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
              Escolha o plano que melhor se adapta ao seu estilo de vida e objetivos. 
              <br></br>Todos os planos incluem acompanhamento e suporte via WhatsApp.
            </p>

            <p className="text-gray-300 text-lg">
              Os pagamentos são realizados de forma <span className="font-semibold" style={{ color: '#35E4DC' }}>recorrente</span> via <span className="font-semibold" style={{ color: '#35E4DC' }}>cartão de crédito</span>!
            </p>


            <br></br>
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

                    {service.title === "Planos Black Friday" ? (
                    <button
                      disabled
                      className="w-full block text-center bg-gray-400 text-white py-3 rounded-full font-bold opacity-60 cursor-not-allowed"
                    >
                      Indisponível
                    </button>
                  ) : (
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
                    >
                      Escolher Plano
                    </a>
                  )}



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
              Pronta para começar sua transformação? Entre em contato e faça parte do melhor time. <br></br>Retorno em até 60 minutos!
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
                      <div className="text-white font-semibold text-lg">+55 (43) 98457-3717</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-2xl hover:bg-slate-900/70 transition-all duration-300">
                    <div className="bg-cyan-400/10 p-4 rounded-full">
                      <Mail className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white font-semibold text-lg">raphhaa_@edu.unifil.br</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-2xl hover:bg-slate-900/70 transition-all duration-300">
                    <div className="bg-cyan-400/10 p-4 rounded-full">
                      <MapPin className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Localização</div>
                      <div className="text-white font-semibold text-lg">Londrina, Paraná</div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10 pt-8 border-t border-slate-700">
                  <h4 className="text-xl font-bold text-white mb-6">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a
                        href="https://www.instagram.com/raphael.viezorkosky.treinador/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-400/10 p-4 rounded-full hover:bg-cyan-400/20 transition-all duration-300 hover:scale-110 group"
                        > <FaInstagram size={24} color="pink" />
                       </a>

                    <a
                      href= "https://wa.me/+5543984573717"
                      target="_blank"
                      className="bg-cyan-400/10 p-4 rounded-full hover:bg-cyan-400/20 transition-all duration-300 hover:scale-110 group"
                    > <FaWhatsapp size={24} color="green" />
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
              Raphael Viezorkosky
            </div>
            <p className="text-gray-400 mb-4">
              Elevando sua saúde e autoestima.
            </p>
  
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-gray-500 text-sm">
                ©  2025 Desenvolvido por Ane Elise | Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;