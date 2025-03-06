"use client"

import { useState } from 'react';

// Define type for Stepper component (no props needed for now)
const Stepper: React.FC = () => {
  // Track the current step (starting from 1)
  const [step, setStep] = useState<number>(1);

  // Function to go to the next step
  const nextStep = (): void => {
    if (step < 3) setStep(step + 1);
  };

  // Function to go to the previous step
  const prevStep = (): void => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Stepper Progress Indicator */}
      <div className="flex mb-8">
        <div
          className={`w-8 h-8 rounded-full ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'} text-white flex items-center justify-center`}
        >
          1
        </div>
        <div
          className={`w-8 h-8 rounded-full ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'} text-white flex items-center justify-center mx-4`}
        >
          2
        </div>
        <div
          className={`w-8 h-8 rounded-full ${step >= 3 ? 'bg-blue-500' : 'bg-gray-300'} text-white flex items-center justify-center`}
        >
          3
        </div>
      </div>

      {/* Step Content */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Step {step}</h2>
        <div className="mb-6">
          {step === 1 && <p>This is step 1 content.</p>}
          {step === 2 && <p>This is step 2 content.</p>}
          {step === 3 && <p>This is step 3 content.</p>}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={step === 3}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
