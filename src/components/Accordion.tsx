import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        onClick={toggleAccordion}
        className="w-full text-left p-4 flex justify-between items-center"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div id="accordion-content" className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
