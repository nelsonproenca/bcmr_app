import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  constructor() {}

  title = 'Formulário de Análise de Risco';
  subtitle = 'Nivel de criticidade do contrato';

  ngOnInit(): void {}
}
