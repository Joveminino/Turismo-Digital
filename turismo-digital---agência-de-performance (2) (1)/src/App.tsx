import { 
  TrendingUp, 
  Users, 
  Zap, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  DollarSign, 
  Clock,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = "5511999999999"; // Placeholder
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de uma análise gratuita da minha presença digital.`;

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/70 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-sm flex items-center justify-center font-bold text-white">T</div>
            <span className="text-3xl font-script tracking-tighter text-white">Turismo<span className="text-orange-600">Digital</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <a href="#problema" className="hover:text-white transition-colors">O Problema</a>
            <a href="#solucao" className="hover:text-white transition-colors">Solução</a>
            <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-all flex items-center gap-2"
            >
              Falar com Especialista
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-4xl font-script text-white">
              <a href="#problema" onClick={() => setIsMenuOpen(false)}>O Problema</a>
              <a href="#solucao" onClick={() => setIsMenuOpen(false)}>Solução</a>
              <a href="#resultados" onClick={() => setIsMenuOpen(false)}>Resultados</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600"
              >
                Análise Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505] z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1 bg-orange-600/20 border border-orange-600/30 text-orange-500 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Agência de Performance para Turismo
            </span>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] uppercase italic mb-8 tracking-tighter">
              Pare de vender com <span className="text-orange-600">margem baixa</span>.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed">
              Recupere sua margem de lucro. Transformamos seu hotel, restaurante ou agência de viagens em uma máquina de vendas diretas com estratégias de tráfego pago e landing pages de alta conversão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-orange-600 text-white px-8 py-5 rounded-sm font-bold text-lg uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-orange-700 transition-all"
              >
                Quero Minha Análise Gratuita
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-medium text-white/60 uppercase tracking-widest">
                  +50 negócios turísticos escalados
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <motion.section 
        id="problema" 
        className="py-24 bg-white text-black"
        initial={fadeIn.initial}
        whileInView={fadeIn.whileInView}
        viewport={fadeIn.viewport}
        transition={fadeIn.transition}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">A Realidade do Mercado</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-8 tracking-tight">
                Cansado de pagar <span className="text-orange-600">altas comissões</span> por cada cliente?
              </h2>
              <p className="text-xl text-black/70 mb-8 leading-relaxed">
                Depender exclusivamente do Booking, iFood, TripAdvisor ou Decolar é um risco fatal. Você não é dono dos seus clientes, você está apenas <strong>alugando</strong> a audiência deles.
              </p>
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {[
                  { icon: <DollarSign className="text-red-600" />, title: "Margem de Lucro Esmagada", desc: "As taxas das plataformas consomem o lucro que deveria ser reinvestido no seu negócio." },
                  { icon: <ShieldCheck className="text-red-600" />, title: "Dependência Perigosa", desc: "Se o algoritmo mudar ou sua conta for suspensa, seu faturamento desaparece da noite para o dia." },
                  { icon: <Users className="text-red-600" />, title: "Falta de Dados", desc: "Você não tem acesso direto ao seu cliente para fazer remarketing ou fidelização." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={staggerItem}
                    className="flex gap-4 p-6 bg-gray-50 border-l-4 border-red-600 rounded-r-lg"
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold uppercase text-lg">{item.title}</h4>
                      <p className="text-black/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-600/10 rounded-2xl blur-3xl" />
              <div className="relative bg-black p-8 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm">Perda Financeira Estimada</h3>
                  <Clock className="text-orange-600 w-5 h-5" />
                </div>
                <div className="space-y-8">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-white/40 text-xs uppercase block mb-1">Faturamento Mensal via OTAs</span>
                    <span className="text-3xl font-bold text-white">R$ 100.000,00</span>
                  </div>
                  <div className="p-4 bg-red-600/20 border border-red-600/30 rounded-lg">
                    <span className="text-red-500 text-xs uppercase block mb-1 underline">Comissões Pagas (20%)</span>
                    <span className="text-3xl font-bold text-red-500">- R$ 20.000,00</span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/60 text-sm italic">
                      "Em um ano, você entregou <strong>R$ 240.000,00</strong> para as plataformas. Esse dinheiro poderia ser seu lucro líquido."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        id="solucao" 
        className="py-24 bg-black"
        initial={fadeIn.initial}
        whileInView={fadeIn.whileInView}
        viewport={fadeIn.viewport}
        transition={fadeIn.transition}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6 text-white">A Solução: <span className="text-orange-600">Venda Direta</span></h2>
            <p className="text-white/80 text-lg">
              Criamos um ecossistema completo que atrai o cliente certo e o conduz diretamente para o seu WhatsApp ou sistema de vendas, sem intermediários.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: <Zap className="w-10 h-10 text-orange-600" />, 
                title: "Landing Pages Magnéticas", 
                desc: "Páginas ultra-rápidas focadas em conversão psicológica, destacando seus diferenciais e eliminando objeções." 
              },
              { 
                icon: <TrendingUp className="w-10 h-10 text-orange-600" />, 
                title: "Tráfego Hiper-Segmentado", 
                desc: "Anúncios no Google e Meta que aparecem exatamente para quem está buscando sua localização ou tipo de serviço." 
              },
              { 
                icon: <MessageCircle className="w-10 h-10 text-orange-600" />, 
                title: "Máquina de WhatsApp", 
                desc: "Scripts de vendas e automação para garantir que nenhum lead fique sem resposta e todas as dúvidas virem reservas." 
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 border border-white/10 rounded-sm hover:border-orange-600/50 transition-all"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-2xl font-bold uppercase italic mb-4">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing Table */}
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Investimento Estratégico</span>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white">Escolha seu plano de <span className="text-orange-600">escala</span></h3>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 items-stretch"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Landing Start",
                price: "1.497",
                desc: "Ideal para pequenos negócios que precisam de uma presença digital profissional e rápida.",
                features: ["Landing Page de Alta Conversão", "SEO Básico Estrutural", "Integração Direta com WhatsApp", "Design Responsivo (Mobile)", "Hospedagem Inclusa (1 ano)"],
                highlight: false
              },
              {
                name: "Landing Pro",
                price: "2.497",
                desc: "O plano ideal para empresas que buscam autoridade e melhor posicionamento no Google.",
                features: ["Tudo do Plano Start", "Copywriting Persuasivo", "SEO Avançado de Conteúdo", "Otimização de Velocidade (Core Web Vitals)", "Link Tree Personalizado"],
                highlight: true
              },
              {
                name: "Landing Premium",
                price: "3.997",
                desc: "Solução completa para quem não aceita menos que a liderança do seu nicho local.",
                features: ["Tudo do Plano Pro", "Animações e Efeitos Exclusivos", "SEO Local (Google Meu Negócio)", "Suporte e Ajustes por 30 dias", "Treinamento de Atendimento Leads"],
                highlight: false
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-sm border flex flex-col ${plan.highlight ? 'bg-orange-600 border-orange-500 shadow-[0_0_40px_rgba(234,88,12,0.2)]' : 'bg-white/5 border-white/10'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-600 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    Mais Recomendado
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="text-xl font-black uppercase italic mb-2">{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold opacity-70">R$</span>
                    <span className="text-5xl font-black italic">{plan.price}</span>
                    <span className="text-sm font-bold opacity-70">/projeto</span>
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? 'text-white/90' : 'text-white/50'}`}>
                    {plan.desc}
                  </p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-orange-600'}`} />
                      <span className={plan.highlight ? 'text-white' : 'text-white/80'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`${WHATSAPP_LINK}&text=Olá! Gostaria de saber mais sobre o projeto ${plan.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-sm font-black uppercase tracking-widest text-center transition-all ${plan.highlight ? 'bg-white text-orange-600 hover:bg-gray-100' : 'bg-orange-600 text-white hover:bg-orange-700'}`}
                >
                  Iniciar Projeto
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-24 bg-orange-600 text-white overflow-hidden relative"
        initial={fadeIn.initial}
        whileInView={fadeIn.whileInView}
        viewport={fadeIn.viewport}
        transition={fadeIn.transition}
      >
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <TrendingUp size={600} strokeWidth={1} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8 leading-none">
                O que acontece quando você assume o controle?
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "Aumento imediato da margem de lucro líquido",
                  "Base de dados própria para campanhas recorrentes",
                  "Independência total das regras das plataformas",
                  "Posicionamento de marca premium no mercado",
                  "Previsibilidade de faturamento mês a mês"
                ].map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    variants={staggerItem}
                    className="flex items-center gap-4 text-xl font-bold uppercase italic"
                  >
                    <CheckCircle2 className="text-white w-6 h-6 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="bg-black/20 backdrop-blur-md p-12 rounded-2xl border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <span className="text-sm font-bold uppercase tracking-[0.3em] mb-4 block opacity-70">Oferta Exclusiva</span>
                <h3 className="text-3xl font-black uppercase italic mb-6">Análise Gratuita de Presença Digital</h3>
                <p className="mb-8 text-white/80">
                  Vamos analisar seu site, seus anúncios e sua concorrência. Você sairá com um plano de ação claro para aumentar suas reservas diretas.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest mb-8 text-black bg-white inline-block px-4 py-1">
                  Apenas 5 vagas disponíveis por semana
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-orange-600 py-5 rounded-sm font-black uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center justify-center gap-3"
                >
                  Garantir Minha Vaga no WhatsApp
                  <ArrowRight />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        id="resultados" 
        className="py-24 bg-white text-black"
        initial={fadeIn.initial}
        whileInView={fadeIn.whileInView}
        viewport={fadeIn.viewport}
        transition={fadeIn.transition}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Prova Social</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tight">
                Resultados que falam por <span className="text-orange-600">si mesmos.</span>
              </h2>
            </div>
            <div className="flex gap-12">
              <div className="text-center">
                <span className="text-5xl font-black italic block">+45%</span>
                <span className="text-xs uppercase font-bold text-black/40 tracking-widest">Reservas Diretas</span>
              </div>
              <div className="text-center">
                <span className="text-5xl font-black italic block">+300</span>
                <span className="text-xs uppercase font-bold text-black/40 tracking-widest">Novos Leads/Semana</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-2xl italic">H</div>
                <div>
                  <h4 className="font-black uppercase text-xl italic">Hotel Boutique Serra</h4>
                  <p className="text-sm text-black/50 uppercase font-bold tracking-widest">Gramado, RS</p>
                </div>
              </div>
              <p className="text-lg italic mb-6">
                "Antes da Turismo Digital, 90% das nossas reservas vinham do Booking. Hoje, 60% são diretas via WhatsApp e site. Nossa margem de lucro explodiu."
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-bold uppercase text-xs tracking-widest">
                <span>Ver Estudo de Caso</span>
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-2xl italic">A</div>
                <div>
                  <h4 className="font-black uppercase text-xl italic">Agência Destinos Incríveis</h4>
                  <p className="text-sm text-black/50 uppercase font-bold tracking-widest">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-lg italic mb-6">
                "Reduzimos nossa dependência de grandes operadoras e aumentamos a venda de pacotes personalizados em 40% com campanhas segmentadas."
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-bold uppercase text-xs tracking-widest">
                <span>Ver Estudo de Caso</span>
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-2xl italic">R</div>
                <div>
                  <h4 className="font-black uppercase text-xl italic">Restaurante Mare Nostrum</h4>
                  <p className="text-sm text-black/50 uppercase font-bold tracking-widest">Florianópolis, SC</p>
                </div>
              </div>
              <p className="text-lg italic mb-6">
                "Conseguimos lotar a casa em dias de semana usando as campanhas de tráfego local. O sistema de reservas pelo WhatsApp é impecável."
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-bold uppercase text-xs tracking-widest">
                <span>Ver Estudo de Caso</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-32 bg-[#050505] relative overflow-hidden"
        initial={fadeIn.initial}
        whileInView={fadeIn.whileInView}
        viewport={fadeIn.viewport}
        transition={fadeIn.transition}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/30 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-8 leading-[0.9] tracking-tighter">
            O seu próximo <span className="text-orange-600">nível</span> começa aqui.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12 font-light">
            Não deixe para amanhã o lucro que você está perdendo hoje. Fale com um especialista e descubra como podemos escalar seu negócio.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-orange-600 text-white px-12 py-6 rounded-sm font-black text-xl uppercase tracking-widest hover:bg-orange-700 transition-all shadow-[0_0_50px_rgba(234,88,12,0.3)]"
          >
            Quero Minha Análise Gratuita
            <ArrowRight size={24} />
          </a>
          <p className="mt-8 text-white/40 text-sm uppercase tracking-[0.3em] font-bold">
            Resposta em menos de 15 minutos
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-600 rounded-sm flex items-center justify-center font-bold text-white text-xs">T</div>
            <span className="text-2xl font-script tracking-tighter text-white">Turismo<span className="text-orange-600">Digital</span></span>
          </div>
          <p className="text-white/40 text-xs uppercase tracking-widest">
            © 2026 Turismo Digital Performance. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-white/40 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
