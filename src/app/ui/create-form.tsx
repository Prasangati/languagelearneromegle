'use client';

import { useFormState } from 'react-dom';
import {registerUserPreferencesReducer} from "@/app/lib/actions";
impo

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [_state, formAction] = useFormState(registerUserPreferences, initialState);
  return (
    <form action={formAction}>
      {/* Learn or Teach */}
<div className="mb-4 text-gray-800">
  <label className="mb-2 block text-sm font-medium">Are you here to:</label>
  <div className="flex gap-4">
    <label className="flex items-center gap-2 text-sm">
      <input
        type="radio"
        name="intent"
        value="learn"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        required
      />
      Learn
    </label>
    <label className="flex items-center gap-2 text-sm">
      <input
        type="radio"
        name="intent"
        value="teach"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        required
      />
      Teach
    </label>
  </div>
</div>

{/* Language to Learn or Teach */}
<div className="mb-4 text-gray-800">
  <label htmlFor="targetLanguage" className="mb-2 block text-sm font-medium">
    Which language do you want to learn or teach?
  </label>
  <select
    id="targetLanguage"
    name="targetLanguage"
    required
    className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  >
    <option value="" disabled selected>Select a language</option>
    <option value="english">English</option>
    <option value="spanish">Spanish</option>
    <option value="french">French</option>
    <option value="chinese">Chinese</option>
    <option value="hindi">Hindi</option>
    <option value="arabic">Arabic</option>
    <option value="portuguese">Portuguese</option>
    <option value="russian">Russian</option>
    <option value="japanese">Japanese</option>
    <option value="korean">Korean</option>
    {/* Add more as needed */}
  </select>
</div>

{/* Languages you can communicate in */}
<div className="mb-4 text-gray-800">
  <label htmlFor="fluentLanguages" className="mb-2 block text-sm font-medium">
    Which language(s) can you efficiently communicate in?
  </label>
  <select
    id="fluentLanguages"
    name="fluentLanguages"
    multiple
    required
    className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-3 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  >
    <option value="english">English</option>
    <option value="spanish">Spanish</option>
    <option value="french">French</option>
    <option value="chinese">Chinese</option>
    <option value="hindi">Hindi</option>
    <option value="arabic">Arabic</option>
    <option value="portuguese">Portuguese</option>
    <option value="russian">Russian</option>
    <option value="japanese">Japanese</option>
    <option value="korean">Korean</option>
    {/* Add more as needed */}
  </select>
  <p className="mt-1 text-xs text-gray-500">Hold Ctrl (Cmd on Mac) to select multiple languages.</p>
</div>

    </form>
  );
}