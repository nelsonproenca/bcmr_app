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
    local: new FormControl('', [Validators.required]),
    data: new FormControl('', [Validators.required]),
    diretor: new FormControl('', [Validators.required]),
    comentariosLivres: new FormControl(''),
  });

  submitted = false;

  get checkValidation() {
    return this.additionalDataForm.controls;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    let additionalDataStore: AdditionalData = this.additionalDataForm.value;

    console.warn('additionalDataStore', this.additionalDataForm.value);

    this.store.dispatch(
      new AdditionalDataAction({ additionalData: additionalDataStore })
    );

    if (
      this.submitted &&
      this.checkValidation.data.valid &&
      this.checkValidation.local.valid &&
      this.checkValidation.diretor.valid
    ) {
      this.router.navigate(['/back']);
    }
  }
}
