import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Start } from 'app/models/start';
import { StartAction } from 'reducer/action';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(private router: Router, private store: Store<any>) {}

  startForm = new FormGroup({
    projeto: new FormControl('', [Validators.required]),
    contrato: new FormControl('', [Validators.required]),
    partes: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    let startStore: Start = this.startForm.value;
    this.store.dispatch(new StartAction({ start: startStore }));
    this.router.navigate(['/questions']);
  }

  ngOnInit(): void {}
}
