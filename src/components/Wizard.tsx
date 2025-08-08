import React, { useState } from 'react';
import Stepper from './Stepper';

interface WizardProps {
  steps: { label: string; content: React.ReactNode; }[];
  onComplete: () => void;
}

const Wizard: React.FC<WizardProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="mt-4">
        <div className="flex justify-end">
          <button onClick={handlePrevious} disabled={currentStep === 0} className="mr-2 px-4 py-2 bg-gray-300 text-black rounded-md">Back</button>
          <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-md">{currentStep === steps.length - 1 ? 'Finish' : 'Next'}</button>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
