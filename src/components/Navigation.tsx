import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><NavLink to="/" activeClassName="text-blue-500">Home</NavLink></li>
        <li><NavLink to="/discover" activeClassName="text-blue-500">Discover</NavLink></li>
        <li><NavLink to="/profile" activeClassName="text-blue-500">Profile</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;