import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import CTACard from '../../components/CTACard';
import FeatureCard from '../../components/FeatureCard';

export default function Comunidade() {
  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comunidade Axion
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Junte-se ao movimento de projetistas que estão transformando a maneira de projetar.
          </p>
        </div>
      </section>

      {/* O Movimento Axion */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mais Que Uma Comunidade, Um Movimento</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Acreditamos no poder da colaboração e do compartilhamento de conhecimento para impulsionar a inovação.
            </p>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-300 mb-6">
              A Comunidade Axion é o coração do nosso movimento. É um espaço para projetistas de SolidWorks se conectarem, compartilharem experiências, aprenderem uns com os outros e colaborarem na busca por soluções mais eficientes e criativas.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Aqui, você encontrará suporte, inspiração e as ferramentas necessárias para levar seus projetos ao próximo nível. Celebramos cada membro que se junta a nós na revolução silenciosa da automação.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios da Comunidade */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Fazer Parte?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Benefícios exclusivos para membros da Comunidade Axion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Networking"
              description="Conecte-se com outros projetistas, troque ideias e expanda sua rede profissional."
            />
            <FeatureCard 
              title="Aprendizado Contínuo"
              description="Acesse conteúdos exclusivos, participe de webinars e aprenda com especialistas."
            />
            <FeatureCard 
              title="Suporte Colaborativo"
              description="Tire dúvidas, compartilhe desafios e encontre soluções com a ajuda de outros membros."
            />
            <FeatureCard 
              title="Acesso Antecipado"
              description="Seja o primeiro a saber sobre novas funcionalidades do Action Tools e participe de testes beta."
            />
            <FeatureCard 
              title="Reconhecimento"
              description="Destaque-se como um membro ativo e contribuidor da comunidade."
            />
            <FeatureCard 
              title="Co-criação"
              description="Influencie o futuro do Action Tools com suas sugestões e feedback direto."
            />
          </div>
        </div>
      </section>

      {/* Programa de Embaixadores */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Programa de Embaixadores Axion</h2>
              <p className="text-lg text-gray-300 mb-6">
                Lidere o movimento Axion e seja reconhecido por sua paixão pela automação e inovação.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Nossos embaixadores são projetistas experientes e entusiastas que ajudam a disseminar a visão da Axion, compartilham suas experiências e apoiam outros membros da comunidade.
              </p>
              <a 
                href="/contato?assunto=Programa+Embaixadores" // Pré-preenche o assunto no formulário
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Quero Ser Embaixador
              </a>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Benefícios do Embaixador</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">★</span>
                  <span>Acesso VIP a novas funcionalidades e eventos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">★</span>
                  <span>Kit exclusivo de materiais Axion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">★</span>
                  <span>Destaque nos canais de comunicação da Axion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">★</span>
                  <span>Oportunidades de networking exclusivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">★</span>
                  <span>Participação direta no roadmap do produto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fórum e Eventos (Placeholders) */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          {/* Fórum */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Fórum de Discussão</h3>
            <p className="text-gray-300 mb-6">
              Um espaço dedicado para troca de conhecimento, dúvidas e colaboração.
            </p>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 opacity-50 cursor-not-allowed">
              Acessar Fórum (Em Breve)
            </button>
          </div>
          
          {/* Eventos */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Próximos Eventos</h3>
            <p className="text-gray-300 mb-6">
              Webinars, workshops e encontros exclusivos para membros.
            </p>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 opacity-50 cursor-not-allowed">
              Ver Calendário (Em Breve)
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <CTACard 
            title="Pronto para se Juntar?"
            description="Faça parte da comunidade que está redefinindo o futuro do projeto mecânico. Inscreva-se para receber novidades e convites para eventos."
            buttonText="Inscrever na Newsletter"
            buttonLink="/contato#newsletter" // Link para a seção de newsletter na página de contato
            bgColor="bg-blue-600"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
