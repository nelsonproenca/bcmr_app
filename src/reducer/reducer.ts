import {
  ADDITIONAL_DATA,
  BACK,
  START,
  FormBcmrActions,
  CRITICALITY,
  QUESTION1,
  QUESTION5,
  QUESTION2,
  QUESTION3,
  QUESTION4,
} from './action';
import { AdditionalData } from 'app/models/additional-data';
import { Back } from 'app/models/back';
import { Start } from 'app/models/start';
import { CriticalityLevel } from 'app/models/criticality-level';

export interface State {
  additionalData: AdditionalData | undefined;
  back: Back | undefined;
  start: Start | undefined;
  criticality: CriticalityLevel | undefined;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
}

const initialState: State = {
  additionalData: undefined,
  back: undefined,
  start: undefined,
  criticality: undefined,
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question5: '',
};

export function reducer(state = initialState, action: FormBcmrActions): State {
  switch (action.type) {
    case ADDITIONAL_DATA: {
      return {
        ...state,
        additionalData: action.payload.additionalData,
      };
    }

    case BACK: {
      return {
        ...state,
        back: action.payload.back,
      };
    }

    case START: {
      return {
        ...state,
        start: action.payload.start,
      };
    }

    case CRITICALITY: {
      return {
        ...state,
        criticality: action.payload.criticality,
      };
    }

    case QUESTION1: {
      return {
        ...state,
        question1: action.payload.question1,
      };
    }

    case QUESTION2: {
      return {
        ...state,
        question2: action.payload.question2,
      };
    }

    case QUESTION3: {
      return {
        ...state,
        question3: action.payload.question3,
      };
    }

    case QUESTION4: {
      return {
        ...state,
        question4: action.payload.question4,
      };
    }

    case QUESTION5: {
      return {
        ...state,
        question5: action.payload.question5,
      };
    }

    default: {
      return state;
    }
  }
}
