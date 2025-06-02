'use server';

import { createFormIncrementQuery } from '@/database/queries';

import { nettskjemaBaseURL } from './constants';

const getElements = async (accessToken: string, formId: number) => {
  try {
    createFormIncrementQuery().run(formId);
  } catch (e) {
    console.error('Failed to increment form insight', e);
  }
  return await fetch(`${nettskjemaBaseURL}/api/v3/form/${formId}/elements`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return null;
    });
};
export default getElements;
