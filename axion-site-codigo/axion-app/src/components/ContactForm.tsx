"use client";

import React from 'react';

interface ContactFormProps {
  onSubmit?: (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Simulação de envio
      console.log('Formulário enviado:', formData);
      alert('Obrigado pelo contato! Retornaremos em breve.');
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-lg text-white">
      <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        Enviar Mensagem
      </button>
    </form>
  );
};

export default ContactForm;
