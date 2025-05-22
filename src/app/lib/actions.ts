'use server';

import { saveToDatabaseOrQueue } from '@/app/preferences/db';
import type { State } from '@/app/preferences/definitions';

// ✅ Actual logic function
export async function registerUserPreferences(formData: FormData): Promise<State> {
  const intentRaw = formData.get('intent');
  const targetLanguageRaw = formData.get('targetLanguage');

  const intent = typeof intentRaw === 'string' ? intentRaw.trim() : '';
  const targetLanguage = typeof targetLanguageRaw === 'string' ? targetLanguageRaw.trim() : '';
  const fluentLanguages = formData.getAll('fluentLanguages').map(String);

  const errors: State['errors'] = {};

  if (!intent || !['learn', 'teach'].includes(intent)) {
    errors.intent = ['Please choose whether you want to learn or teach.'];
  }

  if (!targetLanguage) {
    errors.targetLanguage = ['Please select a target language.'];
  }

  if (fluentLanguages.length === 0) {
    errors.fluentLanguages = ['Please select at least one language you can speak.'];
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: 'Please fix the errors below.',
      errors,
    };
  }

  await saveToDatabaseOrQueue({ intent, targetLanguage, fluentLanguages });

  return {
    message: 'Preferences saved! We’ll match you soon.',
  };
}

//  Reducer-compatible function for useFormState
export async function registerUserPreferencesReducer(
  _state: State,
  formData: FormData
): Promise<State> {
  return await registerUserPreferences(formData);
}
