export async function saveToDatabaseOrQueue(data: {
  intent: string;
  targetLanguage: string;
  fluentLanguages: string[];
}) {
  console.log('[SERVER] Saving to database or queue:', data);
}