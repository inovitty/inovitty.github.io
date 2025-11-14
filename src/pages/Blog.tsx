import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, BookOpen, Lightbulb, Shield, Sparkles, Brain, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const categories = [
    { name: "Todos", count: 12 },
    { name: "IA na Prática", count: 5 },
    { name: "Ética e IA", count: 3 },
    { name: "Ferramentas", count: 4 }
  ];

  const featuredPost = {
    title: "Como usar IA para preparar planos de aula mais rápidos e personalizados",
    excerpt: "Descubra técnicas práticas e ferramentas que podem reduzir em até 70% o tempo de preparação de suas aulas, mantendo a qualidade e personalização do ensino.",
    date: "15 de Dezembro, 2025",
    category: "IA na Prática",
    readTime: "8 min",
    image: BookOpen,
    link: "/blog/planos-de-aula-ia"
  };

  const posts = [
    {
      title: "IA e ética na escola: como orientar os alunos?",
      excerpt: "Orientações práticas para desenvolver o pensamento crítico dos estudantes sobre o uso responsável da inteligência artificial.",
      date: "10 de Dezembro, 2025",
      category: "Ética e IA",
      readTime: "6 min",
      icon: Shield,
      link: "/blog/etica-ia-escola"
    },
    {
      title: "5 ferramentas de IA que todo professor deveria conhecer",
      excerpt: "Uma seleção criteriosa das melhores ferramentas de IA para educadores, com tutoriais práticos e casos de uso reais.",
      date: "05 de Dezembro, 2025",
      category: "Ferramentas",
      readTime: "10 min",
      icon: Sparkles,
      link: "/blog/ferramentas-ia-professores"
    },
    {
      title: "ChatGPT na educação: guia completo para professores",
      excerpt: "Tudo o que você precisa saber para começar a usar o ChatGPT de forma eficiente e pedagógica em suas aulas.",
      date: "01 de Dezembro, 2025",
      category: "IA na Prática",
      readTime: "12 min",
      icon: Brain
    },
    {
      title: "Personalização do ensino com inteligência artificial",
      excerpt: "Como a IA pode ajudar a adaptar o ensino às necessidades individuais de cada aluno, promovendo aprendizagens mais significativas.",
      date: "25 de Novembro, 2025",
      category: "IA na Prática",
      readTime: "7 min",
      icon: Target
    },
    {
      title: "Combatendo o plágio digital: estratégias para educadores",
      excerpt: "Ferramentas e abordagens pedagógicas para lidar com o uso inadequado de IA por parte dos alunos.",
      date: "20 de Novembro, 2025",
      category: "Ética e IA",
      readTime: "9 min",
      icon: Shield
    },
    {
      title: "IA para criar avaliações diagnósticas personalizadas",
      excerpt: "Aprenda a usar ferramentas de IA para desenvolver avaliações que realmente identifiquem as necessidades de cada estudante.",
      date: "15 de Novembro, 2025",
      category: "IA na Prática",
      readTime: "8 min",
      icon: Lightbulb
    },
    {
      title: "Automação de tarefas administrativas na escola",
      excerpt: "Como a IA pode liberar tempo dos gestores e coordenadores para focar no que realmente importa: a aprendizagem.",
      date: "10 de Novembro, 2025",
      category: "Ferramentas",
      readTime: "6 min",
      icon: Sparkles
    },
    {
      title: "Desenvolvendo competências do século XXI com IA",
      excerpt: "Estratégias para usar a inteligência artificial no desenvolvimento de pensamento crítico, criatividade e colaboração.",
      date: "05 de Novembro, 2025",
      category: "IA na Prática",
      readTime: "11 min",
      icon: Brain
    },
    {
      title: "Privacidade e proteção de dados na era da IA educacional",
      excerpt: "Guia essencial sobre LGPD e boas práticas de segurança ao usar ferramentas de IA com dados de alunos.",
      date: "01 de Novembro, 2025",
      category: "Ética e IA",
      readTime: "10 min",
      icon: Shield
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
              Blog Inovitty
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Conteúdos práticos sobre IA e inovação na educação
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <Link to={featuredPost.link}>
              <Card className="border-border bg-card shadow-hover overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="bg-primary/5 flex items-center justify-center p-12">
                      <featuredPost.image className="h-32 w-32 text-primary" />
                    </div>
                    <div className="p-8 md:p-12 space-y-4">
                      <div className="flex items-center gap-4 text-sm">
                        <Badge>{featuredPost.category}</Badge>
                        <span className="text-muted-foreground">Artigo em Destaque</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-card-foreground leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <span>•</span>
                        <span>{featuredPost.readTime} de leitura</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium pt-2">
                        Ler artigo completo
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Artigos Recentes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={index} to={post.link || "/blog"}>
                  <Card 
                    className="border-border bg-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <post.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{post.category}</Badge>
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
                        Ler mais
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-border bg-card shadow-card">
            <CardContent className="p-12 text-center space-y-6">
              <Sparkles className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
                Receba nossos conteúdos no seu e-mail
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Assine nossa newsletter e receba artigos exclusivos, dicas práticas e novidades sobre IA na educação
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                  Assinar
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Sem spam. Cancele quando quiser.
              </p>
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

export default Blog;
