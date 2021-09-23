import { Answer } from './answer';

export interface Question {
  id: number;
  text: string;
  description: string;
  explanatoryText: string;
  answers: Array<Answer>;
}
