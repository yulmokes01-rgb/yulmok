
import React, { useState } from 'react';
import { Category } from '../types';
import { CATEGORY_INFO, RESULT_SUMMARIES, QUESTIONS } from '../constants';
import Header from './Header';

interface ResultScreenProps {
  resultCategories: Category[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ resultCategories, onRestart }) => {
  const [top1, top2] = resultCategories;
  const [copied, setCopied] = useState(false);

  if (!top1) {
    // Fallback for an unlikely case
    return (
        <div className="p-4">
            <p>결과를 계산하는 중 오류가 발생했습니다.</p>
            <button onClick={onRestart} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full">다시하기</button>
        </div>
    );
  }

  const top1Info = CATEGORY_INFO[top1];
  const top2Info = top2 ? CATEGORY_INFO[top2] : null;

  const resultTitle = top2Info ? `${top1Info.adjective} ${top1Info.name} × ${top2Info.name} 콜라보` : `${top1Info.adjective} ${top1Info.name} 전문가`;

  const summaryKey = top2 ? ([top1, top2].sort().join('_')) : 'DEFAULT';
  const resultSummary = RESULT_SUMMARIES[summaryKey] || RESULT_SUMMARIES[[top2, top1].sort().join('_')] || RESULT_SUMMARIES.DEFAULT;
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getRecommendations = () => {
    const recs = [];
    // 4 from top1, 2 from top2
    const allOptions = QUESTIONS.flatMap(q => q.options);
    recs.push(...allOptions.filter(o => o.category === top1).slice(0, 4));
    if (top2) {
      recs.push(...allOptions.filter(o => o.category === top2).slice(0, 2));
    } else {
       recs.push(...allOptions.filter(o => o.category !== top1).slice(0, 2));
    }
    return recs.slice(0, 6);
  };
  
  const recommendations = getRecommendations();

  return (
    <div>
      <Header />
      <main className="p-4 pb-20">
        <div className="text-center my-6">
          <h2 className="text-2xl font-extrabold text-gray-800">{resultTitle}</h2>
          <p className="text-md text-gray-600 mt-2">{resultSummary}</p>
        </div>
        
        <p className="text-center text-sm text-gray-700 bg-gray-100 p-4 rounded-lg mb-6">
          네가 선택한 영상들을 바탕으로 만들어진 너만의 홈 화면이야! 너의 취향에 딱 맞는 재미있는 영상들이 가득할 거야.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {recommendations.map((rec, index) => (
             <div key={index} className="flex items-center space-x-3">
                <div className="w-2/5 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    {rec.emoji}
                </div>
                <div className="flex-grow">
                    <p className="font-bold text-gray-900 text-sm leading-tight">{rec.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{`채널이름 • 조회수 123만회`}</p>
                </div>
             </div>
          ))}
        </div>

        <div className="text-center my-6">
          <span className="text-sm text-red-600 font-semibold">
            #개인화 #추천 #나만의홈 #{top1Info.name} {top2Info && `#${top2Info.name}`}
          </span>
        </div>

        <div className="flex space-x-3 mt-4">
            <button 
                onClick={onRestart}
                className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-full hover:bg-gray-300 transition"
            >
                다시하기
            </button>
            <button 
                onClick={handleShare}
                className="w-full bg-red-600 text-white font-bold py-3 rounded-full hover:bg-red-700 transition"
            >
                {copied ? '복사 완료!' : '결과 공유'}
            </button>
        </div>
         <p className="text-xs text-gray-400 mt-6 text-center">
          오늘의 질문: 왜 이런 추천이 나왔지?
        </p>
      </main>
    </div>
  );
};

export default ResultScreen;
