'use server';

import { nettskjemaBaseURL } from './constants';

const getForms = async (accessToken: string) => {
  return fetch(`${nettskjemaBaseURL}/v3/form/me`, {
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
export default getForms;
