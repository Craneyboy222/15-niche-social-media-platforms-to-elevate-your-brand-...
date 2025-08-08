import React from 'react';
import Navigation from './Navigation';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4">
      <Navigation />
    </aside>
  );
};

export default Sidebar;