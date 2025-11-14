import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  BookOpen, 
  Target,
  CheckCircle,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Consultoria para Escolas",
      description: "Diagnóstico digital e plano estratégico de adoção de IA",
      details: [
        "Diagnóstico completo da maturidade digital da escola",
        "Análise das necessidades específicas da instituição",
        "Plano estratégico personalizado de integração de IA",
        "Acompanhamento na implementação das mudanças",
        "Suporte contínuo e mentorias para gestores"
      ]
    },
    {
      icon: Users,
      title: "Formações para Professores",
      description: "Oficinas práticas de IA generativa e metodologias inovadoras",
      details: [
        "Workshops práticos sobre ferramentas de IA generativa",
        "Capacitação em ChatGPT, Google Bard e outras plataformas",
        "Estratégias para criar planos de aula com IA",
        "Uso ético e responsável da inteligência artificial",
        "Certificados de participação e material de apoio"
      ]
    },
    {
      icon: Lightbulb,
      title: "Projetos Pedagógicos com IA",
      description: "Apoio na integração da IA às metodologias ativas",
      details: [
        "Desenvolvimento de projetos personalizados com IA",
        "Integração com metodologias ativas e inovadoras",
        "Criação de sequências didáticas inovadoras",
        "Apoio na implementação em sala de aula",
        "Avaliação de impacto e ajustes contínuos"
      ]
    },
    {
      icon: BookOpen,
      title: "Assessoria em Materiais Didáticos",
      description: "Criação e revisão de conteúdos educacionais com IA",
      details: [
        "Criação de materiais didáticos personalizados",
        "Revisão e aprimoramento de conteúdos existentes",
        "Adaptação de materiais para diferentes níveis",
        "Geração de atividades e avaliações com IA",
        "Curadoria e validação pedagógica dos conteúdos"
      ]
    }
  ];

  const benefits = [
    "Economia de tempo na preparação de aulas",
    "Personalização do ensino para cada aluno",
    "Maior engajamento e motivação dos estudantes",
    "Desenvolvimento de competências do século XXI",
    "Otimização de processos administrativos",
    "Formação continuada e atualização constante"
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Soluções completas para levar a inovação com IA para sua escola
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border bg-card shadow-card hover:shadow-hover transition-all duration-300"
              >
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="text-xl font-semibold text-card-foreground mb-4">
                        O que inclui:
                      </h4>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Benefícios para sua escola
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ao implementar nossas soluções, sua instituição experimenta transformações reais
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6 flex items-start gap-3">
                    <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-card-foreground font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-border bg-gradient-hero shadow-hover">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Pronto para transformar sua escola?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra como podemos ajudar sua instituição a integrar a IA de forma eficiente e ética
              </p>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-hover transition-all duration-300 hover:scale-105 mt-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com um Consultor
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Inovitty</h3>
            <p className="text-background/80">Inovação com propósito na Educação</p>
            <p className="text-background/60 text-sm">© 2025 Inovitty. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
