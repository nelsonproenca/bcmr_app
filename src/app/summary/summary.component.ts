import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionAnswer } from 'app/models/questionanswer';
import { State } from 'reducer/reducer';
import {
  getAdditionalData,
  getBack,
  getQuestion1,
  getQuestion2,
  getQuestion3,
  getQuestion4,
  getQuestion5,
  getStart,
} from 'reducer/selectors';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  contrato: string = '';
  partes: string = '';
  projeto: string = '';
  questions: QuestionAnswer[] = [];
  concentracaoMercado: string = '';
  riscoAlterarParceiro: string = '';
  riscoLegal: string = '';
  riscoReputacaoPrincipal: string = '';
  riscoReputacaoSecundaria: string = '';
  valorContrato: string = '';
  comentariosAdicionais: string = '';
  data: string = '';
  diretor: string = '';
  responsavel: string = '';
  local: string = '';
  question1: string = '';
  question2: string = '';
  question3: string = '';
  question4: string = '';
  question5: string = '';

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

  additionalData$ = this.store
    .select(getAdditionalData)
    .subscribe((additionalData) => {
      this.local = additionalData?.local ?? '';
      this.comentariosAdicionais = additionalData?.comentariosAdicionais ?? '';
      this.data = additionalData?.data ?? '';
      this.diretor = additionalData?.diretor ?? '';
      this.responsavel = additionalData?.responsavel ?? '';
    });

  back$ = this.store.select(getBack).subscribe((back) => {
    this.concentracaoMercado = back?.concentracaoMercado ?? '';
    this.riscoAlterarParceiro = back?.riscoAlterarParceiro ?? '';
    this.riscoLegal = back?.riscoLegal ?? '';
    this.riscoReputacaoPrincipal = back?.riscoReputacaoPrincipal ?? '';
    this.riscoReputacaoSecundaria = back?.riscoReputacaoSecundaria ?? '';
    this.valorContrato = back?.valorContrato ?? '';
  });

  start$ = this.store.select(getStart).subscribe((start) => {
    this.projeto = start?.projeto ?? '';
    this.contrato = start?.contrato ?? '';
    this.partes = start?.partes ?? '';
  });

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  printPage() {
    window.print();
  }
}
