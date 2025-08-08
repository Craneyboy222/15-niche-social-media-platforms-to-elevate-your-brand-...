import React from 'react';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="border-l-2 border-gray-200">
        {items.map((item, index) => (
          <div key={index} className="mb-8 ml-6">
            <div className="absolute -left-3.5 mt-1.5 h-3.5 w-3.5 bg-blue-500 rounded-full" />
            <p className="text-sm text-gray-500">{item.time}</p>
            <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
