
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-white">
      <div className="flex items-center space-x-3 mb-6">
        <i className="fa-brands fa-youtube text-red-600 text-6xl"></i>
      </div>
      <h1 className="text-4xl font-extrabold mb-3 text-gray-800">나의 유튜브 홈 화면은?</h1>
      <p className="text-lg text-gray-600 mb-8">내가 좋아하는 영상만 쏙쏙 찾아줄게!</p>
      
      <button 
        onClick={onStart} 
        className="bg-red-600 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-red-700 transition-transform transform hover:scale-105"
      >
        시작하기
      </button>

      <p className="text-xs text-gray-400 mt-12 absolute bottom-6">
        영상을 고르기만 하면 돼! 개인 정보는 하나도 저장되지 않아 안전해.
      </p>
    </div>
  );
};

export default StartScreen;
