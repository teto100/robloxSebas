'use client';

import { useState } from 'react';
import { Guide } from '@/lib/guides';
import StepNavigation from '@/components/StepNavigation';
import StepContent from '@/components/StepContent';
import Link from 'next/link';

interface GuideClientProps {
  guide: Guide;
}

export default function GuideClient({ guide }: GuideClientProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < guide.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Volver al inicio
          </Link>
        </div>

        <div className="mb-6 bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{guide.title}</h1>
          <p className="text-gray-600">{guide.description}</p>
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-blue-900">
              💡 <strong>Consejo:</strong> Sigue los pasos en orden y practica cada ejercicio antes de continuar.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <StepNavigation
              steps={guide.steps}
              currentStep={currentStep}
              onStepChange={handleStepChange}
            />
          </div>

          <div className="lg:col-span-3">
            <StepContent
              step={guide.steps[currentStep]}
              currentIndex={currentStep}
              totalSteps={guide.steps.length}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
