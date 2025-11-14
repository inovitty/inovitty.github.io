import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao Blog
          </Button>
        </Link>

        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <BookOpen className="mr-2 h-4 w-4" />
            IA na Prática
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Como usar IA para preparar planos de aula mais rápidos e personalizados
          </h1>
          <div className="flex items-center text-muted-foreground gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              15 de Dezembro, 2025
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              8 min de leitura
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A preparação de planos de aula é uma das atividades que mais consome tempo dos professores. 
            Com a inteligência artificial, é possível reduzir esse tempo em até 70%, mantendo a qualidade 
            e até aumentando a personalização do ensino.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg font-medium mb-2">💡 Destaque</p>
            <p className="text-muted-foreground">
              Professores que usam IA para planejamento economizam em média 5-7 horas por semana, 
              tempo que pode ser investido no relacionamento com os alunos.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">1. Estruturação rápida do plano de aula</h2>
          <p className="mb-4">
            A IA pode gerar a estrutura completa de um plano de aula em segundos. Comece com um prompt 
            claro e específico:
          </p>
          <div className="bg-muted p-6 rounded-lg mb-6 font-mono text-sm">
            <p className="mb-2 text-muted-foreground">Exemplo de prompt:</p>
            <p>
              "Crie um plano de aula de 50 minutos sobre fotossíntese para o 7º ano, incluindo: 
              objetivos de aprendizagem alinhados à BNCC, atividade prática em grupo, recursos necessários 
              e estratégias de avaliação formativa."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">2. Personalização por nível de aprendizado</h2>
          <p className="mb-4">
            Uma das maiores vantagens da IA é a capacidade de adaptar conteúdos para diferentes níveis:
          </p>
          <ul className="space-y-3 mb-6">
            <li><strong>Diferenciação automática:</strong> Peça à IA para criar três versões do mesmo conteúdo: básico, intermediário e avançado</li>
            <li><strong>Adaptação por perfil:</strong> Ajuste a linguagem e exemplos conforme o contexto dos alunos</li>
            <li><strong>Recursos inclusivos:</strong> Solicite versões acessíveis para alunos com necessidades específicas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">3. Geração de atividades criativas</h2>
          <p className="mb-4">
            A IA pode sugerir atividades inovadoras e engajadoras:
          </p>
          <ul className="space-y-3 mb-6">
            <li>Jogos pedagógicos personalizados</li>
            <li>Situações-problema contextualizadas</li>
            <li>Projetos interdisciplinares</li>
            <li>Atividades gamificadas</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">4. Alinhamento automático com a BNCC</h2>
          <p className="mb-4">
            Peça à IA para alinhar seu plano de aula com as competências e habilidades da BNCC. 
            Ela pode identificar os códigos corretos e sugerir como trabalhar cada habilidade de forma prática.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">5. Criação de materiais complementares</h2>
          <p className="mb-4">
            Além do plano, a IA pode gerar:
          </p>
          <ul className="space-y-3 mb-6">
            <li>Slides para apresentação</li>
            <li>Listas de exercícios com diferentes níveis de dificuldade</li>
            <li>Roteiros de discussão em grupo</li>
            <li>Rubricas de avaliação personalizadas</li>
            <li>Sugestões de leitura complementar</li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8 mt-8">
            <p className="text-lg font-medium mb-2">⚠️ Importante</p>
            <p className="text-muted-foreground">
              Lembre-se: a IA é uma assistente, não uma substituta. Sempre revise, adapte e adicione 
              seu toque pessoal ao conteúdo gerado. Sua experiência e conhecimento dos alunos são insubstituíveis.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Ferramentas recomendadas</h2>
          <ul className="space-y-3 mb-6">
            <li><strong>ChatGPT:</strong> Versatilidade e facilidade de uso</li>
            <li><strong>Claude:</strong> Excelente para textos longos e estruturados</li>
            <li><strong>Gemini:</strong> Integração com Google Workspace</li>
            <li><strong>Magic School:</strong> Plataforma específica para educação</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Conclusão</h2>
          <p className="mb-4">
            O uso de IA no planejamento de aulas não é sobre substituir o professor, mas sim sobre 
            potencializar seu trabalho. Com mais tempo disponível, você pode focar no que realmente 
            importa: conhecer seus alunos, criar vínculos e facilitar aprendizagens significativas.
          </p>
          <p className="mb-8">
            Comece pequeno, experimente diferentes ferramentas e prompts, e vá ajustando conforme 
            sua realidade. A IA está aqui para ser sua parceira na educação de excelência.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mt-12">
            <h3 className="text-2xl font-bold mb-4">Quer aprender mais sobre IA na educação?</h3>
            <p className="text-muted-foreground mb-6">
              A Inovitty oferece formações práticas e personalizadas para professores e escolas.
            </p>
            <Link to="/">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost1;
