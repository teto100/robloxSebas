'use client';

import ReactMarkdown from 'react-markdown';
import { GuideStep } from '@/lib/guides';
import ExerciseBlock from './ExerciseBlock';
import { getExercisesForStep } from '@/lib/exercises';

interface StepContentProps {
  step: GuideStep;
  currentIndex: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepContent({ step, currentIndex, totalSteps, onNext, onPrev }: StepContentProps) {
  const exercises = getExercisesForStep(step.id);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{step.emoji}</span>
          <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Nivel {step.level}</span>
          <span>•</span>
          <span>{currentIndex + 1} de {totalSteps}</span>
        </div>
      </div>

      <div className="markdown prose max-w-none">
        <ReactMarkdown>{step.content}</ReactMarkdown>
      </div>

      {exercises.length > 0 && (
        <ExerciseBlock exercises={exercises} stepId={step.id} />
      )}

      <div className="flex justify-between mt-8 pt-6 border-t">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          ← Anterior
        </button>
        <button
          onClick={onNext}
          disabled={currentIndex === totalSteps - 1}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
