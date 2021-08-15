import { Injectable } from '@angular/core';
import { QuestionAnswer } from 'app/models/questionanswer';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  questionAnswers: QuestionAnswer[] = [];

  private summaryRatings(): number {
    let total: number = 0;
    this.questionAnswers.map((answer) => (total += answer.rating ?? 0));
    return total;
  }

  private summaryValues(): number {
    let total: number = 0;
    this.questionAnswers.map((answer) => (total += answer.value ?? 0));
    return total;
  }

  criticalityLevel(): number | undefined {
    let totalRatings: number = this.summaryRatings();
    let totalValues: number = this.summaryValues();

    const percent = Math.floor(totalRatings / totalValues);

    let result: number = 0;

    if (percent < 10) {
      result = CriticalityLevel.Excepcional;
    } else if (percent >= 10 && percent < 25) {
      result = CriticalityLevel.Alto;
    } else if (percent >= 25 && percent < 50) {
      result = CriticalityLevel.Medio;
    } else if (percent >= 50) {
      result = CriticalityLevel.Baixo;
    }

    return result;
  }
}

export enum CriticalityLevel {
  Excepcional = 1,
  Alto,
  Medio,
  Baixo,
}
