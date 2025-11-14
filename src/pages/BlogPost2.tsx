import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost2 = () => {
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
            <Shield className="mr-2 h-4 w-4" />
            Ética e IA
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            IA e ética na escola: como orientar os alunos?
          </h1>
          <div className="flex items-center text-muted-foreground gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              10 de Dezembro, 2025
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              6 min de leitura
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A inteligência artificial está cada vez mais presente na vida dos estudantes. Como educadores, 
            temos a responsabilidade de orientá-los para um uso consciente, crítico e ético dessas ferramentas.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg font-medium mb-2">🎯 Objetivo</p>
            <p className="text-muted-foreground">
              Este artigo apresenta estratégias práticas para desenvolver o pensamento crítico dos 
              estudantes sobre IA e promover seu uso responsável.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">1. Promova a transparência</h2>
          <p className="mb-4">
            O primeiro passo é desmistificar a IA. Explique aos alunos:
          </p>
          <ul className="space-y-3 mb-6">
            <li><strong>O que é IA:</strong> Uma ferramenta treinada com dados, não uma entidade mágica ou infalível</li>
            <li><strong>Como funciona:</strong> Padrões, probabilidades e limitações</li>
            <li><strong>Quem a cria:</strong> Pessoas com valores, vieses e interesses</li>
          </ul>

          <div className="bg-muted p-6 rounded-lg mb-6">
            <p className="font-medium mb-2">💡 Atividade sugerida:</p>
            <p className="text-muted-foreground">
              Peça aos alunos que façam a mesma pergunta a diferentes IAs (ChatGPT, Gemini, Claude) 
              e comparem as respostas. Isso mostra que a IA não é neutra nem única.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">2. Ensine sobre vieses e limitações</h2>
          <p className="mb-4">
            A IA pode reproduzir preconceitos presentes nos dados que a treinam. É essencial que os 
            alunos desenvolvam olhar crítico:
          </p>
          <ul className="space-y-3 mb-6">
            <li>Questionar a origem das informações fornecidas pela IA</li>
            <li>Identificar possíveis estereótipos nas respostas</li>
            <li>Reconhecer que a IA pode "alucinar" (inventar informações)</li>
            <li>Entender que a IA não tem valores morais próprios</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">3. Estabeleça diretrizes claras de uso</h2>
          <p className="mb-4">
            Construa com os alunos um "Código de Ética" para uso de IA na escola. Inclua:
          </p>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold mb-4">Exemplo de Código de Ética:</h3>
            <ul className="space-y-3">
              <li>✅ <strong>Usar como apoio</strong> ao aprendizado, não como substituto</li>
              <li>✅ <strong>Sempre citar</strong> quando usar conteúdo gerado por IA</li>
              <li>✅ <strong>Verificar informações</strong> em fontes confiáveis</li>
              <li>✅ <strong>Respeitar a privacidade</strong> - não compartilhar dados pessoais</li>
              <li>✅ <strong>Usar para criar</strong>, não para copiar</li>
              <li>❌ <strong>Não usar em avaliações</strong> sem autorização</li>
              <li>❌ <strong>Não confiar cegamente</strong> nas respostas da IA</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">4. Trabalhe a autoria e propriedade intelectual</h2>
          <p className="mb-4">
            Discussões essenciais para a era da IA:
          </p>
          <ul className="space-y-3 mb-6">
            <li>O que é plágio na era da IA?</li>
            <li>Como dar crédito a conteúdos gerados por IA?</li>
            <li>Qual o valor da produção humana original?</li>
            <li>Como a IA afeta a criatividade e o pensamento crítico?</li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8 mt-8">
            <p className="text-lg font-medium mb-2">📚 Dica pedagógica</p>
            <p className="text-muted-foreground">
              Promova debates em sala: "A IA pode ter direitos autorais?" ou "Quem é o autor de um 
              texto escrito por IA a partir do meu prompt?". Essas discussões desenvolvem pensamento crítico.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">5. Privacidade e proteção de dados</h2>
          <p className="mb-4">
            Oriente os alunos sobre segurança digital:
          </p>
          <ul className="space-y-3 mb-6">
            <li>Nunca inserir dados pessoais (CPF, endereço, telefone) em IAs</li>
            <li>Não compartilhar informações confidenciais da escola ou colegas</li>
            <li>Entender que as conversas podem ser armazenadas e usadas para treinar a IA</li>
            <li>Conhecer os termos de uso das ferramentas que utilizam</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">6. Promova o uso criativo e colaborativo</h2>
          <p className="mb-4">
            Mostre aos alunos que a IA é melhor usada como parceira criativa:
          </p>
          <ul className="space-y-3 mb-6">
            <li><strong>Brainstorming:</strong> Geração de ideias iniciais</li>
            <li><strong>Revisão:</strong> Feedback sobre textos produzidos</li>
            <li><strong>Tradução:</strong> Apoio em idiomas estrangeiros</li>
            <li><strong>Tutoria:</strong> Explicações de conceitos complexos</li>
            <li><strong>Criação:</strong> Base para projetos que serão personalizados pelo aluno</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">7. Desenvolva competências digitais críticas</h2>
          <p className="mb-4">
            Prepare os alunos para o futuro desenvolvendo:
          </p>
          <ul className="space-y-3 mb-6">
            <li>Capacidade de fazer boas perguntas (prompts eficazes)</li>
            <li>Discernimento sobre qualidade de informações</li>
            <li>Responsabilidade no uso de tecnologias</li>
            <li>Consciência sobre impactos sociais da IA</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Conclusão</h2>
          <p className="mb-4">
            Educar sobre ética na IA não é proibir seu uso, mas formar cidadãos conscientes, críticos 
            e responsáveis. Como educadores, temos a oportunidade única de moldar a relação das novas 
            gerações com essas tecnologias.
          </p>
          <p className="mb-8">
            A IA veio para ficar. Nossa missão é garantir que nossos alunos sejam seus usuários 
            conscientes, não usuários ingênuos.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl mt-12">
            <h3 className="text-2xl font-bold mb-4">Precisa de apoio para implementar ética em IA?</h3>
            <p className="text-muted-foreground mb-6">
              A Inovitty desenvolve formações e materiais específicos sobre uso ético de IA na educação.
            </p>
            <Link to="/">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost2;
