import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import { 
  ArrowRight, 
  ShieldAlert, 
  Landmark, 
  FileSignature, 
  GlobeLock, 
  Quote, 
  Award, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  FileSearch, 
  CheckCircle,
  Scale,
  MessageCircle
} from 'lucide-react';

const App: React.FC = () => {
  // WhatsApp Link Constant
  const WHATSAPP_LINK = "https://wa.me/5521969142576?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20do%20meu%20escrit%C3%B3rio.";

  // --- DATA DEFINITIONS ---
  const stats = [
    { value: '+15', label: 'Anos de Experiência' },
    { value: '+500', label: 'Casos Vencidos' },
    { value: '24h', label: 'Disponibilidade' },
    { value: '100%', label: 'Sigilo Absoluto' },
  ];

  const services = [
    {
      icon: ShieldAlert,
      title: 'Direito Penal Econômico',
      subtitle: 'Defesa de Alta Complexidade',
      description: 'Atuação especializada em crimes contra o sistema financeiro, lavagem de dinheiro e operações policiais de grande porte. Protegemos sua liberdade e sua reputação corporativa com discrição absoluta.'
    },
    {
      icon: Landmark,
      title: 'Blindagem Patrimonial & Sucessão',
      subtitle: 'Proteja o Seu Legado',
      description: 'Estruturação de Holdings Familiares e planejamento sucessório. Garantimos que o patrimônio que você construiu permaneça na sua família, blindado contra instabilidades jurídicas e tributárias.'
    },
    {
      icon: FileSignature,
      title: 'Cível Estratégico & Contratos',
      subtitle: 'Segurança para Grandes Negócios',
      description: 'Resolução de conflitos empresariais de alto valor, fusões, aquisições e revisão contratual minuciosa. Eliminamos riscos antes que eles se tornem prejuízos.'
    },
    {
      icon: GlobeLock,
      title: 'Direito Digital & Compliance',
      subtitle: 'O Novo Campo de Guerra',
      description: 'Gestão de crises de imagem na internet, remoção de conteúdo difamatório e adequação à LGPD para grandes corporações.'
    }
  ];

  return (
    <div className="relative font-sans text-slate-200 bg-navy-900">
      <Navbar />
      
      <main>
        {/* --- HERO SECTION --- */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
              alt="Arquitetura Jurídica Imponente" 
              className="w-full h-full object-cover"
            />
            {/* Complex Gradient Overlay */}
            <div className="absolute inset-0 bg-navy-900/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/50"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-gold-400/30 bg-navy-900/40 backdrop-blur-md rounded-sm">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase">
                  Escritório de Alta Performance
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                Autoridade jurídica para <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500 italic pr-2">
                  casos decisivos.
                </span>
              </h1>
              
              <p className="font-sans text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl border-l-0 md:border-l-2 border-gold-400 md:pl-6 mx-auto md:mx-0">
                Não entregamos apenas defesa técnica; entregamos estratégia de guerra jurídica. 
                Mais de uma década protegendo patrimônios, liberdades e reputações de alto perfil.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <Button 
                  href={WHATSAPP_LINK}
                  target="_blank"
                >
                  <span className="flex items-center gap-3">
                    Agendar Consulta Estratégica <ArrowRight size={18} />
                  </span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth'})}
                >
                  Conhecer Especialidades
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hidden md:flex">
            <span className="text-[10px] uppercase tracking-widest text-gold-400">Role para baixo</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent"></div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="bg-navy-800 border-y border-white/5 relative z-20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <p className="font-serif text-4xl md:text-5xl text-gold-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- AREAS / SERVICES SECTION --- */}
        <section id="areas" className="py-24 bg-navy-900 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Nossa Expertise</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">A Estratégia Certa para o Seu Campo de Batalha</h2>
              <div className="w-24 h-1 bg-gold-400 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group p-10 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-navy-800 hover:to-navy-900 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold-400/20 group-hover:border-gold-400/60 transition-colors duration-500"></div>

                  <div className="flex flex-col gap-4 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-navy-900 border border-gold-400/30 rounded-sm group-hover:border-gold-400 transition-colors shadow-lg">
                        <service.icon className="w-7 h-7 text-gold-400" strokeWidth={1.5} />
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-2xl text-white leading-tight mb-2">{service.title}</h3>
                      <p className="text-gold-400 font-medium tracking-wide text-sm uppercase border-l-2 border-gold-400 pl-3">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                    {service.description}
                  </p>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold-400 transition-all duration-500 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-24 bg-navy-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400/5 blur-3xl rounded-full"></div>

          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Image */}
              <div className="w-full lg:w-5/12 relative order-2 lg:order-1">
                <div className="relative z-10 border border-gold-400/30 p-3 bg-navy-900/50 backdrop-blur-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                    alt="Dr. Roberto Imperium" 
                    className="w-full h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-navy-900/90 backdrop-blur border border-gold-400/20 p-4 text-center">
                    <p className="text-gold-400 font-serif text-lg">Dr. Roberto Imperium</p>
                    <p className="text-slate-400 text-xs uppercase tracking-widest">Sócio Fundador</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold-400/20 z-0"></div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-7/12 order-1 lg:order-2">
                <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Perfil do Sócio</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
                  A Autoridade que seu caso exige.
                </h2>
                
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Dr. Roberto Imperium fundou este escritório com uma única missão: entregar resultados excepcionais onde outros veem impossibilidades. Com uma carreira pautada na ética combativa, tornou-se referência em litígios complexos.
                </p>
                
                <p className="text-slate-400 mb-10 leading-relaxed">
                  Sua atuação vai além do direito tradicional; envolve uma visão estratégica de negócios e gestão de crises. Lidera pessoalmente os casos mais críticos do escritório, garantindo que nenhum detalhe passe despercebido.
                </p>

                {/* Credentials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                        <Award className="w-6 h-6 text-gold-400 shrink-0" />
                        <div>
                            <h4 className="text-white font-serif mb-1">Especialista em Processo Civil</h4>
                            <p className="text-slate-500 text-sm">Pós-Graduação pela PUC-SP</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Landmark className="w-6 h-6 text-gold-400 shrink-0" />
                        <div>
                            <h4 className="text-white font-serif mb-1">Mestrado em Direito Penal</h4>
                            <p className="text-slate-500 text-sm">Universidade de São Paulo (USP)</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <BookOpen className="w-6 h-6 text-gold-400 shrink-0" />
                        <div>
                            <h4 className="text-white font-serif mb-1">LL.M em Direito Corporativo</h4>
                            <p className="text-slate-500 text-sm">Insper</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-gold-400 shrink-0" />
                        <div>
                            <h4 className="text-white font-serif mb-1">Membro Efetivo</h4>
                            <p className="text-slate-500 text-sm">Comissão de Direito Bancário da OAB</p>
                        </div>
                    </div>
                </div>

                <div className="bg-navy-900/50 p-6 border-l-4 border-gold-400 italic text-slate-300 relative">
                  "A justiça não é apenas um ideal, é uma conquista diária que exige coragem, técnica e perseverança inabalável."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 bg-navy-900 relative">
          <div className="container mx-auto px-6">
            
            <div className="mb-16 text-center">
                <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Atendimento Premium</span>
                <h2 className="font-serif text-4xl text-white mb-12">Como funciona nossa consulta?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="relative p-6 bg-navy-800/50 border border-white/5 rounded-sm">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy-900 border border-gold-400 p-2 rounded-full">
                            <MessageSquare className="w-5 h-5 text-gold-400" />
                        </div>
                        <h3 className="text-white font-serif text-xl mt-4 mb-2">1. Relato Inicial</h3>
                        <p className="text-slate-400 text-sm">Você nos chama no WhatsApp descrevendo brevemente o caso para uma triagem inicial.</p>
                    </div>
                    <div className="relative p-6 bg-navy-800/50 border border-white/5 rounded-sm">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy-900 border border-gold-400 p-2 rounded-full">
                            <FileSearch className="w-5 h-5 text-gold-400" />
                        </div>
                        <h3 className="text-white font-serif text-xl mt-4 mb-2">2. Análise Prévia</h3>
                        <p className="text-slate-400 text-sm">Nossa equipe avalia a viabilidade jurídica e identifica a melhor área de especialização.</p>
                    </div>
                    <div className="relative p-6 bg-navy-800/50 border border-white/5 rounded-sm">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy-900 border border-gold-400 p-2 rounded-full">
                            <CheckCircle className="w-5 h-5 text-gold-400" />
                        </div>
                        <h3 className="text-white font-serif text-xl mt-4 mb-2">3. Estratégia</h3>
                        <p className="text-slate-400 text-sm">Agendamos uma reunião (online ou presencial) para traçar o plano de ação definitivo.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 border-t border-white/5 pt-16">
              
              <div className="w-full lg:w-5/12">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  Fale com um Especialista
                </h2>
                <p className="text-slate-400 mb-10 text-lg">
                  Seu caso exige sigilo absoluto e competência técnica. Nossos canais estão abertos para lhe atender com a prioridade que você merece.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                      <Phone className="text-gold-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-xl mb-1">Central de Atendimento</h4>
                      <p className="text-slate-400">+55 (21) 96914-2576</p>
                      <p className="text-gold-400/80 text-sm font-medium mt-1">Plantão 24h para Urgências Criminais</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                      <Mail className="text-gold-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-xl mb-1">E-mail Jurídico</h4>
                      <p className="text-slate-400">contato@imperium.adv.br</p>
                      <p className="text-slate-500 text-sm">Resposta em até 4 horas úteis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                      <MapPin className="text-gold-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-xl mb-1">Sede Principal</h4>
                      <p className="text-slate-400">Av. Paulista, 1000 - Cobertura Duplex</p>
                      <p className="text-slate-400">Jardins, São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Area - REPLACED FORM WITH DIRECT LINK */}
              <div className="w-full lg:w-7/12 bg-white/[0.02] p-8 md:p-12 border border-white/5 relative flex flex-col items-center justify-center text-center">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-400/5 rounded-bl-full"></div>
                
                <div className="w-20 h-20 bg-gold-400/10 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-10 h-10 text-gold-400" />
                </div>

                <h3 className="font-serif text-3xl text-white mb-4">Atendimento Prioritário</h3>
                
                <p className="text-slate-400 max-w-md mb-8 text-lg">
                  Para garantir agilidade e sigilo, realizamos a triagem inicial diretamente pelo WhatsApp do sócio responsável.
                </p>

                <Button 
                  href={WHATSAPP_LINK} 
                  fullWidth 
                  target="_blank"
                  className="py-5 text-base shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Análise do Caso
                  </span>
                </Button>
                
                <p className="text-slate-500 text-xs mt-6">
                  Ao clicar, você será redirecionado para o WhatsApp oficial do escritório.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-navy-900 border-t border-white/5 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-gold-400" />
              <span className="font-serif text-xl text-white">Imperium Advocacia</span>
            </div>

            <p className="text-slate-500 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Imperium Advocacia. Todos os direitos reservados.
              <br className="hidden md:block" />
              <span className="text-xs mt-1 block">OAB/SP 000.000</span>
            </p>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gold-400 rounded-full animate-ping opacity-75"></div>
          
          <div className="relative bg-gradient-to-br from-gold-400 to-gold-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            <MessageCircle className="text-white w-7 h-7" fill="white" />
          </div>
          
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <span className="text-navy-900 font-bold text-sm">Fale Conosco</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default App;