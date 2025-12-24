import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FEATURES, COURSE_ID } from '@/config';
import { useGamification } from '@/contexts/GamificationContext';
import type { Difficulty } from '@/types/gamification';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
  explanation?: string;
}

interface SectionQuizProps {
  sectionId: number;
  questions: QuizQuestion[];
  title?: string;
}

export function SectionQuiz({ sectionId, questions, title = 'Section Quiz' }: SectionQuizProps) {
  const gamification = FEATURES.gamification ? useGamification() : null;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Randomize questions on mount
  const shuffledQuestions = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
  }, [questions]);

  const currentQuestion = shuffledQuestions[currentIndex];
  const totalQuestions = shuffledQuestions.length;

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswers((prev) => [...prev, isCorrect]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz complete
      setIsComplete(true);

      if (gamification) {
        const finalScore = Math.round(((score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)) / totalQuestions) * 100);
        gamification.recordQuiz(
          sectionId,
          currentQuestion.difficulty,
          finalScore,
          score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0),
          totalQuestions
        );
      }
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setIsComplete(false);
  };

  if (isComplete) {
    const finalScore = answers.filter(Boolean).length;
    const percentage = Math.round((finalScore / totalQuestions) * 100);

    return (
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50">
        <div className="text-center">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </div>
          <h3 className="text-2xl font-bold text-dark-100 mb-2">Quiz Complete!</h3>
          <p className="text-dark-400 mb-6">
            You scored {finalScore} out of {totalQuestions} ({percentage}%)
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  correct ? 'bg-emerald-500' : 'bg-red-500'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleRetry}
            className="px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-dark-100">{title}</h3>
        <span className="text-sm text-dark-400">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
      </div>

      {/* Progress */}
      <div className="h-1 bg-dark-700 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-primary-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p className="text-lg text-dark-200 mb-6">{currentQuestion.question}</p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === currentQuestion.correctAnswer;
          const showCorrect = showResult && isCorrect;
          const showIncorrect = showResult && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
              className={`w-full p-4 rounded-xl text-left transition-all ${
                showCorrect
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                  : showIncorrect
                  ? 'bg-red-500/20 border-red-500/50 text-red-300'
                  : isSelected
                  ? 'bg-primary-500/20 border-primary-500/50 text-primary-300'
                  : 'bg-dark-700/50 border-dark-600/50 text-dark-200 hover:bg-dark-700 hover:border-dark-500'
              } border`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-dark-600 flex items-center justify-center text-sm font-medium">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && currentQuestion.explanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-dark-700/50 border border-dark-600/50 mb-6"
        >
          <p className="text-sm text-dark-300">
            <span className="font-medium text-dark-200">Explanation: </span>
            {currentQuestion.explanation}
          </p>
        </motion.div>
      )}

      {/* Next button */}
      {showResult && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
        >
          {currentIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
        </motion.button>
      )}
    </div>
  );
}
