import React from 'react';
import Link from 'next/link';

interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string; // Optional background color class (e.g., 'bg-blue-500')
  textColor?: string; // Optional text color class (e.g., 'text-white')
}

const CTACard: React.FC<CTACardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  bgColor = 'bg-gray-700', // Default background
  textColor = 'text-white' // Default text color
}) => {
  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-lg shadow-lg`}>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="mb-4 text-gray-300">{description}</p>
      <Link
        href={buttonLink}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CTACard;

