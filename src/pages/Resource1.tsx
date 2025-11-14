import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Printer, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Resource1 = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-5xl print:p-0">
        <div className="no-print mb-8 flex items-center justify-between">
          <Link to="/materiais">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voltar aos Materiais
            </Button>
          </Link>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="h-4 w-4" />
            Imprimir / Salvar PDF
          </Button>
        </div>

        <article className="bg-white p-8 md:p-12 rounded-lg shadow-lg print:shadow-none">
          {/* Capa */}
          <div className="text-center mb-12 pb-12 border-b-2 border-primary/20">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Download className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              10 Maneiras Práticas de Usar IA em Sala de Aula
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Guia completo para integrar inteligência artificial no dia a dia escolar
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Por Inovitty</span>
              <span>•</span>
              <span>2025</span>
              <span>•</span>
              <span>25 páginas</span>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Introdução</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A inteligência artificial chegou para ficar na educação. Não como substituta do professor, 
              mas como uma poderosa aliada que pode economizar tempo, personalizar o ensino e potencializar 
              os resultados de aprendizagem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este guia apresenta 10 estratégias práticas e comprovadas para incorporar IA no seu dia a dia 
              como educador, com exemplos reais, prompts testados e orientações passo a passo.
            </p>
          </section>

          {/* Estratégia 1 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                1
              </div>
              <h2 className="text-3xl font-bold text-foreground">Planejamento de Aulas Personalizado</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">💡 O que fazer:</h3>
                <p className="text-muted-foreground mb-4">
                  Use IA para criar estruturas de planos de aula adaptados ao nível da turma, aos objetivos 
                  da BNCC e ao tempo disponível.
                </p>
                
                <h3 className="text-xl font-bold mb-3">📝 Exemplo de Prompt:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                  "Crie um plano de aula de 50 minutos sobre a fotossíntese para o 7º ano do Ensino Fundamental. 
                  Inclua: objetivos alinhados à BNCC, metodologia ativa (sala de aula invertida), materiais 
                  necessários, passo a passo da aula e sugestões de avaliação formativa."
                </div>

                <h3 className="text-xl font-bold mb-3">✅ Resultados esperados:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Economia de 60-70% do tempo de planejamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Planos mais estruturados e alinhados aos objetivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Inspiração para atividades criativas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Estratégia 2 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                2
              </div>
              <h2 className="text-3xl font-bold text-foreground">Diferenciação de Conteúdos por Nível</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">💡 O que fazer:</h3>
                <p className="text-muted-foreground mb-4">
                  Adapte textos, exercícios e explicações para diferentes níveis de aprendizado na mesma turma.
                </p>
                
                <h3 className="text-xl font-bold mb-3">📝 Exemplo de Prompt:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                  "Adapte este texto sobre o Ciclo da Água para três versões: básica (para alunos com dificuldade), 
                  intermediária (nível da turma) e avançada (para alunos que podem se aprofundar). Mantenha os 
                  conceitos principais, mas ajuste vocabulário e complexidade."
                </div>

                <h3 className="text-xl font-bold mb-3">✅ Benefícios:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Inclusão real de todos os alunos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Redução da frustração e do tédio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Aprendizagem no ritmo de cada estudante</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Estratégia 3 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                3
              </div>
              <h2 className="text-3xl font-bold text-foreground">Criação de Exercícios e Avaliações</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">💡 O que fazer:</h3>
                <p className="text-muted-foreground mb-4">
                  Gere questões de múltipla escolha, dissertativas, estudos de caso e situações-problema 
                  alinhadas aos conteúdos trabalhados.
                </p>
                
                <h3 className="text-xl font-bold mb-3">📝 Exemplo de Prompt:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                  "Crie 10 questões de múltipla escolha sobre a Revolução Industrial, nível 9º ano. 
                  Inclua: 4 questões de conhecimento factual, 3 de interpretação e análise, e 3 de aplicação 
                  de conceitos. Para cada questão, forneça 4 alternativas e indique a correta com justificativa."
                </div>

                <h3 className="text-xl font-bold mb-3">⚠️ Cuidado:</h3>
                <p className="text-muted-foreground">
                  Sempre revise as questões geradas! A IA pode cometer erros factuais ou criar alternativas 
                  ambíguas. Use como base, não como produto final.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Estratégia 4 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                4
              </div>
              <h2 className="text-3xl font-bold text-foreground">Feedback Detalhado e Construtivo</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">💡 O que fazer:</h3>
                <p className="text-muted-foreground mb-4">
                  Use IA para analisar produções dos alunos e sugerir feedbacks personalizados e construtivos.
                </p>
                
                <h3 className="text-xl font-bold mb-3">📝 Exemplo de Prompt:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                  "Analise esta redação de um aluno do 8º ano e forneça feedback construtivo sobre: 
                  estrutura textual, coesão e coerência, uso da norma culta e adequação ao tema proposto. 
                  Seja gentil e motivador, destacando pontos positivos antes das sugestões de melhoria."
                </div>

                <h3 className="text-xl font-bold mb-3">💪 Impacto:</h3>
                <p className="text-muted-foreground">
                  Feedback personalizado aumenta o engajamento e acelera a aprendizagem. Com IA, você 
                  consegue oferecer retornos mais completos em menos tempo.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Estratégia 5 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                5
              </div>
              <h2 className="text-3xl font-bold text-foreground">Simplificação de Textos Complexos</h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">💡 O que fazer:</h3>
                <p className="text-muted-foreground mb-4">
                  Transforme textos acadêmicos ou muito técnicos em versões acessíveis para seus alunos, 
                  mantendo a precisão conceitual.
                </p>
                
                <h3 className="text-xl font-bold mb-3">📝 Exemplo de Prompt:</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                  "Simplifique este trecho de artigo científico sobre mudanças climáticas para o nível de 
                  compreensão de alunos do 6º ano. Use linguagem acessível, exemplos do cotidiano e mantenha 
                  os conceitos científicos corretos. Limite a 200 palavras."
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Estratégias 6-10 - Resumidas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Outras 5 Estratégias Essenciais</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                      6
                    </div>
                    <h3 className="text-xl font-bold">Tradução e Adaptação Cultural</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Use IA para traduzir materiais didáticos e adaptá-los culturalmente para seu contexto, 
                    ajudando alunos estrangeiros ou trabalhando com conteúdos internacionais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                      7
                    </div>
                    <h3 className="text-xl font-bold">Criação de Rubricas de Avaliação</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Peça à IA para criar rubricas detalhadas e objetivas para projetos, apresentações e 
                    trabalhos, facilitando a avaliação transparente e formativa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                      8
                    </div>
                    <h3 className="text-xl font-bold">Ideação de Projetos Interdisciplinares</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Gere ideias criativas para projetos que conectem diferentes disciplinas, com temas 
                    relevantes e metodologias ativas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                      9
                    </div>
                    <h3 className="text-xl font-bold">Tutoria Personalizada para Alunos</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Oriente os alunos a usar IA como tutora pessoal, fazendo perguntas, pedindo explicações 
                    de diferentes formas e praticando conceitos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                      10
                    </div>
                    <h3 className="text-xl font-bold">Comunicação com Famílias</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Crie comunicados, boletins e relatórios personalizados para as famílias, mantendo-as 
                    informadas sobre o progresso dos estudantes de forma clara e empática.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Conclusão</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A IA não substitui o professor, mas potencializa exponencialmente seu trabalho. Com estas 
              10 estratégias, você pode economizar tempo, personalizar o ensino e oferecer experiências 
              de aprendizagem mais ricas e significativas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Comece aos poucos, experimente, ajuste e compartilhe suas descobertas com colegas. 
              A transformação educacional que estamos vivendo é colaborativa, e você faz parte dela!
            </p>
          </section>

          {/* CTA */}
          <div className="no-print bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Quer aprofundar seu conhecimento?</h3>
            <p className="text-muted-foreground mb-6">
              A Inovitty oferece formações práticas sobre IA na educação, adaptadas à realidade da sua escola.
            </p>
            <Link to="/">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </article>
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          article {
            box-shadow: none !important;
            border-radius: 0 !important;
            page-break-after: always;
          }
          
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default Resource1;
