
export enum Category {
  SPORTS = 'SPORTS',
  GAME = 'GAME',
  MUSIC = 'MUSIC',
  COMEDY = 'COMEDY',
  ASMR = 'ASMR',
  NATURE = 'NATURE',
  COOK = 'COOK',
  LEARN = 'LEARN',
  DANCE = 'DANCE',
  ANIME = 'ANIME',
  FLIGHT = 'FLIGHT',
  SPACE = 'SPACE',
}

export interface Option {
  text: string;
  emoji: string;
  duration: string;
  category: Category;
}

export interface Question {
  title: string;
  options: Option[];
}

export type Scores = Partial<Record<Category, number>>;
