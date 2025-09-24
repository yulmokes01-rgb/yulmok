
import React, { useState, useCallback } from 'react';
import { Category, Scores } from './types';
import { QUESTIONS } from './constants';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

type Screen = 'start' | 'quiz' | 'result';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({});
  const [selectionHistory, setSelectionHistory] = useState<Category[]>([]);
  const [result, setResult] = useState<Category[] | null>(null);

  const handleStart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScores({});
    setSelectionHistory([]);
    setResult(null);
    setScreen('quiz');
  }, []);

  const handleAnswer = useCallback((category: Category) => {
    setScores(prevScores => ({
      ...prevScores,
      [category]: (prevScores[category] || 0) + 1,
    }));
    const updatedSelectionHistory = [...selectionHistory, category];
    setSelectionHistory(updatedSelectionHistory);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Calculate result
      const finalScores = {
        ...scores,
        [category]: (scores[category] || 0) + 1,
      };
      
      const sortedCategories = (Object.keys(finalScores) as Category[]).sort((a, b) => {
        const scoreDiff = (finalScores[b] || 0) - (finalScores[a] || 0);
        if (scoreDiff !== 0) return scoreDiff;
        return updatedSelectionHistory.lastIndexOf(b) - updatedSelectionHistory.lastIndexOf(a);
      });

      setResult(sortedCategories.slice(0, 2));
      setScreen('result');
    }
  }, [currentQuestionIndex, scores, selectionHistory]);

  const renderScreen = () => {
    switch (screen) {
      case 'quiz':
        return (
          <QuizScreen
            question={QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        );
      case 'result':
        return result && <ResultScreen resultCategories={result} onRestart={handleStart} />;
      case 'start':
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-md mx-auto bg-white shadow-lg min-h-screen">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
