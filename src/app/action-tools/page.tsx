import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FeatureCard from '../../components/FeatureCard';
import CTACard from '../../components/CTACard';

export default function ActionTools() {
  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Action Tools
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            A plataforma proprietária de automação para SolidWorks que devolve tempo e criatividade aos projetistas.
          </p>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">O Que é o Action Tools?</h2>
              <p className="text-lg text-gray-300 mb-6">
                O Action Tools é um painel de automação desenvolvido especificamente para projetistas que utilizam SolidWorks, focado em eliminar tarefas repetitivas e liberar tempo para o trabalho criativo.
              </p>
              <p className="text-lg text-gray-300">
                Nossa plataforma foi criada por projetistas para projetistas, com profundo entendimento das dores e necessidades reais do dia a dia de quem trabalha com projetos mecânicos.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Principais Diferenciais</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Integração perfeita com SolidWorks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Interface intuitiva e fácil de usar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Personalização para diferentes fluxos de trabalho</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Sem necessidade de conhecimentos de programação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Suporte técnico especializado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça os recursos que estão transformando o trabalho dos projetistas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Automação de Modelagem"
              description="Crie modelos complexos em fração do tempo com templates pré-configurados e parâmetros inteligentes."
            />
            <FeatureCard 
              title="Geração de Documentação"
              description="Automatize a criação de desenhos técnicos, listas de materiais e relatórios com apenas alguns cliques."
            />
            <FeatureCard 
              title="Verificação de Projetos"
              description="Identifique erros e inconsistências automaticamente antes que eles se tornem problemas reais."
            />
            <FeatureCard 
              title="Biblioteca de Componentes"
              description="Acesse e gerencie uma biblioteca centralizada de componentes padronizados e personalizados."
            />
            <FeatureCard 
              title="Fluxos de Trabalho Personalizados"
              description="Crie sequências de comandos personalizadas para suas tarefas mais frequentes."
            />
            <FeatureCard 
              title="Integração com Sistemas"
              description="Conecte-se com PDM, ERP e outras ferramentas para um fluxo de trabalho contínuo."
            />
          </div>
        </div>
      </section>

      {/* Demonstração (Mockup) */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja o Action Tools em Ação</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma demonstração de como nossa plataforma transforma seu fluxo de trabalho.
            </p>
          </div>
          
          {/* Placeholder para futura demonstração interativa */}
          <div className="bg-gray-700 p-12 rounded-lg shadow-lg text-center">
            <p className="text-lg text-gray-300 mb-6">
              Demonstração interativa em breve disponível.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 opacity-50 cursor-not-allowed">
              Iniciar Demo
            </button>
          </div>
        </div>
      </section>

      {/* Comparativo Antes e Depois */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Antes e Depois do Action Tools</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja a transformação real no seu fluxo de trabalho.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-400">Antes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>4 horas para criar um conjunto de desenhos técnicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>Erros frequentes em listas de materiais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>Tempo excessivo em tarefas repetitivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>Inconsistência entre diferentes projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✖</span>
                  <span>Frustração e cansaço ao final do dia</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-400">Depois</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>30 minutos para o mesmo conjunto de desenhos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Listas de materiais precisas e automáticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Automação de 70% das tarefas repetitivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Padronização e consistência garantidas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Mais tempo para inovação e criatividade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Respostas para as dúvidas mais comuns sobre o Action Tools.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">É preciso saber programar para usar o Action Tools?</h3>
              <p className="text-gray-300">
                Não, o Action Tools foi desenvolvido para ser intuitivo e não requer conhecimentos de programação. A interface é amigável e todas as automações podem ser configuradas através de menus simples.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">O Action Tools é compatível com qual versão do SolidWorks?</h3>
              <p className="text-gray-300">
                O Action Tools é compatível com as versões do SolidWorks a partir de 2020 até as mais recentes. Estamos constantemente atualizando para garantir compatibilidade com novas versões.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Quanto tempo leva para implementar o Action Tools?</h3>
              <p className="text-gray-300">
                A implementação básica pode ser feita em poucas horas. Para uma personalização completa adaptada ao seu fluxo de trabalho específico, oferecemos suporte dedicado que pode durar alguns dias, dependendo da complexidade.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">O Action Tools funciona em rede para equipes?</h3>
              <p className="text-gray-300">
                Sim, oferecemos versões para equipes que permitem compartilhamento de automações, bibliotecas e configurações entre múltiplos usuários, garantindo consistência em toda a equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <CTACard 
            title="Pronto para Transformar seu Fluxo de Trabalho?"
            description="Entre em contato para uma demonstração personalizada do Action Tools e descubra como podemos ajudar a automatizar suas tarefas repetitivas."
            buttonText="Solicitar Demonstração"
            buttonLink="/contato"
            bgColor="bg-blue-600"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
