"use client";

import React, { useState } from 'react';

interface NewsletterSignupProps {
  onSubmit?: (email: string) => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setMessage('Por favor, insira um email válido.');
      return;
    }

    if (onSubmit) {
      onSubmit(email);
      setMessage('Obrigado por se inscrever!');
      setEmail('');
    } else {
      // Simulação de envio
      console.log('Inscrição na newsletter:', email);
      setMessage('Obrigado por se inscrever!');
      setEmail('');
    }
    // Limpa a mensagem após alguns segundos
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white">
      <h3 className="text-xl font-bold mb-4">Inscreva-se na Newsletter</h3>
      <p className="text-gray-300 mb-4">Receba as últimas novidades e dicas da Axion diretamente no seu email.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor email"
          required
          className="flex-grow px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Inscrever
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-green-400">{message}</p>}
    </div>
  );
};

export default NewsletterSignup;
