import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle, BookOpen, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "10 Maneiras Práticas de Usar IA em Sala de Aula",
      description: "E-book gratuito com estratégias comprovadas para integrar inteligência artificial no dia a dia escolar, com exemplos práticos e tutoriais passo a passo.",
      format: "PDF - 25 páginas",
      link: "/materiais/10-maneiras-ia-sala-aula",
      topics: [
        "Preparação de aulas com IA generativa",
        "Personalização de atividades",
        "Feedback automatizado para alunos",
        "Criação de materiais didáticos",
        "Avaliação e acompanhamento"
      ]
    },
    {
      icon: Target,
      title: "Checklist: Maturidade Digital da Sua Escola",
      description: "Ferramenta de autoavaliação para diagnosticar o nível de maturidade digital da sua instituição e identificar oportunidades de melhoria.",
      format: "PDF Interativo - 12 páginas",
      link: "/materiais/checklist-maturidade-digital",
      topics: [
        "Infraestrutura tecnológica",
        "Competências digitais dos professores",
        "Uso pedagógico da tecnologia",
        "Gestão e governança digital",
        "Plano de ação personalizado"
      ]
    },
    {
      icon: BookOpen,
      title: "Guia de Ferramentas de IA para Educadores",
      description: "Catálogo completo das melhores ferramentas de inteligência artificial para professores, com análise de funcionalidades e casos de uso.",
      format: "PDF - 35 páginas",
      topics: [
        "Ferramentas de IA generativa (ChatGPT, Bard, etc.)",
        "Criadores de conteúdo visual",
        "Assistentes de correção e feedback",
        "Plataformas de aprendizagem adaptativa",
        "Ferramentas de produtividade"
      ]
    },
    {
      icon: Sparkles,
      title: "Kit Completo: IA e Ética na Educação",
      description: "Conjunto de recursos para trabalhar o uso ético e responsável da inteligência artificial com alunos e professores.",
      format: "Pacote ZIP - Múltiplos arquivos",
      topics: [
        "Apresentação sobre ética em IA",
        "Atividades práticas para alunos",
        "Guia de boas práticas para professores",
        "Políticas de uso responsável",
        "Estudo de casos reais"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Materiais Gratuitos
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              E-books, guias e ferramentas práticas para sua jornada com IA na educação
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <span className="font-semibold text-foreground">Inovitty</span> acredita na democratização do conhecimento sobre IA na educação. 
              Por isso, disponibilizamos gratuitamente uma série de materiais práticos e confiáveis para apoiar educadores e gestores escolares.
            </p>
            <p className="text-base text-muted-foreground">
              Todos os materiais são baseados em evidências, casos reais e nas melhores práticas do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {resources.map((resource, index) => (
              <Card 
                key={index}
                className="border-border bg-card shadow-card hover:shadow-hover transition-all duration-300"
              >
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <resource.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {resource.format}
                      </p>
                    </div>
                    
                    <div className="md:col-span-2 space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3">
                          O que você vai encontrar:
                        </h4>
                        <ul className="space-y-2">
                          {resource.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link to={resource.link}>
                        <Button 
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Acessar Material
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-border bg-gradient-hero shadow-hover">
            <CardContent className="p-12 text-center space-y-6">
              <Sparkles className="h-12 w-12 text-accent mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Precisa de mais apoio?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Nossa equipe está pronta para oferecer consultoria personalizada e formações práticas para sua escola
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = "/#contact"}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
                >
                  Falar com Consultor
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = "/servicos"}
                  className="bg-background/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6"
                >
                  Ver Nossos Serviços
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-border bg-card shadow-card">
            <CardContent className="p-12 text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Receba novos materiais diretamente no seu e-mail
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cadastre-se para ser avisado quando novos e-books, guias e ferramentas estiverem disponíveis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Quero Receber
                </button>
              </div>
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

export default Resources;
