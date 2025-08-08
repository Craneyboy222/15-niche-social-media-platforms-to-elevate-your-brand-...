import React from 'react';

interface Step {
  label: string;
  content: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className={`flex-1 ${index < currentStep ? 'text-green-500' : 'text-gray-500'}`}>
            <div className="flex items-center">
              <div className={`flex items-center justify-center h-8 w-8 rounded-full border ${index <= currentStep ? 'border-green-500' : 'border-gray-300'}`}>{index + 1}</div>
              <div className="ml-2">
                <h3 className="text-sm font-medium">{step.label}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4">
        {steps[currentStep].content}
      </div>
    </div>
  );
};

export default Stepper;
