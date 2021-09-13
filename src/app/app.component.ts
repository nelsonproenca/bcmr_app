import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'reducer/reducer';
import { getCriticality } from 'reducer/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<State>) {}
  color: string = '';
  start$ = this.store.select(getCriticality);

  title = 'Formulário de Análise de Risco';
  subtitle = 'Nivel de criticidade do contrato';
}
