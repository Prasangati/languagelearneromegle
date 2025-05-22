// app/preferences/definitions.ts

export type State = {
  message: string;
  errors?: {
    intent?: string[];
    targetLanguage?: string[];
    fluentLanguages?: string[];
  };
};

export const initialState: State = {
  message: '',
  errors: {},
};
