import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import NewsletterSignup from '../../components/NewsletterSignup';

export default function Contato() {
  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Estamos aqui para responder suas dúvidas e ajudar a transformar seu fluxo de trabalho.
          </p>
        </div>
      </section>

      {/* Formulário de Contato e Newsletter */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div>
              <ContactForm />
            </div>
            
            {/* Informações de Contato e Newsletter */}
            <div className="space-y-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">contato@axion.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-gray-300">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Redes Sociais</p>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                          <span className="sr-only">YouTube</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                          <span className="sr-only">Instagram</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Newsletter */}
              <div id="newsletter">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa e Localização (Placeholder) */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos presentes digitalmente em todo o Brasil.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <p className="text-lg text-gray-300">
              Mapa interativo em breve disponível.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Respostas rápidas para suas dúvidas mais comuns.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Qual o prazo de resposta para contatos?</h3>
              <p className="text-gray-300">
                Respondemos a todos os contatos em até 24 horas úteis, mas geralmente muito mais rápido.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Vocês oferecem demonstrações do Action Tools?</h3>
              <p className="text-gray-300">
                Sim! Basta solicitar através do formulário de contato e agendaremos uma demonstração personalizada para suas necessidades.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Como faço para me tornar um Embaixador Axion?</h3>
              <p className="text-gray-300">
                Entre em contato conosco mencionando seu interesse no programa de embaixadores e enviaremos todas as informações necessárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
