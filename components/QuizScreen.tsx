
import React from 'react';
import { Question, Category, Option } from '../types';
import Header from './Header';

interface QuizScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (category: Category) => void;
}

const OptionCard: React.FC<{ option: Option; onClick: () => void }> = ({ option, onClick }) => (
    <div 
        className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg" 
        onClick={onClick}
    >
        <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-5xl">
            {option.emoji}
        </div>
        <div className="p-3">
            <p className="font-semibold text-gray-800 text-sm leading-snug">{option.text}</p>
            <div className="flex justify-end mt-2">
                <span className="bg-black bg-opacity-70 text-white text-xs font-mono px-1.5 py-0.5 rounded">
                    {option.duration}
                </span>
            </div>
        </div>
    </div>
);

const QuizScreen: React.FC<QuizScreenProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
            <div 
                className="bg-red-600 h-1.5 rounded-full transition-all duration-300 ease-out" 
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">{question.title}</h2>
        <div className="grid grid-cols-2 gap-3">
          {question.options.map((option, index) => (
            <OptionCard key={index} option={option} onClick={() => onAnswer(option.category)} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default QuizScreen;
