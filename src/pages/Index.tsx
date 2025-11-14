import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Brain, 
  Users, 
  Target, 
  Sparkles, 
  BookOpen, 
  Lightbulb,
  TrendingUp,
  Award,
  MessageCircle,
  Mail,
  Linkedin,
  Instagram,
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import aboutImage from "@/assets/about-team.jpg";

const Index = () => {
  const services = [
    {
      icon: Brain,
      title: "Consultoria em IA Educacional",
      description: "Orientação estratégica para integrar a Inteligência Artificial de forma ética e eficiente no ambiente escolar."
    },
    {
      icon: Users,
      title: "Formação de Professores",
      description: "Capacitação prática em IA generativa e ferramentas digitais para potencializar o ensino e engajar os alunos."
    },
    {
      icon: Lightbulb,
      title: "Projetos Pedagógicos Inovadores",
      description: "Desenvolvimento de iniciativas educacionais criativas que combinam tecnologia e metodologias ativas."
    },
    {
      icon: TrendingUp,
      title: "Diagnóstico de Maturidade Digital",
      description: "Avaliação completa do nível tecnológico da escola e criação de plano de ação personalizado."
    }
  ];

  const testimonials = [
    {
      quote: "Após a consultoria da Inovitty, nossa equipe começou a usar IA para criar planos de aula personalizados e melhorar o acompanhamento individual dos alunos. A transformação foi incrível!",
      author: "Prof. Ana Silva",
      role: "Coordenadora Pedagógica, Escola Futuro"
    },
    {
      quote: "A formação oferecida foi prática e acessível. Hoje usamos ferramentas de IA com confiança e nossos professores se sentem mais preparados para os desafios da educação moderna.",
      author: "Carlos Mendes",
      role: "Diretor, Colégio Inovação"
    }
  ];

  const blogPosts = [
    {
      title: "IA na Sala de Aula: Por Onde Começar?",
      excerpt: "Descubra os primeiros passos para integrar inteligência artificial no dia a dia escolar de forma simples e eficaz.",
      date: "15 de Novembro, 2025"
    },
    {
      title: "ChatGPT para Educadores: Guia Prático",
      excerpt: "Como professores podem usar o ChatGPT para economizar tempo e enriquecer suas aulas com conteúdo personalizado.",
      date: "08 de Novembro, 2025"
    },
    {
      title: "Ética e IA: Preparando Alunos para o Futuro",
      excerpt: "A importância de ensinar pensamento crítico e uso responsável da tecnologia desde cedo.",
      date: "01 de Novembro, 2025"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/95" />
        
        <div className="container relative z-10 px-4 md:px-6 py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              Transforme a Educação com Inteligência Artificial
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto font-light">
              A Inovitty ajuda escolas e educadores a incorporar o poder da IA para otimizar o ensino, personalizar a aprendizagem e inovar no dia a dia escolar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-10 py-7 rounded-full shadow-hover transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                Fale com um Consultor
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-foreground font-medium text-lg px-10 py-7 rounded-full transition-all duration-500 hover:scale-105"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-primary font-semibold text-xs uppercase tracking-widest">Sobre a Inovitty</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Educar para o futuro, com propósito e tecnologia
              </h2>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                <p>
                  A <span className="font-semibold text-foreground">Inovitty</span> é uma consultoria educacional especializada em apoiar escolas e professores na jornada de transformação digital através da Inteligência Artificial.
                </p>
                <p>
                  Acreditamos que a tecnologia deve ser uma aliada do educador, não uma substituta. Nossa missão é capacitar profissionais da educação a usar a IA de forma consciente, ética e criativa, gerando mais tempo para o que realmente importa: a conexão humana e a aprendizagem significativa.
                </p>
                <p>
                  Com uma abordagem personalizada e acessível, traduzimos conceitos complexos em práticas simples e aplicáveis ao cotidiano escolar.
                </p>
              </div>
              <div className="flex items-center gap-10 pt-6">
                <div className="flex items-center gap-3">
                  <Target className="h-10 w-10 text-primary" />
                  <div>
                    <div className="font-bold text-3xl text-foreground">100+</div>
                    <div className="text-sm text-muted-foreground">Educadores formados</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-primary" />
                  <div>
                    <div className="font-bold text-3xl text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Escolas atendidas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={aboutImage} 
                alt="Equipe de educadores em formação"
                className="relative rounded-3xl shadow-glass w-full h-auto transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-section relative">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">Nossos Serviços</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-8 tracking-tight">
              Como podemos ajudar sua escola
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos soluções completas e personalizadas para levar a inovação com IA para sua instituição
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group border-0 bg-white/60 dark:bg-card/60 backdrop-blur-xl hover:shadow-glass transition-all duration-500 hover:-translate-y-2 hover:bg-white dark:hover:bg-card overflow-hidden"
              >
                <CardContent className="p-8 space-y-5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-6 tracking-tight">
              O impacto nas escolas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group border-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-card/80 dark:to-card/40 backdrop-blur-xl shadow-glass hover:shadow-hover transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-10 space-y-6">
                  <Sparkles className="h-10 w-10 text-primary group-hover:animate-float" />
                  <p className="text-xl text-card-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-6 border-t border-border/50">
                    <div className="font-semibold text-lg text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground mt-1">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-32 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">Recursos</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-6 tracking-tight">
              Conteúdos sobre inovação educacional
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group border-0 bg-white/60 dark:bg-card/60 backdrop-blur-xl hover:shadow-glass transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <CardContent className="p-8 space-y-5">
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider">{post.date}</div>
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-primary font-semibold flex items-center gap-2 pt-4">
                    Ler mais
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section id="contact" className="py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Dê o próximo passo rumo à educação inteligente
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Agende uma conversa sem compromisso e descubra como a IA pode transformar sua escola
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Inovitty</h3>
              <p className="text-background/80">
                Inovação com propósito na Educação
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contato</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@inovitty.com.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 99999-9999</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
            <p>© 2025 Inovitty. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
