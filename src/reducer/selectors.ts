import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './reducer';

export const getState = createFeatureSelector<State>('myReducer');

export const getAdditionalData = createSelector(
  getState,
  (state) => state.additionalData
);

export const getBack = createSelector(getState, (state) => state.back);

export const getStart = createSelector(getState, (state) => state.start);

export const getCriticality = createSelector(
  getState,
  (state) => state.criticality
);

export const getQuestion1 = createSelector(
  getState,
  (state) => state.question1
);

export const getQuestion2 = createSelector(
  getState,
  (state) => state.question2
);

export const getQuestion3 = createSelector(
  getState,
  (state) => state.question3
);

export const getQuestion4 = createSelector(
  getState,
  (state) => state.question4
);

export const getQuestion5 = createSelector(
  getState,
  (state) => state.question5
);
