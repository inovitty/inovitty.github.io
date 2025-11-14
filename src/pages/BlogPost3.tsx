import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Sparkles, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost3 = () => {
  const tools = [
    {
      name: "ChatGPT",
      category: "IA Generativa",
      description: "A ferramenta mais versátil para educadores. Ideal para criar planos de aula, gerar exercícios, explicar conceitos complexos e adaptar conteúdos.",
      useCases: [
        "Criação de planos de aula personalizados",
        "Geração de exercícios e atividades",
        "Explicações adaptadas por nível",
        "Tradução e simplificação de textos",
        "Ideação de projetos interdisciplinares"
      ],
      pros: "Interface intuitiva, respostas rápidas, grande versatilidade",
      cons: "Pode 'alucinar' informações, limitação de dados até 2023 (versão gratuita)",
      price: "Gratuito (GPT-3.5) | Pago (GPT-4): US$ 20/mês",
      link: "https://chat.openai.com"
    },
    {
      name: "Gemini (Google)",
      category: "IA Generativa + Integração",
      description: "Excelente para quem usa Google Workspace. Integra-se nativamente com Docs, Sheets e Drive, facilitando o trabalho colaborativo.",
      useCases: [
        "Criação de documentos colaborativos",
        "Análise de dados em planilhas",
        "Pesquisas em tempo real na internet",
        "Resumos de vídeos do YouTube",
        "Integração com Gmail e Agenda"
      ],
      pros: "Integração com Google, acesso a informações atuais, gratuito",
      cons: "Menos robusto que GPT-4 em tarefas complexas",
      price: "Gratuito | Versão avançada em Google One",
      link: "https://gemini.google.com"
    },
    {
      name: "Magic School",
      category: "Específica para Educação",
      description: "Plataforma desenvolvida especificamente para educadores, com ferramentas prontas para tarefas pedagógicas comuns.",
      useCases: [
        "Criação de rubricas de avaliação",
        "Geração de questões de múltipla escolha",
        "Diferenciação de conteúdos por nível",
        "Criação de boletins para responsáveis",
        "Geração de IEPs (Planos Educacionais Individualizados)"
      ],
      pros: "Focada em educação, templates prontos, interface amigável",
      cons: "Menos flexível que ferramentas generalistas, interface em inglês",
      price: "Versão gratuita disponível | Planos institucionais",
      link: "https://magicschool.ai"
    },
    {
      name: "Canva (com IA)",
      category: "Design Visual",
      description: "Ferramenta de design que integrou recursos de IA para criar materiais visuais educativos de forma rápida e profissional.",
      useCases: [
        "Criação de apresentações automáticas",
        "Geração de infográficos educativos",
        "Design de materiais impressos",
        "Edição de imagens com IA",
        "Criação de vídeos educativos"
      ],
      pros: "Interface visual intuitiva, templates educacionais, gratuito para educadores",
      cons: "Recursos avançados de IA requerem assinatura premium",
      price: "Gratuito | Canva Pro gratuito para professores",
      link: "https://canva.com/education"
    },
    {
      name: "Perplexity AI",
      category: "Pesquisa e Curadoria",
      description: "Motor de busca potencializado por IA, ideal para pesquisas acadêmicas e curadoria de conteúdo educacional com fontes citadas.",
      useCases: [
        "Pesquisas acadêmicas com fontes",
        "Síntese de informações complexas",
        "Verificação de fatos",
        "Atualização sobre temas recentes",
        "Curadoria de conteúdo confiável"
      ],
      pros: "Cita fontes, informações atualizadas, interface simples",
      cons: "Menos interativo que ChatGPT, foco em pesquisa",
      price: "Gratuito | Versão Pro: US$ 20/mês",
      link: "https://perplexity.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-4 py-16 max-w-6xl">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao Blog
          </Button>
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="mr-2 h-4 w-4" />
            Ferramentas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            5 ferramentas de IA que todo professor deveria conhecer
          </h1>
          <div className="flex items-center text-muted-foreground gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              05 de Dezembro, 2025
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              10 min de leitura
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            O universo de ferramentas de IA para educação é vasto e pode ser intimidador. 
            Selecionamos 5 ferramentas essenciais, testadas e aprovadas por educadores, 
            que podem transformar sua prática pedagógica.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg font-medium mb-2">🎯 Critérios de seleção</p>
            <p className="text-muted-foreground mb-0">
              Todas as ferramentas listadas foram escolhidas com base em: facilidade de uso, 
              aplicabilidade pedagógica, custo-benefício e confiabilidade.
            </p>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          {tools.map((tool, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold">{index + 1}. {tool.name}</h2>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground">{tool.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">📋 Casos de uso na educação:</h3>
                    <ul className="space-y-2">
                      {tool.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">✅ Vantagens:</h3>
                      <p className="text-muted-foreground">{tool.pros}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">⚠️ Limitações:</h3>
                      <p className="text-muted-foreground">{tool.cons}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">💰 Preço:</h3>
                      <p className="text-muted-foreground">{tool.price}</p>
                    </div>

                    <a 
                      href={tool.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      Acessar ferramenta
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-4">Como começar a usar essas ferramentas?</h2>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold mb-4">🚀 Roteiro de implementação:</h3>
            <ol className="space-y-3">
              <li><strong>Semana 1-2:</strong> Experimente ChatGPT ou Gemini para tarefas simples do dia a dia</li>
              <li><strong>Semana 3-4:</strong> Explore Magic School para tarefas pedagógicas específicas</li>
              <li><strong>Semana 5-6:</strong> Use Canva para criar materiais visuais com IA</li>
              <li><strong>Semana 7-8:</strong> Integre Perplexity AI em suas pesquisas e curadoria</li>
              <li><strong>Mês 3+:</strong> Combine as ferramentas em seu fluxo de trabalho regular</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Dicas de ouro para usar IA com eficiência</h2>
          <ul className="space-y-3 mb-6">
            <li><strong>Seja específico:</strong> Quanto mais detalhado seu prompt, melhor o resultado</li>
            <li><strong>Itere e refine:</strong> Use a resposta da IA como ponto de partida e melhore</li>
            <li><strong>Compare ferramentas:</strong> Use diferentes IAs para a mesma tarefa e veja qual se adapta melhor</li>
            <li><strong>Mantenha o senso crítico:</strong> Sempre revise e valide as informações geradas</li>
            <li><strong>Compartilhe descobertas:</strong> Troque experiências com colegas para aprender mais rápido</li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8 mt-8">
            <p className="text-lg font-medium mb-2">💡 Lembre-se</p>
            <p className="text-muted-foreground mb-0">
              A melhor ferramenta é aquela que você realmente usa. Comece simples, explore as 
              possibilidades e adapte às suas necessidades. A IA é uma aliada poderosa, mas sua 
              expertise pedagógica continua sendo insubstituível.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Considerações finais</h2>
          <p className="mb-4">
            Estas cinco ferramentas representam apenas a ponta do iceberg do que a IA pode fazer 
            pela educação. O importante é começar, experimentar e descobrir como essas tecnologias 
            podem potencializar seu trabalho como educador.
          </p>
          <p className="mb-8">
            Lembre-se: o objetivo não é substituir o professor, mas dar a você superpoderes para 
            fazer o que só humanos podem fazer - inspirar, motivar e transformar vidas através da educação.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mt-12">
            <h3 className="text-2xl font-bold mb-4">Quer uma formação prática nessas ferramentas?</h3>
            <p className="text-muted-foreground mb-6">
              A Inovitty oferece workshops hands-on onde você aprende a usar essas e outras ferramentas 
              de IA aplicadas ao seu contexto pedagógico específico.
            </p>
            <Link to="/">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Conheça Nossas Formações
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost3;
