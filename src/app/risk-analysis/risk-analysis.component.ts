import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

import { State } from 'reducer/reducer';
import {
  getQuestion1,
  getQuestion2,
  getQuestion3,
  getQuestion4,
  getQuestion5,
  getStart,
} from 'reducer/selectors';

@Component({
  selector: 'app-risk-analysis',
  templateUrl: './risk-analysis.component.html',
  styleUrls: ['./risk-analysis.component.scss'],
})
export class RiskAnalysisComponent implements OnInit {
  contrato: string = '';
  partes: string = '';
  projeto: string = '';
  question1: string = '';
  question2: string = '';
  question3: string = '';
  question4: string = '';
  question5: string = '';

  currentDate = format(new Date(), 'dd/MM/yyyy', {
    locale: ptBr,
  });

  question1$ = this.store.select(getQuestion1).subscribe((question) => {
    this.question1 = question;
  });
  question2$ = this.store.select(getQuestion2).subscribe((question) => {
    this.question2 = question;
  });
  question3$ = this.store.select(getQuestion3).subscribe((question) => {
    this.question3 = question;
  });
  question4$ = this.store.select(getQuestion4).subscribe((question) => {
    this.question4 = question;
  });
  question5$ = this.store.select(getQuestion5).subscribe((question) => {
    this.question5 = question;
  });

  start$ = this.store.select(getStart).subscribe((start) => {
    this.projeto = start?.projeto ?? 'Nome do Projeto';
    this.contrato = start?.contrato ?? 'Contrato';
    this.partes = start?.partes ?? 'Parte 1, Parte 2 e Parte 3.';
  });

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
