'use server';

import { authorizationBaseURL } from './constants';

const getToken = async (clientId: string, clientSecret: string) => {
  return await fetch(`${authorizationBaseURL}/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
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
export default getToken;
