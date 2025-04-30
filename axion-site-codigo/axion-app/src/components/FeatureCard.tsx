import React from 'react';

interface FeatureCardProps {
  icon?: React.ReactNode; // Optional icon component
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center text-white">
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;

