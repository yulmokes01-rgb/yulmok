
import { Category, Question } from './types';

export const QUESTIONS: Question[] = [
  {
    title: "지금 당장 보고 싶은 건?",
    options: [
      { text: "월드컵 역대급 역전골 모음", emoji: "⚽️", duration: "10:22", category: Category.SPORTS },
      { text: "신작 게임 플레이 10분 요약", emoji: "🎮", duration: "10:05", category: Category.GAME },
      { text: "요즘 대세 K-POP 라이브", emoji: "🎤", duration: "4:13", category: Category.MUSIC },
      { text: "웃음 참기 챌린지 베스트", emoji: "😂", duration: "8:57", category: Category.COMEDY },
    ],
  },
  {
    title: "자기 전 침대에서 본다면?",
    options: [
      { text: "빗소리 ASMR 1시간", emoji: "💧", duration: "1:00:00", category: Category.ASMR },
      { text: "귀여운 아기 고양이 모음", emoji: "🐱", duration: "12:34", category: Category.NATURE },
      { text: "초간단 라면 업그레이드", emoji: "🍜", duration: "5:11", category: Category.COOK },
      { text: "5분 수학 꿀팁", emoji: "📚", duration: "5:00", category: Category.LEARN },
    ],
  },
  {
    title: "주말에 친구와 본다면?",
    options: [
      { text: "더블배틀 댄스 리액션", emoji: "👯", duration: "7:45", category: Category.DANCE },
      { text: "e스포츠 결승 하이라이트", emoji: "🏆", duration: "15:01", category: Category.SPORTS },
      { text: "최강 빌런 명장면 TOP10", emoji: "😈", duration: "9:28", category: Category.ANIME },
      { text: "비행 시뮬레이터 착륙 미션", emoji: "✈️", duration: "11:30", category: Category.FLIGHT },
    ],
  },
  {
    title: "새로운 걸 배우고 싶다면?",
    options: [
      { text: "코딩으로 게임 만들기 기초", emoji: "💻", duration: "18:20", category: Category.LEARN },
      { text: "우주가 확장되는 이유", emoji: "🌌", duration: "10:10", category: Category.SPACE },
      { text: "기초 기타 코드 7분", emoji: "🎸", duration: "7:00", category: Category.MUSIC },
      { text: "노오븐 초코쿠키", emoji: "🍪", duration: "6:40", category: Category.COOK },
    ],
  },
  {
    title: "짧게 빠르게 보고 싶다면?",
    options: [
      { text: "15초 치킨 댄스 챌린지", emoji: "🐥", duration: "0:15", category: Category.DANCE },
      { text: "초스피드 헤딩 골 모음", emoji: "⚽️", duration: "0:59", category: Category.SPORTS },
      { text: "게임 핵심 공략 30초", emoji: "🕹️", duration: "0:30", category: Category.GAME },
      { text: "빵 자르는 소리 ASMR 쇼츠", emoji: "🥖", duration: "0:45", category: Category.ASMR },
    ],
  },
  {
    title: "상상력을 자극하는 건?",
    options: [
      { text: "최애 애니 세계관 총정리", emoji: "🌟", duration: "25:00", category: Category.ANIME },
      { text: "운석이 지구에 온다면?", emoji: "☄️", duration: "14:55", category: Category.SPACE },
      { text: "드론으로 본 구름바다", emoji: "☁️", duration: "3:33", category: Category.NATURE },
      { text: "하늘길의 비밀(항로/기장Vlog)", emoji: "✈️", duration: "19:08", category: Category.FLIGHT },
    ],
  },
  {
    title: "가족과 같이 본다면?",
    options: [
      { text: "집밥처럼 만드는 라면", emoji: "🍲", duration: "8:15", category: Category.COOK },
      { text: "명곡 따라 부르기", emoji: "🎶", duration: "13:40", category: Category.MUSIC },
      { text: "웃긴 동물 리액션", emoji: "🐶", duration: "11:11", category: Category.COMEDY },
      { text: "공부 자극 책상 정리 브이로그", emoji: "📚", duration: "22:00", category: Category.LEARN },
    ],
  },
  {
    title: "내 취향 채널을 구독한다면?",
    options: [
      { text: "신작 게임 뉴스&리뷰", emoji: "📰", duration: "16:20", category: Category.GAME },
      { text: "국대 축구 분석실", emoji: "📊", duration: "12:50", category: Category.SPORTS },
      { text: "나만의 커버댄스", emoji: "🕺", duration: "3:50", category: Category.DANCE },
      { text: "집에서 키우는 작은 정글", emoji: "🪴", duration: "9:00", category: Category.NATURE },
    ],
  },
  {
    title: "길게 몰입해서 본다면?",
    options: [
      { text: "비행기 조종석 4K 착륙", emoji: "🛬", duration: "45:00", category: Category.FLIGHT },
      { text: "애니 명장면 OST 모음", emoji: "🎵", duration: "1:30:00", category: Category.ANIME },
      { text: "행성별 신비한 이야기 20분", emoji: "🔭", duration: "20:00", category: Category.SPACE },
      { text: "한 그릇 파스타 마스터", emoji: "🍝", duration: "17:30", category: Category.COOK },
    ],
  },
  {
    title: "학교 끝나고 기분 전환?",
    options: [
      { text: "친구들이랑 합주 챌린지", emoji: "🥁", duration: "6:20", category: Category.MUSIC },
      { text: "빵 터지는 꽁트", emoji: "🤪", duration: "7:07", category: Category.COMEDY },
      { text: "숲 속 캠핑 감성 ASMR", emoji: "🏕️", duration: "3:00:00", category: Category.ASMR },
      { text: "수학 미로 탈출 게임 만들기", emoji: "➕", duration: "28:40", category: Category.LEARN },
    ],
  },
];

export const CATEGORY_INFO: Record<Category, { name: string; adjective: string }> = {
  [Category.SPORTS]: { name: '스포츠', adjective: '액티브' },
  [Category.GAME]: { name: '게임', adjective: '몰입형' },
  [Category.MUSIC]: { name: '음악', adjective: '리드미컬' },
  [Category.COMEDY]: { name: '코미디', adjective: '유쾌한' },
  [Category.ASMR]: { name: 'ASMR', adjective: '차분한' },
  [Category.NATURE]: { name: '자연', adjective: '힐링' },
  [Category.COOK]: { name: '요리', adjective: '야무진' },
  [Category.LEARN]: { name: '학습', adjective: '탐구형' },
  [Category.DANCE]: { name: '댄스', adjective: '에너제틱' },
  [Category.ANIME]: { name: '애니', adjective: '상상력' },
  [Category.FLIGHT]: { name: '비행', adjective: '스카이라인' },
  [Category.SPACE]: { name: '우주', adjective: '호기심' },
};

export const RESULT_SUMMARIES: Record<string, string> = {
  'GAME_SPORTS': '게임&스포츠를 즐기는 에너지 폭발 홈',
  'MUSIC_DANCE': '음악과 춤이 끊임없이 흐르는 추천',
  'ANIME_GAME': '스토리와 플레이를 동시에 즐기는 홈',
  'COOK_LEARN': '배우고 만들어 보는 똑똑한 튜토리얼 홈',
  'SPACE_FLIGHT': '하늘과 우주로 떠나는 지식 탐험 홈',
  'NATURE_ASMR': '고요하게 쉬어가는 편안한 힐링 홈',
  'COMEDY_SPORTS': '웃음과 명장면을 한 번에 즐기는 홈',
  'LEARN_GAME': '재미로 배우는 즐거운 지식 홈',
  'DEFAULT': '다양한 분야에 호기심이 많은 홈'
};