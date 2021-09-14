import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'reducer/reducer';
import { getCriticality } from 'reducer/selectors';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  constructor(private store: Store<State>) {}
  color: string = '';
  start$ = this.store.select(getCriticality);

  title = 'Formulário de Análise de Risco';
  subtitle = 'Nivel de criticidade do contrato';

  ngOnInit(): void {}
}
