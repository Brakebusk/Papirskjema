'use server';

import { authorizationBaseURL } from './constants';

const validate = async (clientId: string, clientSecret: string) => {
  return fetch(`${authorizationBaseURL}/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: 'grant_type=client_credentials',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('got', data);
      return data;
    })
    .catch(() => {
      return null;
    });
};
export default validate;
