import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdditionalData } from 'app/models/additional-data';

import { AdditionalDataAction } from 'reducer/action';

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.scss'],
})
export class AdditionalDataComponent implements OnInit {
  constructor(private router: Router, private store: Store<any>) {}

  additionalDataForm = new FormGroup({
    local: new FormControl(''),
    data: new FormControl(''),
    diretor: new FormControl(''),
    responsavel: new FormControl(''),
    comentariosAdicionais: new FormControl(''),
  });

  submitted = false;

  get checkValidation() {
    return this.additionalDataForm.controls;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    let additionalDataStore: AdditionalData = this.additionalDataForm.value;

    this.store.dispatch(
      new AdditionalDataAction({ additionalData: additionalDataStore })
    );

    if (this.submitted) {
      this.router.navigate(['/summary']);
    }
  }
}
