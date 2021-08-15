import { Action } from '@ngrx/store';

import { AdditionalData } from 'app/models/additional-data';
import { Back } from 'app/models/back';
import { CriticalityLevel } from 'app/models/criticality-level';
import { Start } from 'app/models/start';

export const START = 'FormBcmr-Start';
export const ADDITIONAL_DATA = 'FormBcmr-AdditionalData';
export const BACK = 'FormBcmr-Back';
export const CRITICALITY = 'FormBcmr-Criticality';
export const QUESTION1 = 'FormBcmr-Question1';
export const QUESTION2 = 'FormBcmr-Question2';
export const QUESTION3 = 'FormBcmr-Question3';
export const QUESTION4 = 'FormBcmr-Question4';
export const QUESTION5 = 'FormBcmr-Question5';

export class Question1Action implements Action {
  readonly type = QUESTION1;
  constructor(public payload: { question1: number }) {}
}

export class Question2Action implements Action {
  readonly type = QUESTION2;
  constructor(public payload: { question2: number }) {}
}
export class Question3Action implements Action {
  readonly type = QUESTION3;
  constructor(public payload: { question3: number }) {}
}
export class Question4Action implements Action {
  readonly type = QUESTION4;
  constructor(public payload: { question4: number }) {}
}
export class Question5Action implements Action {
  readonly type = QUESTION5;
  constructor(public payload: { question5: number }) {}
}

export class StartAction implements Action {
  readonly type = START;
  constructor(public payload: { start: Start }) {}
}

export class AdditionalDataAction implements Action {
  readonly type = ADDITIONAL_DATA;
  constructor(public payload: { additionalData: AdditionalData }) {}
}

export class CriticalityAction implements Action {
  readonly type = CRITICALITY;
  constructor(public payload: { criticality: CriticalityLevel }) {}
}

export class BackAction implements Action {
  readonly type = BACK;
  constructor(public payload: { back: Back }) {}
}

export type FormBcmrActions =
  | StartAction
  | AdditionalDataAction
  | BackAction
  | CriticalityAction
  | Question1Action
  | Question2Action
  | Question3Action
  | Question4Action
  | Question5Action
  | any;
