import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'ebook' | 'template' | 'video' | 'guide'; // Tipo de recurso
  downloadUrl?: string; // URL para download (opcional)
  viewUrl: string; // URL para visualização
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  type, 
  downloadUrl, 
  viewUrl 
}) => {
  // Ícones para cada tipo de recurso
  const getIcon = () => {
    switch (type) {
      case 'ebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'template':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        );
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'guide':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden text-white">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-3">
            {getIcon()}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex space-x-3">
          <a 
            href={viewUrl} 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Visualizar
          </a>
          
          {downloadUrl && (
            <a 
              href={downloadUrl} 
              className="inline-block bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
