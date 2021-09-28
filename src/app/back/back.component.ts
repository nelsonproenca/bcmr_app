import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Back } from 'app/models/back';
import { BackAction } from 'reducer/action';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss'],
})
export class BackComponent implements OnInit {
  constructor(private router: Router, private store: Store<any>) {}

  backForm = new FormGroup({
    valorContrato: new FormControl(''),
    riscoLegal: new FormControl(''),
    concentracaoMercado: new FormControl(''),
    riscoReputacaoPrincipal: new FormControl(''),
    riscoAlterarParceiro: new FormControl(''),
  });

  submitted = false;

  get checkValidation() {
    return this.backForm.controls;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    let backStore: Back = this.backForm.value;
    this.store.dispatch(new BackAction({ back: backStore }));
    this.router.navigate(['/additional-data']);
  }
}
