import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Question } from 'app/models/question';
import { QuestionAnswer } from 'app/models/questionanswer';
import { Answer } from 'app/models/answer';
import {
  CriticalityLevel,
  QuestionService,
} from 'app/services/question.service';
import { State } from 'reducer/reducer';
import {
  CriticalityAction,
  Question1Action,
  Question2Action,
  Question3Action,
  Question4Action,
  Question5Action,
} from 'reducer/action';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  constructor(
    private router: Router,
    private questionService: QuestionService,
    private store: Store<State>
  ) {}

  QUESTIONS: Question[] = [
    {
      id: 1,
      text: 'Valor do contrato',
      description: '',
      answers: [
        { id: 1, text: 'Estratégico', rating: 50, value: 1 },
        { id: 2, text: 'Alto', rating: 15, value: 2 },
        { id: 3, text: 'Médio', rating: 10, value: 3 },
        { id: 4, text: 'Baixo', rating: 5, value: 4 },
      ],
    },
    {
      id: 2,
      text: 'Concentração de mercado',
      description: '',
      answers: [
        {
          id: 1,
          text: 'Mercado possui no máximo 3 players habilitados a executar o serviço/fornecimento',
          rating: 15,
          value: 1,
        },
        {
          id: 2,
          text: 'O mercado possui diversos players habilitados plenamente e um número significante de agentes habilitados a promover as etapas-chave do fornecimento',
          rating: 5,
          value: 2,
        },
        {
          id: 3,
          text: 'O serviço é padrão e pode ser executado por uma diversidade grande de parceiros',
          rating: 3,
          value: 3,
        },
      ],
    },
    {
      id: 3,
      text: 'Risco de alterar o parceiro no decorrer do contrato',
      description: '',
      answers: [
        {
          id: 1,
          text: 'Risco significante',
          rating: 20,
          value: 1,
        },
        {
          id: 2,
          text: 'Risco médio',
          rating: 10,
          value: 2,
        },
        {
          id: 3,
          text: 'Risco pequeno',
          rating: 5,
          value: 3,
        },
      ],
    },
    {
      id: 4,
      text: 'Risco Legal',
      description: '',
      answers: [
        {
          id: 1,
          text: 'Probabilidade de superveniência de danos graves, perda de PI, contexto regulatório não obedecido',
          rating: 25,
          value: 1,
        },
        {
          id: 2,
          text: 'Danos moderados possíveis: compartilhamento de PI, gerenciamento por terceiros, fornecedor não avaliado previamente',
          rating: 15,
          value: 2,
        },
        {
          id: 3,
          text: 'Atividades não se mostram hábeis a causar impactos relevantes: inexistência de compartilhamento de PI, inexistência de cessão de mão de obra',
          rating: 10,
          value: 3,
        },
      ],
    },
    {
      id: 5,
      text: 'Risco de reputação',
      description: '',
      answers: [
        {
          id: 1,
          text: 'Risco alto de consumidores ou agentes de mercado não contratarem mais a nossa empresa',
          rating: 25,
          value: 1,
        },
        {
          id: 2,
          text: 'Comentários negativos ou pedidos de explicação e/ou reavaliação de contratos formalizados com parceiros',
          rating: 15,
          value: 2,
        },
        {
          id: 3,
          text: 'Repercussão limitada a pequenos grupos ou a consumidor específico',
          rating: 5,
          value: 3,
        },
      ],
    },
  ];

  questionForm = new FormGroup({
    answer: new FormControl('', Validators.required),
  });

  questionAnswers: QuestionAnswer[] = [];

  submitted = false;
  criticalityLevelName: string = '';
  className: string = '';

  questionCurrent: number = 0;
  questionId: number = 0;
  questionText: string = '';
  questionDescription: string = '';
  answerText1: string = '';
  answerText2: string = '';
  answerText3: string = '';
  answerText4: string = '';
  answerId1: number = 0;
  answerId2: number = 0;
  answerId3: number = 0;
  answerId4: number = 0;

  reset(): void {
    this.questionId = 0;
    this.questionText = '';
    this.questionDescription = '';
    this.answerText1 = '';
    this.answerText2 = '';
    this.answerText3 = '';
    this.answerText4 = '';
    this.answerId1 = 0;
    this.answerId2 = 0;
    this.answerId3 = 0;
    this.answerId4 = 0;

    this.questionForm.setValue({ answer: '' });
    this.submitted = false;
  }

  get checkValidaiton() {
    return this.questionForm.controls;
  }

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(): void {
    this.questionId = this.QUESTIONS[this.questionCurrent].id;
    this.questionText = this.QUESTIONS[this.questionCurrent].text;
    this.questionDescription = this.QUESTIONS[this.questionCurrent].description;
    this.answerText1 = this.QUESTIONS[this.questionCurrent].answers[0].text;
    this.answerText2 = this.QUESTIONS[this.questionCurrent].answers[1].text;
    this.answerText3 = this.QUESTIONS[this.questionCurrent].answers[2].text;
    this.answerText4 = this.QUESTIONS[this.questionCurrent].answers[3]?.text;
    this.answerId1 = this.QUESTIONS[this.questionCurrent].answers[0].id;
    this.answerId2 = this.QUESTIONS[this.questionCurrent].answers[1].id;
    this.answerId3 = this.QUESTIONS[this.questionCurrent].answers[2].id;
    this.answerId4 = this.QUESTIONS[this.questionCurrent]?.answers[3]?.id;
  }

  getAnswerSelected(): Answer | undefined {
    const answerSelected = this.questionForm.controls.answer.value;

    let answerItem: Answer | undefined;

    answerItem = this.QUESTIONS[this.questionCurrent - 1]?.answers.find(
      (answer) => answer.id === +answerSelected
    );

    return answerItem;
  }

  showNextQuestion(): void {
    this.questionCurrent++;

    this.setcriticalityLevel();

    this.reset();
    this.loadQuestion();
  }

  setcriticalityLevel(): void {
    let answerItem = this.getAnswerSelected();

    this.questionAnswers.push({
      answerId: answerItem?.id,
      questionId: this.questionId,
      rating: answerItem?.rating,
      value: answerItem?.value,
    });

    this.questionService.questionAnswers = this.questionAnswers;
    const criticalityLevel = this.questionService.criticalityLevel();

    switch (criticalityLevel) {
      case +CriticalityLevel.Alto:
        this.className = 'p-5 mb-2 bg-success text-white';
        this.criticalityLevelName = 'Alto';
        break;
      case +CriticalityLevel.Baixo:
        this.className = 'p-3 mb-2 bg-info text-white';
        this.criticalityLevelName = 'Baixo';
        break;
      case +CriticalityLevel.Medio:
        this.className = 'p-3 mb-2 bg-warning text-dark';
        this.criticalityLevelName = 'Médio';
        break;
      case +CriticalityLevel.Excepcional:
        this.className = 'p-3 mb-2 bg-danger text-white';
        this.criticalityLevelName = 'Excepcional';
        break;
      default:
        break;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    let current = this.questionCurrent;
    let length = this.QUESTIONS.length - 1;

    if (current >= length) {
      this.setcriticalityLevel();

      this.store.dispatch(
        new CriticalityAction({
          criticality: {
            className: this.className,
            criticalityLevelName: this.criticalityLevelName,
          },
        })
      );

      this.store.dispatch(
        new Question1Action({
          question1: this.questionAnswers[0].answerId ?? 0,
        })
      );

      this.store.dispatch(
        new Question2Action({
          question2: this.questionAnswers[1].answerId ?? 0,
        })
      );
      this.store.dispatch(
        new Question3Action({
          question3: this.questionAnswers[2].answerId ?? 0,
        })
      );
      this.store.dispatch(
        new Question4Action({
          question4: this.questionAnswers[3].answerId ?? 0,
        })
      );
      this.store.dispatch(
        new Question5Action({
          question5: this.questionAnswers[4].answerId ?? 0,
        })
      );
      this.store.dispatch(
        new Question1Action({
          question1: this.questionAnswers[0].answerId ?? 0,
        })
      );

      console.log('question1- dispatch', this.questionAnswers[0].answerId);

      this.router.navigate(['additional-data']);
    } else {
      if (this.submitted && this.checkValidaiton.answer.valid) {
        this.showNextQuestion();
      }
    }
  }
}
