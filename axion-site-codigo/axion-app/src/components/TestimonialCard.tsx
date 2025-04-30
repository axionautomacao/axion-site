import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  // company?: string; // Optional company name
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white">
      <blockquote className="border-l-4 border-blue-400 pl-4 italic mb-4">
        <p className="text-gray-300">"{quote}"</p>
      </blockquote>
      <div className="text-right">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

