import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  description, 
  isActive = false 
}) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Linha vertical */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-600"></div>
      
      {/* Círculo indicador */}
      <div className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full border-2 ${
        isActive 
          ? 'bg-blue-500 border-blue-600' 
          : 'bg-gray-700 border-gray-600'
      }`}></div>
      
      {/* Conteúdo */}
      <div className="mb-1 text-sm text-gray-400">{date}</div>
      <h3 className={`text-lg font-bold mb-2 ${
        isActive ? 'text-blue-400' : 'text-white'
      }`}>{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

interface TimelineProps {
  items: Array<{
    date: string;
    title: string;
    description: string;
    isActive?: boolean;
  }>;
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="py-4">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default Timeline;
