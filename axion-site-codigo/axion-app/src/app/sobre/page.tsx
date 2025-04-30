import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Timeline from '../../components/Timeline';
import CTACard from '../../components/CTACard';

export default function Sobre() {
  // Dados para a linha do tempo
  const timelineItems = [
    {
      date: "Meses 1-3",
      title: "Fundação e Estruturação",
      description: "Estabelecimento da infraestrutura digital, início da construção de comunidade e definição de processos de criação de conteúdo.",
      isActive: true
    },
    {
      date: "Meses 4-6",
      title: "Crescimento e Engajamento",
      description: "Ampliação do alcance, aumento do engajamento da comunidade, início do programa de embaixadores e expansão da variedade de conteúdo.",
    },
    {
      date: "Meses 7-9",
      title: "Monetização e Escala",
      description: "Consolidação da estratégia de conversão, expansão para novos segmentos, implementação de parcerias estratégicas e refinamento do produto.",
    },
    {
      date: "Meses 10-12",
      title: "Consolidação e Inovação",
      description: "Consolidação como referência em automação para SolidWorks, expansão de funcionalidades, escalabilidade de estratégias e planejamento do próximo ciclo.",
    }
  ];

  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre a Axion Automação
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Conheça nossa missão, visão e o movimento que está transformando a maneira de projetar.
          </p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Nossa Missão</h2>
              <p className="text-lg text-gray-300 mb-6">
                "Transformar a maneira de projetar, devolver criatividade ao projetista, e automatizar o que é repetitivo, sem tirar o protagonismo humano do processo."
              </p>
              <p className="text-lg text-gray-300">
                Na Axion, acreditamos que a tecnologia deve servir ao ser humano, não substituí-lo. Nossa missão é libertar os projetistas mecânicos das tarefas repetitivas e demoradas, permitindo que dediquem seu tempo e talento ao que realmente importa: a criatividade, a inovação e a solução de problemas complexos.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Nossa Visão</h2>
              <p className="text-lg text-gray-300 mb-6">
                Ser reconhecida como a principal referência em automação para projetistas de SolidWorks, criando um ecossistema onde a tecnologia potencializa a criatividade humana.
              </p>
              <p className="text-lg text-gray-300">
                Visualizamos um futuro onde cada projetista mecânico tenha acesso a ferramentas que automatizem o trabalho repetitivo, permitindo que foquem no que fazem de melhor: criar soluções inovadoras para os desafios de engenharia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Movimento Axion */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Movimento Axion</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mais do que uma empresa, somos um movimento de transformação na maneira de projetar.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-300 mb-6">
              O Movimento Axion representa uma revolução silenciosa no trabalho de projeto mecânico. Acreditamos que os projetistas devem ser libertados das amarras das tarefas repetitivas para que possam exercer plenamente seu potencial criativo.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Não celebramos apenas números de seguidores, mas sim a quantidade de profissionais que estão transformando sua maneira de trabalhar, que estão recuperando o prazer de projetar e que estão redescobindo sua paixão pela engenharia.
            </p>
            <p className="text-lg text-gray-300">
              Cada novo membro do movimento Axion representa mais um projetista que decidiu romper com os métodos tradicionais e ineficientes, abraçando um futuro onde a tecnologia e a criatividade humana trabalham em harmonia.
            </p>
          </div>
        </div>
      </section>

      {/* Equipe (Placeholder) */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profissionais apaixonados por automação e design mecânico.
            </p>
          </div>
          
          <div className="text-center py-12 px-4 bg-gray-700 rounded-lg">
            <p className="text-lg text-gray-300">
              Em breve, conheça os rostos por trás da Axion Automação.
            </p>
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Jornada</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plano de crescimento da Axion Automação para os próximos 12 meses.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <CTACard 
            title="Faça Parte do Movimento Axion"
            description="Junte-se a nós nessa revolução silenciosa que está transformando a maneira de projetar. Seja parte da comunidade Axion."
            buttonText="Entrar em Contato"
            buttonLink="/contato"
            bgColor="bg-blue-600"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
