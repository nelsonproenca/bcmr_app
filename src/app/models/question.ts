import { Answer } from './answer';

export interface Question {
  id: number;
  text: string;
  description: string;
  answers: Array<Answer>;
}
