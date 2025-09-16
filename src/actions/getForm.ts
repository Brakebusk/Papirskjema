'use server';

import { createFormIncrementQuery } from '@/database/queries';
import { Element, FormSettings } from '@/types/NettskjemaAPI';

import {
  apiClientId,
  apiClientSecret,
  authorizationBaseURL,
  nettskjemaBaseURL,
} from './constants';

const getToken = async () => {
  return await fetch(`${authorizationBaseURL}/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${apiClientId}:${apiClientSecret}`),
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return null;
    });
};

type Response = {
  elements: Element[] | null;
  settings: FormSettings | null;
  error: string | null;
};

const getForm = async (formId: number): Promise<Response> => {
  try {
    createFormIncrementQuery().run(formId);
  } catch (e) {
    console.error('Failed to increment form insight', e);
  }

  const tokenResponse = await getToken();

  if (!tokenResponse?.access_token) {
    console.error('Failed to get access token');
    return {
      elements: null,
      settings: null,
      error: 'Det oppstod en serverfeil :(',
    };
  }

  return await Promise.all([
    fetch(`${nettskjemaBaseURL}/api/v3/form/${formId}/elements`, {
      headers: {
        Authorization: `Bearer ${tokenResponse.access_token}`,
        Accept: 'application/json',
      },
    }),
    fetch(`${nettskjemaBaseURL}/api/v3/form/${formId}/settings`, {
      headers: {
        Authorization: `Bearer ${tokenResponse.access_token}`,
        Accept: 'application/json',
      },
    }),
  ])
    .then(([resElements, resSettings]) => {
      if (!resElements.ok || !resSettings.ok)
        throw new Error('Failed to fetch elements / settings');
      return Promise.all([resElements.json(), resSettings.json()]);
    })
    .then(([elements, settings]) => {
      return { elements, settings, error: null };
    })
    .catch(() => {
      return {
        elements: null,
        settings: null,
        error:
          'Kunne ikke laste inn skjema. Har du husket å lagre innstillingen?',
      };
    });
};
export default getForm;
