'use client';

import cn from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import getForms from '@/actions/getForms';
import getToken from '@/actions/getToken';
import Button from '@/components/Button';
import ErrorMessage from '@/components/ErrorMessage';
import Fieldset from '@/components/Fieldset';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Link from '@/components/Link';
import { MyForms } from '@/types/NettskjemaAPI';

import { PageProvider, usePageContext } from './context';
import style from './page.module.scss';

const ApiUser = ({ disabled }: { disabled: boolean }) => {
  const {
    setStep,
    clientId,
    setClientId,
    clientSecret,
    setClientSecret,
    setAccessToken,
  } = usePageContext();

  const [validationError, setValidationError] = useState<string>('');

  return (
    <section className={cn(style.section, disabled && style.disabled)}>
      <h2>Steg 1: API-Bruker</h2>
      <p>
        For å kunne opprette et papirskjema av nettskjemaet ditt, trenger du en
        API-bruker i Nettskjema.
      </p>
      <Flex direction="column" rowGap={8}>
        <p>
          Gå til{' '}
          <Link href="https://authorization.nettskjema.no/" target="_blank">
            https://authorization.nettskjema.no/
          </Link>{' '}
          og registrer en klient.
        </p>
        <Fieldset
          legend="Lim inn verdiene her:"
          className={style.apiUserFieldset}
        >
          <Flex direction="column" rowGap={8}>
            <Input
              label="Client ID:"
              value={clientId}
              onChange={(e) => setClientId(e.target.value.trim())}
            />
            <Input
              label="Client secret:"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value.trim())}
              type="password"
            />
          </Flex>
        </Fieldset>
        <div>
          <Button
            onClick={async () => {
              setValidationError('');
              const response = await getToken(clientId, clientSecret);
              if (response?.access_token) {
                setAccessToken(response.access_token);
                setStep(2);
              } else {
                setValidationError(response?.error || 'Ukjent årsak');
              }
            }}
            disabled={!clientId || !clientSecret}
          >
            Sjekk
          </Button>
          {validationError && (
            <ErrorMessage>Noe gikk galt: {validationError}</ErrorMessage>
          )}
        </div>
      </Flex>
    </section>
  );
};

const ClientUsername = () => {
  const { clientId } = usePageContext();

  return <code className={style.clientUsername}>{clientId}@apiclient</code>;
};

const ChooseForm = ({ disabled }: { disabled: boolean }) => {
  const { accessToken, setSelectedForm, step, setStep } = usePageContext();
  const [forms, setForms] = useState<MyForms[] | null>(null);

  const updateFormList = useCallback(async () => {
    const formList = await getForms(accessToken);
    if (formList) {
      setForms(formList);
    } else {
      // Handle error
    }
  }, [accessToken]);

  useEffect(() => {
    const fetchData = () => {
      if (!disabled) updateFormList();
    };
    fetchData();
  }, [disabled, updateFormList]);

  return (
    <section className={cn(style.section, disabled && style.disabled)}>
      <h2>Steg 2: Velg skjema</h2>
      <Flex direction="column" rowGap={16}>
        <div>
          <p>API-brukeren din trenger tilgang til skjemaet ditt.</p>
          <p>
            Logg inn på{' '}
            <Link href="https://nettskjema.no" target="_blank">
              https://nettskjema.no
            </Link>
            og gi {step === 1 ? 'klienten din' : <ClientUsername />}{' '}
            <u>kopieringsrettigheter</u> til skjemaet du vil lage papirskjema
            av.
          </p>
        </div>
        {step === 1 ? null : forms == null ? (
          <p>Laster...</p>
        ) : (
          <div>
            <h3>Klienten din har tilgang til følgende skjema:</h3>{' '}
            <Flex direction="column" rowGap={16}>
              {forms.length === 0 ? (
                <p>
                  <i>Ingen skjema</i>
                </p>
              ) : (
                <table className={style.formList}>
                  <thead>
                    <th>Tittel</th>
                    <th>Velg skjema</th>
                  </thead>
                  <tbody>
                    {forms.map((form) => (
                      <tr key={form.formId}>
                        <td>{form.title}</td>
                        <td>
                          <Button
                            onClick={() => {
                              setSelectedForm(form);
                              setStep(3);
                            }}
                          >
                            Velg
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div>
                <Button onClick={() => updateFormList()}>Oppdater</Button>
              </div>
            </Flex>
          </div>
        )}
      </Flex>
    </section>
  );
};

const DownloadForm = ({ disabled }: { disabled: boolean }) => {
  const { selectedForm } = usePageContext();
  return (
    <section className={cn(style.section, disabled && style.disabled)}>
      <h2>Steg 3: Last ned papirskjema</h2>
      <p>Valgt skjema: {selectedForm?.title}</p>
    </section>
  );
};

const PageContent = () => {
  const { step } = usePageContext();
  return (
    <div className={style.content}>
      <ApiUser disabled={step !== 1} />
      <ChooseForm disabled={step !== 2} />
      <DownloadForm disabled={step !== 3} />
    </div>
  );
};

const Page = () => {
  return (
    <PageProvider>
      <PageContent />
    </PageProvider>
  );
};

export default Page;
