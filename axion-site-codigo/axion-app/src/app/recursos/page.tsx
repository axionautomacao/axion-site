import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import BlogPostCard from '../../components/BlogPostCard';
import ResourceCard from '../../components/ResourceCard';
import CTACard from '../../components/CTACard';

export default function Recursos() {
  // Dados de exemplo para posts do blog
  const blogPosts = [
    {
      slug: "dominando-automacao-solidworks-parte-1",
      title: "Dominando a Automação no SolidWorks - Parte 1",
      excerpt: "Introdução aos conceitos fundamentais de automação e como começar a otimizar seu fluxo de trabalho.",
      date: "20 de Abril de 2025"
    },
    {
      slug: "5-tarefas-repetitivas-para-automatizar-hoje",
      title: "5 Tarefas Repetitivas no SolidWorks para Automatizar Hoje",
      excerpt: "Identifique e elimine tarefas que consomem seu tempo precioso com dicas práticas de automação.",
      date: "15 de Abril de 2025"
    },
    {
      slug: "futuro-projeto-mecanico-automacao-ia",
      title: "O Futuro do Projeto Mecânico: Automação e IA",
      excerpt: "Uma visão sobre como a automação e a inteligência artificial estão moldando o futuro da engenharia.",
      date: "10 de Abril de 2025"
    }
  ];

  // Dados de exemplo para recursos da biblioteca
  const libraryResources = [
    {
      title: "Guia Completo da Automação para Projetistas",
      description: "Um e-book detalhado cobrindo desde os fundamentos até técnicas avançadas de automação no SolidWorks.",
      type: "ebook" as const,
      viewUrl: "#", // Placeholder
      downloadUrl: "#" // Placeholder
    },
    {
      title: "Template de Desenho Técnico Automatizado",
      description: "Um template configurável para acelerar a criação de desenhos técnicos padronizados.",
      type: "template" as const,
      viewUrl: "#", // Placeholder
      downloadUrl: "#" // Placeholder
    },
    {
      title: "Checklist de Otimização de Projetos",
      description: "Um guia prático para revisar e otimizar seus projetos no SolidWorks, garantindo eficiência e qualidade.",
      type: "guide" as const,
      viewUrl: "#", // Placeholder
      downloadUrl: "#" // Placeholder
    }
  ];

  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Recursos Axion
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Explore nosso blog, biblioteca de recursos e vídeos para aprofundar seus conhecimentos em automação.
          </p>
        </div>
      </section>

      {/* Seção do Blog */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog Axion</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Artigos técnicos, inspiracionais e estudos de caso sobre automação e projeto mecânico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard 
                key={index}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/recursos/blog" // Link para a página completa do blog (a ser criada)
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Ver Todos os Posts
            </a>
          </div>
        </div>
      </section>

      {/* Seção da Biblioteca de Recursos */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Biblioteca de Recursos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              E-books, templates, guias e checklists para acelerar seu desenvolvimento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {libraryResources.map((resource, index) => (
              <ResourceCard 
                key={index}
                title={resource.title}
                description={resource.description}
                type={resource.type}
                viewUrl={resource.viewUrl}
                downloadUrl={resource.downloadUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/recursos/biblioteca" // Link para a página completa da biblioteca (a ser criada)
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Ver Todos os Recursos
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Vídeos (Placeholder) */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vídeos e Tutoriais</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aprenda com demonstrações práticas e tutoriais detalhados.
            </p>
          </div>
          
          <div className="text-center py-12 px-4 bg-gray-700 rounded-lg">
            <p className="text-lg text-gray-300">
              Conteúdo em vídeo chegando em breve!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <CTACard 
            title="Quer Sugerir um Tópico?"
            description="Tem alguma dúvida específica ou gostaria de ver um tutorial sobre um tema? Entre em contato e nos diga!"
            buttonText="Sugerir Tópico"
            buttonLink="/contato"
            bgColor="bg-gray-700"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
