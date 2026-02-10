'use client';

import { useState } from 'react';

interface Exercise {
  id: string;
  question: string;
  type: 'multiple' | 'text' | 'code';
  options?: string[];
  answer: string;
  explanation: string;
}

interface ExerciseBlockProps {
  exercises: Exercise[];
  stepId: string;
}

export default function ExerciseBlock({ exercises, stepId }: ExerciseBlockProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupEmoji, setPopupEmoji] = useState('');

  const handleAnswer = (exerciseId: string, answer: string) => {
    setAnswers({ ...answers, [exerciseId]: answer });
  };

  const checkAnswer = (exerciseId: string) => {
    const exercise = exercises.find(e => e.id === exerciseId);
    if (!exercise) return;

    const isCorrect = answers[exerciseId]?.toLowerCase().trim() === exercise.answer.toLowerCase().trim();
    
    setShowResults({ ...showResults, [exerciseId]: true });
    
    if (isCorrect) {
      setPopupMessage('Excelente Sebas!');
      setPopupEmoji('😎');
    } else {
      setPopupMessage('Vamos Sebas, revisa bien.');
      setPopupEmoji('🧐');
    }
    
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  const resetExercise = (exerciseId: string) => {
    const newAnswers = { ...answers };
    const newResults = { ...showResults };
    delete newAnswers[exerciseId];
    delete newResults[exerciseId];
    setAnswers(newAnswers);
    setShowResults(newResults);
  };

  return (
    <div className="space-y-6 mt-8">
      {showPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-white border-4 border-purple-500 rounded-2xl shadow-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-6xl mb-2">{popupEmoji}</div>
              <div className="text-2xl font-bold text-gray-900">{popupMessage}</div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-4 rounded-lg">
        <h3 className="text-xl font-bold text-purple-900 mb-2">
          ✏️ Ejercicios Prácticos
        </h3>
        <p className="text-purple-700 text-sm">
          Completa estos ejercicios para verificar que entendiste el tema
        </p>
      </div>

      {exercises.map((exercise, index) => {
        const isCorrect = answers[exercise.id]?.toLowerCase().trim() === exercise.answer.toLowerCase().trim();
        const hasAnswered = showResults[exercise.id];

        return (
          <div key={exercise.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{exercise.question}</p>
              </div>
            </div>

            {exercise.type === 'multiple' && exercise.options && (
              <div className="space-y-2 ml-11">
                {exercise.options.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      answers[exercise.id] === option
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={exercise.id}
                      value={option}
                      checked={answers[exercise.id] === option}
                      onChange={(e) => handleAnswer(exercise.id, e.target.value)}
                      className="w-4 h-4 text-purple-600"
                      disabled={hasAnswered}
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {exercise.type === 'text' && (
              <div className="ml-11">
                <input
                  type="text"
                  value={answers[exercise.id] || ''}
                  onChange={(e) => handleAnswer(exercise.id, e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  disabled={hasAnswered}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
                />
              </div>
            )}

            {exercise.type === 'code' && (
              <div className="ml-11">
                <textarea
                  value={answers[exercise.id] || ''}
                  onChange={(e) => handleAnswer(exercise.id, e.target.value)}
                  placeholder="Escribe tu código aquí..."
                  disabled={hasAnswered}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-mono text-sm focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
                />
              </div>
            )}

            <div className="ml-11 mt-4 flex gap-3">
              {!hasAnswered ? (
                <button
                  onClick={() => checkAnswer(exercise.id)}
                  disabled={!answers[exercise.id]}
                  className="px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Verificar Respuesta
                </button>
              ) : (
                <button
                  onClick={() => resetExercise(exercise.id)}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all"
                >
                  Intentar de Nuevo
                </button>
              )}
            </div>

            {hasAnswered && (
              <div className={`ml-11 mt-4 p-4 rounded-lg ${
                isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <>
                      <span className="text-2xl">✅</span>
                      <span className="font-bold text-green-800">¡Correcto!</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl">❌</span>
                      <span className="font-bold text-red-800">Incorrecto</span>
                    </>
                  )}
                </div>
                {!isCorrect && (
                  <p className="text-red-700 mb-2">
                    <strong>Respuesta correcta:</strong> {exercise.answer}
                  </p>
                )}
                <p className="text-gray-700 text-sm">
                  <strong>Explicación:</strong> {exercise.explanation}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
