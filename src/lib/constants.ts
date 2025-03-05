export const PROJECT_ID = 'farcaster-frames-template';
export const PROJECT_TITLE = "Farcaster Frames Template";
export const PROJECT_DESCRIPTION = "A Farcaster Frames v2 Template by hellno";
export const NEYNAR_API_URL = "https://api.neynar.com/";

export interface QuizQuestion {
  questionText: string;
  options: string[];
  correctIndex: number;
  castReference: string;
}

export interface CastResponse {
  text: string;
  hash: string;
  author: {
    fid: number;
    username: string;
  };
  timestamp: Date;
  mentions: string[];
}

export interface QuizState {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  isLoading: boolean;
  error?: string;
}
