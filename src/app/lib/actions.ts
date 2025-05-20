'use server';

export type State = {
  message: string | null;
  errors?: {
    intent?: string[];
    targetLanguage?: string[];
    fluentLanguages?: string[];
  };
};

export async function registerUserPreferences(formData: FormData): Promise<State> {
  const intent = formData.get('intent')?.toString().trim();
  const targetLanguage = formData.get('targetLanguage')?.toString().trim();
  const fluentLanguages = formData.getAll('fluentLanguages').map(String);

  const errors: State['errors'] = {};

  // Simple validation
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

  // Placeholder for future DB storage or pairing logic
  console.log('User submitted:', {
    intent,
    targetLanguage,
    fluentLanguages,
  });

  return {
    message: 'Preferences saved! Waiting for a match...',
  };
}
