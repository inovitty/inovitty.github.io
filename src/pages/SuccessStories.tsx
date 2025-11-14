import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Award, TrendingUp, Users, MessageCircle, Quote } from "lucide-react";

const SuccessStories = () => {
  const testimonials = [
    {
      quote: "A Inovitty nos mostrou que a IA pode ser uma aliada do professor, não uma substituta. Hoje, nossos educadores economizam horas por semana e investem esse tempo na relação com os alunos.",
      author: "Prof. Ana Silva",
      role: "Coordenadora Pedagógica",
      school: "Escola Futuro - São Paulo",
      impact: "Redução de 40% no tempo de preparação de aulas"
    },
    {
      quote: "Após a consultoria da Inovitty, nossa equipe começou a usar IA para criar planos de aula personalizados e melhorar o acompanhamento individual dos alunos. A transformação foi incrível!",
      author: "Carlos Mendes",
      role: "Diretor",
      school: "Colégio Inovação - Rio de Janeiro",
      impact: "Aumento de 35% no engajamento dos alunos"
    },
    {
      quote: "A formação oferecida foi prática e acessível. Hoje usamos ferramentas de IA com confiança e nossos professores se sentem mais preparados para os desafios da educação moderna.",
      author: "Mariana Costa",
      role: "Coordenadora de Tecnologia Educacional",
      school: "Instituto Educacional Horizonte - Belo Horizonte",
      impact: "100% dos professores capacitados e usando IA regularmente"
    },
    {
      quote: "O diagnóstico de maturidade digital foi fundamental para traçarmos nosso plano estratégico. A Inovitty nos ajudou a identificar prioridades e implementar mudanças de forma estruturada.",
      author: "Roberto Almeida",
      role: "Gestor de Inovação",
      school: "Rede de Escolas Aprender+ - Curitiba",
      impact: "Implementação bem-sucedida em 15 unidades"
    }
  ];

  const projects = [
    {
      title: "Projeto Sala de Aula Inteligente",
      school: "Colégio Crescer - Brasília",
      description: "Implementação de ferramentas de IA para personalização do ensino de matemática no ensino fundamental II.",
      results: [
        "Melhoria de 25% no desempenho dos alunos",
        "Identificação precoce de dificuldades de aprendizagem",
        "Maior autonomia dos estudantes no processo de aprendizagem"
      ]
    },
    {
      title: "Formação Continuada em IA Generativa",
      school: "Secretaria Municipal de Educação - Florianópolis",
      description: "Capacitação de 200 professores da rede municipal no uso ético e pedagógico de ferramentas de IA.",
      results: [
        "200 educadores certificados",
        "Criação de banco de recursos didáticos com IA",
        "Redução significativa na sobrecarga de trabalho docente"
      ]
    },
    {
      title: "Projeto Redação com IA",
      school: "Escola Vanguarda - Porto Alegre",
      description: "Uso de IA para feedback instantâneo e personalizado em produções textuais do ensino médio.",
      results: [
        "Aumento de 40% na produção de textos pelos alunos",
        "Melhoria na qualidade das redações",
        "Maior motivação dos estudantes para escrever"
      ]
    }
  ];

  const stats = [
    { icon: Users, number: "100+", label: "Educadores Formados" },
    { icon: Award, number: "50+", label: "Escolas Atendidas" },
    { icon: TrendingUp, number: "35%", label: "Aumento de Engajamento Médio" },
    { icon: Sparkles, number: "95%", label: "Satisfação dos Clientes" }
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
              Casos de Sucesso
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Conheça as transformações reais que a Inovitty já promoveu em escolas por todo o Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border bg-card shadow-card text-center">
                <CardContent className="p-6 space-y-3">
                  <stat.icon className="h-10 w-10 text-primary mx-auto" />
                  <div className="text-3xl md:text-4xl font-bold text-card-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O que nossos clientes dizem
              </h2>
              <p className="text-lg text-muted-foreground">
                Depoimentos reais de educadores e gestores que transformaram suas escolas com a Inovitty
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border bg-card shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-8 space-y-6">
                    <Quote className="h-10 w-10 text-accent" />
                    <p className="text-lg text-card-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-border pt-6 space-y-3">
                      <div>
                        <div className="font-semibold text-foreground text-lg">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.school}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        <span className="text-accent font-medium">{testimonial.impact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Projetos Realizados
              </h2>
              <p className="text-lg text-muted-foreground">
                Conheça alguns dos projetos que desenvolvemos com nossas escolas parceiras
              </p>
            </div>
            
            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-border bg-card shadow-card">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-accent font-medium">{project.school}</p>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3">Resultados alcançados:</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{result}</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-border bg-gradient-hero shadow-hover">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Sua escola pode ser a próxima história de sucesso
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra como podemos transformar a educação na sua instituição
              </p>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-hover transition-all duration-300 hover:scale-105 mt-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Começar Nossa Parceria
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

export default SuccessStories;
