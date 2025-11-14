import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp, Award, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscamos constantemente novas formas de integrar tecnologia à educação."
    },
    {
      icon: Heart,
      title: "Ética",
      description: "Priorizamos o uso responsável e consciente da inteligência artificial."
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalhamos em parceria com educadores, valorizando sua experiência."
    },
    {
      icon: TrendingUp,
      title: "Aprendizagem Contínua",
      description: "Acreditamos no desenvolvimento constante de educadores e instituições."
    }
  ];

  const team = [
    {
      role: "Fundadores",
      description: "Educadores com experiência em pedagogia, tecnologia educacional e inteligência artificial, unidos pela missão de transformar a educação brasileira."
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
              Sobre a Inovitty
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Transformando a educação através da inovação e inteligência artificial
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8 space-y-4">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-card-foreground">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar a educação por meio da inovação e da inteligência artificial, com foco humano e ético, capacitando educadores a usar a tecnologia como aliada na construção de aprendizagens significativas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8 space-y-4">
                <Award className="h-12 w-12 text-accent" />
                <h3 className="text-2xl font-bold text-card-foreground">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em consultoria educacional em IA, reconhecida pela excelência na formação de educadores e pelo impacto positivo nas práticas pedagógicas das escolas brasileiras.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-8 space-y-4">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-card-foreground">Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Inovação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Ética</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Colaboração</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Aprendizagem Contínua</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Values Detail */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Nossos Valores em Ação
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-card-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History & Team */}
      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Nossa História
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    A <span className="font-semibold text-foreground">Inovitty</span> nasceu da convicção de que a inteligência artificial não é uma ameaça à educação, mas sim uma oportunidade de revolucionar o ensino e a aprendizagem.
                  </p>
                  <p>
                    Fundada por educadores que vivenciam diariamente os desafios da sala de aula, a Inovitty une conhecimento pedagógico profundo com expertise em tecnologia educacional.
                  </p>
                  <p>
                    Nossa trajetória começou com a percepção de que muitas escolas queriam integrar a IA em suas práticas, mas não sabiam por onde começar. Decidimos criar uma ponte entre a tecnologia e a pedagogia, oferecendo consultoria e formação acessíveis, práticas e fundamentadas em evidências.
                  </p>
                  <p>
                    Hoje, já impactamos dezenas de escolas e centenas de educadores, sempre com o compromisso de colocar o ser humano no centro da transformação digital.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={aboutImage} 
                  alt="Equipe Inovitty em formação de professores"
                  className="rounded-2xl shadow-card w-full h-auto"
                />
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Nossa Equipe
              </h2>
              {team.map((member, index) => (
                <Card key={index} className="border-border bg-card shadow-card">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-semibold text-card-foreground">{member.role}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
              <p className="text-muted-foreground mt-6 italic">
                Somos educadores apaixonados por inovação, comprometidos com a ética e dedicados a fazer da IA uma ferramenta de empoderamento para professores e alunos.
              </p>
            </div>
          </div>
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

export default About;
