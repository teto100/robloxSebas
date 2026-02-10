'use client';

import { GuideStep } from '@/lib/guides';

interface StepNavigationProps {
  steps: GuideStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

export default function StepNavigation({ steps, currentStep, onStepChange }: StepNavigationProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
      <h3 className="font-bold text-lg mb-4 text-gray-900">Niveles</h3>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => onStepChange(index)}
            className={`w-full text-left p-3 rounded-lg transition-all ${
              currentStep === index
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{step.emoji}</span>
              <span className="text-sm font-medium truncate">{step.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
