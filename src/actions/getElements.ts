'use server';

import { nettskjemaBaseURL } from './constants';

const getElements = async (accessToken: string, formId: number) => {
  return fetch(`${nettskjemaBaseURL}/v3/form/${formId}/elements`, {
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
