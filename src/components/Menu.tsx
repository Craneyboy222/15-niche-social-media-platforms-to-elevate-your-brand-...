import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuProps {
  items: { label: string; to: string }[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav aria-label="Main menu">
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 underline'
                  : 'text-gray-600 hover:text-blue-600'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
