import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTACard from '../components/CTACard';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformando a Maneira de Projetar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Devolvemos a criatividade ao projetista, automatizando o que é repetitivo, sem tirar o protagonismo humano do processo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/action-tools" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Conheça o Action Tools
            </a>
            <a 
              href="/contato" 
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Problema e Solução */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Problema dos Projetistas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Projetistas mecânicos passam até 70% do seu tempo em tarefas repetitivas, 
              quando deveriam estar focados em inovação e criatividade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">A Dor</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>Excesso de tarefas repetitivas e manuais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>Falta de tempo para focar em soluções criativas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>Frustração com processos ineficientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>Dificuldade em manter consistência nos projetos</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">A Solução Axion</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Automação inteligente de tarefas repetitivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Mais tempo para inovação e criatividade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Processos otimizados e eficientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Consistência garantida em todos os projetos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Principais */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios do Action Tools</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossa plataforma proprietária de automação para SolidWorks transforma seu fluxo de trabalho.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Economia de Tempo"
              description="Reduza em até 70% o tempo gasto em tarefas repetitivas, liberando seu potencial criativo."
            />
            <FeatureCard 
              title="Redução de Erros"
              description="Minimize erros humanos através da automação de processos padronizados e verificações automáticas."
            />
            <FeatureCard 
              title="Aumento de Produtividade"
              description="Entregue mais projetos em menos tempo, mantendo a qualidade e consistência."
            />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Dizem Nossos Usuários</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Projetistas que já fazem parte do movimento Axion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="O Action Tools transformou minha rotina de trabalho. Tarefas que levavam horas agora são feitas em minutos."
              author="Carlos Silva"
              role="Projetista Mecânico Sênior"
            />
            <TestimonialCard 
              quote="Finalmente posso focar na parte criativa do meu trabalho. A automação da Axion é simplesmente revolucionária."
              author="Ana Oliveira"
              role="Engenheira de Produto"
            />
            <TestimonialCard 
              quote="A consistência nos projetos melhorou significativamente. Erros comuns simplesmente não acontecem mais."
              author="Roberto Mendes"
              role="Coordenador de Projetos"
            />
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <CTACard 
            title="Junte-se ao Movimento Axion"
            description="Faça parte da revolução silenciosa que está transformando a maneira de projetar. Liberte sua criatividade e automatize o que é repetitivo."
            buttonText="Comece Agora"
            buttonLink="/contato"
            bgColor="bg-blue-600"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-2xl">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </main>
  );
}
